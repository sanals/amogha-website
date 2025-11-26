// Utility file to help migrate from react-router-dom to Next.js
// This provides compatibility wrappers

'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ComponentProps, ReactNode } from 'react';

// Wrapper for Next.js Link that matches react-router-dom's Link API
export const NextLink = ({
  to,
  children,
  className,
  ...props
}: {
  to: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, 'href'>) => {
  return (
    <Link href={to} className={className} {...props}>
      {children}
    </Link>
  );
};

// Re-export Next.js router hooks with react-router-dom-like names
export { usePathname as useLocation };
export { useRouter as useNavigate };
export { useSearchParams };

// Hook to get params (for dynamic routes)
export function useParams(): Record<string, string> {
  const pathname = usePathname();
  // This is a simplified version - in Next.js, params come from the page props
  // For components, we'll need to pass params down or use a different approach
  return {};
}

