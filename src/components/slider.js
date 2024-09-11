import Image from "next/image";
import img from "/public/hero.jpg";
import img2 from "/public/hero2.jpg";
import img3 from "/public/hero3.jpg";

const Slider = () => {
  // slider section logic and styles
  return (
    <section>
      <section className="my-2 sm:my-56">
        <div className="container mx-auto text-center">
          <Image src={img} alt="Background Image" className="mx-auto" />
        </div>
      </section>
    </section>
  );
};

export default Slider;
