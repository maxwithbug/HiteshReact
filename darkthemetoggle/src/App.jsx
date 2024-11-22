import { useEffect, useState } from "react";
import "./App.css";
import Card from "../components/Card";
import ThemeBtn from "../components/ThemeBtn";
import { ThemeProvider } from "../context/Theme";

function App() {
  const [THEMEMODE, setThemeMode] = useState("light");

  const DARKTHEME = () => {
    setThemeMode("dark");
  };

  const LIGHTTHEME = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.add(THEMEMODE);
  }, [THEMEMODE]);

  return (
    <ThemeProvider value={{ THEMEMODE, DARKTHEME,   LIGHTTHEME }}>
      <div>
        {" "}
        <ThemeBtn />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
