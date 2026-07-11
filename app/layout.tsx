import { Space_Grotesk } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ui/ScrollAnimations";
import { SmoothScrollProvider } from "@/components/scroll-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="tMCNs2fgM6voEHBd3JsySffMFSiUCQDEFEF1iYI3-ZQ"
        />
      </head>
      <body
        className="antialiased"
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <div className="relative z-10">{children}</div>
          </SmoothScrollProvider>

          <ScrollToTop />
        </ThemeProvider>
        <script
          src="https://cdn.databuddy.cc/databuddy.js"
          data-client-id="2cYj0B5Uv0T4q70DhnoAc"
          data-enable-batching="true"
          async
        ></script>
      </body>
    </html>
  );
}
