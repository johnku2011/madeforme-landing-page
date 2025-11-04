# Made4Me - AI Molecular Beauty Lab Landing Page

A modern, responsive landing page for Made4Me, an AI-driven molecular beauty lab specializing in bespoke cosmetics for East Asian skin.

## 🚀 Features

- **Modern Design**: Clean, professional design with brand colors and typography
- **Responsive**: Mobile-first approach, works perfectly on all devices
- **Smooth Animations**: Scroll-triggered animations and interactive hover effects
- **SEO Optimized**: Proper metadata, semantic HTML, and accessibility features
- **Performance**: Built with Next.js 16 and optimized for fast loading

## 🎨 Design System

### Brand Colors
- **Primary Brown**: `#6B5B4F` - Headings, buttons, accents
- **Secondary Beige**: `#F5F0E9` - Backgrounds, cards
- **Accent Orange**: `#D98C5A` - CTAs, highlights
- **Text Dark**: `#3C2F2F` - Body text
- **Text Light**: `#FFFFFF` - Text on dark backgrounds

### Typography
- **Headings**: Playfair Display (Serif) - Bold/Italic
- **Body**: Inter (Sans-serif) - Regular/Medium
- **Script**: Brush Script MT - Logo and taglines

## 📋 Sections

1. **Header/Navigation** - Sticky navigation with smooth scroll
2. **Hero Section** - Full-width hero with CTAs
3. **Problem Statement** - Founder story and brand mission
4. **Innovation Gap** - Three key problems in the market
5. **Vision Statement** - Company vision and goals
6. **Market Opportunity** - Industry stats and market size
7. **Technology** - AI-driven process explanation
8. **R&D Process** - 5-step development timeline
9. **Breakthrough Product** - Hawthorn Whitening Collection showcase
10. **Business Model** - B2B focus with revenue streams
11. **Roadmap** - 3-year development plan
12. **Team** - Founders and technical advisors
13. **Contact** - Contact form with CTA
14. **Footer** - Social links and copyright

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: Custom CSS + Framer Motion ready
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The development server will start at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
madeforme-landing-page/
├── app/
│   ├── components/
│   │   └── ScrollReveal.tsx    # Scroll animation component
│   ├── favicon.ico
│   ├── globals.css             # Global styles and animations
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main landing page
├── public/                     # Static assets
├── requirement/                # Project requirements
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Key Features Implemented

### Animations
- Scroll progress indicator at top
- Fade-in-up animations on scroll
- Staggered card reveals
- Smooth hover effects on cards
- Animated CTAs and buttons

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Flexible grid layouts
- Touch-friendly buttons

### Accessibility
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Proper heading hierarchy
- Alt text ready for images

### Performance
- Static site generation (SSG)
- Optimized images (ready for Image component)
- Minimal JavaScript bundle
- CSS optimization

## 📝 Customization

### Adding Images

Replace placeholder backgrounds and images in the `public/` folder and update references in `page.tsx`:

- Hero background: `/hero-bg.jpg`
- Founder photos: `/eunice.jpg`, `/john.jpg`
- Product images: `/hawthorn-product.jpg`
- Team photos: Update team section

### Updating Content

All content is in `app/page.tsx`. Update text, stats, and information directly in the component.

### Styling

- Brand colors: Edit CSS variables in `app/globals.css`
- Typography: Update font imports in `app/globals.css`
- Component styles: Use Tailwind classes in `app/page.tsx`

## 🔧 Configuration

### SEO

Update metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // ... more options
};
```

### Contact Form

The contact form currently logs to console. To connect to a backend:

1. Update the `handleSubmit` function in `app/page.tsx`
2. Add API endpoint or integrate with service like:
   - Formspree
   - SendGrid
   - Netlify Forms
   - Custom API route

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting

## 📄 License

Copyright © 2025 Made4Me AI Molecular Beauty Lab. All Rights Reserved.

## 🤝 Contributing

This is a private project. For questions or suggestions. Submit Pull Requests.

## 📞 Contact

- **Location**: Macao SAR
- **Website**: [Your Domain]

---

Built with ❤️ using Next.js and Tailwind CSS
