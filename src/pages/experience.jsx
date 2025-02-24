import React from "react";
import Navbar from "@/components/navbar";

export default function Project() {
  return (
    <div className=" bg-cover bg-center bg-[url('https://img.freepik.com/premium-photo/vivid-blurred-colorful-wallpaper-background_759200-9453.jpg?semt=ais_hybrid')] w-full h-screen">
      <Navbar />
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-950">
      experience professionnelles
              </h2>
        <ol class="relative border-s border-blue-200 dark:border-blue-950">
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-blue-900 dark:bg-blue-950"></div>
            <time class="mb-1 text-sm font-normal leading-none text-blue-400 dark:text-blue-700 px-2 rounded-xl bg-blue-300">
              Stagiaire Développeur Web
            </time>
            <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-950">
              CAPLOGY
            </h3>
            <p class="mb-4 text-base font-normal text-blue-500 dark:text-blue-950">
              <span>1 Juillet 2024 - Août 2024</span>
              <br />
              Formation Sur Le FrameWork Django Création Du Ste Principal pour
              La Société En Utilisant Différents Langages De Programmation
              :HTML/CSS/JS/Django
            </p>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-blue-900 dark:bg-blue-950"></div>
            <time class="mb-1 text-sm font-normal leading-none text-blue-400 dark:text-blue-700 px-2 rounded-xl bg-blue-300">
              Stagiaire Développeur Web
            </time>
            <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-950">
              MAIRIE BERKANE
            </h3>
            <p class="mb-4 text-base font-normal text-blue-500 dark:text-blue-950">
              <span>Janvier 2023 - Mars 2023</span>
              <br />
              Stage Requis Pour Valider La Formation De Technicien Spécialisé En
              Développement Digital Développement D'un Site Web Utilisant Le
              Framework Laravel
            </p>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-blue-900 dark:bg-blue-950"></div>
            <time class="mb-1 text-sm font-normal leading-none text-blue-400 dark:text-blue-700 px-2 rounded-xl bg-blue-300">
              Equipier Polyvalent Etudiant
            </time>
            <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-950">
              LIDL
            </h3>
            <p class="text-base font-normal text-blue-500 dark:text-blue-950">
              Juillet 2024 Présent
            </p>
          </li>
          <li class="ms-4">
            <div class="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-blue-900 dark:bg-blue-950"></div>
            <time class="mb-1 text-sm font-normal leading-none text-blue-400 dark:text-blue-700 px-2 rounded-xl bg-blue-300">
              Chauffeur Livreur
            </time>
            <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-950">
              URBAN TRANSPORT
            </h3>
            <p class="text-base font-normal text-blue-500 dark:text-blue-950">
              <span className="">Janvier 2024 Mai 2024</span>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
