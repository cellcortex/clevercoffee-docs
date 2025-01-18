// app/layout.tsx

"use client"; // Enables client-side rendering for components that use hooks
import "./styles.css"; // Import global CSS

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>CleverCoffee Documentation</title>
        <meta name="description" content="CleverCoffee Documentation" />
        {/* Add any global meta tags or links here */}
      </head>
      <body>{children}</body>
    </html>
  );
}
