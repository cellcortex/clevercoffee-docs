// app/layout.tsx

"use client"; // Enables client-side rendering for components that use hooks
import "./styles.css"; // Import global CSS

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
