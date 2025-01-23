import type { Metadata } from "next";
import ReduxProvider from "@/providers/Providers";
import "@/styles/globals.css";
import NpProgress from "@/components/common/np-progess";

export const metadata: Metadata = {
  title: "skills challenge",
  description: "skills challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ReduxProvider>
          {children}
          <NpProgress/>
        </ReduxProvider>
      </body>
    </html>
  );
}
