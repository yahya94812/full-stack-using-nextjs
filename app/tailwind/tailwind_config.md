# Tailwind CSS v4 configuration in Next.js

## Prompt:
explain the important and frequently used configurations for tailwind CSS in nextjs note: refer latest, up to date tailwind css and nextjs docs and generate response which is valid for v4(latest version)

## Response:

I'll search for the latest Tailwind CSS v4 and Next.js configuration documentation to provide you with accurate, up-to-date information.

Based on the latest documentation for Tailwind CSS v4 and Next.js, here's a comprehensive guide to important and frequently used configurations:

## **Tailwind CSS v4 + Next.js Configuration Guide**

### **Key Changes in v4**

Tailwind CSS v4 represents a major architectural shift with a CSS-first configuration approach, eliminating the need for JavaScript config files in most cases, featuring a new high-performance Rust-based engine, automatic content detection, and simplified installation with fewer dependencies.

---

## **1. Installation & Setup**

### **Install Dependencies**
```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

### **PostCSS Configuration**
Create `postcss.config.mjs` in your project root:

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

### **Global CSS File**
In `app/globals.css` (or your main CSS file):

```css
@import "tailwindcss";
```

That's the only line needed - no more separate @tailwind directives for base, components, and utilities.

---

## **2. CSS-First Theme Configuration**

### **Using @theme Directive**

Theme variables are special CSS variables defined using the @theme directive that influence which utility classes exist in your project.

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-primary: oklch(0.72 0.11 178);
  --color-secondary: #6366f1;
  --color-accent: hsl(280, 100%, 70%);
  
  /* Typography */
  --font-display: "Inter", sans-serif;
  --font-body: "Roboto", sans-serif;
  
  /* Spacing (custom) */
  --spacing-xs: 0.5rem;
  --spacing-xl: 3rem;
  
  /* Breakpoints */
  --breakpoint-3xl: 120rem;
  
  /* Shadows */
  --shadow-card: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  
  /* Border radius */
  --radius-lg: 1rem;
  --radius-full: 9999px;
}
```

### **Theme Variable Namespaces**

Important namespaces that generate utility classes:
- `--color-*` → color utilities (`bg-*`, `text-*`, `border-*`)
- `--font-*` → font-family utilities
- `--spacing-*` → spacing utilities
- `--breakpoint-*` → responsive breakpoints
- `--shadow-*` → shadow utilities
- `--radius-*` → border-radius utilities
- `--container-*` → max-width utilities

---

## **3. Dark Mode Configuration**

### **V4 Dark Mode Setup**

Tailwind v4 handles dark mode differently using CSS variants instead of a configuration option:

```css
@import "tailwindcss";

/* Enable class-based dark mode */
@variant dark (&:where(.dark, .dark *));
```

### **Theme-Based Dark Mode**

```css
@import "tailwindcss";

@theme {
  --color-background: oklch(1 0 0);
  --color-foreground: oklch(0.145 0 0);
}

@layer base {
  .dark {
    --color-background: oklch(0.145 0 0);
    --color-foreground: oklch(0.985 0 0);
  }
}

@theme inline {
  --color-background: var(--color-background);
  --color-foreground: var(--color-foreground);
}
```

---

## **4. Multi-Theme Support**

You can define multiple themes by redefining CSS variable values at different theme scopes using data attributes:

```css
@import "tailwindcss";

@theme {
  --color-primary: #aab9ff;
}

@layer base {
  [data-theme='ocean'] {
    --color-primary: #aab9ff;
  }
  
  [data-theme='rainforest'] {
    --color-primary: #56d0a0;
  }
  
  [data-theme='candy'] {
    --color-primary: #f9a8d4;
  }
}
```

---

## **5. Content Detection (Automatic)**

Tailwind v4 features automatic content detection - all template files are discovered automatically with no configuration required.

However, if you need to use the legacy config file approach, create `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
```

---

## **6. Custom Utilities & Variants**

### **Custom Utilities**
```css
@import "tailwindcss";

@layer utilities {
  .content-auto {
    content-visibility: auto;
  }
  
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
}
```

### **Custom Variants**
```css
@variant hocus (&:hover, &:focus);
@variant supports-grid (supports(display: grid));
```

---

## **7. Using CSS Variables in Components**

Tailwind generates regular CSS variables for your theme variables so you can reference your design tokens in arbitrary values or inline styles:

```tsx
// Direct usage
<div className="bg-primary text-white">
  Hello World
</div>

// Arbitrary values with CSS variables
<div className="bg-[var(--color-primary)]">
  Using CSS variable directly
</div>

// Inline styles
<div style={{ color: 'var(--color-primary)' }}>
  Inline usage
</div>
```

---

## **8. Prefix Configuration**

In Tailwind V4, you add a prefix on the same line where you import Tailwind in the entry CSS file, and prefixes can no longer have special characters:

```css
@import "tailwindcss" prefix(tw);
```

Usage: `tw-px-4`, `tw-bg-blue-500`

---

## **9. Plugins & Extensions**

### **Layer Organization**
```css
@import "tailwindcss";

@layer base {
  /* Base styles */
  html {
    @apply antialiased;
  }
}

@layer components {
  /* Component classes */
  .btn {
    @apply px-4 py-2 rounded-lg font-semibold;
  }
}

@layer utilities {
  /* Custom utilities */
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## **10. Next.js App Router Integration**

### **Layout File**
```tsx
// app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## **11. Performance Optimizations**

V4's Rust-based engine provides builds that are over 3.5x faster for full rebuilds and over 8x faster for incremental builds, with incremental builds completing in microseconds.

### **VS Code Intellisense**
Update to the pre-release version of Tailwind CSS IntelliSense for v4 support.

`.vscode/settings.json`:
```json
{
  "tailwindCSS.experimental.configFile": "app/globals.css",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

---

## **12. Legacy Config Support**

If you need JavaScript configuration, use the `@config` directive:

```css
@import "tailwindcss";
@config "./tailwind.config.js";
```

---

## **Summary of Key V4 Features**

1. **CSS-first configuration** - everything in CSS files
2. **No PostCSS required** for most use cases (except Next.js still needs it)
3. **Automatic content detection**
4. **Native CSS variables** for all theme values
5. **@theme directive** for design tokens
6. **@variant directive** for custom variants
7. **Dramatically faster builds** with Rust engine
8. **Simplified dark mode** with CSS variants

This configuration approach makes Tailwind v4 more maintainable and performant for Next.js projects!