import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useTheme } from "next-themes";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm dark:bg-slate-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="font-semibold text-xl text-slate-900 dark:text-white">Good News MBC</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-slate-700 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("doctrines")}
              className="text-slate-700 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white"
            >
              Beliefs
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-slate-700 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("videos")}
              className="text-slate-700 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white"
            >
              Videos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-700 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white"
            >
              Contact
            </button>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-700 hover:text-slate-900 text-left py-2 dark:text-slate-300 dark:hover:text-white"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("doctrines")}
                className="text-slate-700 hover:text-slate-900 text-left py-2 dark:text-slate-300 dark:hover:text-white"
              >
                Beliefs
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-slate-700 hover:text-slate-900 text-left py-2 dark:text-slate-300 dark:hover:text-white"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("videos")}
                className="text-slate-700 hover:text-slate-900 text-left py-2 dark:text-slate-300 dark:hover:text-white"
              >
                Videos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-700 hover:text-slate-900 text-left py-2 dark:text-slate-300 dark:hover:text-white"
              >
                Contact
              </button>
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-slate-700 hover:text-slate-900 text-left py-2 flex items-center gap-2 dark:text-slate-300 dark:hover:text-white"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}