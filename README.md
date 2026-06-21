# amalqurany.my.id

Personal portfolio site for **Amal Qurany — Senior DevOps Engineer**.

The site is deliberately *right-sized*: hand-written semantic HTML and plain CSS,
**no framework, no JavaScript runtime, no web fonts, near-zero dependencies.**
The repository and its pipeline are part of the portfolio — the engineering on
display is the delivery and infrastructure, not the frontend.

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Markup | Semantic HTML5 | Content lives in page source → good SEO + screen-reader support |
| Styling | Plain CSS (custom properties) | No build step; tiny; nothing to patch |
| Fonts | System + monospace stacks | Zero font requests, faster, fewer dependencies |
| JS | None | Smallest possible attack surface |
| Host | GitHub Pages | Free, native to the repo |
| Domain | `amalqurany.my.id` (PANDI ccTLD) | Cheap, professional, local SEO |

---

Scaffolded with AI assistance, then reviewed and hardened by Amal Qurany.
