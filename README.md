# Abhishek Gogna - Portfolio Website

A modern, elegant portfolio website showcasing quantitative research and algorithmic trading projects.

## 🚀 Features

- **Modern Design**: Dark theme with cyber-blue accents and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and dynamic navigation
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- React 18
- Tailwind CSS
- Lucide React (Icons)
- GitHub Pages (Deployment)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/pyabhi114/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:
```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio"
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will build the app and push it to the `gh-pages` branch.

3. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)
   - Save

Your site will be live at `https://YOUR_USERNAME.github.io/portfolio`

## 📝 Customization

### Update Personal Information

Edit `src/App.js` to update:
- Projects list
- Tech stack
- Contact information
- Social media links

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  'cyber-blue': '#00f0ff',  // Change this
  'cyber-gold': '#ffd700',  // Or this
  'dark-bg': '#0a0e27',     // Background color
  'dark-card': '#151b3d',   // Card background
}
```

### Add Resume Download

Place your resume PDF in the `public` folder and update the download button link in `src/App.js`:
```javascript
<a href="/portfolio/resume.pdf" download>
  <Download className="w-5 h-5" />
  <span>Download Resume</span>
</a>
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Abhishek Gogna**
- LinkedIn: [abhishek-gogna](https://www.linkedin.com/in/abhishek-gogna-ba47b3347/)
- GitHub: [@pyabhi114](https://github.com/pyabhi114)
- Email: abhishekgogna36@gmail.com

---

© 2025 Abhishek Gogna — Quantitative Research & Algo Systems
