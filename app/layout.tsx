"use client";

import '../styles/globals.css';

export const metadata = {
  title: 'Carta para ti',
  description: 'Una carta hecha con amor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}