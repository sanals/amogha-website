/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_GOOGLE_MAPS_API_KEY: string;
  readonly VITE_APP_SITE_URL: string;
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_CONTACT_EMAIL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 