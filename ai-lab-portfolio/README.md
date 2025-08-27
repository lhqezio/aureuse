# My AI Lab Portfolio Website

A modern, responsive portfolio website for an AI research laboratory built with Next.js, Tailwind CSS, Framer Motion, and React Three Fiber.

## ✨ Features

- **🎨 Modern Design**: Dark mode first with neon blue accents and Apple-style elegance
- **🚀 Smooth Animations**: Framer Motion powered animations throughout the site
- **🌊 3D Background**: React Three Fiber animated background with morphing organic shapes
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **⚡ Performance**: Built with Next.js 14 for optimal performance
- **🎯 SEO Ready**: Proper metadata and structured content

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── portfolio/        # Portfolio page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── Navigation.tsx    # Navigation bar
│   ├── HeroSection.tsx   # Hero section with 3D background
│   ├── Footer.tsx        # Footer component
│   └── AnimatedBackground.tsx # 3D animated background
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ai-lab-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.ts`:

```typescript
colors: {
  'neon-blue': '#00d4ff',
  'neon-cyan': '#00ffff',
  'charcoal': '#1a1a1a',
  'dark-charcoal': '#0f0f0f',
}
```

### Content
- Update lab name in `src/components/Navigation.tsx`
- Modify project data in `src/app/portfolio/page.tsx`
- Edit team member information in `src/app/about/page.tsx`
- Update contact details in `src/app/contact/page.tsx`

### 3D Background
Customize the animated background in `src/components/AnimatedBackground.tsx`:
- Adjust shape positions, colors, and animation speeds
- Modify the number of shapes
- Change the camera settings

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy
   - Your site will be live at `https://your-project.vercel.app`

### Other Platforms

The project is production-ready and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any platform that supports Node.js

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Three.js
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Contact us at contact@myailab.com

---

Built with ❤️ by My AI Lab
