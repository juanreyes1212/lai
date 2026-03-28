

## Plan: Generate Static PDF Resume and Wire Up Download Button

### What We're Building
A polished, professionally styled PDF resume generated from the existing `resumeData`, saved to `public/resume.pdf`, with the Download button wired up to serve it.

### Steps

**1. Generate the PDF using ReportLab**
- Write a Python script to `/tmp/gen_resume.py` that creates a clean, professional one-page resume from the `resumeData` content
- Layout: Name and title at top, contact info row, summary paragraph, Experience section with bullet points, Skills section grouped by category, Education section
- Color accent matching the portfolio's primary teal/cyan theme
- Output to `public/resume.pdf`

**2. QA the PDF**
- Convert each page to an image with `pdftoppm` and visually inspect for layout issues, clipped text, spacing problems
- Fix and re-generate if needed

**3. Wire up the Download button in `Resume.tsx`**
- Change the `<Button>` from a plain button to an `<a>` link pointing to `/resume.pdf` with the `download` attribute
- Use `asChild` pattern already in use elsewhere

### Technical Details
- ReportLab's Platypus (high-level layout engine) for automatic pagination and text flow
- Professional typography: clean sans-serif font, consistent spacing, subtle color accents
- The button change is a one-line edit — wrap with `<a href="/resume.pdf" download="Juan_Reyes_Resume.pdf">`

