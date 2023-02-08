<template>
    <div class="pb-4rem max-w-7xl w-full mx-auto py-4 flex flex-col items-center bg-black-500">
      <div class="mx-auto text-center max-w-md mb-10">
        <p class="mb-5 text-orange-700 font-extrabold text-5xl <sm:(!text-6xl mb-10)">
          Our current mission
        </p>
        <p class="text-white font-semibold"
          >This year we are competing worldwide in NASA Human Exploration Rover Challenge (HERC) 2023.</p
        >
      </div>
      <div class="grid md:grid-cols-2 gap-8 mt-8 w-full h-sm <xs:w-auto">
        <div class="<border-2 border-white aspect-video <xl:w-auto <xl:h-auto <xl:mx-2rem w-full rounded-xl h-full md:h-auto">
          <iframe
            class="<lg:h-auto <xl:w-full w-full h-full"
            :src="`https://www.youtube.com/embed/kmV5IDXUc9A`"
            title="Diseño Mecánico Trabajando | Mechanical design"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div class="border-2 border-white aspect-video <xl:w-auto <xl:mx-2rem w-full rounded-xl h-full md:h-auto">
          <iframe
            class="<lg:h-auto <xl:w-full w-full h-full"
            :src="`https://www.youtube.com/embed/Sc-oLX-Pwns`"
            title="Diseño Mecánico Trabajando | Mechanical design"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
</template>