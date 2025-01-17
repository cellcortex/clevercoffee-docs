import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./styles.css";

export const metadata: Metadata = {
  description: "DIY PID Controller für deine Espressomaschine",
  title: {
    absolute: "",
    template: "%s | CC"
  },
  other: {
    "msapplication-TileColor": "#fff"
  }
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>CleverCoffee</b> <span style={{ opacity: "60%" }}>TDIY PID Controller für deine Espressomaschine</span>
        </div>
      }
      // Clevercoffee discord server
      chatLink="https://discord.gg/hEM84NMkRv"
    />
  );
  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={<Banner storageKey="Clevercoffee 4">CleverCoffee 4</Banner>}
          navbar={navbar}
          footer={<Footer />}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/shuding/nextra/blob/main/examples/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap(`/${lang}`)}
          i18n={[
            { locale: "de", name: "Deutsch" },
            { locale: "en", name: "English" }
          ]}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
