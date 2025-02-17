import React from "react";
import Navbar from "../components/navbar";
export default function Hero() {
  return (
    <div class=" bg-cover bg-center bg-[url('https://img.freepik.com/premium-photo/vivid-blurred-colorful-wallpaper-background_759200-9453.jpg?semt=ais_hybrid')] ">
      <Navbar />
      <section class=" backdrop-blur-lg border-b  border-gray-400">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <p className="text-2xl dark:text-zinc-950 fonr-bold mb-10">
              Bonjour 👋, je m'appelle
            </p>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-zinc-950">
              Youssef baghdadi
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-950">
              étudiant en 2ème année de BTS SIO
            </p>
            <a
              href="/pdf/youssef.pdf"
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
          <div class=" lg:mt-0 lg:col-span-5 lg:flex h-96 w-96 mt-4">
            <img
              src="/images/youssef.jpeg"
              alt="mockup"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <section class="   backdrop-blur-lg border-b  border-gray-400">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7 ">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-zinc-950">
              Présentation 👨🏻‍💻
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-950">
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
      <section class=" bg-cover bg-center bg-no-repeat  h-screen shadow-md shadow-zinc-950 border-b border-gray-400">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-zinc-950">
              Qu'est ce que le BTS SIO 🎓 ?
            </h1>

            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-950">
              Avant de commencer à parler de moi, je vous propose de présenter
              en premier lieu ma filière dont je suis affecté Le Brevet de
              Technicien Supérieur aux Services Informatiques aux Organisations
              (BTS SIO), s'adresse à ceux qui souhaitent se former en deux ans
              aux métiers d'administrateur réseau ou de développeur. Pour par la
              suite intégré directement le marché du travail ou continuer des
              études, dans le domaine de l'informatique.
            </p>
          </div>
          <div class=" lg:mt-0 lg:col-span-5 lg:flex h-96 w-96">
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
      <section class=" backdrop-blur-lg border-b  bg-white">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class=" lg:mt-0 lg:col-span-5 lg:flex h-96 w-96 mt-4">
            <iframe
              className="rounded-xl w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509364!2d144.9556513153172!3d-37.81732797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43fdf0b1eb%3A0x5045675218ce840!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1611871897698!5m2!1sen!2sus"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div class="mr-auto place-self-center lg:col-span-7">
            <p className="text-2xl lg:text-4xl dark:text-zinc-950 fonr-bold mb-10">
              Youssef Baghdadi
            </p>
            <p className="text-xl lg:text-4xl dark:text-zinc-950 fonr-bold mb-10">
              📍 Location: Courtry, 93140, France
            </p>
            <p className="text-xl lg:text-4xl dark:text-zinc-950 fonr-bold mb-10">
              📞 Phone: 0750012284
            </p>
            <p className="text-xl lg:text-4xl dark:text-zinc-950 fonr-bold mb-10">
              📧 Email: ybaghdadi88@gmail.com
            </p>
            <p className="text-xl lg:text-4xl dark:text-zinc-950 fonr-bold mb-10">
              🎂 Age: 21
            </p>{" "}
            <p className="text-xl lg:text-4xl dark:text-zinc-950 fonr-bold mb-10">
              🚗 Driving License: B + Personal Vehicle
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
