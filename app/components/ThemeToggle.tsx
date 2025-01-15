import { Moon, Sun } from "lucide-react";
import { Button } from "../components/ui/button";
// import { useTheme } from "../components/ThemeProvider";

export function ThemeToggle() {
  // const { theme, setTheme } = useTheme();

  return (
    <Button
      // variant="outline"
      // size="icon"
      // onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg"
    >
      <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-white" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}