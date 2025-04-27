import React, { createContext, useContext } from 'react';

export type HeaderOverlayMode = 'dark' | 'light';

const HeaderOverlayContext = createContext<HeaderOverlayMode>('light');

export const useHeaderOverlay = () => useContext(HeaderOverlayContext);

interface HeaderOverlayProviderProps {
  mode: HeaderOverlayMode;
  children: React.ReactNode;
}

export const HeaderOverlayProvider: React.FC<HeaderOverlayProviderProps> = ({ mode, children }) => (
  <HeaderOverlayContext.Provider value={mode}>
    {children}
  </HeaderOverlayContext.Provider>
); 