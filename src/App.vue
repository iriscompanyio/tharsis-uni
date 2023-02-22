<script setup>
import MFooter from "./components/MFooter.vue";
import MInitButton from "./components/MInitButton.vue";
import MLabel from "./components/MLabel.vue";
import Nav from "./components/MNavbar.vue";
</script>
<template>
  <MLabel/>
  <Nav></Nav>
  <RouterView />
  <MFooter/>
  <MInitButton/>
</template>
