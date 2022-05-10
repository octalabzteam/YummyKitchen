<template>
  <div class="flex justify-center items-center z-20 absolute w-full h-full bg-black bg-opacity-70">
      <div class="flex flex-col justify-center rounded-md w-80 p-10 bg-white">
          <p class="text-center">{{modalMessage}}</p>
          <button 
          @click='$emit("change")' 
          class="self-center bg-black text-white p-3 px-5 rounded-full" 
          >Close</button>
      </div>
  </div>
</template>

<script setup>
const props = defineProps({modalMessage: String})
emits: ["change"]

</script>

<style>

</style>