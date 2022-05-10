<template>
  <!-- <div class="app">
      <h1 class="text-2xl text-orange-600">{{ name }}</h1>
      <h2 class="text-2xl">This is Home component</h2>
  </div> -->
  <HeroSection :WelcomeInfo="WelcomScreen"/>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import HeroSection from '../components/HeroSection.vue'

const store = useStore()

const name = computed(() => {
    return store.state.user.name
})

  const WelcomScreen = [
    {
      title: "Yummy Kitchen",
      short_desc: "Ritu Dalmia and Viviana Varese, an Indian and an Italian heart, invite you on a journey through their love for travel, discovery, and sharing their experiences along the way.",
      status: true,
      photo: "https://avada.theme-fusion.com/restaurant/wp-content/uploads/sites/112/2021/04/hero-mobile.jpg",
      logo: "https://yummy-kitchen.de/wp-content/uploads/2020/07/logo-restaurant@1x.png"
    },
    {
        title: "Our Wall of Best",
        description: "Ritu Dalmia and Viviana Varese, an Indian and an Italian heart, invite you on a journey through their love for travel, discovery, and sharing their experiences along the way. through their love for travel, discovery, and sharing their experiences along the way.",
        photo: "https://i0.wp.com/www.spicarestaurant.com/spica-uploads/2019/06/Spica-insalata-Som-tam-Thailandia-1-e1573739431995-800x800.jpg"
    },
    {
      homeMenu1: "https://i0.wp.com/www.spicarestaurant.com/spica-uploads/2019/11/IMG-0218-540x540.jpg",
      homeMenu2: "https://i0.wp.com/www.spicarestaurant.com/spica-uploads/2019/11/MG_6415-e1573739251360-540x540.jpg",
    }
        ]
</script>
