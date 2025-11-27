# AMOGHA Website Image Guide

## Image Requirements

This guide provides instructions for adding proper images to the AMOGHA website.

### Required Image Directories

The website expects images in the following directories under `public/images/`:

1. **about/** - Images for the About page
   - `about-hero-bg.jpg` (1920x1080px)
   - `history-2005.jpg`, `history-2010.jpg`, etc. (800x600px)

2. **team/** - Doctor/staff profile photos
   - `dr-002.png`, `dr-001.png`, etc. (500x600px)
   - Square or portrait orientation recommended
   - Professional headshots on neutral backgrounds

3. **treatments/** - Images showing treatments
   - `panchakarma.jpg`, `detoxification.jpg`, etc. (800x600px)
   - Clear, high-quality images showing treatments

4. **departments/** - Images for each department
   - `general-medicine.jpg`, `womens-health.jpg`, etc. (800x600px)
   - Images representing each department

5. **hero/** - Hero banner images
   - `home-hero.jpg`, `treatments-hero.jpg`, etc. (1920x1080px)
   - Wide, high-resolution images
   - Minimal text in the images

6. **testimonials/** - Patient testimonial photos
   - `patient1.jpg`, `patient2.jpg`, etc. (300x300px)
   - `video-thumb1.jpg`, `video-thumb2.jpg` (800x450px)

7. **gallery/** - General clinic images
   - `facility1.jpg`, `facility2.jpg`, etc. (800x600px)
   - `treatment1.jpg`, `treatment2.jpg`, etc. (800x600px)

8. **logos/** - Logo files
   - `amogha-logo.png` (400x200px)
   - `amogha-logo-dark.png` (400x200px)
   - `favicon.png` (48x48px)

### Video Requirements

The website also expects video files in `public/videos/`:

1. **testimonials/**
   - `patient-testimonial-1.mp4`, etc.

2. **treatments/**
   - `panchakarma-treatment.mp4`, etc.

## How to Add Images Manually

### Option 1: Use placeholder services

1. Visit [Lorem Picsum](https://picsum.photos/) for general images:
   ```
   https://picsum.photos/800/600
   ```

2. Visit [randomuser.me](https://randomuser.me/) for doctor/patient portraits:
   ```
   https://randomuser.me/api/portraits/men/1.jpg
   https://randomuser.me/api/portraits/women/1.jpg
   ```

3. Save these images with the appropriate filenames in the respective directories.

### Option 2: Use stock photos

1. Visit [Unsplash](https://unsplash.com/) or [Pexels](https://www.pexels.com/) 
2. Search for "ayurveda", "wellness", "spa", "clinic", etc.
3. Download images and resize them to the appropriate dimensions
4. Save them with the correct filenames in their respective directories

### Option 3: Use real content (recommended for production)

For a production site, use actual photos of:
- Your actual clinic facility
- Your actual doctors and staff
- Real treatments being performed
- Real patients (with permission)

## Image Optimization

Before deploying to production:

1. Optimize all images using a tool like:
   - [TinyPNG](https://tinypng.com/)
   - [ImageOptim](https://imageoptim.com/)
   - [Squoosh](https://squoosh.app/)

2. Consider using WebP format with JPG fallbacks for better performance

## Creating a Logo

If you need a logo for AMOGHA:

1. Use a tool like [Canva](https://www.canva.com/) to create a simple logo
2. Create a dark and light version
3. Export as PNG with transparent background
4. Save as `amogha-logo.png` and `amogha-logo-dark.png`

## Using Actual Ayurvedic Images

For the best representation of your clinic, consider:

1. [Shutterstock's Ayurveda Collection](https://www.shutterstock.com/search/ayurveda)
2. [Adobe Stock's Ayurveda Images](https://stock.adobe.com/search?k=ayurveda)
3. [iStock's Ayurveda Collection](https://www.istockphoto.com/search/2/image?phrase=ayurveda)

These paid services offer high-quality, authentic Ayurvedic images that will enhance your site's professionalism. 