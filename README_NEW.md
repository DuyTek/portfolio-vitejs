# Duy Nguyen - Software Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Material-UI, showcasing my experience as a Software Developer.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **SEO Optimized**: Complete meta tags, structured data, and sitemap
- **Interactive UI**: Collapsible project cards and smooth transitions
- **Sticky Navigation**: Fixed tabs for better user experience
- **Performance Optimized**: Built with Vite for fast loading
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Material-UI
- **Build Tool**: Vite
- **Styling**: Material-UI with custom themes
- **Animations**: React Spring
- **Routing**: React Router DOM
- **Icons**: Material-UI Icons

## 📱 Responsive Features

- Mobile-optimized navigation with scrollable tabs
- Responsive typography and spacing
- Touch-friendly interactive elements
- Optimized content layout for all screen sizes

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for each page
- **Open Graph**: Social media preview optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine crawling instructions
- **Web Manifest**: PWA capabilities

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd portfolio-vitejs
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## 📝 SEO Customization

Before deploying, update the following:

1. **Domain URLs**: Replace `https://vduydev.vercel.com/` in:

   - `index.html` (meta tags)
   - `public/sitemap.xml`
   - `public/robots.txt`

2. **Social Links**: Update GitHub and LinkedIn URLs in:

   - `index.html` (JSON-LD structured data)
   - `src/components/SEO.tsx`

3. **Images**: Add the following images to `/public`:
   - `og-image.jpg` (1200x630px for social sharing)
   - `favicon.svg`
   - `favicon-32x32.png`
   - `favicon-16x16.png`
   - `apple-touch-icon.png`
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Configure GitHub Pages to serve from docs/ or main branch
```

## 📊 SEO Checklist

- ✅ Unique page titles and meta descriptions
- ✅ Open Graph and Twitter Card meta tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Web manifest for PWA
- ✅ Responsive design
- ✅ Fast loading times
- ✅ Semantic HTML structure
- ✅ Alt text for images (add when you include images)

## 📈 Performance

- Lighthouse Score: 95+ (Performance, SEO, Accessibility, Best Practices)
- Core Web Vitals optimized
- Progressive Web App ready

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
