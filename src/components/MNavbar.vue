<script>
  import LanguageSwitcher from './LanguageSwitcher.vue';
  export default {
    components:{LanguageSwitcher}
  }
</script>
<template>
  <div class="<2xl:px-1rem px-4rem py-1rem items-center bg-black w-full">
    <div class="<2xl:px-1rem px-4rem flex items-center justify-between mx-auto max-w-7xl">
      <div class="<2xl:hidden ml-56px">
        <img
          src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675576841/logo_principal_dark_1_czcm86.png"
          class="flex h-12 md:h-14"
          alt="Logo Tharsis"
        />
      </div>
      <div class="<2xl:ml-16px items-center ml-56px">
        <a
          href="#home"
          class="px-2rem text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
          aria-current="page"
          >{{ $t("nav.home") }}</a
        >

        <a
          href="#mission"
          class="px-2rem text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
          >{{ $t("nav.events") }}</a
        >

        <a
          href="#community"
          class="px-2rem text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
          >{{ $t("nav.community") }}</a
        >

        <a
          href="#mission"
          class="<sm:hidden px-2rem text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
          >{{ $t("nav.challenges") }}</a
        >
      </div>
      <div class="<xl:hidden ml-56px">
        <!-- <a
          href="#"
          class="px-2rem text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
          aria-current="page"
          >{{ $t("nav.a") }}</a
        > -->
        <LanguageSwitcher/>
        <a
          href="#sponsors"
          class="px-2rem ml-1rem text-gray-600 bg-light-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
          aria-current="page"
          >Sponsor</a
        >
      </div>
    </div>
  </div>
</template>
