# Bounce Courier website

This is a static, buildless GitHub Pages site. The canonical home is
https://www.mahmudulhasan.me/games/bounce-courier/ .
The apex domain redirects to www. Keep the repository's existing CNAME.

## Files and publishing

- `index.html`: game landing, release preview notice, gallery, tier panels, FAQ,
  download links and VideoGame structured data.
- `site.css`, `site.js`: styles and progressively enhanced interactions, scoped
  to the game pages and games hub. No framework or package install is needed.
- `support/`, `privacy/`, `terms/`, `licenses/`: public player information.
- `assets/`: real gameplay captures, original icon derivatives, self-hosted
  Outfit font and its OFL license. No external font/CDN/analytics scripts here.
- `../index.html`: games hub. Root `index.html` and `styles.css` contain the
  portfolio's Games navigation and featured game.
- Root `app-ads.txt`, `robots.txt`, `sitemap.xml`: domain discovery resources.

Edit the HTML/CSS/JS directly. Preview from the repository root with
`python3 -m http.server 8765 --bind 127.0.0.1`, then visit
`http://127.0.0.1:8765/games/bounce-courier/`. A file URL does not resolve
the root-relative links correctly.

Create a feature branch from the latest `main`, check desktop/mobile and
keyboard interactions, merge and push to `main`. Verify the GitHub Pages
deployment and the public URLs before pointing a release build at new paths.
Do not overwrite unrelated local changes in the portfolio checkout.

## Release state on 14 November 2026

The live Apple listing was version **1.0**, while these captures show the
upcoming **1.1** graphics and worlds update. This is deliberately visible in
the hero, image captions, FAQ, games hub, portfolio feature and policy/help
qualifications. Publishing this website does not publish an app update.

Once 1.1 is actually available, update those notices and the social description
together. Search for `1.0`, `1.1`, `upcoming`, `prepared` and `preview` in the
game pages, games hub and portfolio feature; change release context without
mislabeling screenshots. Keep historical legal dates and asset provenance.
Do not invent a release date, review score, download statistic or store status.

The original App Store icon is retained. Gameplay screenshots are from the
native app, compressed without changing their contents. The local game project
keeps the uncompressed App Store captures and a hashed derivative manifest.
Do not replace the app icon or menu style with Blender artwork. Blender is for
gameplay and related scenery. Android screenshots must come from Android.

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

Support email stays `hello@hajjuna.com`. The Firebase owner dashboard is a
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
