import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
// import OrchidScene from "@/components/orchidscene";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      {/* <OrchidScene/> */}
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}
