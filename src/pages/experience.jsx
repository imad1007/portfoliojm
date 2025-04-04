import React from "react";
import Navbar from "@/components/navbar";

export default function Project() {
  return (
    <div className=" bg-cover bg-center bg-gradient-to-r from-gray-950 to-purple-950 w-full h-auto pb-20">
      <Navbar />
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          experience professionnelles
        </h2>
        <ol class="relative border-s border-blue-200 dark:border-blue-950">
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-blue-900 dark:bg-blue-950"></div>
            <time class="mb-1 text-sm font-normal leading-none  dark:text-purple-500 px-2 rounded-xl bg-purple-950">
            LE CROUSTY BONEUIL SUR MARNE
            </time>
            <h3 class="text-lg font-semibold text-blue-900 dark:text-purple-300">
            Equipier polyvalent 
            </h3>
            <p class="mb-4 text-base font-normal text-blue-500 dark:text-purple-300">
              <span>De juin 2023 à juin 2024
              </span>
              <br />
              CAISSIER ET EQUIPIER POLYVALENT

            </p>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-blue-900 dark:bg-blue-950"></div>
            <time class="mb-1 text-sm font-normal leading-none  dark:text-purple-500 px-2 rounded-xl bg-purple-950">
            SARL MARKETEL ORAN
            </time>
            <h3 class="text-lg font-semibold text-blue-900 dark:text-purple-300">
            Téléopérateur 
            </h3>
            <p class="mb-4 text-base font-normal text-blue-500 dark:text-purple-300">
              <span>De février 2022 à septembre 2022</span>
              <br />
              Acquisition d'expérience en bureautique et en communication surtout
dans le domaine associative
            </p>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-blue-900 dark:bg-blue-950"></div>
            <time class="mb-1 text-sm font-normal leading-none  dark:text-purple-500 px-2 rounded-xl bg-purple-950">
            ELIOR SERVICES BEZON
            </time>
            <h3 class="text-lg font-semibold text-blue-900 dark:text-purple-300">
            Agent des services généraux
            </h3>
            <p class="mb-4 text-base font-normal text-blue-500 dark:text-purple-300">
              <span>D'août 2023 à septembre 2023</span>
              <br />
              Gestion des programmes des agents de nettoyage du métro de paris via
des tableaux excel
et des mails et messages téléphoniques

            </p>
          </li>
         
        </ol>
      </div>
    </div>
  );
}
