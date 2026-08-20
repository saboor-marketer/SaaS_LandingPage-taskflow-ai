# TaskFlow AI - SaaS Landing Page

A modern, responsive landing page for TaskFlow AI - an AI-powered task and productivity management platform. Built with ReactJS and Vite.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on mobile (320px+), tablet, laptop, and desktop devices
- **Modern UI/UX**: Clean, minimal design with soft gradients, rounded cards, and smooth transitions
- **Interactive Components**:
  - Sticky navigation with smooth scrolling
  - Mobile hamburger menu
  - Monthly/yearly pricing toggle
  - FAQ accordion
  - Hover animations and effects
- **Dashboard Mockups**: CSS-built dashboard interfaces showing task management and productivity statistics
- **Dynamic Rendering**: Content-driven components using React state and `.map()` for scalable data management
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support

## 🛠️ Technologies Used

- **ReactJS**: ^18.3.1
- **Vite**: ^5.4.8
- **React Icons**: ^5.3.0
- **CSS3**: Custom CSS with CSS variables and modern features
- **JavaScript ES6+**: Modern JavaScript syntax

## 📋 Project Structure

```
taskflow-ai/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation bar with mobile menu
│   │   ├── Hero.jsx         # Hero section with dashboard mockup
│   │   ├── TrustedCompanies.jsx # Company logos section
│   │   ├── Features.jsx     # Features section
│   │   ├── FeatureCard.jsx  # Individual feature card
│   │   ├── HowItWorks.jsx   # How it works section
│   │   ├── Pricing.jsx      # Pricing section with toggle
│   │   ├── PricingCard.jsx  # Individual pricing card
│   │   ├── Testimonials.jsx # Testimonials section
│   │   ├── TestimonialCard.jsx # Individual testimonial card
│   │   ├── FAQ.jsx          # FAQ section with accordion
│   │   ├── CTA.jsx          # Call-to-action section
│   │   └── Footer.jsx       # Footer component
│   ├── data/                # Static data files
│   │   ├── features.js      # Features data
│   │   ├── pricing.js       # Pricing plans data
│   │   ├── testimonials.js  # Testimonials data
│   │   └── faq.js           # FAQ data
│   ├── App.jsx              # Main app component
│   ├── App.css              # Component styles
│   ├── index.css            # Global styles and CSS reset
│   └── main.jsx             # React entry point
├── index.html               # HTML template
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 📦 Installation

1. **Clone or download the project**
   ```bash
   cd taskflow-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🎯 Usage

### Development Mode

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Production Build

Create an optimized production build:
```bash
npm run build
```

The build files will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 🎨 Design Features

### Color Palette
- **Primary**: Purple/Blue gradient (#6366f1 to #8b5cf6 to #06b6d4)
- **Backgrounds**: White, light gray (#f8fafc), deep navy (#0f172a)
- **Text**: Primary (#1e293b), secondary (#64748b), light (#94a3b8)

### CSS Architecture
- **CSS Variables**: Centralized design tokens for consistency
- **Responsive Design**: Mobile-first approach with media queries
- **Component-based CSS**: Organized by component and section
- **Animations**: Smooth transitions and hover effects

## 🔧 Functional Components

### Navigation
- Sticky navbar with smooth scrolling
- Mobile hamburger menu with state management
- Links close mobile menu after clicking

### Pricing Toggle
- Monthly/yearly pricing switch
- Dynamic price updates with state management
- Visual feedback for active selection

### FAQ Accordion
- Single-item expansion (only one FAQ open at a time)
- Smooth CSS transitions
- Keyboard accessible

### Dynamic Data Rendering
- Features, pricing, testimonials, and FAQ rendered from data files
- Easy to update and maintain content
- Scalable for additional items

## 🚀 Deployment

The production build in the `dist/` folder can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your repository or deploy the `dist/` folder
- **GitHub Pages**: Use the `dist/` folder as the publishing source
- **AWS S3**: Upload the `dist/` folder contents to an S3 bucket

## 📝 Customization

### Updating Content
Edit the data files in `src/data/`:
- `features.js` - Update feature cards
- `pricing.js` - Modify pricing plans
- `testimonials.js` - Add/change testimonials
- `faq.js` - Update FAQ items

### Styling
- Global styles: `src/index.css`
- Component styles: `src/App.css`
- CSS variables are defined in `src/index.css` for easy theming

### Colors
Modify CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... other variables */
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is created for demonstration purposes.

## 👤 Author

- *ABDUL SABOOR*

---

**Note**: This is a frontend-only landing page. No backend services are required for deployment.

## MADE WITH 💖

---
