// Navigation data for AMOGHA The Ayur Hub
// Based on Sanjeevanam Ayurveda Hospital's navigation structure

export interface NavLink {
  id: string;
  label: string;
  path: string;
  children?: NavLink[];
  isExternal?: boolean;
}

export const mainNavigation: NavLink[] = [
  {
    id: 'departments',
    label: 'Departments',
    path: '/departments',
    children: [
      {
        id: 'general-medicine',
        label: 'General Medicine & Neurology',
        path: '/departments/general-medicine-neurology'
      },
      {
        id: 'womens-health',
        label: 'Women\'s Health & Gynaecology',
        path: '/departments/womens-health-gynaecology'
      },
      {
        id: 'sports-medicine',
        label: 'Anorectal & Sports Medicine',
        path: '/departments/anorectal-sports-medicine'
      },
      {
        id: 'wellness-panchakarma',
        label: 'Wellness & Panchakarma',
        path: '/departments/wellness-panchakarma'
      },
      {
        id: 'pediatrics',
        label: 'Ayurvedic Pediatrics',
        path: '/departments/ayurvedic-pediatrics'
      },
      {
        id: 'ophthalmology-ent',
        label: 'Ayurvedic Ophthalmology & ENT',
        path: '/departments/ophthalmology-ent'
      }
    ]
  },
  {
    id: 'about',
    label: 'About',
    path: '/about'
  },
  {
    id: 'treatments',
    label: 'Treatments',
    path: '/treatments'
  },
  // TODO: Re-enable when gallery content is ready
  // {
  //   id: 'gallery',
  //   label: 'Gallery',
  //   path: '/gallery',
  //   children: [
  //     {
  //       id: 'photo-gallery',
  //       label: 'Photo Gallery',
  //       path: '/gallery/photos'
  //     },
  //     {
  //       id: 'video-gallery',
  //       label: 'Video Gallery',
  //       path: '/gallery/videos'
  //     }
  //   ]
  // },
  {
    id: 'testimonials',
    label: 'Testimonials',
    path: '/testimonials',
    children: [
      {
        id: 'guest-quotes',
        label: 'Guest Quotes',
        path: '/testimonials/quotes'
      },
      {
        id: 'video-testimonials',
        label: 'Video Testimonials',
        path: '/testimonials/videos'
      }
    ]
  },
  {
    id: 'doctors',
    label: 'Our Doctors',
    path: '/doctors'
  },
  // TODO: Re-enable when you have real press coverage content
  // {
  //   id: 'press',
  //   label: 'Press & News',
  //   path: '/press'
  // },
  {
    id: 'faq',
    label: 'FAQ',
    path: '/faq'
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact'
  }
];

export const footerLinks = {
  quickLinks: [
    {
      id: 'about',
      label: 'About',
      path: '/about'
    },
    {
      id: 'doctors',
      label: 'Doctors',
      path: '/doctors'
    },
    // TODO: Re-enable when gallery content is ready
    // {
    //   id: 'gallery',
    //   label: 'Photo Gallery',
    //   path: '/gallery/photos'
    // },
    {
      id: 'faq',
      label: 'FAQ',
      path: '/faq'
    }
  ],
  additionalLinks: [
    {
      id: 'contact',
      label: 'Contact',
      path: '/contact'
    },
    {
      id: 'treatments',
      label: 'Treatments',
      path: '/treatments'
    },
    // TODO: Re-enable when you have real press coverage content
    // {
    //   id: 'press',
    //   label: 'Press & News',
    //   path: '/press'
    // }
  ],
  policyLinks: [
    {
      id: 'privacy',
      label: 'Privacy Policy',
      path: '/policies/privacy'
    },
    {
      id: 'terms',
      label: 'Terms & Conditions',
      path: '/policies/terms'
    },
    {
      id: 'refund',
      label: 'Refund and Returns Policy',
      path: '/policies/refund'
    }
  ],
  socialLinks: [
    {
      id: 'facebook',
      label: 'Facebook',
      path: 'https://facebook.com',
      isExternal: true,
      icon: 'facebook'
    },
    {
      id: 'instagram',
      label: 'Instagram',
      path: 'https://instagram.com',
      isExternal: true,
      icon: 'instagram'
    },
    {
      id: 'twitter',
      label: 'Twitter',
      path: 'https://twitter.com',
      isExternal: true,
      icon: 'twitter'
    },
    {
      id: 'youtube',
      label: 'YouTube',
      path: 'https://youtube.com',
      isExternal: true,
      icon: 'youtube'
    },
    {
      id: 'tripadvisor',
      label: 'TripAdvisor',
      path: 'https://tripadvisor.com',
      isExternal: true,
      icon: 'tripadvisor'
    }
  ]
}; 