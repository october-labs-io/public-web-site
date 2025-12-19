# October Labs Website - AI Coding Agent Instructions

## Project Overview
Marketing website for October Labs, built as a **single-page React application** using Vite, Tailwind CSS v4, and Framer Motion for animations. The site showcases services, technology stack, and contact information with a modern, animated design featuring purple/blue gradients and custom grid backgrounds.

## Architecture & Structure

### Component Organization
- **Single-page layout**: All sections render in [src/App.jsx](src/App.jsx) via composition of section components
- **Section components** ([src/components/](src/components/)): Each major page section is a standalone component (Hero, AboutUs, Technology, Testimonials, Contact, etc.)
- **UI components** ([src/components/ui/](src/components/ui/)): shadcn/ui-style components using Radix UI primitives with CVA variants ([button.jsx](src/components/ui/button.jsx), [toast.jsx](src/components/ui/toast.jsx))
- **Path aliasing**: Use `@/` imports for all internal modules (configured in [vite.config.js](vite.config.js))

### Key Files
- [src/App.jsx](src/App.jsx): Main app entry, orchestrates all sections and scroll state
- [src/lib/utils.js](src/lib/utils.js): Contains `cn()` utility for className merging via clsx + tailwind-merge
- [tailwind.config.js](tailwind.config.js): Extensive custom theme with HSL color variables, custom grid backgrounds (`bg-grid-purple-500/10`)

## Development Patterns

### Styling Conventions
1. **Tailwind-first**: All styling uses Tailwind utility classes, no CSS modules
2. **Custom CSS variables**: Define colors as HSL variables in [src/index.css](src/index.css), reference in tailwind config
3. **Dark theme base**: Background is `bg-gray-900`, text is `text-gray-200/300` by default
4. **Gradient patterns**: Use `bg-gradient-to-r from-blue-400 to-purple-500` for headings/CTAs
5. **Custom grid background**: Apply via `bg-grid-purple-500/10` utility (defined in tailwind config)
6. **Font system**: Poppins for headings (`h1-h6`), Inter for body text (loaded in [src/index.css](src/index.css))

### Component Patterns
1. **UI components** follow shadcn/ui conventions:
   - Use `cn()` to merge className props with base styles
   - Leverage CVA for variant management ([button.jsx](src/components/ui/button.jsx) example)
   - Forward refs with `React.forwardRef`
2. **Section components** structure:
   - Use `<section id="...">` for navigation anchoring
   - Wrap content in `container mx-auto px-4` for responsive padding
   - Apply Framer Motion for scroll/mount animations
3. **Smooth scrolling**: Implement via `scrollIntoView({ behavior: 'smooth' })` (see [Hero.jsx](src/components/Hero.jsx))
4. **Animation patterns**: Use `framer-motion` with `motion.div` + `initial/animate/transition` props

### State Management
- Simple `useState` hooks for local UI state (e.g., scroll position in [App.jsx](App.jsx))
- No global state management library - component props for shared data

## Developer Workflows

### Essential Commands
```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run deploy       # Build and deploy to GitHub Pages
```

### Build & Deploy
- **Vite bundler**: Lightning-fast HMR, builds to `dist/`
- **GitHub Pages**: Deployed via `gh-pages` package (homepage set in [package.json](package.json))
- **Path aliasing**: `@/` resolves to `./src` - no relative imports for src/ files

### ESLint Configuration
- **Flat config** ([eslint.config.js](eslint.config.js)) with recommended React rules
- **Custom rule**: Unused vars allowed if uppercase (component/constant convention)
- Uses `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`

## Key Technologies

### Core Stack
- **React 19** + **Vite 7**: Modern bundling and dev experience
- **Tailwind CSS v4** with `@tailwindcss/vite` plugin (no PostCSS config needed)
- **Framer Motion 12**: Animation library for scroll/mount effects
- **Radix UI**: Accessible component primitives (@radix-ui/react-*)
- **lucide-react**: Icon library (ArrowRight, etc.)

### Tailwind v4 Specifics
- Uses **@tailwindcss/vite plugin** directly in Vite config (no separate PostCSS setup)
- CSS imported via `@import "tailwindcss"` in [src/index.css](src/index.css)
- Theme extends extensively with custom colors, backgrounds, animations

## Common Tasks

### Adding New Sections
1. Create component in [src/components/](src/components/) (e.g., `NewSection.jsx`)
2. Import and add to [src/App.jsx](src/App.jsx) in desired order
3. Add `id="new-section"` for navigation linking
4. Use Framer Motion for animations:
   ```jsx
   <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
   ```

### Adding UI Components
1. Place in [src/components/ui/](src/components/ui/)
2. Follow shadcn/ui pattern: Radix primitive + CVA variants + `cn()` utility
3. Export component and variants function

### Modifying Theme
1. **Colors**: Update HSL variables in [tailwind.config.js](tailwind.config.js) `theme.extend.colors`
2. **Backgrounds**: Custom patterns in `theme.extend.backgroundImage`
3. **Fonts**: Add Google Fonts import in [src/index.css](src/index.css), update layer base

## Project-Specific Notes
- **No TypeScript**: Project uses JavaScript (JSX) only
- **No routing library**: Single page with scroll-to-anchor navigation
- **Asset handling**: Logo imports from `src/assets/` (see [Hero.jsx](src/components/Hero.jsx))
- **React Helmet**: Used for SEO meta tags in [App.jsx](src/App.jsx)
- **Toast notifications**: Pre-configured via shadcn/ui toast system, rendered in App
