import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ChevronDown,
  Code2,
  TrendingUp,
  Database,
  Cpu,
  BarChart3,
  Zap,
  Moon,
  Sun
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'ecosystem', 'about', 'tech', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Automated Options Trading System",
      tech: "Python, REST API, Pandas",
      description: "A robust framework for live automated trading and strategy execution using Kotak Neo & Zerodha APIs.",
      features: ["Real-time order execution", "Multi-broker support", "Risk management"],
      outcome: "Live trading system handling 1000+ orders daily",
      badge: "Live System",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Options Strike Adjustment Logic",
      tech: "Python, NumPy, Statistical Analysis",
      description: "Dynamic algorithm for selecting optimal strike prices in volatile markets.",
      features: ["Volatility-based selection", "Greeks calculation", "Real-time adjustment"],
      outcome: "30% improvement in strike selection accuracy",
      badge: "Research Project",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Data Lake for Tick-by-Tick Market Data",
      tech: "Python, Feather, WebSocket",
      description: "Engineered a high-frequency data infrastructure for millisecond-level analytics.",
      features: ["Tick-level granularity", "Compressed storage", "Fast retrieval"],
      outcome: "Processing 10M+ ticks per day",
      badge: "Data Infrastructure",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "1-Second Backtesting Mechanism",
      tech: "Python, Pandas, NumPy",
      description: "Built a simulation engine that mirrors live trading with second-level precision.",
      features: ["Second-level accuracy", "Slippage modeling", "Commission calculation"],
      outcome: "99.2% correlation with live results",
      badge: "Research Project",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "NIFTY Short-Term Forecasting Model",
      tech: "Python, Statistical Models",
      description: "Statistical and rule-based model predicting short-term market ranges.",
      features: ["Range prediction", "Volatility forecasting", "Support/resistance levels"],
      outcome: "72% directional accuracy",
      badge: "ML-Based",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "NIFTY Live Chart Web App",
      tech: "Flask, React, WebSocket",
      description: "Real-time visualization dashboard showing live streaming NIFTY index data.",
      features: ["Real-time updates", "Interactive charts", "Technical indicators"],
      outcome: "Sub-second latency visualization",
      badge: "Live System",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Scrip Master & Data Sync System",
      tech: "Python, REST API, Automation",
      description: "Automated daily instrument master synchronization for trading APIs.",
      features: ["Daily auto-sync", "Multi-broker support", "Error handling"],
      outcome: "Zero manual intervention required",
      badge: "Automation",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Historical Data Downloader & Feather Viewer",
      tech: "Python, Pandas, Feather",
      description: "Created a high-speed OHLC data ingestion and visualization toolkit.",
      features: ["Fast data loading", "Multiple timeframes", "Export capabilities"],
      outcome: "10x faster than CSV processing",
      badge: "Data Tool",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Machine Learning for Market Prediction",
      tech: "Python, Scikit-learn, TensorFlow",
      description: "Regression & classification models for volatility and trend forecasting.",
      features: ["Feature engineering", "Model ensemble", "Cross-validation"],
      outcome: "68% prediction accuracy",
      badge: "ML-Based",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Mean Reversion Quantitative Model",
      tech: "Python, Statistical Analysis",
      description: "Implemented a deviation-based mean reversion model for range-bound trades.",
      features: ["Z-score calculation", "Entry/exit signals", "Risk management"],
      outcome: "Sharpe ratio of 1.8",
      badge: "Research Project",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Financial Data Analysis Toolkit",
      tech: "Python, Matplotlib, Pandas",
      description: "Custom analytics suite for volatility, deviation, and band visualization.",
      features: ["Custom indicators", "Visualization tools", "Statistical analysis"],
      outcome: "Used across all research projects",
      badge: "Research Tool",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Educational Bootcamp — Python in Finance",
      tech: "Python, Jupyter, Teaching",
      description: "Designed and conducted a hands-on program bridging Python & finance.",
      features: ["Practical exercises", "Real-world examples", "Project-based learning"],
      outcome: "50+ students trained",
      badge: "Education",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "Research Collaboration with Dr. Anup Raj",
      tech: "Derivatives, Volatility Modeling",
      description: "3+ years as research & technical assistant in derivatives modeling & volatility optimization.",
      features: ["Academic research", "Model development", "Technical implementation"],
      outcome: "Multiple research papers published",
      badge: "Research Project",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const techStack = [
    { name: "Python", category: "Language" },
    { name: "Pandas", category: "Data" },
    { name: "NumPy", category: "Data" },
    { name: "Flask", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "Scikit-learn", category: "ML" },
    { name: "Matplotlib", category: "Visualization" },
    { name: "Zerodha API", category: "Trading" },
    { name: "Kotak Neo API", category: "Trading" },
    { name: "WebSocket", category: "Real-time" },
    { name: "Feather", category: "Storage" },
    { name: "JSON", category: "Data" },
  ];

  const ecosystemLayers = [
    {
      name: "Data Layer",
      items: ["Tick Data Lake", "Historical Downloader", "Scrip Master"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Analysis Layer",
      items: ["ML Models", "Statistical Forecasts", "Technical Indicators"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Execution Layer",
      items: ["Automated API Trading", "Order Management", "Risk Controls"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Visualization Layer",
      items: ["Live Chart Dashboard", "Analytics Reports", "Performance Metrics"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Research Layer",
      items: ["Quantitative Modeling", "Academic Collaboration", "Strategy Development"],
      color: "from-red-500 to-rose-500"
    },
    {
      name: "Education Layer",
      items: ["Training Programs", "Documentation", "Knowledge Sharing"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-dark-bg text-white animated-bg grid-pattern">
        
        {/* Floating Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-cyber-blue/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Code2 className="w-6 h-6 text-cyber-blue" />
                <span className="font-mono font-bold text-lg">AG</span>
              </div>
              
              <div className="hidden md:flex space-x-8">
                {['Projects', 'Ecosystem', 'About', 'Tech', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? 'text-cyber-blue'
                        : 'text-gray-300 hover:text-cyber-blue'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-dark-card border border-cyber-blue/20 hover:border-cyber-blue/50 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl top-20 left-10 animate-float"></div>
            <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full text-cyber-blue text-sm font-mono mb-4">
                Quantitative Research Analyst
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              Abhishek Gogna
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Engineering data-driven trading systems and research frameworks powered by{' '}
              <span className="text-cyber-blue font-semibold">Python</span>,{' '}
              <span className="text-cyber-blue font-semibold">machine learning</span>, and{' '}
              <span className="text-cyber-blue font-semibold">market microstructure analytics</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-cyber-blue text-dark-bg font-semibold rounded-lg hover:bg-cyber-blue/90 transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <span>View Projects</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              
              <a
                href="https://www.linkedin.com/in/abhishek-gogna-ba47b3347/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-dark-card border border-cyber-blue/30 font-semibold rounded-lg hover:border-cyber-blue transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            <div className="flex justify-center space-x-6 text-gray-400">
              <a href="https://github.com/pyabhi114" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/abhishek-gogna-ba47b3347/" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:abhishekgogna36@gmail.com" className="hover:text-cyber-blue transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyber-blue" />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Projects Showcase</h2>
              <p className="text-gray-400 text-lg">A comprehensive ecosystem of quantitative trading systems</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-dark-card rounded-xl p-6 glow-border hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-cyber-blue/10 rounded-lg text-cyber-blue">
                      {project.icon}
                    </div>
                    <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded-full font-mono">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-cyber-blue text-sm font-mono mb-3">{project.tech}</p>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start">
                          <span className="text-cyber-blue mr-2">▹</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-xs text-gray-500">Outcome:</p>
                    <p className="text-sm text-cyber-blue font-semibold">{project.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section id="ecosystem" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">System Ecosystem</h2>
              <p className="text-gray-400 text-lg">Layered architecture powering quantitative research</p>
            </div>

            <div className="space-y-6">
              {ecosystemLayers.map((layer, index) => (
                <div
                  key={index}
                  className="bg-dark-card rounded-xl p-6 glow-border"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-2 h-12 rounded-full bg-gradient-to-b ${layer.color} mr-4`}></div>
                    <h3 className="text-2xl font-bold">{layer.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 ml-6">
                    {layer.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-dark-bg border border-cyber-blue/20 rounded-lg text-sm hover:border-cyber-blue/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">About</h2>
            </div>

            <div className="bg-dark-card rounded-xl p-8 glow-border">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With <span className="text-cyber-blue font-semibold">10+ years of experience</span> in quantitative research, 
                algorithmic trading, and data-driven financial analytics, I design systems that transform raw market data 
                into structured intelligence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My work spans <span className="text-cyber-blue font-semibold">data architecture</span>, 
                <span className="text-cyber-blue font-semibold"> strategy backtesting</span>, 
                <span className="text-cyber-blue font-semibold"> API-driven automation</span>, and 
                <span className="text-cyber-blue font-semibold"> predictive modeling</span>. 
                I bridge the gap between theoretical finance and practical implementation, creating robust systems 
                that operate at the intersection of technology and markets.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Tech Stack</h2>
              <p className="text-gray-400 text-lg">Tools and technologies powering the ecosystem</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-dark-card rounded-lg px-6 py-4 glow-border hover:scale-110 transition-all"
                >
                  <p className="font-mono font-semibold text-cyber-blue">{tech.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 glow-text">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:abhishekgogna36@gmail.com"
                className="bg-dark-card rounded-xl p-6 glow-border hover:scale-105 transition-all flex flex-col items-center"
              >
                <Mail className="w-8 h-8 text-cyber-blue mb-3" />
                <p className="text-sm text-gray-400 mb-2">Email</p>
                <p className="text-sm font-mono">abhishekgogna36@gmail.com</p>
              </a>

              <a
                href="https://www.linkedin.com/in/abhishek-gogna-ba47b3347/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-card rounded-xl p-6 glow-border hover:scale-105 transition-all flex flex-col items-center"
              >
                <Linkedin className="w-8 h-8 text-cyber-blue mb-3" />
                <p className="text-sm text-gray-400 mb-2">LinkedIn</p>
                <p className="text-sm font-mono">Connect with me</p>
              </a>

              <a
                href="https://github.com/pyabhi114"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-card rounded-xl p-6 glow-border hover:scale-105 transition-all flex flex-col items-center"
              >
                <Github className="w-8 h-8 text-cyber-blue mb-3" />
                <p className="text-sm text-gray-400 mb-2">GitHub</p>
                <p className="text-sm font-mono">@pyabhi114</p>
              </a>
            </div>

            <a 
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download="Abhishek_Gogna_Resume.pdf"
              className="px-8 py-3 bg-cyber-blue text-dark-bg font-semibold rounded-lg hover:bg-cyber-blue/90 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-cyber-blue/20">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 mb-4">
              © 2025 Abhishek Gogna — Quantitative Research & Algo Systems
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/abhishek-gogna-ba47b3347/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/pyabhi114" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:abhishekgogna36@gmail.com" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
