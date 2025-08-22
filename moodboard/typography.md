# Typography - Liquid Glass Theme

## Typography System

The Liquid Glass theme employs a clean, modern typography system that emphasizes readability and elegance while complementing the ethereal glass aesthetic.

### Primary Font Family

#### Recommended Font Stack

```css
:root {
	--font-primary: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, sans-serif;
	--font-secondary: 'Satoshi', 'Inter', sans-serif;
	--font-mono: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code',
		monospace;
}
```

**Primary Choice: Inter**

- Excellent readability at all sizes
- Modern, neutral character
- Comprehensive character set
- Optimized for digital screens

**Alternative: Satoshi**

- Slightly more geometric and contemporary
- Great for headings and display text
- Excellent weight variations

### Font Loading

```css
/* Font loading optimization */
@font-face {
	font-family: 'Inter';
	src: url('/fonts/Inter-Variable.woff2') format('woff2-variations');
	font-weight: 100 900;
	font-style: normal;
	font-display: swap;
}
```

## Heading Hierarchy

### H1 - Primary Heading

```css
.heading-1 {
	font-family: var(--font-primary);
	font-size: clamp(2.5rem, 5vw, 4rem);
	font-weight: 700;
	line-height: 1.1;
	letter-spacing: -0.025em;
	color: var(--text-primary);
	margin-bottom: 1.5rem;
}

/* On glass backgrounds */
.heading-1--on-glass {
	color: var(--text-on-glass-primary);
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
```

### H2 - Section Heading

```css
.heading-2 {
	font-family: var(--font-primary);
	font-size: clamp(2rem, 4vw, 3rem);
	font-weight: 600;
	line-height: 1.2;
	letter-spacing: -0.02em;
	color: var(--text-primary);
	margin-bottom: 1.25rem;
}
```

### H3 - Subsection Heading

```css
.heading-3 {
	font-family: var(--font-primary);
	font-size: clamp(1.5rem, 3vw, 2.25rem);
	font-weight: 600;
	line-height: 1.3;
	letter-spacing: -0.015em;
	color: var(--text-primary);
	margin-bottom: 1rem;
}
```

### H4 - Component Heading

```css
.heading-4 {
	font-family: var(--font-primary);
	font-size: clamp(1.25rem, 2.5vw, 1.75rem);
	font-weight: 500;
	line-height: 1.35;
	letter-spacing: -0.01em;
	color: var(--text-primary);
	margin-bottom: 0.75rem;
}
```

### H5 - Small Heading

```css
.heading-5 {
	font-family: var(--font-primary);
	font-size: 1.125rem;
	font-weight: 500;
	line-height: 1.4;
	letter-spacing: -0.005em;
	color: var(--text-secondary);
	margin-bottom: 0.5rem;
}
```

## Body Text

### Primary Body Text

```css
.body-text {
	font-family: var(--font-primary);
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.7;
	letter-spacing: 0.01em;
	color: var(--text-secondary);
}

/* Large body text for important content */
.body-text--large {
	font-size: 1.125rem;
	line-height: 1.75;
	color: var(--text-primary);
}

/* Small body text for captions and metadata */
.body-text--small {
	font-size: 0.875rem;
	line-height: 1.6;
	color: var(--text-tertiary);
}
```

### Enhanced Readability on Glass

```css
.body-text--on-glass {
	color: var(--text-on-glass-secondary);
	text-shadow: 0 0.5px 1px rgba(255, 255, 255, 0.8);
}
```

## Specialized Text Styles

### Lead Text

For introductory paragraphs and important descriptions:

```css
.lead-text {
	font-family: var(--font-primary);
	font-size: 1.25rem;
	font-weight: 400;
	line-height: 1.8;
	letter-spacing: 0.005em;
	color: var(--text-primary);
	margin-bottom: 1.5rem;
}
```

### Caption Text

For image captions, metadata, and supporting information:

```css
.caption-text {
	font-family: var(--font-primary);
	font-size: 0.75rem;
	font-weight: 400;
	line-height: 1.5;
	letter-spacing: 0.025em;
	color: var(--text-quaternary);
	text-transform: uppercase;
}
```

### Code Text

For inline code and technical content:

```css
.code-text {
	font-family: var(--font-mono);
	font-size: 0.875rem;
	font-weight: 400;
	background: var(--glass-subtle);
	padding: 0.125rem 0.375rem;
	border-radius: 4px;
	border: 1px solid var(--glass-border-subtle);
	color: var(--text-primary);
}
```

