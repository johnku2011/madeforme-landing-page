'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Menu, X, ChevronDown, Sparkles, FlaskConical, Leaf, 
  TrendingUp, Target, Users, Mail, Linkedin, Instagram,
  ArrowRight, CheckCircle2, Beaker, Brain, Microscope,
  Globe, Award, BookOpen
} from 'lucide-react';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Stay tuned! We will be launching soon.');
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const handlePartnerClick = () => {
    alert('Stay tuned! We will be launching our partnership program soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-[#6B5B4F] via-[#D98C5A] to-[#6B5B4F] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-script text-[#6B5B4F]">Made4Me</h1>
              <p className="text-[10px] tracking-widest text-[#6B5B4F]">AI MOLECULAR BEAUTY LAB</p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-[#3C2F2F] hover:text-[#D98C5A] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('technology')} className="text-[#3C2F2F] hover:text-[#D98C5A] transition-colors">
                Technology
              </button>
              <button onClick={() => scrollToSection('product')} className="text-[#3C2F2F] hover:text-[#D98C5A] transition-colors">
                Product
              </button>
              <button onClick={() => scrollToSection('business')} className="text-[#3C2F2F] hover:text-[#D98C5A] transition-colors">
                Business
              </button>
              <button onClick={() => scrollToSection('team')} className="text-[#3C2F2F] hover:text-[#D98C5A] transition-colors">
                Team
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#3C2F2F] hover:text-[#D98C5A] transition-colors">
                Contact
              </button>
              <button 
                onClick={handlePartnerClick}
                className="bg-[#D98C5A] text-white px-6 py-2.5 rounded-full hover:bg-[#C47A48] transition-colors font-medium"
              >
                Partner with Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#6B5B4F]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('hero')} className="text-[#3C2F2F] hover:text-[#D98C5A] text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('technology')} className="text-[#3C2F2F] hover:text-[#D98C5A] text-left">
                  Technology
                </button>
                <button onClick={() => scrollToSection('product')} className="text-[#3C2F2F] hover:text-[#D98C5A] text-left">
                  Product
                </button>
                <button onClick={() => scrollToSection('business')} className="text-[#3C2F2F] hover:text-[#D98C5A] text-left">
                  Business
                </button>
                <button onClick={() => scrollToSection('team')} className="text-[#3C2F2F] hover:text-[#D98C5A] text-left">
                  Team
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-[#3C2F2F] hover:text-[#D98C5A] text-left">
                  Contact
                </button>
                <button 
                  onClick={handlePartnerClick}
                  className="bg-[#D98C5A] text-white px-6 py-2.5 rounded-full hover:bg-[#C47A48] transition-colors font-medium text-left"
                >
                  Partner with Us
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5F0E9] to-white">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#6B5B4F] mb-6 leading-tight">
              AI MOLECULAR<br />BEAUTY LAB
            </h1>
            <p className="text-xl sm:text-2xl text-[#3C2F2F] mb-4 font-light">
              Redefining sustainable cosmetics with AI-driven molecular skin science
            </p>
            <p className="text-lg sm:text-xl text-[#6B5B4F] mb-3">
              One-Stop Experts in Cosmetics Design & R&D
            </p>
            <p className="text-lg sm:text-xl text-[#6B5B4F] mb-12">
              Science × Wellness
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={() => scrollToSection('technology')}
                className="bg-[#6B5B4F] text-white px-8 py-4 rounded-full hover:bg-[#5A4A3F] transition-colors font-medium text-lg flex items-center gap-2"
              >
                Explore Our Tech
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={handlePartnerClick}
                className="bg-white text-[#6B5B4F] border-2 border-[#6B5B4F] px-8 py-4 rounded-full hover:bg-[#F5F0E9] transition-colors font-medium text-lg"
              >
                Contact for Licensing
              </button>
            </div>

            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-script text-[#6B5B4F] mb-2">Made4Me</h2>
              <p className="text-sm tracking-widest text-[#6B5B4F]">AI MOLECULAR BEAUTY LAB</p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-[#6B5B4F]" />
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#6B5B4F] text-center mb-16">
              A Vision to Redefine Beauty
            </h2>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="bg-[#F5F0E9] rounded-2xl p-8 overflow-hidden">
                <div className="text-center">
                  <div className="relative w-full max-w-md mx-auto aspect-[3/4] mb-4">
                    <Image
                      src="/founder-eunice2.png"
                      alt="Eunice Wai, Founder of Made4Me"
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                  </div>
                  <p className="text-[#3C2F2F] italic">Eunice Wai (21 years old), Founder</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold text-[#6B5B4F]">
                Made4Me: Born From Personal Struggle, But I Am Not Alone.
              </h3>
              <p className="text-lg text-[#3C2F2F]">
                Appearance anxiety, acne, and eczema—a struggle for millions of East Asian consumers who are consistently failed by generic global beauty products.
              </p>
              <h3 className="text-2xl font-bold text-[#6B5B4F]">
                We Are Here To Fill The Void.
              </h3>
              <p className="text-lg text-[#3C2F2F]">
                We are leveraging AI-driven precision science to create the first bespoke line of cosmetics built specifically for Chinese skin.
              </p>
              <h3 className="text-2xl font-bold text-[#6B5B4F]">
                Driving The Wellness Era, Self Care
              </h3>
              <p className="text-lg text-[#3C2F2F]">
                We're not just selling beauty; we're restoring confidence and driving a movement.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-[#F5F0E9] rounded-xl">
              <div className="text-4xl font-bold text-[#D98C5A] mb-2">65.5%</div>
              <p className="text-[#3C2F2F]">HK/MO adults have fragile skin</p>
            </div>
            <div className="text-center p-6 bg-[#F5F0E9] rounded-xl">
              <div className="text-4xl font-bold text-[#D98C5A] mb-2">76%</div>
              <p className="text-[#3C2F2F]">Chinese consumers want natural ingredients</p>
            </div>
            <div className="text-center p-6 bg-[#F5F0E9] rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp size={40} className="text-[#D98C5A]" />
              </div>
              <p className="text-[#3C2F2F]">TCM + Guochao trend rising</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Gap */}
      <section id="innovation" className="py-20 bg-[#F5F0E9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B5B4F] text-center mb-16">
            The Innovation Gap in Cosmetic Ingredient R&D
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-[#D98C5A] rounded-full flex items-center justify-center mb-6">
                  <Sparkles size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#6B5B4F] mb-4">
                  Wrong Products Cause Irritation
                </h3>
                <p className="text-[#3C2F2F]">
                  65.5% fragile skin → eczema in humid climates
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-[#D98C5A] rounded-full flex items-center justify-center mb-6">
                  <FlaskConical size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#6B5B4F] mb-4">
                  Health Concerns
                </h3>
                <p className="text-[#3C2F2F]">
                  Conventional cosmetics → neurological & hormonal risks
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-[#D98C5A] rounded-full flex items-center justify-center mb-6">
                  <Leaf size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#6B5B4F] mb-4">
                  Rise of Clean Beauty
                </h3>
                <p className="text-[#3C2F2F]">
                  76% seek natural ingredients · TCM + Guochao trend
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section id="vision" className="py-20 bg-gradient-to-b from-white to-[#F5F0E9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B5B4F] mb-6">
            A Beauty Lab Made 4 Me
          </h2>
          <p className="text-xl text-[#D98C5A] mb-8 italic">
            By revolutionizing active ingredient R&D in cosmetics through AI
          </p>
          <p className="text-lg text-[#3C2F2F] max-w-3xl mx-auto leading-relaxed">
            Our vision is to redefine cosmetics for East Asian skin by combining AI-driven personalization with sustainable, ESG-friendly formulations.
          </p>
        </div>
      </section>

      {/* Market Opportunity */}
      <section id="market" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B5B4F] text-center mb-16">
            Industry Trend & Active Ingredients Market Overview
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center p-8 bg-[#F5F0E9] rounded-xl">
              <Globe size={48} className="text-[#D98C5A] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#6B5B4F] mb-2">USD 5.5B</div>
              <p className="text-[#3C2F2F]">Global market by 2030</p>
            </div>
            <div className="text-center p-8 bg-[#F5F0E9] rounded-xl">
              <Target size={48} className="text-[#D98C5A] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#6B5B4F] mb-2">USD 650M</div>
              <p className="text-[#3C2F2F]">China market by 2030<br />(CAGR 7.2%)</p>
            </div>
            <div className="text-center p-8 bg-[#F5F0E9] rounded-xl">
              <TrendingUp size={48} className="text-[#D98C5A] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#6B5B4F] mb-2">USD 3.25M</div>
              <p className="text-[#3C2F2F]">SOM target<br />(0.5% of China SAM)</p>
            </div>
          </div>

          <p className="text-center text-lg text-[#3C2F2F] italic max-w-3xl mx-auto">
            The pursuit of product ingredients and effectiveness is the long-term driving force — natural, organic, plant-based.
          </p>
        </div>
      </section>

      {/* How It Works - AI Process */}
      <section id="technology" className="py-20 bg-[#F5F0E9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B5B4F] text-center mb-6">
            Made4Me: AI-driven Molecular Beauty Lab
          </h2>
          <p className="text-xl text-center text-[#3C2F2F] mb-16">
            For Active Ingredient Discovery
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-[#6B5B4F] rounded-full flex items-center justify-center mb-6">
                  <Brain size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#6B5B4F] mb-4">
                  Biological Mechanisms
                </h3>
                <ul className="space-y-2 text-[#3C2F2F]">
                  <li>• Investigate mechanisms</li>
                  <li>• Knowledge graphs (LLMs)</li>
                  <li>• Reverse-target analysis</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-[#6B5B4F] rounded-full flex items-center justify-center mb-6">
                  <Leaf size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#6B5B4F] mb-4">
                  Raw Material Discovery
                </h3>
                <ul className="space-y-2 text-[#3C2F2F]">
                  <li>• Screen 1000s TCM herbs</li>
                  <li>• AI ML models</li>
                  <li>• MPU validation</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-[#6B5B4F] rounded-full flex items-center justify-center mb-6">
                  <Beaker size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#6B5B4F] mb-4">
                  Active Ingredients Formulations
                </h3>
                <ul className="space-y-2 text-[#3C2F2F]">
                  <li>• OEM formulation (Macao/China)</li>
                  <li>• Commercialize: products, licensing, patents</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="bg-white rounded-xl p-6 max-w-3xl mx-auto text-center shadow-lg border-2 border-[#D98C5A]">
            <p className="text-[#3C2F2F]">
              In Collaboration with <span className="font-bold text-[#6B5B4F]">Macau Polytechnic University AI Drug Discovery Centre</span>
            </p>
          </div>
        </div>
      </section>

      {/* R&D Process / Technology */}
      <section id="rd-process" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B5B4F] text-center mb-16">
            R&D Process / Technology
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4 mb-12">
              {[
                { num: '1', title: 'Target Protein Confirmation', desc: 'e.g., Propionibacterium acnes' },
                { num: '2', title: 'AI Model Construction', desc: 'Machine learning algorithms' },
                { num: '3', title: 'Compound Screening', desc: 'Molecular docking & dynamics' },
                { num: '4', title: 'Experimental Validation', desc: 'Lab & in-vitro testing' },
                { num: '5', title: 'Formulation & Testing', desc: 'Product development' }
              ].map((step) => (
                <div key={step.num} className="relative">
                  <div className="bg-[#F5F0E9] rounded-xl p-6 text-center h-full">
                    <div className="w-12 h-12 bg-[#D98C5A] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      {step.num}
                    </div>
                    <h3 className="font-bold text-[#6B5B4F] mb-2 text-sm">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#3C2F2F]">{step.desc}</p>
                  </div>
                  {step.num !== '5' && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <ArrowRight className="text-[#D98C5A]" size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-[#D98C5A] text-white rounded-xl p-6 text-center">
                <CheckCircle2 size={40} className="mx-auto mb-3" />
                <p className="font-bold text-lg">Shorten R&D cycle by 60–70%</p>
              </div>
              <div className="bg-[#6B5B4F] text-white rounded-xl p-6 text-center">
                <Award size={40} className="mx-auto mb-3" />
                <p className="font-bold text-lg">Build Macao-based IP portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakthrough Product */}
      <section id="product" className="py-20 bg-gradient-to-b from-[#F5F0E9] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B5B4F] text-center mb-6">
            Breakthrough Result
          </h2>
          <p className="text-2xl text-[#D98C5A] text-center mb-16 italic">
            The Hawthorn Whitening Collection
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="bg-[#F5F0E9] rounded-2xl p-8 overflow-hidden">
              <div className="relative w-full aspect-square">
                <Image
                  src="/product-demo.png"
                  alt="Hawthorn Whitening Collection Products"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#6B5B4F] mb-2">Ingredient:</h3>
                <p className="text-lg text-[#3C2F2F]">
                  Shan Zha (山楂) + low-concentration Niacinamide
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#6B5B4F] mb-2">Benefits:</h3>
                <p className="text-lg text-[#3C2F2F]">
                  Improves dullness, evens skin tone, brightens radiance
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <span className="bg-[#6B5B4F] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Clean
                </span>
                <span className="bg-[#6B5B4F] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Sustainable
                </span>
                <span className="bg-[#6B5B4F] text-white px-4 py-2 rounded-full text-sm font-medium">
                  TCM-Powered
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section id="business" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B5B4F] text-center mb-16">
            B2B Business Model
          </h2>
          <p className="text-xl text-center text-[#3C2F2F] mb-12">
            Active Ingredient & Technology Output
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
            <div className="bg-[#F5F0E9] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#6B5B4F] mb-6">Target Customers</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#3C2F2F] mb-2">Formulation Scientists</h4>
                  <p className="text-[#3C2F2F]">• Optimize formulations</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#3C2F2F] mb-2">BD Specialists in Cosmetics</h4>
                  <p className="text-[#3C2F2F]">• Product dev teams</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#3C2F2F] mb-2">SME Cosmetics Brands</h4>
                  <p className="text-[#3C2F2F]">• Niche, high-quality focus</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F0E9] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#6B5B4F] mb-6">Revenue Streams</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl font-bold text-[#D98C5A] mb-2">01</div>
                  <h4 className="font-bold text-[#3C2F2F]">
                    Formulation / Patent / Testing Licensing
                  </h4>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl font-bold text-[#D98C5A] mb-2">02</div>
                  <h4 className="font-bold text-[#3C2F2F]">
                    Customized R&D Services
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#6B5B4F] to-[#D98C5A] text-white rounded-xl p-8 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Long Term Vision</h3>
            <p className="text-lg">
              Launch <span className="font-bold">B2C skincare brand</span> powered by proprietary actives
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 bg-[#F5F0E9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B5B4F] text-center mb-16">
            Development Roadmap
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg relative">
                <div className="absolute -top-4 left-8 bg-[#D98C5A] text-white px-6 py-2 rounded-full font-bold">
                  Year 1
                </div>
                <h3 className="text-2xl font-bold text-[#6B5B4F] mb-6 mt-4">Foundation</h3>
                <ul className="space-y-3 text-[#3C2F2F]">
                  <li>• Build partnerships</li>
                  <li>• File 2–3 patents</li>
                  <li>• Establish R&D setup</li>
                  <li>• Initial product development</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg relative">
                <div className="absolute -top-4 left-8 bg-[#D98C5A] text-white px-6 py-2 rounded-full font-bold">
                  Year 2
                </div>
                <h3 className="text-2xl font-bold text-[#6B5B4F] mb-6 mt-4">Expansion</h3>
                <ul className="space-y-3 text-[#3C2F2F]">
                  <li>• Scale licensing deals</li>
                  <li>• Brand collaborations</li>
                  <li>• Expand product line</li>
                  <li>• Market validation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg relative">
                <div className="absolute -top-4 left-8 bg-[#D98C5A] text-white px-6 py-2 rounded-full font-bold">
                  Year 3
                </div>
                <h3 className="text-2xl font-bold text-[#6B5B4F] mb-6 mt-4">Diversification</h3>
                <ul className="space-y-3 text-[#3C2F2F]">
                  <li>• Launch B2C brand</li>
                  <li>• Asia market leadership</li>
                  <li>• International expansion</li>
                  <li>• Strategic acquisitions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Advisors */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B5B4F] text-center mb-16">
            Our Team
          </h2>
          
          {/* Founders */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#6B5B4F] text-center mb-8">Founders</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#F5F0E9] rounded-xl p-8 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/founder-eunice.jpg"
                    alt="Eunice Wai"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#6B5B4F] mb-2">Eunice Wai</h4>
                <p className="text-[#D98C5A] font-medium mb-4">Founder, Team Leader</p>
                <p className="text-[#3C2F2F]">
                  CUHK Global Business<br />
                  Dean's List<br />
                  Multiple case competition champion
                </p>
              </div>

              <div className="bg-[#F5F0E9] rounded-xl p-8 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/founder-jk.JPG"
                    alt="John Ku"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#6B5B4F] mb-2">John Ku</h4>
                <p className="text-[#D98C5A] font-medium mb-4">Member</p>
                <p className="text-[#3C2F2F]">
                  MSc Computer Science (HKU)<br />
                  AI & data expert<br />
                  12+ years AI/data experience, 6+ years development experience
                </p>
              </div>
            </div>
          </div>

          {/* Technical Advisors */}
          <div>
            <h3 className="text-2xl font-bold text-[#6B5B4F] text-center mb-8">Technical Advisors</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-[#F5F0E9] rounded-xl p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden">
                  <Image
                    src="/Kang Wen Qing Qing.png"
                    alt="Kang Wen Qing Qing"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-[#6B5B4F] mb-2">Kang Wen Qing Qing</h4>
                <p className="text-sm text-[#3C2F2F]">PhD Candidate<br />AI Drug Discovery</p>
              </div>

              <div className="bg-[#F5F0E9] rounded-xl p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden">
                  <Image
                    src="/Li Shu.png"
                    alt="Li Shu"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-[#6B5B4F] mb-2">Li Shu</h4>
                <p className="text-sm text-[#3C2F2F]">Ph.D. Computational Biology<br />Peking University</p>
              </div>

              <div className="bg-[#F5F0E9] rounded-xl p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden">
            <Image
                    src="/henry.jpg"
                    alt="Henry Tong"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-[#6B5B4F] mb-2">Henry Tong</h4>
                <p className="text-sm text-[#3C2F2F]">Professor<br />Pharmaceutical Formulation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 bg-gradient-to-b from-[#F5F0E9] to-[#E5DDD0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B5B4F] text-center mb-6">
            Ready to Redefine Beauty with AI?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center p-6">
              <h3 className="font-bold text-[#6B5B4F] mb-2">For Brands</h3>
              <p className="text-[#3C2F2F]">License our AI-discovered actives</p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-bold text-[#6B5B4F] mb-2">For Partners</h3>
              <p className="text-[#3C2F2F]">Custom R&D collaboration</p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-bold text-[#6B5B4F] mb-2">For Investors</h3>
              <p className="text-[#3C2F2F]">Join the wellness revolution</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#6B5B4F] font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D98C5A] focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-[#6B5B4F] font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D98C5A] focus:border-transparent outline-none"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#6B5B4F] font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D98C5A] focus:border-transparent outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#6B5B4F] font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D98C5A] focus:border-transparent outline-none resize-none"
                  placeholder="Tell us about your interest..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D98C5A] text-white py-4 rounded-full hover:bg-[#C47A48] transition-colors font-bold text-lg"
              >
                Get in Touch
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center space-y-3">
              <p className="text-[#3C2F2F]">
                <span className="text-[#D98C5A]">📍</span> Macao SAR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6B5B4F] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-script mb-2">Made4Me</h2>
            <p className="text-sm tracking-widest">AI MOLECULAR BEAUTY LAB</p>
          </div>

          <div className="text-center text-sm space-y-2">
            <p>© 2025 AI Molecular Beauty Lab | All Rights Reserved</p>
            <div className="flex justify-center gap-4">
              <a href="/privacy" className="hover:text-[#D98C5A] transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/terms" className="hover:text-[#D98C5A] transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
