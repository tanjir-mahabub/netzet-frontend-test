import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="bg-dark text-white min-h-screen overflow-auto lg:overflow-hidden">
        <Banner />
      <article className="container mx-auto max-w-[960px]">
        <Header />
        <Hero />
      </article>
    </main>
  );
}
