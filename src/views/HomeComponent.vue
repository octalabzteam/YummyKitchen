<template>
  <!-- <div class="app">
      <h1 class="text-2xl text-orange-600">{{ name }}</h1>
      <h2 class="text-2xl">This is Home component</h2>
  </div> -->
  <HeroSection />
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import HeroSection from '../components/HeroSection.vue'

const store = useStore()

const name = computed(() => {
    return store.state.user.name
})

</script>
