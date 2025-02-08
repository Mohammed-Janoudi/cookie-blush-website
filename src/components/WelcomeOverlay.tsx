
import { useEffect, useState } from "react";

export const WelcomeOverlay = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-nude-50/90 backdrop-blur-sm">
      <h1 className="animate-welcome text-4xl md:text-6xl font-light tracking-wider text-nude-300">
        Artisan Cookies
      </h1>
    </div>
  );
};
