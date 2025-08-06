# Vercel Landing Page Clone

A pixel-perfect recreation of the Vercel landing page built with React.js, Vite, and Tailwind CSS, featuring shadcn/ui components.

## Features

✨ **Pixel-perfect design** - Meticulously crafted to match the original Vercel landing page
🎨 **Modern UI components** - Built with shadcn/ui design system
⚡ **Lightning fast** - Powered by Vite for instant development
🎯 **Responsive design** - Works perfectly on all devices
🌈 **Beautiful animations** - Smooth transitions and gradient effects
🔧 **TypeScript ready** - Easy to convert to TypeScript if needed

## Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible components
- **Lucide React** - Beautiful & consistent icons
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd vercel-landing-clone
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   └── button.jsx      # Reusable button component
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx           # Hero section with gradient triangle
│   ├── Features.jsx       # Development tools showcase
│   ├── AISection.jsx      # AI Gateway and rollback features
│   ├── ScaleSection.jsx   # Enterprise scaling section
│   └── Footer.jsx         # Footer with links
├── lib/
│   └── utils.js           # Utility functions
├── App.jsx               # Main app component
├── main.jsx             # App entry point
└── index.css           # Global styles and CSS variables
```

## Key Components

### Hero Section
- Animated gradient triangle centerpiece
- Call-to-action buttons
- Responsive typography

### Features Section
- Terminal mockup with syntax highlighting
- Collaborative commenting interface
- Interactive performance charts
- Glass-morphism design elements

### AI Section
- AI model selection interface
- Deployment status tracking
- Instant rollback functionality

### Scale Section
- Enterprise feature highlights
- Security and performance metrics
- Call-to-action sections

## Customization

The project uses CSS custom properties for theming. You can customize colors, spacing, and other design tokens in `src/index.css`.

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... more variables */
}
```

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click!

```bash
# Or use Vercel CLI
npx vercel
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is for educational purposes. Please respect Vercel's branding and trademarks.

## Acknowledgments

- Design inspiration from [Vercel](https://vercel.com)
- Components built with [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
