<template>
  <div class="bg-black w-full <2xl:px-10 grid py-10 lg:px-80">
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <div class="">
        <div class="mb-5">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675576841/logo_principal_dark_1_czcm86.png"
            class="flex h-20 md:h-14"
            alt="Logo Tharsis"
          />
        </div>
        <p tag="h1" class="<2xl:text-1xl text-gray-400 sm:text-1xl mb-7">
          We are Tharsis UNI, the team that will participate in the NASA Human
          Exploration Rover Challenge 2023.
        </p>
        <p class="<2xl:text-1xl text-1xl text-gray-400 mb-1">
          National University of Engineering
        </p>
        <p class="<2xl:text-1xl text-1xl text-gray-400 mb-2">Lima, Peru</p>
      </div>
      <div class="grid <2xl:mt-3 text-gray-400 grid-cols-2">
        <div class="lg:px-10">
          <p class="<2xl:text-20px text-white mb-2">Project</p>
          <ul>
            <li>About</li>
            <li class="flex gap-2">
              project.support
              <span class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-heart"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ff2825"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                  /></svg
              ></span>
            </li>
            <li>project.contact</li>
          </ul>
        </div>
        <div class="lg:px-10">
          <p class="<2xl:text-20px text-white mb-2">Community</p>
          <ul class="text-orange-700">
            <li>About us</li>
            <li>Events</li>
          </ul>
        </div>
      </div>
      <div class="<2xl:mt-3 text-gray-400">
        <p class="<2xl:text-20px text-white mb-2">Recent news</p>
        <ul class="<2xl:flex gap-5">
          <li>
            How is the space vehicle designed at UNI that has surprised NASA
          </li>
          <li>
            NASA selects UNI space vechicle among the best 15 designs for global
            contest
          </li>
        </ul>
      </div>
    </div>
    <hr class="border-1 mx-auto w-full border-gray mt-8 mb-7" />
    <div class="grid grid-cols-2 <sm:grid-cols-1">
      <div class="<sm:text-center <sm:mt-10">
        <p class="text-gray-400">© 2023 Tharsis UNI</p>
      </div>
      <div class="flex gap-4 <sm:hidden">
        <!-- FACEBOOK -->
        <div class="bg-white ml-auto"></div>
        <a href="https://www.facebook.com/tharsisUNI" class="hover:bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-facebook"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
            />
          </svg>
        </a>
        <!-- INSTAGRAM -->
        <a href="https://www.instagram.com/tharsis.uni/" class="hover:bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-instagram"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
        <!-- LINKEDIN -->
        <a
          href="https://www.linkedin.com/company/tharsis-uni/"
          class="hover:bg-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-linkedin"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </a>
        <!-- TWITTER -->
        <a href="https://twitter.com/TharsisUni" class="hover:bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-twitter"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
            />
          </svg>
        </a>
        <!-- YOUTUBE -->
        <a
          href="https://www.youtube.com/channel/UCufEG5LrcbffLriJslZt6vg/videos"
          class="hover:bg-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-youtube"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="4" />
            <path d="M10 9l5 3l-5 3z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
