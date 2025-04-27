// Card style constants for reuse throughout the application
// Used by various card components (DoctorCard, TreatmentCard, etc.)

// Base card classes
export const cardBase = 'bg-white dark:bg-neutral-dark rounded-lg shadow-md overflow-hidden';
export const cardHoverStyle = 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300';
export const cardMotionHover = { y: -5 };
export const cardMotionTransition = { duration: 0.3 };

// Card image classes
export const cardImage = 'w-full h-full object-cover';
export const cardImageHover = 'transition-transform duration-500 hover:scale-105';
export const cardImageContainer = 'relative overflow-hidden';

// Card content classes
export const cardContent = 'p-5';
export const cardContentFlex = 'p-5 flex-grow flex flex-col';

// Card overlay/gradient
export const cardOverlayGradient = 'absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent';
export const cardOverlayBottom = 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4';
export const cardOverlayHover = 'opacity-0 hover:opacity-100 transition-opacity duration-300';

// Card title and content text
export const cardTitle = 'text-xl font-serif text-primary dark:text-primary-light mb-2';
export const cardTitleLight = 'text-white text-xl font-semibold';
export const cardSubtitle = 'text-neutral-medium text-sm';
export const cardSubtitleLight = 'text-white/80 text-sm';
export const cardDescription = 'text-neutral-dark dark:text-neutral-light text-sm mb-4';

// Card animation (Framer Motion)
export const cardEntranceStyle = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// Card with full-height styling
export const cardFullHeight = 'h-full flex flex-col'; 