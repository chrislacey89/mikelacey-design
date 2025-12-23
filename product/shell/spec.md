# Application Shell Specification

## Overview
A clean, top navigation shell for Mike Lacey's portfolio website. The shell provides persistent navigation across all sections while keeping the focus on content. Designed for a public-facing portfolio site with no authentication.

## Navigation Structure
- **Mike Lacey** (logo/brand) → Home
- **Home** → Landing page with hero
- **Story** → Career journey and bio
- **Work** → Portfolio and interviews
- **Kudos** → Testimonials
- **Connect** → Contact form and QR code

## User Menu
None — this is a public portfolio site with no login functionality.

## Layout Pattern
Top navigation bar with:
- Brand name "Mike Lacey" on the left (links to Home)
- Navigation items on the right (desktop)
- Hamburger menu icon on the right (mobile)
- Content area below fills remaining viewport

## Responsive Behavior
- **Desktop (lg+):** Full horizontal nav bar with all items visible. Brand on left, nav items on right.
- **Tablet (md):** Same as desktop, nav items may tighten spacing.
- **Mobile (< md):** Brand on left, hamburger icon on right. Tapping hamburger opens a slide-down menu with all nav items stacked vertically.

## Design Notes
- Uses blue primary color for active nav items and hover states
- Uses amber secondary color for subtle accents
- Uses stone neutral palette for backgrounds and text
- Outfit font for all navigation text
- Supports light and dark mode
- Navigation should be sticky/fixed at top on scroll
- Subtle shadow or border separates nav from content
