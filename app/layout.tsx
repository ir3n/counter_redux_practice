import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import ReduxWrapper from "@/store/ReduxWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Counter working with Redux",
  description:
    "I created this page while practicing Redux, while using TypeScript & Tailwind CSS in my Next.js project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} flex min-h-screen flex-col py-5 lg:py-10 px-5 md:px-24 justify-between`}
      >
        <header className="mb-12 w-full">
          <a href="https://www.ireneborada.com/">
            <Image
              src="logo.svg"
              width={109}
              height={43}
              alt="Irene Borada"
              className="inline-block"
            />
          </a>
        </header>
        <main>
          <ReduxWrapper>{children}</ReduxWrapper>
        </main>
        <footer>
          <p className="my-5 lg:my-10 text-center text-slate-400">
            I created this page while practicing Redux, while using TypeScript &
            Tailwind CSS in my Next.js project.
          </p>
          <p className="text-xs text-slate-400 text-center mt-5">{`©${new Date().getFullYear()} Irene Borada`}</p>
        </footer>
      </body>
    </html>
  );
}
