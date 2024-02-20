import { NavBar } from "@/app/components/NavBar";

export default async function Home({
}: {
  params: { slug: string };
  searchParams?: Record<string, string> | URLSearchParams | undefined;
}) {

  return (
    <main>
      <div>
        <NavBar />
      </div>
    </main>
  );
}
