import React from 'react'
import Navbar from "@/components/navbar";

export default function VeilleTechnologique() {
  return (
    <div class=" bg-cover bg-center bg-[url('https://img.freepik.com/premium-photo/vivid-blurred-colorful-wallpaper-background_759200-9453.jpg?semt=ais_hybrid')] ">
    <Navbar/>
    <section class="">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"/>
            <img class="w-full hidden dark:block rounded-xl" src="https://artscience.ai/wp-content/uploads/2024/01/Embracing-the-Future.png" alt="dashboard image"/>
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-zinc-950">Adopter l’IA : l’avenir de l’automatisation</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-600">Artificial Intelligence is transforming industries from healthcare to finance. Learn how AI-driven tools can optimize your business processes and enhance decision-making.</p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8285156/" class="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900">
                En savoir plus
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </section>

    <section class="">
        <div class="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl  sm:py-16 lg:px-6">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-zinc-950">L’IA et la prise de décision intelligente</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-600">Les algorithmes d’IA analysent de vastes quantités de données pour révéler des tendances et des insights. Apprenez comment exploiter l’IA pour des prévisions plus précises, des stratégies plus efficaces et un avantage concurrentiel..</p>

            </div>
        </div>
    </section>

    <section class="">
        <div class="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl  sm:py-16 lg:px-6">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-zinc-950">L’IA et l’optimisation des opérations</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-600">L’IA automatise les tâches répétitives, libérant ainsi du temps pour l’innovation et la créativité. Découvrez comment intégrer l’IA dans vos flux de travail pour rationaliser les opérations, réduire les erreurs et accroître la productivité.</p>

            </div>
        </div>
    </section>
    <section class="">
        <div class="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl  sm:py-16 lg:px-6">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-zinc-950">L’avenir de l’IA : au-delà de l’automatisation</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-600">Gardez une longueur d’avance sur les cybermenaces grâce aux dernières technologies, pratiques et cadres de sécurité pour protéger vos données et votre infrastructure.</p>

            </div>
        </div>
    </section>
    <section class="">
        <div class="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl  sm:py-16 lg:px-6">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-zinc-950">L’intelligence artificielle dans le service client</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-600">Des chatbots aux assistants virtuels, l’IA révolutionne le service client. Explorez comment les solutions alimentées par l’IA peuvent améliorer l’expérience utilisateur, offrir un support instantané et augmenter la satisfaction.</p>

            </div>
        </div>
    </section>
</div>

  )
}
