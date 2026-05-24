import { CatalogSection } from "@/components/CatalogSection";
import { SiteFooter } from "@/components/SiteFooter";

type HomePageProps = {
  searchParams?: Promise<{ mobileTab?: string }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const params = searchParams ? await searchParams : undefined;
  const tab = params?.mobileTab;
  const initialMobileTab =
    tab === "favorites" || tab === "menu" || tab === "home" ? tab : "home";

  return (
    <div className="flex min-h-full flex-col">
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-24 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
        <CatalogSection initialMobileTab={initialMobileTab} />
      </main>
      <SiteFooter />
    </div>
  );
}
