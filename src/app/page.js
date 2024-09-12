"use client";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Slider from "../components/slider";
import Prologue from "../components/prologue";
import Footer from "../components/footer";
import ImageSlider from "../components/slider";




import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Home() {


  // Slider settings

  return (
    <main className="pt-16">
      <Navbar />
      <Hero />
      <ImageSlider />
      <Prologue />
      <Footer />
    </main>
  );
}
