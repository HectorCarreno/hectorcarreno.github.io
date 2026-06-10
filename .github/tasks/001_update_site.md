# Portfolio Website Redesign & Refactor Specification

## Project Overview

### Objective

Redesign and refactor the entire `hectorcarreno.github.io` website into a modern, minimalist, premium personal portfolio that reflects the updated Hector Carreno brand.

The existing website should be treated only as a content source. Its current design, structure, styling, and implementation should not be used as a design reference.

The final website must feel:

- Modern
- Clean
- Minimalist
- Premium
- Fast
- Professional
- Developer-focused
- Recruiter-friendly

The website should communicate technical excellence, engineering maturity, strong personal branding, and attention to detail.

---

# Brand Guidelines

## Logo

Use the new HC logo as the primary visual identity.

Logo characteristics:

- Dark navy background
- Purple → magenta gradient
- Geometric HC monogram
- Circular outline
- Minimalist and futuristic aesthetic

The logo should be used consistently across:

- Hero section
- Browser favicon
- Open Graph assets
- Branding areas

---

## Color System

### Primary Colors

```css
--color-primary: #8A00FF;
--color-primary-light: #A82BFF;
--color-accent: #FF2DBA;
```

### Background Colors

```css
--color-bg: #06062D;
--color-bg-elevated: #0B0B3F;
```

### Text Colors

```css
--color-text: #FFFFFF;
--color-text-secondary: #B7B7D3;
```

### Border Colors

```css
--color-border: rgba(255,255,255,0.08);
```

### Brand Gradient

```css
background: linear-gradient(
  135deg,
  #8A00FF 0%,
  #FF2DBA 100%
);
```

---

# Design Direction

The website should draw inspiration from the design quality and polish found in:

- Linear
- Vercel
- Stripe
- Framer
- Raycast
- Modern SaaS landing pages

### Visual Principles

- Strong typography
- Intentional whitespace
- Minimal color palette
- Clear content hierarchy
- Elegant interactions
- Refined visual rhythm

### Avoid

- Portfolio template aesthetics
- Excessive animations
- Large paragraphs
- Multiple accent colors
- Heavy shadows
- Outdated UI patterns
- Generic developer portfolio designs

---

# Technical Constraints

## Technology Stack

Keep the project as:

- HTML
- CSS
- JavaScript

### Requirements

- No frameworks
- No build systems
- No unnecessary dependencies
- Fully compatible with GitHub Pages

The website should remain deployable as a static site.

---

# Project Structure

Refactor the project into the following architecture:

```text
/
│
├── index.html
│
├── assets/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── profile.webp
│   │   └── projects/
│   │
│   └── icons/
│
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── layout.css
│   ├── components.css
│   └── main.css
│
├── js/
│   ├── main.js
│   ├── navigation.js
│   └── animations.js
│
└── data/
    └── content.json
```

---

# HTML Requirements

Use semantic HTML throughout the entire project.

Required semantic elements:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

### Additional Requirements

- Proper heading hierarchy
- Meaningful landmarks
- Accessible forms and controls
- No unnecessary wrapper elements
- Avoid "div soup"

### Accessibility

- All images must include alt text
- Navigation must be keyboard accessible
- Use semantic buttons and links appropriately
- Maintain logical document structure

---

# CSS Requirements

## Architecture

Use a modular CSS structure.

### Design Tokens

Use CSS custom properties for:

- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Animations

### Spacing Scale

```text
8px
16px
24px
32px
48px
64px
96px
128px
```

### Layout Rules

```css
max-width: 1200px;
margin: 0 auto;
```

### Responsive Strategy

Mobile-first implementation.

Support:

- Mobile
- Tablet
- Desktop
- Large desktop

Avoid fixed widths.

Use fluid layouts.

---

# JavaScript Requirements

JavaScript should remain lightweight and focused.

## Allowed Functionality

### Navigation

- Mobile menu toggle
- Active navigation state
- Sticky navbar behavior

### Scrolling

- Smooth scrolling
- Scroll spy behavior

### Animation

- Intersection Observer reveal effects

### Avoid

- Heavy animation libraries
- Complex state management
- Unnecessary DOM manipulation

---

# Content Migration

## Source of Truth

A PDF containing updated portfolio content will be provided.

The PDF becomes the authoritative source for all content.

### Migration Requirements

Agents must:

1. Extract all content from the PDF.
2. Preserve factual accuracy.
3. Improve readability where appropriate.
4. Rewrite only for clarity and presentation.
5. Maintain professional tone.
6. Convert content into web-friendly sections.

### Content Principles

- Short paragraphs
- Clear sections
- Strong readability
- Scannable content
- Recruiter-friendly presentation

