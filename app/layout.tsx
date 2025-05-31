import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Pump Fun ",
    description: "Start a new coin on Pump.Fun",
    applicationName: "Pump Fun",
    keywords: ["Pump Fun", "Start a new coin", "Solana", "Meme Coin"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
