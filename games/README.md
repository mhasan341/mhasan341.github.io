# Games catalog

`/games/` is the collection, not an individual game's marketing page.
Only Bounce Courier is approved for inclusion at present. Do not add or tease
unannounced projects without the owner's approval.

## Pages and assets

- `index.html`: shared catalog with a brief entry and per-game information links.
- `catalog.css`: catalog and card styles; also used for homepage game cards.
- `catalog.json`: editorial metadata for approved entries and store links.
  HTML is static, not rendered from JSON at runtime: keep both cards and this
  reference in sync when making an approved content change.
- `assets/`: game-neutral monogram and self-hosted Outfit font with its OFL.
- `bounce-courier/`: game landing page, assets, and its own support, privacy,
  terms, and licenses. See its `MAINTAINING.md` for game-specific details.
- `../index.html`, `../home.css`, `../script.js`: portfolio homepage, refreshed
  introduction, games feature, and local theme preference.

Each approved game gets `/games/<slug>/` and its own `support/`, `privacy/`,
`terms/`, and `licenses/`. The catalog header/footer must remain neutral;
never present one game's policy as applying to all games.

For future additions, repeat `.game-card` entries in the homepage and catalog,
update `catalog.json`, and remove `.single-game` from each grid once it contains
multiple entries. Only add verified download URLs. No Android store link is
available yet; its metadata is null and must not produce a download button.
Preserve full-resolution gameplay assets and distinguish real captures from art.

## Local review

Preview changes locally before publication. No push, remote PR, merge, or
publication without explicit owner approval. The owner approved the current
homepage/catalog preview for publication on November 15, 2026; that approval
does not authorize publishing future edits automatically.
Run `python3 -m http.server 8765 --bind 127.0.0.1` from the repository root and
open `http://127.0.0.1:8765/`. Open `/games/` for the shared collection.
