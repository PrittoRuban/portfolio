import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pritto Ruban - Portfolio",
  description:
    "Pritto Ruban is a full-stack developer, interested in learning new things and Engineer based in India. Loves to build things that make people's lives easier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-purple-50 text-gray-950 relative`}
      >
        <div
          className="bg-sky-100 absolute top-[-6rem] right-[11rem] h-[31.25rem] -z-10 w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-violet-200 absolute top-[-1rem] left-[-35rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        {children}
      </body>
    </html>
  );
}
