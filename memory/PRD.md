# FUSER STUDIO Creative Workshop - Product Requirements Document

## Original Problem Statement
Create a proposal website for FUSER STUDIO Creative Workshop by Ikaro Cavalcante (occulted). The site should:
- Follow Apple + Bauhaus minimalist design principles
- Use black, white, and gray colors ONLY (NO gradients)
- Include interactive 3D element using Three.js
- Use Helvetica Neue typography
- Feature contact information: ikrcvl@gmail.com, occulted.com.br, @occulted
- Credit: Ikaro Cavalcante (occulted) - Digital Artist & Curator
- Project: Fuser Studio Creative Workshop - Curated Artist Edition
- Location: Brazil / São Paulo Activation

## Architecture & Tech Stack
- **Frontend**: React with Tailwind CSS
- **3D Graphics**: Three.js for minimal interactive particle system
- **Typography**: Helvetica Neue (system font)
- **Design System**: Custom minimalist components
- **Color Palette**: 
  - White (#FFFFFF) - primary background
  - Black (#000000) - primary text and accents
  - Gray shades for secondary elements
  - **NO GRADIENTS** - solid colors only

## User Personas
1. **Fuser Studio**: Client receiving the proposal
2. **Ikaro Cavalcante**: Author/curator presenting the workshop concept
3. **Potential Workshop Participants**: Artists interested in the program

## Core Requirements (Static)
1. Single-page scrolling website
2. Apple/Bauhaus minimalist aesthetic
3. Large, bold typography (Helvetica Neue)
4. Interactive but subtle 3D hero section
5. Alternating black/white sections
6. Clean grid-based layouts
7. No gradients or complex visual effects
8. Maximum use of white space

## What's Been Implemented (December 25, 2025)

### ✅ Completed Components - Redesigned in Minimalist Style

1. **Header Component**
   - Clean, minimal fixed navigation
   - Helvetica Neue typography
   - "IKARO CAVALCANTE" branding
   - Transparent with border on scroll
   - Mobile responsive

2. **Hero Section with Minimal Three.js**
   - Subtle particle system (800 particles, black, 30% opacity)
   - Single wireframe geometric shape
   - Very subtle mouse interaction
   - Large, bold typography: "FUSER STUDIO CREATIVE WORKSHOP"
   - Project credits clearly displayed
   - Location: Brazil / São Paulo Activation

3. **Context & Proposal Section** (White background)
   - Large heading typography
   - Two-column grid layout
   - Black border accents
   - Grid of 4 key features with 1px black dividers

4. **Production Specifications Section** (Black background)
   - White text on black
   - List-based layout with white border accents
   - "PRODUCTION" white, "SPECIFICATIONS" gray hierarchy

5. **Deliverables Section** (White background)
   - Numbered grid (01-05)
   - Large gray numbers as design elements
   - Black border grid system
   - Statistics bar at bottom

6. **Investment Section** (Black background)
   - Detailed cost breakdown tables
   - White borders for structure
   - Collapsible reduced package option
   - Large, clear pricing typography
   - 4px white border for total investment

7. **Next Steps Section** (White background)
   - Sequential numbered steps (01-07)
   - Large gray numbers
   - Terms & conditions in bordered box

8. **Contact Section** (Black background)
   - 3-column grid with icons
   - Instagram: @occulted
   - Email: ikrcvl@gmail.com
   - Website: occulted.com.br
   - Large bordered box for author credit
   - "IKARO CAVALCANTE (OCCULTED)" - Digital Artist & Curator

9. **Footer Component** (White background)
   - Minimal information
   - Project name, location, copyright
   - 2px black top border

### Design Principles Applied
- **Bauhaus**: Grid-based layouts, geometric forms, functional design
- **Apple**: Generous white space, clean typography, refined details
- **Minimalism**: No decorative elements, essential information only
- **Typography**: Helvetica Neue, bold weights for headings, light for body
- **Color**: Strict black/white/gray palette - NO gradients
- **Layout**: Alternating black and white sections for rhythm
- **Borders**: 1px, 2px, and 4px black/white borders for structure
- **Spacing**: Large padding and margins (py-32, px-6, etc.)

## Tech Implementation
- Three.js: Minimal particles and single geometric shape
- Helvetica Neue system font (no external fonts)
- Tailwind CSS with custom black/white theme
- React hooks for minimal interactions
- Smooth scroll behavior

## Prioritized Backlog

### P0 (Critical)
- None - MVP is complete

### P1 (High Priority)
- Test mobile responsiveness thoroughly
- Optimize Three.js for mobile performance
- Add subtle fade-in animations on scroll
- Meta tags for SEO

### P2 (Nice to Have)
- Print-friendly CSS
- Dark mode toggle (inverted)
- Subtle parallax on some sections

## Next Tasks
1. ✅ Verify all contact information is correct
2. ✅ Test Three.js performance on mobile
3. ✅ Check typography hierarchy on all sections
4. Consider adding subtle intersection observer animations
5. Review all spacing and alignment

## Notes
- Site is frontend-only, no backend needed
- Design strictly follows Apple/Bauhaus minimalism
- NO gradients used anywhere
- All typography is Helvetica Neue
- Contact information correctly updated:
  - Email: ikrcvl@gmail.com
  - Website: occulted.com.br
  - Instagram: @occulted
- Author: Ikaro Cavalcante (occulted) - Digital Artist & Curator
