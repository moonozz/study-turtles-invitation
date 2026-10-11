import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "웹 초대장",
  description: "링크로 공유하고 참석 여부를 받는 모바일 웹 초대장 서비스"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
