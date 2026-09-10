import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "KeywordLab | 키워드 인텔리전스",
  description: "키워드 분석, 블로그 지수, 실시간 검색어를 위한 프리미엄 인텔리전스 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            <div className="content-wrapper">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
