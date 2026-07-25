import Hero from "@/components/Hero";
import CameraCanvas from "@/components/CameraCanvas";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <CameraCanvas />
    </main>
  );
}