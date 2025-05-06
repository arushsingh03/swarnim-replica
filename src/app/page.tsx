import HeroSection from "@/components/Hero";
import LocationSection from "@/components/LocationSection";
import OverviewSection from "@/components/OverVeiwSection";
import Navbar from "@/components/NavBar";
import ProximityTimeline from "@/components/ProximityTimeline";
import ImageGallery from "@/components/GallerySection";
import FloorPlan from "@/components/SaphireSection";
import EnquireNow from "@/components/Contact";
import Footer from "@/components/Footer";

const galleryImages = [
  {
    id: 1,
    title: "Ecosystem",
    imageUrl: "/images/ecosystem.webp",
    link: "/ecosystem",
  },
  {
    id: 2,
    title: "Landmark",
    imageUrl: "/images/landmark.webp",
    link: "/landmark",
  },
  {
    id: 3,
    title: "Drive",
    imageUrl: "/images/drive.webp",
    link: "/drive",
  },
  {
    id: 4,
    title: "Address",
    imageUrl: "/images/address.webp",
    link: "/address",
  },
  {
    id: 5,
    title: "Choice",
    imageUrl: "/images/choice.webp",
    link: "/choice",
  },
  {
    id: 6,
    title: "Destination",
    imageUrl: "/images/destination.webp",
    link: "/destination",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <LocationSection />
      <ProximityTimeline />
      <ImageGallery images={galleryImages} />
      <FloorPlan />
      <EnquireNow />
      <Footer />
    </main>
  );
}
