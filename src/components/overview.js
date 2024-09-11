import Image from "next/image";
import img from "/public/hero.jpg";

const Overview = () => {
  // overview section logic and styles
  return (
    <section>
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
    </section>
  );
};

export default Overview;
