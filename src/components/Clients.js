import React from 'react'
import { clients } from '../data'

export const Clients = () => {
  return (
    <section class="clients bg-white dark:bg-gray-900">
    <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">You’ll be in good company</h2>
        <div class="grid grid-cols-2 gap-4 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            {clients.map((clients) => (
                <a href="#" class="flex justify-center ">
                <img src={clients.image} alt="{clients.name}" />                      
            </a>
            ))}
            
        </div>
    </div>
</section>
  )
}
