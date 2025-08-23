# Liquid Glass Theme - Master Style Guide

> **A modern, ethereal, and minimalist web theme featuring transparent, water-like effects with sophisticated depth and focus.**

## Overview

The Liquid Glass theme embodies a serene, clean, and sophisticated aesthetic through transparent, frosted glass effects that create visual depth and hierarchy. The core concept revolves around semi-transparent UI containers with backdrop blur effects that reveal hints of underlying content, mimicking the appearance of looking through clear, calm water.

### Theme Characteristics

- **Visual Style:** Transparent, frosted glass aesthetic
- **Mood:** Airy, clean, modern, serene, and focused
- **Core Feature:** Semi-transparent containers with strong backdrop blur
- **Target:** Light-mode websites seeking elegant minimalism

## Style Guide Sections

This comprehensive style guide is organized into focused sections for easy reference and implementation:

## Coding convention

- All sx and custom styles should be placed at the top using styled from @mui/material to make the render pure. The css should be arranged alphabetically
- Any composition styled components that are complex, consider moving it to src/components/common
- The file's order: imports, constants, interfaces/types, styled components
- Constants should be in uppercase.

### 🔮 [Core Effects](./core-effects.md)

The foundational CSS for the signature "Liquid Glass" containers, including:

- Primary glass container styles
- Backdrop filter configurations
- Border and shadow definitions
- Border radius specifications

### 🎨 [Color Palette](./colors.md)

Complete color system designed to complement the light and airy aesthetic:

- Page background gradients
- Glass transparency values
- Text color hierarchy
- Accent color schemes
- State-based color variations

### ✍️ [Typography](./typography.md)

Modern and clean typography system featuring:

- Primary font family recommendations
- Heading hierarchy and sizing
- Body text specifications
- Line height and spacing guidelines
- Letter spacing for enhanced readability

### 🧩 [UI Components](./components.md)

Detailed implementation guide for common interface elements:

- Cards and containers
- Button variations (primary/secondary)
- Input fields and forms
- Icon style recommendations
- Interactive state definitions

### 💻 [Implementation Examples](./examples.md)

Practical CSS code snippets and complete examples:

- Ready-to-use CSS classes
- Component combinations
- Layout patterns
- Responsive considerations

## Quick Start

For immediate implementation, refer to the [Core Effects](./core-effects.md) section for the fundamental `.liquid-glass` CSS class, then explore the [Color Palette](./colors.md) and [Typography](./typography.md) sections to establish your design foundation.

## Design Philosophy

The Liquid Glass theme prioritizes:

1. **Visual Hierarchy** - Through layered transparency and blur effects
2. **Readability** - With carefully chosen text colors and spacing
3. **Accessibility** - Maintaining sufficient contrast ratios
4. **Performance** - Optimized CSS properties for smooth rendering
5. **Flexibility** - Modular system adaptable to various content types

---

_This style guide serves as a complete reference for implementing the Liquid Glass theme across web applications, ensuring consistency and maintainability while preserving the theme's ethereal aesthetic._
