import type { Metadata } from "next";
import { Open_Sans} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/components/providers/ThemeProvider";


const font = Open_Sans({subsets: ['latin']});
export const metadata: Metadata = {
  title: "KITSW-I2RE",
  description: "KITSW EVENTS PLATFORM ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
            font.className,
            "bg-white dark:bg-[#313338]"
        )}>
          <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          storageKey="kitsw-I2RE"
          >
          {children}
          </ThemeProvider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
