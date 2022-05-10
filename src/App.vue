<template>
  <div class="flex flex-col">
    <navigation />
    <router-view />
    <FooterBar />
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {computed, provide} from 'vue'

import navigation from "./components/NavigationBar.vue"
import FooterBar from "./components/FooterBar.vue"
import router from "./router/index"

provide('useStore', useStore)

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');

*{
  margin: 0;
  padding: 0;
  font-family: 'Merienda', cursive;
}

.app {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
 }

.link {
cursor: pointer;
text-decoration: none;
color: black;
}

.link-light {
  color: #fff;
}

</style>
