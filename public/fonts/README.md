# AMOGHA The Ayur Hub - Font Assets

This directory contains custom font files for the AMOGHA website. These fonts are self-hosted for better performance and to ensure consistent typography across devices.

## Font Files

The website uses the following font families:

1. **Inter** - Primary sans-serif font for body text
2. **Playfair Display** - Serif font for headings

## Directory Organization

Store font files in subdirectories by font family:

```
/fonts
├── inter/           # Inter font family
│   ├── Inter-Regular.woff2
│   ├── Inter-Medium.woff2
│   ├── Inter-SemiBold.woff2
│   └── Inter-Bold.woff2
└── playfair/        # Playfair Display font family
    ├── PlayfairDisplay-Regular.woff2
    ├── PlayfairDisplay-Medium.woff2
    ├── PlayfairDisplay-SemiBold.woff2
    └── PlayfairDisplay-Bold.woff2
```

## Font Formats

- **Primary format**: `.woff2` (Best compression, modern browsers)
- **Fallback format**: `.woff` (Better compatibility)

For maximum compatibility, include both formats in CSS font-face declarations.

## Usage

Define fonts in a custom CSS file (e.g., `src/styles/fonts.css`):

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter/Inter-Regular.woff2') format('woff2'),
       url('/fonts/inter/Inter-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Add additional font weights/styles as needed */
```

## Best Practices

1. **Font subsetting**: Only include the character sets you need
2. **Font display**: Use `font-display: swap` for better performance
3. **Preload**: Preload critical fonts in the HTML head
4. **Variable fonts**: Consider using variable fonts to reduce file size

## Licensing

Ensure you have proper licenses for all font files. Include license information in a LICENSE.txt file within each font family's directory. 