## Typography Spacing & Rhythm

### Vertical Rhythm

```css
:root {
	--space-xs: 0.25rem; /* 4px */
	--space-sm: 0.5rem; /* 8px */
	--space-md: 1rem; /* 16px */
	--space-lg: 1.5rem; /* 24px */
	--space-xl: 2rem; /* 32px */
	--space-2xl: 3rem; /* 48px */
	--space-3xl: 4rem; /* 64px */
}
```

### Content Flow

```css
.content-flow > * + * {
	margin-top: var(--space-lg);
}

.content-flow > h1 + *,
.content-flow > h2 + *,
.content-flow > h3 + * {
	margin-top: var(--space-md);
}

.content-flow > * + h2 {
	margin-top: var(--space-2xl);
}

.content-flow > * + h3 {
	margin-top: var(--space-xl);
}
```

## Responsive Typography

### Fluid Scaling System

```css
/* Base font size scaling */
html {
	font-size: clamp(14px, 2.5vw, 16px);
}

/* Responsive heading scales */
.heading-display {
	font-size: clamp(3rem, 8vw, 6rem);
	font-weight: 800;
	line-height: 0.95;
	letter-spacing: -0.05em;
}

.heading-hero {
	font-size: clamp(2.5rem, 6vw, 4.5rem);
	font-weight: 700;
	line-height: 1.05;
	letter-spacing: -0.03em;
}
```

### Breakpoint-Specific Adjustments

```css
@media (max-width: 768px) {
	.body-text {
		font-size: 1rem;
		line-height: 1.6;
	}

	.lead-text {
		font-size: 1.125rem;
		line-height: 1.7;
	}
}

@media (min-width: 1200px) {
	.body-text--large {
		font-size: 1.25rem;
		line-height: 1.8;
	}
}
```

## Advanced Typography Features

### OpenType Features

```css
.text-optimized {
	font-feature-settings: 'kern' 1, /* Kerning */ 'liga' 1,
		/* Ligatures */ 'calt' 1, /* Contextual alternates */ 'case' 1,
		/* Case-sensitive forms */ 'ss01' 1; /* Stylistic set 1 (if available) */
}
```

### Text Enhancement for Glass Backgrounds

```css
.text-enhanced-glass {
	/* Subtle text shadow for better contrast on glass */
	text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);

	/* Slight backdrop blur for text containers */
	backdrop-filter: blur(0.5px);

	/* Enhanced letter spacing for clarity */
	letter-spacing: 0.015em;
}
```

## Typography Utilities

### Text Alignment

```css
.text-left {
	text-align: left;
}
.text-center {
	text-align: center;
}
.text-right {
	text-align: right;
}
.text-justify {
	text-align: justify;
}
```

### Font Weights

```css
.font-light {
	font-weight: 300;
}
.font-normal {
	font-weight: 400;
}
.font-medium {
	font-weight: 500;
}
.font-semibold {
	font-weight: 600;
}
.font-bold {
	font-weight: 700;
}
.font-extrabold {
	font-weight: 800;
}
```

### Text Transform

```css
.uppercase {
	text-transform: uppercase;
}
.lowercase {
	text-transform: lowercase;
}
.capitalize {
	text-transform: capitalize;
}
```

## Implementation Guidelines

### Performance Considerations

1. **Font Loading**: Use `font-display: swap` for better loading performance
2. **Variable Fonts**: Prefer variable fonts to reduce file size
3. **Font Subsetting**: Include only necessary character sets
4. **Preloading**: Preload critical fonts in the document head

### Accessibility

1. **Contrast Ratios**: All text meets WCAG 2.1 AA standards
2. **Scalability**: Typography scales well up to 200% zoom
3. **Line Height**: Generous line heights aid readability
4. **Focus States**: Ensure keyboard navigation is clearly visible

### Best Practices

1. **Hierarchy**: Use consistent heading levels for proper document structure
2. **Reading Width**: Limit text blocks to 60-75 characters per line
3. **White Space**: Embrace generous spacing for better comprehension
4. **Glass Integration**: Always test text contrast on glass backgrounds

---

_This typography system works seamlessly with the [core effects](./core-effects.md) and [color palette](./colors.md) to create readable, elegant text that enhances the Liquid Glass aesthetic. See [components](./components.md) for specific implementation examples._
