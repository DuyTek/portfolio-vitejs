# Implementation Examples - Liquid Glass Theme

## Complete CSS Implementation

This section provides ready-to-use CSS code combining all aspects of the Liquid Glass theme into practical, production-ready stylesheets.

## Base Setup

### CSS Custom Properties Declaration

```css
:root {
	/* Typography */
	--font-primary: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, sans-serif;
	--font-secondary: 'Satoshi', 'Inter', sans-serif;
	--font-mono: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code',
		monospace;

	/* Glass Effects */
	--glass-primary: rgba(255, 255, 255, 0.25);
	--glass-strong: rgba(255, 255, 255, 0.35);
	--glass-subtle: rgba(255, 255, 255, 0.15);
	--glass-minimal: rgba(255, 255, 255, 0.08);

	/* Glass Borders */
	--glass-border: rgba(255, 255, 255, 0.3);
	--glass-border-strong: rgba(255, 255, 255, 0.4);
	--glass-border-subtle: rgba(255, 255, 255, 0.2);

	/* Text Colors */
	--text-primary: #1e293b;
	--text-secondary: #475569;
	--text-tertiary: #64748b;
	--text-quaternary: #94a3b8;
	--text-on-glass-primary: #1e293b;
	--text-on-glass-secondary: #334155;
	--text-on-glass-tertiary: #475569;

	/* Accent Colors */
	--accent-primary: #63b3ed;
	--accent-primary-hover: #4299e1;
	--accent-primary-active: #3182ce;
	--accent-primary-light: #bee3f8;
	--accent-primary-dark: #2b77c7;

	--accent-secondary: #68d391;
	--accent-secondary-hover: #48bb78;
	--accent-secondary-active: #38a169;

	/* State Colors */
	--success: #10b981;
	--warning: #f59e0b;
	--error: #ef4444;
	--info: #3b82f6;

	/* Highlights */
	--highlight-inner: rgba(255, 255, 255, 0.4);
	--highlight-inner-strong: rgba(255, 255, 255, 0.5);
	--highlight-inner-subtle: rgba(255, 255, 255, 0.3);

	/* Spacing */
	--space-xs: 0.25rem;
	--space-sm: 0.5rem;
	--space-md: 1rem;
	--space-lg: 1.5rem;
	--space-xl: 2rem;
	--space-2xl: 3rem;
	--space-3xl: 4rem;
}
```

### Global Styles

```css
/* Base reset and typography */
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	font-size: clamp(14px, 2.5vw, 16px);
	scroll-behavior: smooth;
}

body {
	font-family: var(--font-primary);
	background: linear-gradient(
		135deg,
		#f8fafc 0%,
		#e2e8f0 25%,
		#f1f5f9 50%,
		#e0e7ff 75%,
		#f8fafc 100%
	);
	color: var(--text-secondary);
	line-height: 1.7;
	min-height: 100vh;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

/* Focus styles */
:focus-visible {
	outline: 2px solid var(--accent-primary);
	outline-offset: 2px;
}
```

## Complete Component Library

### Glass Utilities

```css
/* Core glass effect */
.liquid-glass {
	background: var(--glass-primary);
	backdrop-filter: blur(16px);
	-webkit-backdrop-filter: blur(16px);
	border: 1px solid var(--glass-border);
	border-radius: 16px;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05),
		inset 0 1px 0 var(--highlight-inner);
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.liquid-glass:hover {
	background: var(--glass-strong);
	transform: translateY(-2px);
	box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 6px 20px rgba(0, 0, 0, 0.08),
		inset 0 1px 0 var(--highlight-inner-strong);
}

/* Glass variants */
.liquid-glass--strong {
	background: var(--glass-strong);
	border-color: var(--glass-border-strong);
}

.liquid-glass--subtle {
	background: var(--glass-subtle);
	border-color: var(--glass-border-subtle);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
}

.liquid-glass--minimal {
	background: var(--glass-minimal);
	border-color: var(--glass-border-subtle);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
}
```

