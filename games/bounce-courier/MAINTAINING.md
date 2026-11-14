# Bounce Courier website

This is a static, buildless GitHub Pages site. The canonical home is
https://www.mahmudulhasan.me/games/bounce-courier/ .
The apex domain redirects to www. Keep the repository's existing CNAME.

## Files and publishing

- `index.html`: game landing, gallery, tier panels, FAQ,
  download links and VideoGame structured data.
- `site.css`, `site.js`: styles and progressively enhanced interactions, scoped
  to the game pages. The shared catalog uses `../catalog.css`. No framework
  or package install is needed.
- `support/`, `privacy/`, `terms/`, `licenses/`: public player information.
- `assets/`: real gameplay captures, original icon derivatives, self-hosted
  Outfit font and its OFL license. No external font/CDN/analytics scripts here.
- `../index.html`: shared games catalog; see `../README.md`. Root `index.html`,
  `home.css`, and `styles.css` contain the portfolio and its games feature.
- Root `app-ads.txt`, `robots.txt`, `sitemap.xml`: domain discovery resources.

Edit the HTML/CSS/JS directly. Preview from the repository root with
`python3 -m http.server 8765 --bind 127.0.0.1`, then visit
`http://127.0.0.1:8765/games/bounce-courier/`. A file URL does not resolve
the root-relative links correctly.

Only publish after explicit owner approval of the local preview. Create a
feature branch from the latest `main`, check desktop/mobile and
keyboard interactions, open a pull request and merge it through GitHub. The
main branch has a pull-request rule; do not bypass it with a direct main push. Verify the GitHub Pages
deployment and the public URLs before pointing a release build at new paths.
Do not overwrite unrelated local changes in the portfolio checkout.

## Release context and screenshot quality

The Apple listing was version1.0 at the14November2026 lookup; the source
captures were made from the native1.1 update. Verify the current store listing
before making a version-specific availability claim. On15November the owner
requested clean marketing pages without release-version labels. Do not
reintroduce “Actual gameplay from the upcoming1.1 update” or similar captions
in the hero, gallery, viewer, games hub or portfolio feature.

Screenshots under `assets/screenshots/` have lossless WebP variants at640,
1280,1920 and the native2868pixels wide. Main images use srcset and sizes so
Retina displays receive enough actual pixels. Never cap the main gallery at
1280 or reuse thumbnail-sized files in the viewer. At1320CSSpixels on a2x
display, an image needs at least2640source pixels. Do not upscale a small
capture or recompress an existing lossy derivative.

The viewer loads the byte-identical2868×1320originalPNG on demand. Its Open
original link makes that file available directly. Before opening the viewer,
those large PNGs should not be downloaded. The existing original app icon is
unchanged. Gameplay screenshots are actual native captures, not reconstructed
or retouched scenes. Android screenshots must come from Android.

## Store links and the Android / Google Play follow-up

Current Apple URL:
`https://apps.apple.com/us/app/bounce-courier/id6825351308`

There is no public Android release or Google Play URL yet. The FAQ states
this, and no fake/disabled Google Play download button is shown.

When the Android build is ready:

1. Confirm its actual package ID, production Play URL, minimum Android version,
   published version, feature parity and countries/testing availability. A
   closed testing URL is not a public production release.
2. Add a clear Google Play button beside the App Store buttons in the game
   header, hero and final CTA; update the games hub and portfolio feature.
   Keep both links visible; do not force-redirect users based on user agent.
3. Update the Android FAQ, platform/device copy, social metadata and VideoGame
   `operatingSystem`, `gamePlatform` and `installUrl`. Remove Apple-only
   assumptions only when Android actually supports the described feature.
4. Add real Android captures and label platform differences. Preserve the
   native iOS captures and original icon. Include the proper Google Play
   trademark attribution if a badge is used.
5. Expand Support, Privacy, Terms and Licenses for Android's actual billing,
   refund, wallet/save, sign-in, Play Games and SDK behavior. Do not describe
   Android as using iCloud, Game Center or StoreKit. Verify Data safety and
   account-deletion requirements against the shipping implementation.
6. Link Google Play's developer website/privacy policy to the canonical public
   pages. The ad seller file stays at **the domain root**. Both iOS and Android
   can use the existing seller line when they use the same AdMob publisher;
   add verified seller records only if an additional authorized account needs
   them. Do not put ad-unit IDs, secrets or credentials in app-ads.txt.
7. Update Android's own configuration and store package independently of the
   native iOS `AppConfig.json` and Appstore assets. Keep existing Apple IAP and
   Game Center identifiers intact. Firebase remains the chosen backend; never
   copy private keys or owner credentials into this public repository.
8. Check both store links on iPhone, Android and desktop, plus mobile nav,
   image viewer, keyboard tabs, all policy links and root app-ads.txt.

## Canonical links

| Purpose | URL |
| --- | --- |
| All games | https://www.mahmudulhasan.me/games/ |
| Game / marketing / share | https://www.mahmudulhasan.me/games/bounce-courier/ |
| Support | https://www.mahmudulhasan.me/games/bounce-courier/support/ |
| Privacy | https://www.mahmudulhasan.me/games/bounce-courier/privacy/ |
| Terms | https://www.mahmudulhasan.me/games/bounce-courier/terms/ |
| Licenses | https://www.mahmudulhasan.me/games/bounce-courier/licenses/ |
| Advertising seller file | https://mahmudulhasan.me/app-ads.txt |

Support email stays `mm@letstangerine.com`. The Firebase owner dashboard is a
separate, access-controlled tool; never turn this public site into an owner
login page. A public Player ID is a support reference, not a password.

App-ads seller record, verified against the existing game domain:

```
google.com, pub-2730958447151029, DIRECT, f08c47fec0942fa0
```

For iOS, AdMob derives the developer website from the App Store **Marketing
URL**. Publishing this site or changing local metadata does not change the
live App Store listing or prove an AdMob crawl has completed.

## Gameplay facts to preserve

- 1,500 tier levels: 500 each in Beginner, Expert and Pro. Do not describe them
  as 1,500 entirely unrelated worlds. Beginner uses 50 original districts;
  Expert/Pro rotate 11 challenge worlds.
- The 11 are Firebreak Foundry, Stormspire, Wildfire Canopy, Cataract Pass,
  Tempest Ridge, Ricochet Rooftops, Ironworks Junction, Frostfall Ravine,
  Sunken Harbor, Solar Orrery and Aether Gardens.
- Free retries; bundled levels work offline. Online services require their
  own connection/accounts. Extra-assisted runs are unranked.
- Mine fuse is currently 2.0 seconds; lightning warns for 1.6 seconds. Check
  the native tuning before publishing timing changes.
- Subtle, mutable world ambience and surface-specific impact sounds; no
  background music. Keep the original menu/icon style.
- Version1.1 has optional Player IDs, tap-to-copy and signed support gifts.
  Device wallets can work without iCloud; migrated cloud wallets need their
  original iCloud account. Gifts are not purchases or an account credential.

## QA and handoff

The separate game workspace keeps `SupportingFiles/Website/` with the source
capture audit, asset provenance, native/store backup, browser checks and
publication evidence. Do not deploy that directory or any Firebase private
files. Only this portfolio's public files belong in GitHub Pages.

Keep the provider policy disclosures intact. Read the current native code
before changing claims about wallet recovery, optional analytics, tracking,
Player IDs, support gifts or deletion retention.
