import type { Metadata } from "next";
import "./globals.css";
import 'antd/dist/reset.css';
import { Poppins } from 'next/font/google';
import AppLayout from "@/components/layout/app-layout";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


export const metadata: Metadata = {
  title: "Telemarketing",
  description: "Manage and optimize telemarketing campaigns efficiently with real-time insights and automation.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full overflow-y-scroll no-scrollbar`}>
      <body>
        <AntdRegistry>
          <AppLayout>{children}</AppLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
