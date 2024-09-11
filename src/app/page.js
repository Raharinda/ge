"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import svg from "../../public/icon.svg";
import img from "/public/hero.jpg";
import img2 from "/public/hero2.jpg";
import img3 from "/public/hero3.jpg";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

export default function Home() {
  const [isThamActive, setIsThamActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const images = [{ url: img.src }, { url: img2.src }, { url: img3.src }];

  return (
    <main className="pt-16">
      {/*Navbar Section*/}
      <header
        className={`bg-white fixed top-0 w-full z-50 ${
          isScrolled ? "shadow" : ""
        } transition-shadow duration-300`}
      >
        <nav>
          <section>
            <div className="flex text-sm font-medium px-4 sm:px-12 py-2 justify-between">
              <div className="flex flex-wrap">
                <img
                  src="icon.svg"
                  alt="An SVG of an eye"
                  className="size-12"
                />
              </div>

              <div className="hidden sm:flex flex-col mt-4 sm:flex-row gap-4 sm:gap-8 text-center sm:text-left">
                <a
                  href="#prologue"
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
            </div>
          </section>

          <section
            ref={navRef}
            className={`sm:hidden fixed inset-y-0 right-0 w-64 bg-black transform transition-transform duration-300 ease-in-out z-50 ${
              isThamActive ? "translate-x-0" : "translate-x-full"
            } p-6`}
          >
            <div className="flex flex-col space-y-4 text-white">
              <a
                href="#prologue"
                className="hover:underline hover:text-white"
                onClick={() => setIsThamActive(false)}
              >
                Tentang Kami
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
        </nav>
      </header>

      {/*Hero Section*/}
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

      {/*Slider Section*/}

      <section className="my-24 sm:my-56">
        <div className="container mx-auto text-center">
          <div className="slider-wrapper">
            <Slider
              imageList={images}
              width="100%" 
              height="550px" 
            />
          </div>
        </div>
      </section>



      {/* Prologue Section */}
      <section id="prologue" className="mx-12 py-24 ">
        <div>
          <h1 className="font-bold sm:mb-12 text-3xl sm:text-5xl">
            Tentang Kami
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-32 text-sm sm:text-xm text-justify">
            <div className="flex flex-col justify-between ">
              <p className="mb-12">
                Gemapala merupakan salah satu Organisasi siswa tingkat SMA yang
                berpusat di SMAN 1 Purworejo yang berdiri sejak 12 Desember
                1981. Gemapala merupakan wadah bagi siswa SMAN 1 Purworejo untuk
                berkegiatan di alam bebas, berkontribusi bagi masyarakat, serta
                peduli terhadap pelestarian lingkungan.
              </p>
              <p>
                Selain kegiatan petualangan, Gemapala juga sering kali terlibat
                dalam kegiatan bakti sosial, kampanye lingkungan, serta
                pendidikan konservasi alam untuk meningkatkan kesadaran
                masyarakat akan pentingnya menjaga lingkungan hidup.
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <p className="mb-12">
                Dalam perjalanannya, Gemapala telah berperan aktif dalam
                berbagai kegiatan alam dan kemanusiaan, baik di tingkat lokal,
                nasional, maupun internasional. Organisasi ini juga memiliki
                jaringan yang luas dengan kelompok pecinta alam lainnya di
                seluruh Indonesia
              </p>
              <p>
                Kami bangga menjadi bagian dari sejarah panjang SMAN 1 Purworejo
                dan terus berupaya memberikan kontribusi nyata bagi masyarakat
                dan lingkungan, dan semoga Gemapala dapat memberikan dampak
                positif dari masyarakat luas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Overview Section*/}
      <section className="my-16">
        <div className="">
          <h1 className="font-bold mb-12 sm:mb-12 text-3xl sm:text-5xl ml-10">
            Overview
          </h1>

          {/* Grid of 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-10">
            {/* Card 1 */}
            <div className="relative group overflow-hidden">
              <Image
                src={img}
                alt="Image 1"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-white text-center p-4">
                  <h2 className="text-xl font-semibold mb-2">Title 1</h2>
                  <p>Halo</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group overflow-hidden">
              <Image
                src={img}
                alt="Image 2"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-white text-center p-4">
                  <h2 className="text-xl font-semibold mb-2">Title 2</h2>
                  <p>Halo</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group overflow-hidden">
              <Image
                src={img}
                alt="Image 3"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-white text-center p-4">
                  <h2 className="text-xl font-semibold mb-2">Title 3</h2>
                  <p>Halo</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative group overflow-hidden">
              <Image
                src={img}
                alt="Image 4"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-white text-center p-4">
                  <h2 className="text-xl font-semibold mb-2">Title 4</h2>
                  <p>Halo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-2">
        <div className="container mx-auto text-center">
          <p className="text-sm"></p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 11-8 0 4 4 0 018 0zM12 14.5a8 8 0 100-5M21.5 15a9 9 0 11-15-9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 4.75C22 4.45 21.85 4 21.65 3.7a.95.95 0 00-1.3-.15 10 10 0 01-6 2.15 4.75 4.75 0 01-8 3.6 3.5 3.5 0 00-4-3.3"
                />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 9h-3v2h2a9 9 0 00-9-9c-5 0-8 4-8 8s4 8 8 8"
                />
              </svg>
            </a>
          </div>
          <div className="text-sm my-2">
            &copy; {new Date().getFullYear()} Gemapala. All rights reserved.
          </div>
          <p className="text-xs">
            Designed by{" Raharinda "}
            <a href="#" className="hover:underline"></a>
          </p>
        </div>
      </footer>
    </main>
  );
}
