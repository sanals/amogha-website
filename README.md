# AMOGHA - The Ayur Hub

AMOGHA is a premier Ayurvedic clinic website showcasing traditional Ayurvedic treatments with a modern digital presence. This React-based static website provides information about various treatments, departments, doctors, and allows patients to book appointments.

## 🌿 Features

- **Department/Treatment Showcase** - Details on various Ayurvedic departments and treatments offered
- **Doctor Profiles** - Information about qualified Ayurvedic practitioners
- **Testimonials** - Patient experiences and success stories
- **Image Galleries** - Visuals of the clinic, treatments, and facilities
- **Appointment Booking** - Integrated system for patients to schedule appointments
- **Mobile Responsive** - Optimized for all devices and screen sizes
- **Dark and Light Mode Support** - User-friendly interface for different lighting conditions
- **Professional Contact Form** - Integrated form for patients to contact the clinic
- **Google Maps Integration** - Detailed location information for the clinic
- **Comprehensive Documentation** - Detailed instructions for setting up and troubleshooting the website

## 🚀 Technology Stack

- React 18+ with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Framer Motion for animations
- Google Maps integration
- React Helmet Async for SEO
- Vite for fast development

## 🔧 Setup & Development

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/amogha.git
   cd amogha
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   ```
   cp .env.example .env
   ```
   Then edit the `.env` file and add your Google Maps API key.

4. Start the development server:
   ```
   npm run dev
   ```

5. Download placeholder images (for development):
   ```
   node scripts/download-sample-images.js
   ```

6. Visit [http://localhost:3000](http://localhost:3000) to view the website

### Project Structure

- `/public` - Static assets like images and fonts
- `/src` - Source code
  - `/components` - React components using Atomic Design principles
  - `/pages` - Page components
  - `/data` - Data files for treatments, doctors, etc.
  - `/hooks` - Custom React hooks
  - `/context` - React context providers
  - `/types` - TypeScript interfaces and types
  - `/utils` - Utility functions

## 📝 Content Management

The website content is stored in structured data files:

- `src/data/departmentsData.ts` - Information about departments
- `src/data/treatmentsData.ts` - Treatment details
- `src/data/doctorsData.ts` - Doctor profiles
- `src/data/testimonialsData.ts` - Patient testimonials

Update these files to modify the website content.

## 🏞️ Image Assets

Images are organized in the `/public/images` directory:

- `/hero` - Hero banner images
- `/departments` - Department-related images
- `/treatments` - Treatment-related images
- `/team` - Doctor and staff photos
- `/gallery` - Facility and general photos
- `/testimonials` - Testimonial photos

Use consistent image dimensions for each category as specified in the image directories' README files.

## 📱 Responsive Design

The website is designed with a mobile-first approach using Tailwind CSS breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🛠️ Build for Production

To create an optimized production build:

```
npm run build
```

The build artifacts will be stored in the `dist` directory.

## 🌐 Deployment

The static website can be deployed to any hosting service that supports static sites:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 👥 Contributing

Please read the CONTRIBUTING.md file for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📄 Documentation

- **Contact Setup**: See `docs/CONTACT_TROUBLESHOOTING.md` for details on setting up the contact form and Google Maps
- **Image Guide**: Refer to `docs/IMAGE_GUIDE.md` for image requirements and how to add them
- **Component Documentation**: Check individual component documentation in their respective folders

## 🔍 Testing the Google Maps Integration

1. Start the development server
2. Visit [http://localhost:3000/map-test](http://localhost:3000/map-test)
3. Enter your Google Maps API key to test it

## 🔧 Customization

- **Theme Colors**: Edit `tailwind.config.js` to customize the color palette
- **Content**: Update data files in the `src/data` directory
- **Images**: Replace placeholder images in `public/images` with your actual images 