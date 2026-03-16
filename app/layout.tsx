import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import ThemeProvider from "@/context/Theme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
});
const spaceGrotesk = SpaceGrotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "LE PARLEMENTAIRE ",
  description: "A Blog Page",

  generator: "Next.js",
  applicationName: "Dev Overflow",
  referrer: "origin-when-cross-origin",

  keywords: [
    "Politics",
    "Election",
    "YouthSpotlight",
    "Parliament",
    "Economy and Society",
    "Articles",
    "Africa",
    "Local Governance",
    "data structures",
    "developer community",
  ],

  authors: [
    { name: "Boris" },
    { name: "Le Parlementaire", url: "https://devoverflow.dev/team" },
  ],
  creator: "Boris",
  publisher: "Le Parlementaire",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/Group2.svg", // regular favicon
    shortcut: "/Group2.svg", // browser address bar icon
    apple: "/Group2.svg", // Apple devices
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },

  // Optional: Theme color for browser UI and mobile experience
  themeColor: "#18181b",

  // Optional: Color for Microsoft tiles and pinned sites
  msapplication: {
    TileColor: "#ffffff",
    TileImage: "/mstile-150x150.png",
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <SessionProvider session={session}>
        <body
          className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};
export default RootLayout;
