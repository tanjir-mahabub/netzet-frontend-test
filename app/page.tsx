import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="bg-dark text-white min-h-screen overflow-auto lg:overflow-hidden">
        <Banner />
      <article className="container mx-auto max-w-[1020px]">
        <Header />
        <Hero />
      </article>
    </main>
  );
}
