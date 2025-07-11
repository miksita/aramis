import type { Metadata } from "next";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import "./globals.css";


export const metadata: Metadata = {
  title: "КСК Арамис",
  description: "Конный центр Арамис в Приморском крае",
   keywords: [
    "Конный клуб",
    "База отдыха",
    "Арамис",
    "Конный центр Арамис",
    "Приморский край",
    "Конный клуб Владивосток",
    "Отдых в Приморском крае",
    "Лошади Владивосток",
  ],
  authors: [{ name: "Конный центр Арамис", url: "https://ksk-aramis.ru" }],
  openGraph: {
    title: "Конный центр Арамис",
    description: "Конный центр Арамис - мир гармонии с лошадьми",
    type: "website",
    url: "https://ksk-aramis.ru",
    // images: [
    //   {
    //     url: "https://miksita.ru/miksita.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Miksita - Web-Developer & Web-Designer",
    //   },
    // ],
  },
 
  alternates: {
    canonical: "https://ksk-aramis.ru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
              <Header />
              <main className=""> 
          {children} 
        </main>
        <Footer />

      </body>
    </html>
  );
}
