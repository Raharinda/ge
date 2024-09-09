"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import svg from "../../public/icon.svg";
import img from "../image/hero.jpg";

export default function Home() {
  const [isThamActive, setIsThamActive] = useState(false);
  const navRef = useRef(null);

  const toggleTham = () => {
    setIsThamActive(!isThamActive);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsThamActive(false);
    }
  };

  useEffect(() => {
    if (isThamActive) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isThamActive]);

  return (
    <main>
      <section className="flex bg-black py-2">
        <span className="text-xs mx-auto text-white font-thin text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          eget nibh vitae blandit.
        </span>
      </section>

      <section className="flex text-sm font-medium px-4 sm:px-12 py-6 justify-between">
        <div className="flex flex-wrap">
          <img src="icon.svg" alt="An SVG of an eye" className="size-16" />
        </div>

        <div className="hidden sm:flex flex-col mt-4 sm:flex-row gap-4 sm:gap-8 text-center sm:text-left">
          <a
            href="#"
            className="hover:underline hover:transition-all hover:duration-300"
          >
            Tentang Kami
          </a>
          <a
            href="#"
            className="hover:underline hover:transition-all hover:duration-300"
          >
            Program
          </a>
          <a
            href="#"
            className="hover:underline hover:transition-all hover:duration-300"
          >
            Kontak
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <div className="sm:hidden mt-4">
          <div
            className={`tham tham-e-squeeze tham-w-6 ${
              isThamActive ? "tham-active" : ""
            }`}
            onClick={toggleTham}
          >
            <div className="tham-box">
              <div className="tham-inner" />
            </div>
          </div>
        </div>
      </section>

      {/* Hamburger Menu Content */}
      <section
        ref={navRef}
        className={`sm:hidden fixed inset-y-0 right-0 w-64 bg-black transform transition-transform duration-300 ease-in-out z-50 ${
          isThamActive ? "translate-x-0" : "translate-x-full"
        } p-6`}
      >
        <div className="flex flex-col space-y-4 text-white">
          <a
            href="#"
            className="hover:underline hover:text-white"
            onClick={() => setIsThamActive(false)}
          >
            Tentang kami
          </a>
          <a
            href="#"
            className="hover:underline hover:text-white"
            onClick={() => setIsThamActive(false)}
          >
            Program
          </a>
          <a
            href="#"
            className="hover:underline hover:text-white"
            onClick={() => setIsThamActive(false)}
          >
            Kontak
          </a>
        </div>
      </section>

      <section id="" className="sm:mt-10 px-4">
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
            <a href="#about" className="text-md">
              Selengkapnya
            </a>
          </button>
        </div>
      </section>

      <section className="my-28 sm:my-56">
        <div className="container mx-auto text-center">
          <Image src={img} alt="Background Image" className="mx-auto" />
        </div>
      </section>

      <section id="about" className="sm:px-10 mx-20">
        <div>
          <h1 className="font-bold mb-12 sm:mb-24 text-3xl sm:text-5xl">
            Prologue
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-32 mb-32 text-sm sm:text-xm text-justify">
            <div className="flex flex-col justify-between ">
              <p className="mb-12">
                Gemapala merupakan salah satu Organisasi siswa tingkat SMA yang
                berpusat di SMAN 1 Purworejo yang berdiri sejak 12 Desember
                1981. Gemapala merupakan wadah bagi siswa SMAN 1 Purworejo untuk
                berkegiatan di alam bebas, berkontribusi bagi masyarakat, serta
                peduli terhadap pelestarian lingkungan.
              </p>
              <p>
                Gemapala berdiri di Pangenjurutengah, Purworejo. Nama yang
                digunakan waktu itu adalah Mapala Prajnaparamita. Prajnaparamita
                diambil....
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
        </div>
      </section>

      <section>
        <div><h1 className="font-bold text-3xl">Overview</h1></div>
      </section>



    </main>
  );
}
