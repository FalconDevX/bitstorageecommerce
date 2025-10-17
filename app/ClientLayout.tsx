'use client'

import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/Spinner";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    if (document.readyState === "complete") setIsLoading(false);
    else window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (isLoading) return <LoadingSpinner />;
  return <>{children}</>;
}
