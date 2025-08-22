# UI Components - Liquid Glass Theme

## Component Implementation Guide

This section provides detailed specifications for implementing common UI components using the Liquid Glass aesthetic, combining the [core effects](./core-effects.md), [colors](./colors.md), and [typography](./typography.md) into cohesive interface elements.

## Cards & Containers

### Primary Glass Card

The foundational container component for content organization:

```css
.glass-card {
	/* Core glass effect */
	background: var(--glass-primary);
	backdrop-filter: blur(16px);
	-webkit-backdrop-filter: blur(16px);
	border: 1px solid var(--glass-border);
	border-radius: 16px;

	/* Elevation and depth */
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05),
		inset 0 1px 0 var(--highlight-inner);

	/* Content spacing */
	padding: 1.5rem;

	/* Smooth interactions */
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
	transform: translateY(-4px);
	box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.08),
		inset 0 1px 0 var(--highlight-inner-strong);
}
```

### Content Card Variants

```css
/* Compact card for lists and grids */
.glass-card--compact {
	padding: 1rem;
	border-radius: 12px;
}

/* Feature card with enhanced prominence */
.glass-card--feature {
	background: var(--glass-strong);
	padding: 2rem;
	border-radius: 20px;
	border: 1px solid var(--glass-border-strong);
}

/* Minimal card for subtle content grouping */
.glass-card--minimal {
	background: var(--glass-minimal);
	border: 1px solid var(--glass-border-subtle);
	padding: 1rem;
	border-radius: 8px;
}
```

### Modal and Dialog Containers

```css
.glass-modal {
	background: var(--glass-strong);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	border: 1px solid var(--glass-border-strong);
	border-radius: 24px;
	padding: 2rem;
	max-width: 90vw;
	max-height: 90vh;
	box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2), 0 12px 32px rgba(0, 0, 0, 0.1),
		inset 0 1px 0 var(--highlight-inner-strong);
}

.glass-modal-backdrop {
	background: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
}
```

## Buttons

### Primary Button

High-contrast, action-oriented button for main CTAs:

```css
.btn-primary {
	/* Solid background for prominence */
	background: linear-gradient(
		135deg,
		var(--accent-primary),
		var(--accent-primary-hover)
	);
	color: white;
	border: 1px solid var(--accent-primary-dark);
	border-radius: 12px;

	/* Typography */
	font-family: var(--font-primary);
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 0.01em;

	/* Spacing and sizing */
	padding: 0.75rem 1.5rem;
	min-height: 48px;

	/* Elevation */
	box-shadow: 0 4px 12px rgba(99, 179, 237, 0.3), 0 2px 6px rgba(99, 179, 237, 0.2);

	/* Smooth interactions */
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
}

.btn-primary:hover {
	background: linear-gradient(
		135deg,
		var(--accent-primary-hover),
		var(--accent-primary-active)
	);
	transform: translateY(-2px);
	box-shadow: 0 8px 20px rgba(99, 179, 237, 0.4), 0 4px 12px rgba(99, 179, 237, 0.3);
}

.btn-primary:active {
	transform: translateY(0);
	box-shadow: 0 2px 8px rgba(99, 179, 237, 0.3), 0 1px 4px rgba(99, 179, 237, 0.2);
}
```

### Secondary Glass Button

Transparent button using the glass effect:

```css
.btn-secondary {
	/* Glass background */
	background: var(--glass-primary);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	color: var(--accent-primary-dark);
	border: 1px solid var(--glass-border);
	border-radius: 12px;

	/* Typography */
	font-family: var(--font-primary);
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 0.01em;

	/* Spacing */
	padding: 0.75rem 1.5rem;
	min-height: 48px;

	/* Elevation */
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.03),
		inset 0 1px 0 var(--highlight-inner);

	/* Smooth interactions */
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
}

.btn-secondary:hover {
	background: var(--glass-strong);
	border-color: var(--accent-primary);
	color: var(--accent-primary);
	transform: translateY(-1px);
	box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.05),
		inset 0 1px 0 var(--highlight-inner-strong);
}
```

### Button Size Variants

```css
/* Large button for hero sections */
.btn--large {
	padding: 1rem 2rem;
	font-size: 1.125rem;
	min-height: 56px;
	border-radius: 16px;
}

/* Small button for compact interfaces */
.btn--small {
	padding: 0.5rem 1rem;
	font-size: 0.875rem;
	min-height: 36px;
	border-radius: 8px;
}

/* Icon button */
.btn--icon {
	padding: 0.75rem;
	min-width: 48px;
	min-height: 48px;
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
}
```

## Input Fields & Forms

### Glass Input Field

```css
.input-glass {
	/* Glass background */
	background: var(--glass-subtle);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
	border: 1px solid var(--glass-border-subtle);
	border-radius: 12px;

	/* Typography */
	font-family: var(--font-primary);
	font-size: 1rem;
	color: var(--text-on-glass-primary);

	/* Spacing */
	padding: 0.75rem 1rem;
	min-height: 48px;
	width: 100%;

	/* Inner shadow for depth */
	box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.05);

	/* Smooth transitions */
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.input-glass:focus {
	outline: none;
	border-color: var(--accent-primary);
	background: var(--glass-primary);
	box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.05),
		0 0 0 3px rgba(99, 179, 237, 0.2);
}

.input-glass::placeholder {
	color: var(--text-quaternary);
	font-weight: 400;
}
```

### Textarea Glass

