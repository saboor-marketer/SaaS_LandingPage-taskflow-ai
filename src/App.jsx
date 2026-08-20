import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedCompanies from './components/TrustedCompanies';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProductivityDashboard from './components/ProductivityDashboard';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Features />
      <HowItWorks />
      <ProductivityDashboard />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
