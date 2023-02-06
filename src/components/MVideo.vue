<template>
    <div class="max-w-7xl w-full mx-auto py-16 flex flex-col items-center bg-black-500">
      <div class="mx-auto text-center max-w-md mb-10">
        <p class="mb-5 text-orange-800 font-extrabold text-3xl <sm:(!text-6xl mb-10)">
          Our current mission
        </p>
        <p class="text-orange-500 font-semibold"
          >This year we are competing worldwide in NASA Human Exploration Rover Challenge (HERC) 2023.</p
        >
      </div>
      <div class="grid md:grid-cols-2 gap-8 mt-8 w-full h-sm">
        <div class="border-2 border-white aspect-video w-full rounded-xl h-full md:h-auto">
          <iframe
            class="w-full h-full"
            :src="`https://www.youtube.com/embed/kmV5IDXUc9A`"
            title="Diseño Mecánico Trabajando | Mechanical design"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div class="border-2 border-white aspect-video w-full rounded-xl h-full md:h-auto">
          <iframe
            class="w-full h-full"
            :src="`https://www.youtube.com/embed/Sc-oLX-Pwns`"
            title="Diseño Mecánico Trabajando | Mechanical design"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
</template>