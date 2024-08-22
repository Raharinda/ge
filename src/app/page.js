import Image from "next/image";
import img from "../../public/bg.jpg";

export default function Home() {
  return (
    <main>
      <section className="flex bg-black py-3">
        <span className="text-xs mx-auto text-white font-thin text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          eget nibh vitae blandit.
        </span>
      </section>

      <section className="flex text-xs font-medium px-4 sm:px-12 py-6 justify-between">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center sm:text-left">
          <a href="">About the Game</a>
          <a href="">Event</a>
          <a href="">Download</a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center text-center sm:text-left mt-4 sm:mt-0">
          <span className="font-thin">Support: +1(23) 4567890</span>
          <a
            href=""
            className="px-6 py-2 rounded-full border border-black transition hover:bg-black hover:text-white"
          >
            Login
          </a>
          <a
            href=""
            className="px-6 py-2 rounded-full border text-white bg-black border-current transition hover:bg-white hover:text-black"
          >
            Sign Up
          </a>
        </div>
      </section>

      <section id="home" className="mt-16 sm:mt-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Venture Into The Unknown.</h1>
          <p className="max-w-xl m-4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            risus eget laoreet mollis. Pellentesque placerat magna eget mi.
          </p>
          <button className="mt-6 px-8 py-3 rounded-full border border-black mx-auto transition hover:text-white hover:bg-black">
            <a href="" className="text-md">
              Download Now
            </a>
          </button>
        </div>
      </section>

      <section className="my-28 sm:my-56">
        <div className="container mx-auto text-center">
          <Image src={img} alt="Background Image" className="mx-auto" />
        </div>
      </section>

      <section className="sm:px-10 mx-20">
        <div>
          <h1 className="font-bold mb-12 sm:mb-24 text-3xl sm:text-5xl">
            Prologue
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-32 text-sm sm:text-xm">
            <div className="flex flex-col justify-between">
              <p className="mb-20">
                These constructs known as "Colossi" are formed of both ancient
                and advanced technology, but their origin cannot be verified.
              </p>
              <p>
                A distinctly unique race, who could engage in psychic
                communication with Colossi, once lived a life of peace in a land
                named Eraveil. These beings were known as the Caelestites.
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <p className="mb-20">
                These constructs known as "Colossi" are formed of both ancient
                and advanced technology, but their origin cannot be verified.
              </p>
              <p>
                A distinctly unique race, who could engage in psychic
                communication with Colossi, once lived a life of peace in a land
                named Eraveil. These beings were known as the Caelestites.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-32 text-sm sm:text-xm mt-16">
            <div className="flex flex-col justify-between">
              <p className="">
                A distinctly unique race, who could engage in psychic
                communication with Colossi, once lived a life of peace in a land
                named Eraveil. These beings were known as the Caelestites.
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <p className="mb-20">
                These constructs known as "Colossi" are formed of both ancient
                and advanced technology, but their origin cannot be verified.
              </p>
            </div>
          </div>
        </div>
      </section>












      
    </main>
  );
}
