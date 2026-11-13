# Project memory

## Product intent & audience

- Electronics retail/e-commerce site branded **Ticaret Electronics**.
- Primary audience: Azerbaijani-speaking customers (user communicates in Azerbaijani).

## Brand personality & voice

- Bilingual brand name: "Ticaret" (Azerbaijani for "trade") + "Electronics" (English).
- User communicates in Azerbaijani; UI copy likely Azerbaijani.

## Visual design & UX direction

- **Logo**: two-part wordmark on a single line — **Ticaret** (dark) + space + **Electronics** (blue accent).
- Logo appears in both header and footer, consistent treatment.
- Blue is used as an accent/highlight color for the second word.
- **Header layout**: single row — logo, search bar, then action buttons (favorites + cart).
- **Favorites button**: heart icon next to cart in header, with count badge; clicking filters to favorited products only.
- **Product card**: heart icon overlay on image top-right corner to toggle favorite.
- Search lives only in header (removed from products section to avoid duplication).

## Decisions, constraints & rationale

- Stack: Vite + React (JSX), Tailwind CSS, Lucide React icons; `@/` alias maps to `src/`.
- No extra UI/icon packages unless explicitly requested.
- Design goal: production-quality, non-cookie-cutter pages.
- Single search bar in header preferred over multiple search inputs on the page.
- Favorites filter triggered from header button; product cards keep individual toggle.

## Open questions & assumptions

- Full product catalog scope and category structure not yet defined.
- Exact blue accent shade not yet standardized.
- Language support: assuming Azerbaijani-only UI for now; multi-language not confirmed.
- Favorites persistence (localStorage vs. backend) not yet confirmed.