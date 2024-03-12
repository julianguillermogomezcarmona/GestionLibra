import { Theme } from "@fluentui/react-components";
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the type for the context
interface ThemeContextProps {
  theme: "dark" | "light"; // Change the type of example as needed
  setTheme: any; // Change the type of setExample as needed
}
// Create the context with an initial value
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Define the type for the provider props
interface ThemeProviderProps {
  children: ReactNode;
}
// Create a provider component
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] =
    useState<ThemeContextProps["theme"]>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to consume the context
const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useExampleContext must be used within a ExampleProvider");
  }
  return context;
};

export { ThemeProvider, useThemeContext };
