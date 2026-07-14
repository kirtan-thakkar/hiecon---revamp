# Hiecon Web Application

This repository contains the source code and content for the Hiecon marketing website.

## 📝 Editing Website Content (No Coding Required!)

We have designed this website so that **anyone** can easily edit the text, images, links, and products **without needing to know how to code**. 

All the data that powers the website is stored in simple text files located in the `apps/web/data/` folder. The actual website code reads from these files, meaning you never have to touch the complex React code.

### Where to go to edit content:

1. **Global Site Settings (Navigation, Footer, Copyright):**
   Open `apps/web/data/siteConfig.ts`
   
2. **Home Page (Hero, Partners, Stats):**
   Open `apps/web/data/homeData.ts`
   
3. **Products Page:**
   Open `apps/web/data/products.ts`
   
4. **Solutions/Industries Page:**
   Open `apps/web/data/solutions.ts`

### 📖 Step-by-Step Guide

For detailed instructions on exactly how to open these files, what to edit (and what NOT to edit), and tips on choosing the right images, please read the **[Comprehensive Content Editing Guide](./apps/web/data/README.md)**.

---

## 💻 Developer Section

If you are a developer looking to run, build, or extend the platform, please see the instructions below.

### Setup

Install dependencies:
```bash
npm install
```

### Development Server

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To build the application for production:
```bash
npm run build
```
