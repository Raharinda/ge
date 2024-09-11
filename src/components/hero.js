import Image from "next/image";
import img from "/public/hero.jpg";
import img2 from "/public/hero2.jpg";
import img3 from "/public/hero3.jpg";

const Hero = () => {
  // hero section logic and styles
  return (
    <section id="about">
            <section id="about" className="sm:mt-16 px-4">
        <div className="container mx-auto text-center ">
          <img
            src="/icon.svg"
            alt="An SVG of an eye"
            className="size-36 my-10 mx-auto"
          />

          <h1 className="text-3xl font-bold uppercase">Gemapala</h1>
          <p className="max-w-xl m-4 mx-auto">
            Gemapala merupakan singkatan dari Gema Muda Ganesha Pecinta Alam
            yang didirikan pada tahun 1981 oleh AKBP Tri Widianto
          </p>
          <button className="mt-6 px-8 py-3 rounded-full border border-black mx-auto transition hover:text-white hover:bg-black">
            <a href="#prologue" className="text-md">
              Selengkapnya
            </a>
          </button>
        </div>
      </section>
    </section>
  );
};

export default Hero;