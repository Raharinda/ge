const Prologue = () => {
  // prologue section logic and styles
  return (
    <section id="prologue">
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
    </section>
  );
};

export default Prologue;
