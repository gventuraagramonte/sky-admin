import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";


export const metadata: Metadata = {
  title: "Sky Admin",
  description: "Plataforma administrativa para SkyNavigator Airlines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-800"
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
