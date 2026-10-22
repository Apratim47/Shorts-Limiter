# Shorts Limiter

A tiny Chrome extension that counts how many YouTube Shorts you open each day. When you hit your limit, the Shorts page goes black and says "enough for today."

## Features

- Counts each different Short once per day (scrolling back doesn't recount)
- Custom daily limit (default 20), set from the extension popup
- Blanks the page and pauses video when the limit is reached
- Count resets at your local midnight
- No data leaves your device. Everything is stored locally with `chrome.storage`

## Install (no store needed)

1. Download this repo (green **Code** button, then **Download ZIP**) and unzip it.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and select the unzipped folder.

## Use

Click the extension icon to see today's count, change the limit, or reset the count.

To turn it off, switch the extension off at `chrome://extensions`.

## Change the message

Edit the text in `content.js` (look for `enough for today.`), then click the reload icon on the extension card at `chrome://extensions`.

## Notes

- Only `/shorts/` pages are blanked. The rest of YouTube still works.
- The Short that makes the count reach your limit is the one that gets blocked.

## License

MIT
