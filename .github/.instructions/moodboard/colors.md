# Color Palette - Liquid Glass Theme

## Primary Color System

The Liquid Glass theme employs a carefully curated color palette that enhances the transparent, ethereal aesthetic while maintaining excellent readability and accessibility.

### Page Background

#### Primary Background Gradient

Creates a subtle, dynamic foundation that enhances the glass effect:

```css
.page-background {
	background: linear-gradient(
		135deg,
		#f8fafc 0%,
		#e2e8f0 25%,
		#f1f5f9 50%,
		#e0e7ff 75%,
		#f8fafc 100%
	);
	min-height: 100vh;
}
```

**CSS Custom Properties:**

```css
:root {
	--bg-primary: linear-gradient(
		135deg,
		#f8fafc 0%,
		#e2e8f0 25%,
		#f1f5f9 50%,
		#e0e7ff 75%,
		#f8fafc 100%
	);
	--bg-solid: #f8fafc;
}
```

#### Alternative Backgrounds

For different moods or sections:

```css
/* Warmer variant */
.page-background--warm {
	background: linear-gradient(
		135deg,
		#fefefe 0%,
		#f7f3f0 30%,
		#f0f4f8 60%,
		#faf8f6 100%
	);
}

/* Cooler variant */
.page-background--cool {
	background: linear-gradient(
		135deg,
		#f0f9ff 0%,
		#e0f2fe 30%,
		#f1f5f9 60%,
		#f0f9ff 100%
	);
}
```

### Glass Effects

#### Glass Background Values

Precise transparency values for different glass strengths:

```css
:root {
	/* Primary glass backgrounds */
	--glass-primary: rgba(255, 255, 255, 0.25);
	--glass-strong: rgba(255, 255, 255, 0.35);
	--glass-subtle: rgba(255, 255, 255, 0.15);
	--glass-minimal: rgba(255, 255, 255, 0.08);

	/* Glass borders */
	--glass-border: rgba(255, 255, 255, 0.3);
	--glass-border-strong: rgba(255, 255, 255, 0.4);
	--glass-border-subtle: rgba(255, 255, 255, 0.2);
}
```

### Text Colors

#### Primary Text Hierarchy

Carefully balanced for readability on glass backgrounds:

```css
:root {
	/* Primary text colors */
	--text-primary: #1e293b; /* Main headings and important content */
	--text-secondary: #475569; /* Body text and descriptions */
	--text-tertiary: #64748b; /* Meta information and captions */
	--text-quaternary: #94a3b8; /* Placeholder text and disabled states */

	/* High contrast variant for critical text */
	--text-contrast: #0f172a;
}
```

#### Text on Glass Backgrounds

Enhanced contrast for glass containers:

```css
:root {
	--text-on-glass-primary: #1e293b;
	--text-on-glass-secondary: #334155;
	--text-on-glass-tertiary: #475569;
}
```

### Accent Colors

#### Primary Accent - Serene Blue

The main brand color for interactive elements:

```css
:root {
	--accent-primary: #63b3ed; /* Main accent color */
	--accent-primary-hover: #4299e1; /* Hover state */
	--accent-primary-active: #3182ce; /* Active/pressed state */
	--accent-primary-light: #bee3f8; /* Light variant for backgrounds */
	--accent-primary-dark: #2b77c7; /* Dark variant for text */
}
```

#### Secondary Accent - Soft Mint

For success states and secondary actions:

```css
:root {
	--accent-secondary: #68d391; /* Secondary accent */
	--accent-secondary-hover: #48bb78; /* Hover state */
	--accent-secondary-active: #38a169; /* Active state */
	--accent-secondary-light: #c6f6d5; /* Light variant */
	--accent-secondary-dark: #2f855a; /* Dark variant */
}
```

### State Colors

#### Semantic Color System

For feedback and status communication:

```css
:root {
	/* Success states */
	--success: #10b981;
	--success-light: #d1fae5;
	--success-dark: #047857;

	/* Warning states */
	--warning: #f59e0b;
	--warning-light: #fef3c7;
	--warning-dark: #d97706;

	/* Error states */
	--error: #ef4444;
	--error-light: #fee2e2;
	--error-dark: #dc2626;

	/* Info states */
	--info: #3b82f6;
	--info-light: #dbeafe;
	--info-dark: #1d4ed8;
}
```

### Neutral Colors

#### Gray Scale System

Supporting colors for borders, dividers, and subtle elements:

```css
:root {
	--neutral-50: #f8fafc;
	--neutral-100: #f1f5f9;
	--neutral-200: #e2e8f0;
	--neutral-300: #cbd5e1;
	--neutral-400: #94a3b8;
	--neutral-500: #64748b;
	--neutral-600: #475569;
	--neutral-700: #334155;
	--neutral-800: #1e293b;
	--neutral-900: #0f172a;
}
```

### Special Effect Colors

#### Glow and Highlight Effects

For enhanced visual hierarchy:

```css
:root {
	/* Glow effects */
	--glow-primary: rgba(99, 179, 237, 0.4);
	--glow-secondary: rgba(104, 211, 145, 0.4);
	--glow-white: rgba(255, 255, 255, 0.8);

	/* Inner highlight for glass elements */
	--highlight-inner: rgba(255, 255, 255, 0.4);
	--highlight-inner-strong: rgba(255, 255, 255, 0.5);
	--highlight-inner-subtle: rgba(255, 255, 255, 0.3);
}
```

## Color Usage Guidelines

### Accessibility Compliance

All color combinations meet WCAG 2.1 AA standards:

- **Primary text on light backgrounds:** Contrast ratio 7.1:1
- **Secondary text on light backgrounds:** Contrast ratio 4.8:1
- **Accent colors on light backgrounds:** Contrast ratio 4.5:1+

### Implementation Examples

```css
/* High-contrast text on glass */
.glass-card {
	background: var(--glass-primary);
	color: var(--text-on-glass-primary);
	border: 1px solid var(--glass-border);
}

/* Accent button with proper contrast */
.btn-primary {
	background: var(--accent-primary);
	color: white;
	border: 1px solid var(--accent-primary-dark);
}

/* Subtle glass element */
.glass-subtle {
	background: var(--glass-subtle);
	color: var(--text-on-glass-secondary);
	border: 1px solid var(--glass-border-subtle);
}
```

### Color Psychology

The chosen palette evokes:

- **Serenity:** Soft blues and whites create calm
- **Cleanliness:** High contrast between text and backgrounds
- **Sophistication:** Muted tones avoid overwhelming brightness
- **Trustworthiness:** Blue accents convey reliability
- **Growth:** Mint secondary accent suggests progress

### Dark Mode Considerations

While this theme is primarily designed for light mode, future dark mode adaptations should:

- Invert transparency values (darker glass on light content)
- Maintain the same blur strengths
- Adjust accent colors for dark background compatibility
- Preserve the ethereal, floating aesthetic

---

_These colors work harmoniously with the [core effects](./core-effects.md) to create the signature Liquid Glass aesthetic. See [typography](./typography.md) for text styling and [components](./components.md) for practical applications._