---

# Site Architecture

## Hero Section

### Layout

Two-column layout.

#### Left Side

- Name
- Professional title
- Short value proposition
- Primary CTA
- Secondary CTA

Example:

```text
Hector Carreno

Software Engineer

Building scalable products and exceptional user experiences.

[View Projects]
[Contact Me]
```

#### Right Side

- New HC logo
- Optional profile image

### Hero Requirements

- Full viewport height
- Strong first impression
- Clear visual hierarchy

---

# About Section

Keep concise.

Maximum:

- 2–3 paragraphs

Focus on:

- Professional journey
- Technical expertise
- Engineering mindset
- Career focus

---

# Skills Section

Display skills using categorized groups.

Suggested categories:

```text
Frontend
Backend
Cloud
DevOps
Mobile
Databases
Architecture
AI
```

### Presentation

- Pills
- Tags
- Minimal cards

Avoid:

- Progress bars
- Skill percentages
- Rating systems

---

# Experience Section

Use a modern timeline layout.

Each entry should include:

- Company
- Position
- Dates
- Impact
- Technologies

Focus on achievements and outcomes.

Do not focus solely on responsibilities.

---

# Projects Section

This should be one of the most important sections.

### Project Card Content

Each project should contain:

- Project name
- Description
- Technology stack
- GitHub link
- Live demo link (if available)

### Layout

Responsive card grid.

Optional:

- Project screenshots
- Visual previews

---

# Education Section

Compact and professional.

Include:

- Institution
- Degree
- Graduation dates

Keep visual weight low.

---

# Certifications Section

Include only if present in the PDF.

Display as:

- Cards
- Timeline
- Compact list

---

# Contact Section

Keep simple and direct.

Include:

- Email
- GitHub
- LinkedIn
- Location (optional)

Avoid contact forms unless explicitly required.

Use direct action links.

---

# User Experience Requirements

## Navigation

### Sticky Navigation Bar

Behavior:

- Transparent on page load
- Glass effect after scrolling
- Subtle blur background

---

## Scrolling

Enable:

```css
scroll-behavior: smooth;
```

---

## Hover States

Create consistent interactions for:

- Buttons
- Links
- Cards
- Navigation items

Interactions should feel elegant and restrained.

---

## Animations

Use only subtle effects.

Allowed properties:

```css
opacity
transform
```

Examples:

- Fade-in
- Slide-up
- Small reveal transitions

Avoid:

- Bounce
- Rotation
- Flashing
- Oversized motion

---

# Performance Requirements

Target Lighthouse Scores:

| Category | Target |
|-----------|---------|
| Performance | 95+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 95+ |

### Performance Optimizations

- Lazy-load images
- Use WebP where possible
- Optimize asset sizes
- Minimize DOM complexity
- Prevent layout shifts
- Avoid render-blocking resources

---

# SEO Requirements

Include:

```html
<title>
<meta name="description">
<link rel="canonical">
<meta property="og:title">
<meta property="og:description">
<meta property="og:image">
<meta name="twitter:card">
```

### Additional Requirements

- Meaningful page title
- Open Graph support
- Twitter card support
- Structured metadata

---

# Accessibility Requirements

The website must pass modern accessibility audits.

### Requirements

- Keyboard navigation
- Focus visibility
- Semantic HTML
- Color contrast compliance
- Screen reader compatibility
- Accessible interactive elements

### ARIA

Use ARIA only when semantic HTML cannot provide the required behavior.

---

# Content Presentation Guidelines

The portfolio should prioritize readability.

### Typography

Use modern fonts such as:

- Inter
- Geist
- Plus Jakarta Sans

Recommended:

```css
font-family: "Inter", sans-serif;
```

### Visual Hierarchy

Use typography and spacing before decorative elements.

The design should feel premium through:

- Layout
- Structure
- Spacing
- Typography

Not through excessive effects.

---

# Deliverables

Agents must provide:

## Design

- Complete visual redesign
- Responsive layouts
- New branding integration

## Development

- Refactored HTML
- Modular CSS architecture
- Organized JavaScript modules

## Content
Leave this for next iteration!:
- Full migration from PDF
- Improved readability
- Consistent structure

## Optimizations

- Accessibility improvements
- SEO implementation
- Performance optimization

## Documentation

Do not provide documentation

# Success Criteria

The final website should feel like a premium personal brand website built in 2025–2026.

The outcome must prioritize:

- Simplicity
- Clarity
- Elegance
- Performance
- Readability
- Accessibility
- Strong branding

Every design decision should reinforce professionalism, technical excellence, and modern software craftsmanship while remaining faithful to the new HC brand identity.