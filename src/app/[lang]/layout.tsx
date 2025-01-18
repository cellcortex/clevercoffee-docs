import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./styles.css";
import { PageMapItem, Folder, MdxFile } from "nextra";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }];
}

export const metadata: Metadata = {
  description: "DIY PID Controller für deine Espressomaschine",
  title: {
    absolute: "",
    template: "%s | CC",
  },
  other: {
    "msapplication-TileColor": "#fff",
  },
};

function isFolder(item: PageMapItem): item is Folder {
  return (item as Folder).children !== undefined;
}

function hasRoute(item: PageMapItem): item is Folder | MdxFile {
  return "route" in item;
}

function localizeRoute(item: PageMapItem, lang: string): PageMapItem {
  const result = { ...item };
  if (hasRoute(result)) {
    result.route = result.route.replace("/", `/${lang}/`);
  }
  if (isFolder(result)) {
    result.children = result.children.map((child) =>
      localizeRoute(child, lang),
    );
  }
  return result;
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  let pageMap = await getPageMap(`/${lang}`);

  // Localize routes (TODO: This should be done in the page-map module by nextra)
  pageMap = [...pageMap.map((page: PageMapItem) => localizeRoute(page, lang))];

  const navbar = (
    <Navbar
      logo={
        <div>
          <b>CleverCoffee</b>{" "}
          <span style={{ opacity: "60%" }}>
            DIY PID Controller für deine Espressomaschine
          </span>
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
          docsRepositoryBase="https://github.com/cellcortex"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          i18n={[
            { locale: "de", name: "Deutsch" },
            { locale: "en", name: "English" },
          ]}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
