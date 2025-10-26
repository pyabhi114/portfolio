# 🚀 Deployment Guide for GitHub Pages

Follow these steps to deploy your portfolio website to GitHub Pages.

## Prerequisites

- Node.js and npm installed
- Git installed
- GitHub account
- Repository created on GitHub

## Step-by-Step Deployment

### 1. Initialize Git Repository (if not already done)

```bash
cd c:/Users/abhis/OneDrive/Desktop/git/projects/portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon → "New repository"
3. Name it `portfolio` (or any name you prefer)
4. **Do NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### 3. Link Local Repository to GitHub

```bash
git remote add origin https://github.com/pyabhi114/portfolio.git
git branch -M main
git push -u origin main
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your React app
- Create a `gh-pages` branch
- Push the build folder to that branch

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Source":
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
4. Click **Save**

### 7. Access Your Website

Your website will be live at:
```
https://pyabhi114.github.io/portfolio
```

⏱️ It may take 2-5 minutes for the site to go live after the first deployment.

## 🔄 Updating Your Website

Whenever you make changes:

```bash
# 1. Make your changes in the code
# 2. Commit changes
git add .
git commit -m "Update: description of changes"
git push origin main

# 3. Deploy updated version
npm run deploy
```

## 🛠️ Troubleshooting

### Issue: Blank page after deployment

**Solution**: Check that the `homepage` field in `package.json` matches your GitHub Pages URL:
```json
"homepage": "https://pyabhi114.github.io/portfolio"
```

### Issue: 404 errors for routes

**Solution**: GitHub Pages doesn't support client-side routing by default. This portfolio uses hash routing which works fine.

### Issue: CSS not loading

**Solution**: Make sure all paths are relative. The build process should handle this automatically.

### Issue: Images not showing

**Solution**: Place images in the `public` folder and reference them as:
```javascript
<img src="/portfolio/image.png" alt="description" />
```

## 📱 Testing Locally Before Deployment

```bash
# Build the production version
npm run build

# Test the build locally (install serve if needed)
npx serve -s build
```

## 🎨 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain:
```
yourdomain.com
```

2. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing to `pyabhi114.github.io`

3. In GitHub Settings → Pages, enter your custom domain

## 📊 Analytics (Optional)

Add Google Analytics by:

1. Get your tracking ID from Google Analytics
2. Add to `public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## ✅ Deployment Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to main branch
- [ ] Dependencies installed (`npm install`)
- [ ] `homepage` field in package.json is correct
- [ ] Deployed using `npm run deploy`
- [ ] GitHub Pages enabled in repository settings
- [ ] Website accessible at GitHub Pages URL
- [ ] All links working correctly
- [ ] Responsive design tested on mobile
- [ ] Resume PDF added (if applicable)

## 🎉 Success!

Your portfolio is now live! Share it on:
- LinkedIn profile
- Resume
- Email signature
- Social media

---

Need help? Check the [React documentation](https://reactjs.org/) or [GitHub Pages docs](https://docs.github.com/en/pages).