```css
.textarea-glass {
	/* Inherits from input-glass */
	min-height: 120px;
	resize: vertical;
	line-height: 1.5;
	padding: 1rem;
}
```

### Form Group Layout

```css
.form-group {
	margin-bottom: 1.5rem;
}

.form-label {
	display: block;
	font-family: var(--font-primary);
	font-size: 0.875rem;
	font-weight: 500;
	color: var(--text-secondary);
	margin-bottom: 0.5rem;
	letter-spacing: 0.01em;
}

.form-help {
	font-size: 0.75rem;
	color: var(--text-tertiary);
	margin-top: 0.25rem;
}
```

## Navigation Components

### Glass Navigation Bar

```css
.nav-glass {
	background: var(--glass-primary);
	backdrop-filter: blur(16px);
	-webkit-backdrop-filter: blur(16px);
	border-bottom: 1px solid var(--glass-border);

	/* Sticky positioning */
	position: sticky;
	top: 0;
	z-index: 100;

	/* Layout */
	padding: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.nav-link {
	font-family: var(--font-primary);
	font-size: 0.875rem;
	font-weight: 500;
	color: var(--text-secondary);
	text-decoration: none;
	padding: 0.5rem 1rem;
	border-radius: 8px;
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover,
.nav-link--active {
	color: var(--accent-primary);
	background: var(--glass-subtle);
}
```

### Glass Sidebar

```css
.sidebar-glass {
	background: var(--glass-strong);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	border-right: 1px solid var(--glass-border);

	/* Layout */
	width: 280px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 50;

	/* Inner shadow for depth */
	box-shadow: inset -1px 0 0 var(--highlight-inner);

	/* Content spacing */
	padding: 2rem 1.5rem;
	overflow-y: auto;
}
```

## Specialized Components

### Glass Tag/Badge

```css
.tag-glass {
	background: var(--glass-subtle);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
	border: 1px solid var(--glass-border-subtle);
	border-radius: 20px;

	/* Typography */
	font-family: var(--font-primary);
	font-size: 0.75rem;
	font-weight: 500;
	color: var(--text-secondary);
	letter-spacing: 0.025em;

	/* Spacing */
	padding: 0.25rem 0.75rem;
	display: inline-flex;
	align-items: center;
	gap: 0.25rem;
}

.tag-glass--primary {
	background: rgba(99, 179, 237, 0.2);
	color: var(--accent-primary-dark);
	border-color: rgba(99, 179, 237, 0.3);
}
```

### Glass Alert/Notification

```css
.alert-glass {
	background: var(--glass-primary);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	border: 1px solid var(--glass-border);
	border-radius: 12px;

	/* Layout */
	padding: 1rem 1.5rem;
	display: flex;
	align-items: flex-start;
	gap: 0.75rem;

	/* Typography */
	font-family: var(--font-primary);
	font-size: 0.875rem;
	line-height: 1.5;
	color: var(--text-on-glass-secondary);
}

.alert-glass--success {
	border-color: rgba(16, 185, 129, 0.3);
	background: rgba(16, 185, 129, 0.1);
}

.alert-glass--warning {
	border-color: rgba(245, 158, 11, 0.3);
	background: rgba(245, 158, 11, 0.1);
}

.alert-glass--error {
	border-color: rgba(239, 68, 68, 0.3);
	background: rgba(239, 68, 68, 0.1);
}
```

## Icon Integration

### Recommended Icon Libraries

**Primary Choice: Phosphor Icons**

- Thin, outline style complements the glass aesthetic
- Comprehensive icon set
- Multiple weights available

**Alternative: Feather Icons**

- Minimal, consistent stroke weight
- Perfect for clean interfaces

### Icon Styling

```css
.icon {
	width: 1.25rem;
	height: 1.25rem;
	stroke-width: 1.5;
	color: currentColor;
}

.icon--small {
	width: 1rem;
	height: 1rem;
}

.icon--large {
	width: 1.5rem;
	height: 1.5rem;
}

/* Glass-enhanced icons */
.icon--glass {
	filter: drop-shadow(0 1px 2px rgba(255, 255, 255, 0.8));
}
```

## Responsive Behavior

### Mobile Adaptations

```css
@media (max-width: 768px) {
	.glass-card {
		padding: 1rem;
		border-radius: 12px;
	}

	.btn-primary,
	.btn-secondary {
		padding: 0.875rem 1.25rem;
		font-size: 1rem;
	}

	.input-glass {
		padding: 0.875rem 0.75rem;
	}

	.nav-glass {
		padding: 0.75rem 0;
	}
}
```

### Touch Enhancements

```css
@media (hover: none) and (pointer: coarse) {
	.btn-primary,
	.btn-secondary {
		min-height: 52px; /* Larger touch target */
	}

	.nav-link {
		padding: 0.75rem 1rem;
	}

	.input-glass {
		min-height: 52px;
	}
}
```

## Performance Optimizations

### Hardware Acceleration

```css
.glass-component {
	transform: translate3d(0, 0, 0);
	will-change: transform;
}

/* Remove will-change after animations */
.glass-component:not(:hover):not(:focus) {
	will-change: auto;
}
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
	.glass-card,
	.btn-primary,
	.btn-secondary,
	.input-glass {
		transition: none;
	}

	.glass-card:hover,
	.btn-primary:hover {
		transform: none;
	}
}
```

---

_These components combine all elements of the Liquid Glass theme to create cohesive, interactive interface elements. For complete implementation details, see [examples](./examples.md) and reference the [core effects](./core-effects.md), [colors](./colors.md), and [typography](./typography.md) sections._
