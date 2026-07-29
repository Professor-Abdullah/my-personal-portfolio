# Design Guidelines

## UI Style

The entire application must **strictly follow the Modern Neo-Brutalism UI style**.

Do **NOT** use:

- Glassmorphism
- Neumorphism
- Material Design
- Apple-style Minimalism
- Soft UI
- Transparent Cards
- Frosted Glass
- Blur Effects
- Rounded Floating Cards

The design should feel:

- Bold
- Confident
- Creative
- Professional
- Playful
- Memorable

---

# Color System

## Background

- #F8F8F8

## Primary

- #000000

## Accent Colors

- Blue: #2563EB
- Yellow: #FACC15
- Red: #EF4444
- Green: #22C55E

## Cards

- White

## Borders

- 4px solid #000000

---

# Shadows

Use hard shadows only.

Default

```css
box-shadow: 8px 8px 0px #000;
```

Hover

```css
transform: translate(-4px, -4px);

box-shadow: 12px 12px 0px #000;
```

No blur shadows.

---

# Border Radius

Maximum

8px

Prefer square edges.

---

# Typography

Primary Font

Space Grotesk

Fallback

Inter

Heading Weight

900

Body Weight

500

Typography should be large, bold, and editorial.

---

# Layout

Use generous spacing.

Large visual hierarchy.

Asymmetrical layouts where appropriate.

Every section should feel visually different while maintaining consistency.

Alternate section backgrounds using:

- White
- Light Gray
- Yellow
- Blue

---

# Components

## Cards

Every card must have:

- 4px black border
- Hard shadow
- Flat background
- Hover lift
- Slight rotation

---

## Buttons

Buttons should be:

- Large
- Bold
- Rectangular
- Thick bordered
- Hard shadows

Hover

- Move upward
- Shadow increases
- Slight scale

Never use glow effects.

---

## Images

Images must have:

- Thick border
- Hard shadow
- Slight rotation
- Hover scale

---

## Icons

Use:

- Lucide React

Icons should be large and bold.

---

# Animations

Use Framer Motion.

Allowed animations:

- Fade
- Slide
- Scale
- Rotate
- Bounce
- Stagger
- Hover Lift
- Card Tilt
- Scroll Reveal

Animations should be energetic and fast.

Avoid slow elegant animations.

---

# Hero Design

Full viewport height.

Include:

- Large typography
- Editorial layout
- Profile image inside bordered frame
- Floating geometric shapes
- Grid background
- Large CTA buttons
- Statistics cards

---

# Navbar

Sticky navigation.

Contains:

- Logo
- Navigation Links
- Resume Button
- CTA Button
- Mobile Drawer

Style:

- White background
- Thick bottom border
- Hard shadows
- Active navigation indicator

---

# Skills Design

Display skills as bordered tiles.

Do NOT use progress bars.

Each tile should include:

- Icon
- Skill Name
- Hover Animation

---

# Projects Design

Project cards should include:

- Project image
- Title
- Description
- Technology badges
- GitHub button
- Live Demo button (if available)

Effects

- Rotate slightly
- Lift on hover
- Hard shadow

---

# Contact Form Design

Large bordered inputs.

Large labels.

Hard shadows.

Large submit button.

Validation styling.

Success and error animations.

---

# Footer

Minimal.

Large top border.

Navigation links.

Social icons.

Back to top button.

---

# Responsiveness

Maintain Neo-Brutalist aesthetics across:

- Desktop
- Laptop
- Tablet
- Mobile

Do not simplify the design excessively on smaller screens.

---

# Accessibility

Use:

- Semantic HTML
- Keyboard Navigation
- Focus States
- ARIA Labels
- High Contrast