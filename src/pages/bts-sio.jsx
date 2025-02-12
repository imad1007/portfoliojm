import React from "react";
import Navbar from "@/components/navbar";
export default function Presentation() {
  return (<>
  <Navbar/>
    <div>
      <section className="bg-white dark:bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-zinc-500">
            BTS SIO
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-zinc-500">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Présentation
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  BTS SIO (Services Informatiques aux Organisations) est une
                  spécialité liée au développement web ainsi que les réseaux
                  informatiques. Elle dure deux ans.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-zinc-500">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Les options
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Dans ce BTS SIO, on a le choix entre 2 spécialités : SLAM
                  (Solutions Logicielles et Applications métiers) SISR
                  (Solutions d'infrastructure, Systèmes et Réseaux) L'option
                  SISR s'oriente vers la mise en place des réseaux informatiques
                  tandis que l'option SLAM s'oriente sur le développement de
                  sites web.
                </p>
              </div>
            </div>
            
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-zinc-500">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Examens
                </h3>
                <div className="text-gray-500 dark:text-gray-400">
                  <div className="relative overflow-x-auto">
                  <div class="w-full md:w-96 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
  <div class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-100 dark:text-gray-400 px-6 py-3">
    Examens
  </div>
  <ul>
    <li class="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200 px-6 py-4 font-medium text-gray-900 dark:text-zinc-500">
      E1 - Culture générale et expression
    </li>
    <li class="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200 px-6 py-4 font-medium text-gray-900 dark:text-zinc-500">
      E2 - Expression et communication en langue anglaise
    </li>
    <li class="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200 px-6 py-4 font-medium text-gray-900 dark:text-zinc-500">
      E3 - Mathématiques pour l'informatique
    </li>
    <li class="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200 px-6 py-4 font-medium text-gray-900 dark:text-zinc-500">
      E4 - Culture économique juridique et managériale pour l'informatique
    </li>
    <li class="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200 px-6 py-4 font-medium text-gray-900 dark:text-zinc-500">
      E5 - Support et mise à disposition de services informatiques
    </li>
    <li class="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200 px-6 py-4 font-medium text-gray-900 dark:text-zinc-500">
      E6 - Administration des systèmes et des réseaux (option SISR)
    </li>
    <li class="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200 px-6 py-4 font-medium text-gray-900 dark:text-zinc-500">
      E7 - Conception et développement d'applications (option SLAM)
    </li>
    <li class="bg-white dark:bg-gray-100 px-6 py-4 font-medium text-gray-900 dark:text-zinc-500">
      E7 - Cybersécurité des services informatiques (spécifique à l'option)
    </li>
  </ul>
</div>

                  </div>
                </div>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-zinc-500">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Les débouchés

                </h3>
                <p className="dark:text-gray-500 text-sm">Après le BTS SIO, on peut faire une poursuite d'études ou directement aller dans le monde du travail.</p>

                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          SISR
                        </th>
                        <th scope="col" className="px-6 py-3">
                          SLAM
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4">Pilote d’exploitation</td>
                        <td className="px-6 py-4">Développeur informatique</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4">
                          Administrateur systèmes et réseaux
                        </td>
                        <td className="px-6 py-4">Programmeur</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4">
                          Gestionnaire du parc informatique de l’entreprise
                        </td>
                        <td className="px-6 py-4">Analyste programmeur</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4">
                        Analyste d’exploitation informatique
                        </td>
                        <td className="px-6 py-4">Technicien informatique</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4">
                        Technicien des réseaux de télécommunications
                        </td>
                        <td className="px-6 py-4">Responsable des services applicatifs</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4">
                        Technicien d’infrastructure
                        </td>
                        <td className="px-6 py-4">Informaticien d’études</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4">
                        Technicien systèmes et réseaux
                        </td>
                        <td className="px-6 py-4">Développeur d’applications informatiques</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
             </div>
          </div>
        </div>
      </section>
    </div>
   </>
  );
}