### Typography Classes

```css
/* Headings */
.heading-1 {
	font-size: clamp(2.5rem, 5vw, 4rem);
	font-weight: 700;
	line-height: 1.1;
	letter-spacing: -0.025em;
	color: var(--text-primary);
	margin-bottom: 1.5rem;
}

.heading-2 {
	font-size: clamp(2rem, 4vw, 3rem);
	font-weight: 600;
	line-height: 1.2;
	letter-spacing: -0.02em;
	color: var(--text-primary);
	margin-bottom: 1.25rem;
}

.heading-3 {
	font-size: clamp(1.5rem, 3vw, 2.25rem);
	font-weight: 600;
	line-height: 1.3;
	letter-spacing: -0.015em;
	color: var(--text-primary);
	margin-bottom: 1rem;
}

/* Body text */
.body-text {
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.7;
	letter-spacing: 0.01em;
	color: var(--text-secondary);
}

.lead-text {
	font-size: 1.25rem;
	font-weight: 400;
	line-height: 1.8;
	letter-spacing: 0.005em;
	color: var(--text-primary);
	margin-bottom: 1.5rem;
}

.caption-text {
	font-size: 0.75rem;
	font-weight: 400;
	line-height: 1.5;
	letter-spacing: 0.025em;
	color: var(--text-quaternary);
	text-transform: uppercase;
}
```

### Button Components

```css
/* Base button styles */
.btn {
	font-family: var(--font-primary);
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 0.01em;
	padding: 0.75rem 1.5rem;
	min-height: 48px;
	border-radius: 12px;
	border: none;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	text-decoration: none;
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	position: relative;
	overflow: hidden;
}

/* Primary button */
.btn--primary {
	background: linear-gradient(
		135deg,
		var(--accent-primary),
		var(--accent-primary-hover)
	);
	color: white;
	box-shadow: 0 4px 12px rgba(99, 179, 237, 0.3), 0 2px 6px rgba(99, 179, 237, 0.2);
}

.btn--primary:hover {
	background: linear-gradient(
		135deg,
		var(--accent-primary-hover),
		var(--accent-primary-active)
	);
	transform: translateY(-2px);
	box-shadow: 0 8px 20px rgba(99, 179, 237, 0.4), 0 4px 12px rgba(99, 179, 237, 0.3);
}

/* Secondary glass button */
.btn--secondary {
	background: var(--glass-primary);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	color: var(--accent-primary-dark);
	border: 1px solid var(--glass-border);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.03),
		inset 0 1px 0 var(--highlight-inner);
}

.btn--secondary:hover {
	background: var(--glass-strong);
	border-color: var(--accent-primary);
	color: var(--accent-primary);
	transform: translateY(-1px);
}

/* Button sizes */
.btn--large {
	padding: 1rem 2rem;
	font-size: 1.125rem;
	min-height: 56px;
	border-radius: 16px;
}

.btn--small {
	padding: 0.5rem 1rem;
	font-size: 0.875rem;
	min-height: 36px;
	border-radius: 8px;
}
```

### Form Elements

```css
/* Input fields */
.input {
	font-family: var(--font-primary);
	font-size: 1rem;
	color: var(--text-on-glass-primary);
	background: var(--glass-subtle);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
	border: 1px solid var(--glass-border-subtle);
	border-radius: 12px;
	padding: 0.75rem 1rem;
	min-height: 48px;
	width: 100%;
	box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.input:focus {
	outline: none;
	border-color: var(--accent-primary);
	background: var(--glass-primary);
	box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(99, 179, 237, 0.2);
}

.input::placeholder {
	color: var(--text-quaternary);
	font-weight: 400;
}

/* Form groups */
.form-group {
	margin-bottom: 1.5rem;
}

.form-label {
	display: block;
	font-size: 0.875rem;
	font-weight: 500;
	color: var(--text-secondary);
	margin-bottom: 0.5rem;
	letter-spacing: 0.01em;
}
```

