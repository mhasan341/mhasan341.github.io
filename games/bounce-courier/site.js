'use strict';

const menuButton = document.querySelector('.nav-menu');
const menu = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  menu.classList.remove('is-open');
}));

const worldChoices = [...document.querySelectorAll('.world-choice')];
const worldImage = document.querySelector('#world-image');
const worldTitle = document.querySelector('#world-title');
const worldDescription = document.querySelector('#world-description');
const worldNumber = document.querySelector('#world-number');
let selectedWorld = 0;
function chooseWorld(index) {
  if (!worldChoices.length) return;
  selectedWorld = (index + worldChoices.length) % worldChoices.length;
  const choice = worldChoices[selectedWorld];
  worldChoices.forEach(item => item.setAttribute('aria-pressed', String(item === choice)));
  worldImage.srcset = choice.dataset.srcset;
  worldImage.src = choice.dataset.image;
  worldImage.alt = choice.dataset.alt;
  worldTitle.textContent = choice.dataset.title;
  worldDescription.textContent = choice.dataset.description;
  worldNumber.textContent = String(selectedWorld + 1).padStart(2, '0') + ' / 06';
}
worldChoices.forEach((choice, index) => choice.addEventListener('click', () => chooseWorld(index)));
document.querySelector('[data-world-prev]')?.addEventListener('click', () => chooseWorld(selectedWorld - 1));
document.querySelector('[data-world-next]')?.addEventListener('click', () => chooseWorld(selectedWorld + 1));

const viewer = document.querySelector('#screenshot-viewer');
const viewerImage = document.querySelector('#viewer-image');
const viewerTitle = document.querySelector('#viewer-title');
const originalLink = document.querySelector('#original-screenshot');
let viewerLoad = 0;
function refreshViewer() {
  const choice = worldChoices[selectedWorld];
  const load = ++viewerLoad;
  viewerImage.hidden = true;
  viewer.setAttribute('aria-busy', 'true');
  viewerTitle.textContent = choice.dataset.title;
  originalLink.href = choice.dataset.original;
  viewer.style.width = `min(96vw, 1500px, ${2868 / Math.max(1, window.devicePixelRatio)}px)`;
  const original = new Image();
  original.onload = () => {
    if (load !== viewerLoad) return;
    viewerImage.src = original.src;
    viewerImage.alt = choice.dataset.alt;
    viewerImage.hidden = false;
    viewer.setAttribute('aria-busy', 'false');
  };
  original.onerror = () => {
    if (load !== viewerLoad) return;
    viewerImage.src = choice.dataset.full;
    viewerImage.alt = choice.dataset.alt;
    viewerImage.hidden = false;
    viewer.setAttribute('aria-busy', 'false');
  };
  original.src = choice.dataset.original;
}
document.querySelectorAll('[data-open-viewer]').forEach(button => button.addEventListener('click', () => {
  if (button.dataset.openViewer === 'hero') chooseWorld(1);
  refreshViewer();
  viewer.showModal();
  document.body.style.overflow = 'hidden';
}));
function moveViewer(delta) { chooseWorld(selectedWorld + delta); refreshViewer(); }
document.querySelector('[data-viewer-prev]')?.addEventListener('click', () => moveViewer(-1));
document.querySelector('[data-viewer-next]')?.addEventListener('click', () => moveViewer(1));
document.querySelector('[data-close-viewer]')?.addEventListener('click', () => viewer.close());
viewer?.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
viewer?.addEventListener('close', () => {
  document.body.style.overflow = '';
});
viewer?.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); moveViewer(-1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); moveViewer(1); }
});

const tierTabs = [...document.querySelectorAll('[role="tab"][data-tier]')];
function chooseTier(tab) {
  tierTabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
}
tierTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => chooseTier(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tierTabs.length;
    if (event.key === 'ArrowLeft') next = (index + tierTabs.length - 1) % tierTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tierTabs.length - 1;
    if (next !== undefined) {
      event.preventDefault(); chooseTier(tierTabs[next]); tierTabs[next].focus();
    }
  });
});
