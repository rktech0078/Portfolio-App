'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "../components/Loader";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { ThemeProvider } from "@/app/providers/theme-provider";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {loading && <Loader />}
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
