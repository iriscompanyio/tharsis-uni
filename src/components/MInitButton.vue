<template>
  <div
    class="sticky border-2 border-gray-600 bg-gray-700 rounded-100px p-0.5rem bottom-22 mx-auto z-1 <sm:bottom-32 w-270px"
  >
    <a
      href="#home"
      class="text-white text-center rounded-100px hover:bg-gray-600 flex gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-bar-to-right"
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
        <line x1="14" y1="12" x2="4" y2="12" />
        <line x1="14" y1="12" x2="10" y2="16" />
        <line x1="14" y1="12" x2="10" y2="8" />
        <line x1="20" y1="4" x2="20" y2="20" />
      </svg>
      {{ $t("button.button") }}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="8 0 24 24"
          stroke-width="1.5"
          stroke="#597e8d"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />

          <line x1="20" y1="4" x2="20" y2="20" />
        </svg>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-dots"
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
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </svg>
    </a>
  </div>
</template>
