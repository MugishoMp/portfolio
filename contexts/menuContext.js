import React, { createContext, useState, useMemo } from 'react';

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const contextValue = useMemo(
    () => ({ isMenuOpen, toggleMenu }),
    [isMenuOpen],
  );

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
}
