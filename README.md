Color Configuration Guide
Current Color Scheme
Primary Color: #0f5694 (Deep Blue)
Secondary Color: #F5F5F5 (Light Gray)
Accent Color: #d91f34 (Red)
How to Change Colors
1. Update Tailwind Config
Navigate to tailwind.config.js and modify the colors section:

colors: {
  primary: "#your-new-primary-color",
  secondary: "#your-new-secondary-color", 
  accent: "#your-new-accent-color"
}

2. Update CSS Variables (Optional)
If you're using CSS variables in globals.css, update them as well:

:root {
  --background: "#your-new-background-color";
  --foreground: "your-new-foreground-color";
}


Color Usage in Components
Tailwind Classes
bg-primary - Primary background color
text-primary - Primary text color
border-primary - Primary border color
bg-secondary - Secondary background color
text-secondary - Secondary text color
bg-accent - Accent background color
text-accent - Accent text color
CSS Variables
var(--background) - Background color
var(--foreground) - Foreground/text color
Color Palette Guidelines
Primary Color
Used for main branding elements
Navigation bars, buttons, links
Should be your brand's main color
Secondary Color
Used for backgrounds and subtle elements
Cards, sections, dividers
Should provide good contrast with primary
Accent Color
Used for call-to-action elements
Buttons, highlights, important text
Should stand out from primary and secondary
Color Format Options
Hex: #0f5694 (most common)
RGB: rgb(15, 86, 148)
HSL: hsl(210, 82%, 32%)
Named Colors: red, blue, green (limited options)
Accessibility Considerations
Ensure sufficient contrast between text and background colors
Test colors with color blindness simulators
Follow WCAG guidelines for color contrast ratios
Color Tools
Color Picker: Use browser dev tools or design software
Contrast Checker: WebAIM Contrast Checker
Color Palette Generators: Coolors, Adobe Color
Accessibility Tools: Stark, Color Oracle
Testing Colors
Apply changes to tailwind.config.js
Restart your development server
Test colors across different components
Verify accessibility with contrast checkers
Test on different devices and browsers
Common Color Schemes
Monochromatic: Different shades of the same color
Analogous: Colors next to each other on the color wheel
Complementary: Colors opposite on the color wheel
Triadic: Three colors equally spaced on the color wheel
File Locations
Main Config: tailwind.config.js
CSS Variables: src/app/globals.css
Component Usage: Throughout .tsx files in src/


-------------------------------------------------------------------------------



Font Configuration Guide
Current Font Setup
English Font: Inter (Google Fonts)
Arabic Font: Tajawal (Google Fonts)
Font Architecture
The project uses a dual-font system with automatic language switching:
English content uses Inter font
Arabic content uses Tajawal font
Font switching is handled automatically by the locale context
How to Change Fonts
1. Update Font Import
Navigate to src/app/layout.tsx and modify the font import:
Replace the existing font import with your new font
Update the font configuration object with appropriate subsets and weights
Change the CSS variable name to match your new font
2. Update CSS Variables
In src/app/globals.css, modify the font variables:
Update the --font-english variable to reference your new font
Update the --font-arabic variable if changing Arabic font
Ensure the font-family declarations use your new font variables
3. Update Tailwind Configuration
In tailwind.config.js, modify the fontFamily section:
Replace the existing font family definitions with your new fonts
Update both english and arabic font families
Include fallback fonts for better compatibility
4. Update Body Class
In src/app/layout.tsx, update the body className:
Replace the font variable references with your new font variables
Ensure the default font class is set correctly
Font Usage in Components
Use font-english class for English text elements
Use font-arabic class for Arabic text elements
The locale context automatically applies the appropriate font class based on the current language
Font Weight Options
100: Thin
200: Extra Light
300: Light
400: Regular (default)
500: Medium
600: Semi Bold
700: Bold
800: Extra Bold
900: Black
Font Subset Options
["latin"] - For English-only fonts
["arabic", "latin"] - For Arabic fonts with Latin support
["arabic"] - For Arabic-only fonts
Available Font Sources
Google Fonts: https://fonts.google.com/
Adobe Fonts: Requires subscription
Custom fonts: Self-hosted font files
Font Selection Guidelines
Choose fonts with good readability
Ensure proper support for your target languages
Consider loading performance (Google Fonts are optimized)
Test fonts across different devices and browsers
Verify proper RTL support for Arabic fonts
Font Performance Considerations
Use display: 'swap' for better loading experience
Consider font preloading for critical fonts
Monitor font loading performance
Use appropriate font weights to reduce file sizes
Testing Font Changes
Restart your development server after configuration changes
Test fonts across different components
Verify proper rendering in both LTR and RTL modes
Check font loading performance
Test on different devices and browsers
File Locations
Main Layout: src/app/layout.tsx
CSS Variables: src/app/globals.css
Tailwind Config: tailwind.config.js
Locale Context: src/context/locale-context.tsx
Common Font Combinations
Inter + Tajawal (current setup)
Roboto + Cairo
Open Sans + Almarai
Poppins + IBM Plex Sans Arabic
Accessibility Considerations
Ensure sufficient contrast between text and background
Choose fonts with good readability at different sizes
Test fonts with screen readers
Consider users with visual impairments
Font Loading Best Practices
Use Next.js font optimization features
Implement proper fallback fonts
Consider critical font preloading
Monitor Core Web Vitals for font loading