### Card Components

```css
/* Base card */
.card {
	background: var(--glass-primary);
	backdrop-filter: blur(16px);
	-webkit-backdrop-filter: blur(16px);
	border: 1px solid var(--glass-border);
	border-radius: 16px;
	padding: 1.5rem;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05),
		inset 0 1px 0 var(--highlight-inner);
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
	transform: translateY(-4px);
	box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.08),
		inset 0 1px 0 var(--highlight-inner-strong);
}

/* Card variants */
.card--feature {
	background: var(--glass-strong);
	padding: 2rem;
	border-radius: 20px;
}

.card--compact {
	padding: 1rem;
	border-radius: 12px;
}

/* Card content */
.card__header {
	margin-bottom: 1rem;
}

.card__title {
	font-size: 1.25rem;
	font-weight: 600;
	color: var(--text-on-glass-primary);
	margin-bottom: 0.5rem;
}

.card__description {
	color: var(--text-on-glass-secondary);
	line-height: 1.6;
}

.card__footer {
	margin-top: 1.5rem;
	padding-top: 1rem;
	border-top: 1px solid var(--glass-border-subtle);
}
```

## Layout Examples

### Hero Section

```css
.hero {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 2rem;
}

.hero__content {
	max-width: 800px;
	background: var(--glass-strong);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	border: 1px solid var(--glass-border-strong);
	border-radius: 32px;
	padding: 4rem 3rem;
	box-shadow: 0 24px 64px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.08),
		inset 0 1px 0 var(--highlight-inner-strong);
}

.hero__title {
	font-size: clamp(3rem, 8vw, 6rem);
	font-weight: 800;
	line-height: 0.95;
	letter-spacing: -0.05em;
	color: var(--text-on-glass-primary);
	margin-bottom: 1.5rem;
}

.hero__subtitle {
	font-size: clamp(1.125rem, 3vw, 1.5rem);
	color: var(--text-on-glass-secondary);
	margin-bottom: 2rem;
	line-height: 1.6;
}

.hero__actions {
	display: flex;
	gap: 1rem;
	justify-content: center;
	flex-wrap: wrap;
}
```

### Navigation

```css
.nav {
	background: var(--glass-primary);
	backdrop-filter: blur(16px);
	-webkit-backdrop-filter: blur(16px);
	border-bottom: 1px solid var(--glass-border);
	position: sticky;
	top: 0;
	z-index: 100;
	padding: 1rem 0;
}

.nav__container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.nav__brand {
	font-size: 1.25rem;
	font-weight: 600;
	color: var(--text-primary);
	text-decoration: none;
}

.nav__menu {
	display: flex;
	gap: 0.5rem;
	list-style: none;
}

.nav__link {
	font-size: 0.875rem;
	font-weight: 500;
	color: var(--text-secondary);
	text-decoration: none;
	padding: 0.5rem 1rem;
	border-radius: 8px;
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav__link:hover,
.nav__link--active {
	color: var(--accent-primary);
	background: var(--glass-subtle);
}
```

### Grid Layout

```css
.grid {
	display: grid;
	gap: 2rem;
	padding: 2rem;
	max-width: 1200px;
	margin: 0 auto;
}

.grid--2 {
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid--3 {
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.grid--4 {
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

@media (max-width: 768px) {
	.grid {
		gap: 1rem;
		padding: 1rem;
	}

	.grid--2,
	.grid--3,
	.grid--4 {
		grid-template-columns: 1fr;
	}
}
```

## Responsive Utilities

