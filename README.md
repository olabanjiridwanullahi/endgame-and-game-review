# Profscience Endgame Mate Trainer

Master the bishop + knight, two bishops, rook and queen checkmates against a perfect defender, and review your own games
(paste a PGN, FEN or Chess.com / Lichess link) with Stockfish 17: move labels, accuracy, "Fix my mistakes" puzzles,
opening explorer, review history and a shareable result card.

© 2026 Profscience. Licensed under the GNU General Public License v3 (see `LICENSE`).

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | The whole trainer |
| `manifest.webmanifest` | Tells phones it's an installable app (name, icon, colours) |
| `sw.js` | Makes it work offline after the first visit |
| `icons/` | The Profscience app icons |
| `stockfish/` | Stockfish 17 Lite, the engine behind Game review (about 7 MB, downloaded only when Game review is first used) |
| `LICENSE` | The GNU GPL v3 licence |

Upload **everything**, keeping the `icons` and `stockfish` folders as folders.

## Put it online free with GitHub Pages (about 5 minutes, easiest on a laptop)

1. Sign up for a free account at **github.com**.
2. Tap **+** (top right) → **New repository**.
   - Name it `endgame` (or anything you like).
   - Choose **Public**, then **Create repository**.
3. On the next page, click **uploading an existing file**.
4. Unzip the package, open the folder, select **all** the files **and** the `icons` and `stockfish` folders, and drag them into the upload box.
5. Scroll down and click **Commit changes**.
6. Go to **Settings → Pages** (left menu).
   - Under **Branch**, choose `main` and `/ (root)`, then **Save**.
7. Wait 1–2 minutes and refresh. Your link appears at the top:
   **`https://YOUR-USERNAME.github.io/endgame/`**

## Install it on a phone

- **Android (Chrome):** open your link and tap the cyan **📲 Install app** button in the header, or **⋮ → Install app**.
- **iPhone (Safari):** open your link, tap **Share → Add to Home Screen**.

After the first visit it works **offline**.

## Updating it later

When you get a new version, open your repository, click **Add file → Upload files**, drop in the new `index.html` **and** `sw.js`, and commit. They replace the old ones. The new `sw.js` has a new version number, which tells installed phones to update.

## Alternative: Netlify Drop (no GitHub needed)

Go to **app.netlify.com/drop**, sign up free, and drag the whole folder onto the page. You get a live link instantly.

## Licence (important)

Game review uses **Stockfish 17** (via Stockfish.js by Nathan Rugg / Chess.com), which is licensed under the
**GNU GPL v3**. Because the app includes it, the whole app is distributed under the GPL v3 too:

- Keep the repository **Public** and keep the `LICENSE` file in it. On GitHub you can also choose
  **Add file → Create new file → name it LICENSE → Choose a license template → GNU GPLv3**.
- The app's own code is right here in `index.html` (readable, not minified), so publishing the repository
  is enough to share the source.
- Stockfish's source: https://github.com/official-stockfish/Stockfish and
  https://github.com/nmrugg/stockfish.js/tree/v17.1.0 (the exact build used here).
- You may keep the name **Profscience** and its logo; the GPL covers the code, not your brand.
