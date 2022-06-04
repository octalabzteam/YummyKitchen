<template>
  <div class="flex flex-col">
    <navigation />
    <router-view />
    <FooterBar />
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {computed, provide, onMounted} from 'vue'

import navigation from "./components/NavigationBar.vue"
import FooterBar from "./components/FooterBar.vue"
import router from "./router/index"

import firebase from 'firebase/app'
import "firebase/auth";

provide('useStore', useStore)
const store = useStore();

onMounted(() => {
  firebase.auth().onAuthStateChanged((user) => {
    store.commit("UPDATE_USER", user);
    if (user) {
      store.dispatch("getCurrentUser")
      console.log(store.state.user.profileEmail);
    }
  })
})

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap');

*{
  margin: 0;
  padding: 0;
  font-family: 'Merriweather Sans', sans-serif;
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
