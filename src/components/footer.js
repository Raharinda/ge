import Image from "next/image";

const Footer = () => {
    // footer section logic and styles
    return (
      <footer>
              <footer className="bg-gray-600 text-white py-2">
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
      </footer>
    );
  };
  
  export default Footer;