# Core Effects - Liquid Glass Theme

## The Liquid Glass Effect: Foundational CSS

The signature "Liquid Glass" effect is achieved through a combination of transparency, backdrop blur, and subtle visual enhancements that create depth and sophistication.

### Primary Glass Container

```css
.liquid-glass {
	/* Core glass effect */
	background: rgba(255, 255, 255, 0.25);
	backdrop-filter: blur(16px);
	-webkit-backdrop-filter: blur(16px);

	/* Border definition */
	border: 1px solid rgba(255, 255, 255, 0.3);

	/* Soft, modern corners */
	border-radius: 16px;

	/* Depth and elevation */
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05),
		inset 0 1px 0 rgba(255, 255, 255, 0.4);

	/* Smooth transitions */
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Enhanced Glass Variants

#### Stronger Glass Effect

For prominent containers that need more visual weight:

```css
.liquid-glass--strong {
	background: rgba(255, 255, 255, 0.35);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	border: 1px solid rgba(255, 255, 255, 0.4);
	box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 6px 20px rgba(0, 0, 0, 0.08),
		inset 0 1px 0 rgba(255, 255, 255, 0.5);
}
```

#### Subtle Glass Effect

For secondary containers or less prominent elements:

```css
.liquid-glass--subtle {
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	border: 1px solid rgba(255, 255, 255, 0.2);
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.03),
		inset 0 1px 0 rgba(255, 255, 255, 0.3);
}
```

### Interactive States

#### Hover Enhancement

```css
.liquid-glass:hover {
	background: rgba(255, 255, 255, 0.3);
	border-color: rgba(255, 255, 255, 0.4);
	box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 6px 20px rgba(0, 0, 0, 0.08),
		inset 0 1px 0 rgba(255, 255, 255, 0.5);
	transform: translateY(-2px);
}
```

#### Focus State

```css
.liquid-glass:focus,
.liquid-glass:focus-within {
	outline: none;
	border-color: rgba(99, 179, 237, 0.6);
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05),
		inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 2px rgba(99, 179, 237, 0.2);
}
```

### Border Radius Variations

```css
/* Small radius for compact elements */
.liquid-glass--sm {
	border-radius: 8px;
}

/* Medium radius (default) */
.liquid-glass--md {
	border-radius: 16px;
}

/* Large radius for prominent containers */
.liquid-glass--lg {
	border-radius: 24px;
}

/* Extra large radius for hero sections */
.liquid-glass--xl {
	border-radius: 32px;
}
```

### Performance Considerations

For optimal performance, especially on mobile devices:

```css
.liquid-glass {
	/* Hardware acceleration */
	transform: translate3d(0, 0, 0);
	will-change: transform;

	/* Optimize backdrop-filter rendering */
	contain: layout style paint;
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
	.liquid-glass {
		transition: none;
	}

	.liquid-glass:hover {
		transform: none;
	}
}
```

### Browser Fallbacks

For browsers that don't support backdrop-filter:

```css
@supports not (backdrop-filter: blur(16px)) {
	.liquid-glass {
		background: rgba(255, 255, 255, 0.9);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05);
	}
}
```

## Implementation Notes

### Backdrop Requirements

- Ensure there's visually interesting content behind glass elements
- Avoid placing glass effects over solid backgrounds where the blur won't be noticeable
- Consider using subtle background patterns or gradients to enhance the glass effect

### Layering

- Use z-index strategically to create proper layering hierarchy
- Stronger glass effects should typically sit above subtler ones
- Maintain consistent layering across the interface

### Accessibility

- Ensure sufficient color contrast for text within glass containers
- Provide alternative styling for users who prefer reduced transparency
- Test with screen readers to ensure content remains accessible

---

_The core glass effect forms the foundation of the Liquid Glass theme. Combine with appropriate [colors](./colors.md), [typography](./typography.md), and [components](./components.md) for a complete implementation._
