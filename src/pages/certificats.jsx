import React from "react";
import Navbar from "@/components/navbar";
export default function Certificats() {
  return (
    <>
      <Navbar />
      <div>
        <section class="bg-white dark:bg-zinc-950">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Mes certificats
              </h2>
              <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"></p>
            </div>
            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
                <a href="/pdf/html5css3">
                {/* <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
              </a> */}
                <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>HTML5 et CSS</p>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">
                    Apprenez à créer votre site web avec HTML5 et CSS3
                  </span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Apprenez à créer et personnaliser votre propre site web en
                    utilisant les langages fondamentaux du développement web :
                    HTML5 et CSS. Ce cours vous guidera pas à pas dans la
                    structuration de vos pages avec HTML5
                  </p>
                </div>
                </a>
              </div>
              <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
                <div class="p-5">
                <a href="/pdf/responsive">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Responsive Web Design Course</p>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">
                    Create dynamic, mobile-friendly websites that adapt to all
                    devices
                  </span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Discover how to build responsive websites that look great on
                    any screen size. This course covers flexible grids, media
                    queries, and modern CSS techniques to ensure your web
                    designs are both functional and user-friendly across
                    desktops, tablets, and smartphones.
                  </p>
                  </a>
                </div>
              </div>
              <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
                <div class="p-5">
                    <a href="/pdf/bootstrap5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Bootstrap 5 Course</p>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">
                    Créez des sites web responsives avec Bootstrap 5
                  </span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Apprenez à concevoir des sites web modernes et adaptatifs en
                    utilisant Bootstrap 5, le framework CSS le plus populaire.
                    Ce cours vous montrera comment utiliser les composants
                    préconçus, le système de grille flexible et les classes
                    utilitaires pour créer des interfaces élégantes et
                    responsives rapidement et efficacement.
                  </p>
                  </a>
                </div>
              </div>
              <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
                <div class="p-5">
                    <a href="/pdf/bootstrap">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Bootstrap 4 Course</p>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">
                    Créez des sites web responsives avec Bootstrap 4
                  </span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Apprenez à créer des sites web modernes et responsives en
                    utilisant Bootstrap 4, l'un des frameworks CSS les plus
                    populaires. Ce cours vous guidera dans l'utilisation du
                    système de grille, des composants interactifs et des classes
                    utilitaires pour concevoir des interfaces adaptatives,
                    esthétiques et fonctionnelles sur tous les appareils.
                  </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
