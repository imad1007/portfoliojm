import React from "react";
import Navbar from "../components/navbar";
import { useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div class=" bg-cover bg-center bg-gradient-to-r from-gray-950 to-purple-950 ">
      <Navbar />
      <section class=" backdrop-blur-lg border-b  border-purple-950">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <p className="text-2xl dark:text-white fonr-bold mb-10">
              Bonjour 👋, je m'appelle
            </p>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Djamil Salhi
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white">
              étudiant en 2ème année de BTS SIO
            </p>
            <a
              href="/pdf/jamil.pdf"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Consultez mon CV
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class=" lg:mt-0 lg:col-span-5 mt-4">
            <img

              src="/images/heroImage.png"
              alt="mockup"
              className="rounded-xl h-96  w-full m-auto"
            />
          </div>
        </div>
        <div className="max-w-screen-xl m-auto hidden lg:flex">
          <div className="lg:grid overflow-scroll md:grid-cols-3 lg:overflow-hidden lg:grid-cols-6 gap-4  w-full p-4 ">
            <div className="h-20 w-20 overflow-hidden">
              <img
                src="images/node-js.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-20 w-20 overflow-hidden">
              <img
                src="images/python.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-20 w-20 overflow-hidden">
              <img
                src="images/html.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-20 w-20 overflow-hidden">
              <img
                src="images/react.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-20 w-20 overflow-hidden">
              <img
                src="images/mysql.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-20 w-20 overflow-hidden">
              <img
                src="/images/js.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="   backdrop-blur-lg border-b   border-purple-950">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7 ">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Présentation 👨🏻‍💻
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white">
              J'ai débuté le développement web en autodidacte vers fin 2017, en
              réalisant de petits projets. Puis, j'ai commencé à explorer le
              back-end il y a 2 ans avec l'apprentissage du langage PHP. Le BTS
              SIO m'a permis de structurer mes apprentissages et à améliorer mon
              organisation.
            </p>
          </div>
          <div class=" lg:mt-0 lg:col-span-5 lg:flex h-96 w-96 ">
            <img src="/images/heroImage.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section class=" bg-cover bg-center bg-no-repeat  h-screen shadow-md shadow-zinc-950 border-b border-purple-950">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Qu'est ce que le BTS SIO 🎓 ?
            </h1>

            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white">
              Avant de commencer à parler de moi, je vous propose de présenter
              en premier lieu ma filière dont je suis affecté Le Brevet de
              Technicien Supérieur aux Services Informatiques aux Organisations
              (BTS SIO), s'adresse à ceux qui souhaitent se former en deux ans
              aux métiers d'administrateur réseau ou de développeur. Pour par la
              suite intégré directement le marché du travail ou continuer des
              études, dans le domaine de l'informatique.                      
            </p>
          </div>
          <div class=" lg:mt-0 lg:col-span-5 lg:flex h-full w-96">
            <div class="grid grid-cols-2 gap-2">
              <div>
                <img
                  class="w-64 h-64 object-cover rounded-lg"
                  src="https://www.efrei.fr/wp-content/uploads/2024/06/EFREI-CampusBordeaux-042024CorinneHameau-042-scaled.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="w-64 h-64 object-cover rounded-lg"
                  src="https://res.cloudinary.com/mediaschool/image/upload/v1/Iris%20images/IRIS-PARIS-BAN-3_qcelhn"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="w-64 h-64 object-cover rounded-lg"
                  src="https://cfa-insta.fr/wp-content/uploads/2020/09/xpasserelle-universitaire_btssio.png.pagespeed.ic_.tezZeO5C3Y.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="w-64 h-64 object-cover rounded-lg"
                  src="images/univ.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class=" relative border-b  bg-cover bg-center bg-gradient-to-r from-gray-950 to-purple-950">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class=" lg:mt-0 lg:col-span-5 lg:flex h-96 w-96 mt-4">
            <iframe
              className="rounded-xl w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.235268163457!2d2.458809111593273!3d48.78158757120216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60caf8f10341d%3A0xd87350234b55c236!2s3%20Rue%20Paul%20Gauguin%2C%2094000%20Cr%C3%A9teil%2C%20France!5e1!3m2!1sen!2sus!4v1743673872428!5m2!1sen!2sus"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <p className="text-2xl lg:text-4xl dark:text-white font-bold mb-10">
              Djamil Salhi
            </p>
            <p className="text-xl lg:text-2xl dark:text-white font-bold mb-4">
              📍 3 rue Paul Gauguin, ville Crétei
            </p>
            <p className="text-xl lg:text-2xl dark:text-white font-bold mb-4">
              📞 Phone: +33 6 51 37 76 33
            </p>
            <p className="text-xl lg:text-2xl dark:text-white font-bold mb-4">
              📧 Email:  salhidjamil2002@gmail.com
            </p>
            <p className="text-xl lg:text-2xl dark:text-white font-bold mb-4">
              🎂 Age: 22
            </p>
            <p className="text-xl lg:text-2xl dark:text-white font-bold mb-4">
              🚗 Driving License: B + Personal Vehicle
              
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
