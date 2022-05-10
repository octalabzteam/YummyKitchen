<template>
  <section class="h-screen loginscreen">
    <div class="container px-6 py-12 h-full">
      <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <ModalComponent :modalMessage="email" v-if="modalActive" v-on:change="closeModal"/>
        <SpinnerComponent v-if="spinnerActive" />
        <div class="md:w-8/12 lg:w-1/3 xl:w-1/5 lg:ml-20 w-4/5">
          <form>
            <div class="text-center pb-7 space-y-2 ">
              <h2 class="text-xl font-extrabold">Reset Password</h2>
              <p>Enter your email to reset it</p>
            </div>
            <!-- Email input -->
            <div class="mb-6 flex items-center">
              <emailIco class="h-6 mr-2" />
              <input
                type="text"
                class="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-800 focus:outline-none"
                placeholder="Email address"
                v-model="email"
              />
            </div>

            <!-- Submit button -->
            <div class="flex justify-center w-full space-x-2">
              <button
                type="submit"
                class="inline-block h-fit px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out w-1/2"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        <div class="md:w-8/12 lg:w-6/12 w-0  mb-12 md:mb-0">
          <img
            src="../assets/Icons/out-resturant.png"
            class="w-full"
            alt="Phone image"
            @click="closeModal"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import emailIco from '../assets/Icons/envelope-regular.svg'
import ModalComponent from '../components/ModalComponent.vue'
import SpinnerComponent from '../components/SpinnerComponent.vue'
import router from '../router';
import {ref} from 'vue'

const email = ref("abc");
const modalActive = ref(false);
const spinnerActive = ref(false);
const modalMessage = '';

function closeModal () {
  modalActive.value = !modalActive.value;
    router.push({name:'Home'});
}

</script>

<style>

</style>