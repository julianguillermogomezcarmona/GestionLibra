import React from "react";
import { FluentProvider, teamsLightTheme, teamsDarkTheme, teamsHighContrastTheme } from "@fluentui/react-components";

interface ThemeToggleButtonProps {
  onChange: (theme: string) => void;
}

export default function ThemeToggleButton({ onChange }:ThemeToggleButtonProps) {
  const handleToggle = () => {
    // Puedes implementar lógica adicional aquí si tienes más temas
    // Por ejemplo, si tienes temas de alto contraste, puedes cambiar entre ellos también.
    onChange("light");
  };

  return (
    <button onClick={handleToggle}>
      Cambiar Tema
    </button>
  );
};
