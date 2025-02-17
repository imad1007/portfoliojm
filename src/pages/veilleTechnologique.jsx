import React from 'react';
import Navbar from "@/components/navbar";

export default function CyberSecurityAwareness() {
  return (
    <div className="bg-cover bg-center bg-[url('https://img.freepik.com/premium-photo/vivid-blurred-colorful-wallpaper-background_759200-9453.jpg?semt=ais_hybrid')]">
      <Navbar />

      <section className="">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="Cybersecurity image" />
          <img className="w-full hidden dark:block rounded-xl" src="https://artscience.ai/wp-content/uploads/2024/01/Embracing-the-Future.png" alt="Cybersecurity defense" />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-zinc-950">L'importance de la cybersécurité aujourd'hui</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-600">
              La cybersécurité est essentielle pour protéger les données et les infrastructures contre les cyberattaques. Découvrez les meilleures pratiques pour sécuriser vos informations personnelles et professionnelles.
            </p>
            <a href="https://www.cisa.gov/" className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900">
              En savoir plus
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="">
        <div className="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-zinc-950">Les menaces courantes en cybersécurité</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-600">
              Des attaques par phishing aux ransomwares, les menaces informatiques évoluent constamment. Apprenez à identifier et prévenir les cyberattaques les plus fréquentes.
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-zinc-950">Protéger ses données personnelles</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-600">
              Vos données sont une cible précieuse pour les hackers. Découvrez les bonnes pratiques pour renforcer la sécurité de vos informations en ligne et éviter le vol d’identité.
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-zinc-950">Les bonnes pratiques en cybersécurité</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-600">
              Utiliser des mots de passe robustes, activer l'authentification à deux facteurs et maintenir ses logiciels à jour sont des mesures clés pour renforcer votre sécurité numérique.
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-zinc-950">L'avenir de la cybersécurité</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-600">
              L’IA et l’apprentissage automatique transforment la cybersécurité. Découvrez comment ces technologies aident à anticiper les cyberattaques et renforcer la protection des systèmes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