```css
/* Responsive visibility */
.hidden-mobile {
	display: block;
}

.hidden-desktop {
	display: none;
}

@media (max-width: 768px) {
	.hidden-mobile {
		display: none;
	}

	.hidden-desktop {
		display: block;
	}
}

/* Responsive spacing */
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 2rem;
}

@media (max-width: 768px) {
	.container {
		padding: 0 1rem;
	}
}

/* Responsive text */
@media (max-width: 768px) {
	.heading-1 {
		font-size: clamp(2rem, 8vw, 2.5rem);
	}

	.heading-2 {
		font-size: clamp(1.5rem, 6vw, 2rem);
	}

	.lead-text {
		font-size: 1.125rem;
	}
}
```

## Performance Optimizations

```css
/* Hardware acceleration for glass elements */
.liquid-glass,
.card,
.btn {
	transform: translate3d(0, 0, 0);
	will-change: transform;
}

/* Remove will-change after interactions */
.liquid-glass:not(:hover):not(:focus),
.card:not(:hover):not(:focus),
.btn:not(:hover):not(:focus):not(:active) {
	will-change: auto;
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}

	.liquid-glass:hover,
	.card:hover,
	.btn:hover {
		transform: none;
	}
}

/* High contrast mode support */
@media (prefers-contrast: high) {
	.liquid-glass,
	.card {
		background: rgba(255, 255, 255, 0.9);
		border-color: rgba(0, 0, 0, 0.3);
	}

	.btn--secondary {
		background: rgba(255, 255, 255, 0.9);
		border-color: var(--accent-primary);
	}
}
```

## Usage Examples

### Basic Page Structure

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Liquid Glass Theme</title>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
			rel="stylesheet"
		/>
		<link rel="stylesheet" href="liquid-glass.css" />
	</head>
	<body>
		<!-- Navigation -->
		<nav class="nav">
			<div class="nav__container">
				<a href="#" class="nav__brand">Brand</a>
				<ul class="nav__menu">
					<li><a href="#" class="nav__link nav__link--active">Home</a></li>
					<li><a href="#" class="nav__link">About</a></li>
					<li><a href="#" class="nav__link">Services</a></li>
					<li><a href="#" class="nav__link">Contact</a></li>
				</ul>
			</div>
		</nav>

		<!-- Hero Section -->
		<section class="hero">
			<div class="hero__content">
				<h1 class="hero__title">Liquid Glass</h1>
				<p class="hero__subtitle">
					A modern, ethereal theme with transparent glass effects
				</p>
				<div class="hero__actions">
					<button class="btn btn--primary btn--large">Get Started</button>
					<button class="btn btn--secondary btn--large">Learn More</button>
				</div>
			</div>
		</section>

		<!-- Content Grid -->
		<section class="container">
			<div class="grid grid--3">
				<div class="card">
					<div class="card__header">
						<h3 class="card__title">Feature One</h3>
						<p class="card__description">
							Beautiful glass effects with blur and transparency.
						</p>
					</div>
					<div class="card__footer">
						<button class="btn btn--secondary">Learn More</button>
					</div>
				</div>

				<div class="card">
					<div class="card__header">
						<h3 class="card__title">Feature Two</h3>
						<p class="card__description">
							Responsive design that works on all devices.
						</p>
					</div>
					<div class="card__footer">
						<button class="btn btn--secondary">Learn More</button>
					</div>
				</div>

				<div class="card">
					<div class="card__header">
						<h3 class="card__title">Feature Three</h3>
						<p class="card__description">
							Accessibility-focused with proper contrast ratios.
						</p>
					</div>
					<div class="card__footer">
						<button class="btn btn--secondary">Learn More</button>
					</div>
				</div>
			</div>
		</section>
	</body>
</html>
```

This complete implementation provides a production-ready Liquid Glass theme that can be immediately integrated into web projects. All components work together harmoniously to create the signature ethereal, glass-like aesthetic while maintaining excellent usability and accessibility standards.

---

_This implementation guide provides everything needed to deploy the Liquid Glass theme. For detailed explanations of individual components, refer to [core effects](./core-effects.md), [colors](./colors.md), [typography](./typography.md), and [components](./components.md)._
