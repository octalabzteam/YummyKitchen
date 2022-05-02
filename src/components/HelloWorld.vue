<template>
  <div class="app">
      <h1 class="mb-6 text-3xl font-extrabold text-orange-400">{{name}}</h1>
      <h2 class="text-2xl mb-6">This is HelloWorld Copmponet</h2>
      <div class="flex flex-row">
      <input v-model="newName" type="text" class="p-2 border border-slate-400 rounded w-52 mr-1"/>
      <button @click="saveName" class="p-2 text-white bg-orange-300 rounded">Submit</button>
      </div>

  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

const router = useRouter()
const store = useStore()

const name = computed(() => {
  return store.state.user.name
})

const newName = ref('')

function saveName() {
    store.dispatch('saveName', newName.value)
    newName.value = ''
    router.push('/')
}

</script>