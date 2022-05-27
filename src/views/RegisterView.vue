<template>
  <section class="h-screen loginscreen">
    <div class="container px-6 py-12 h-full">
      <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">

        <div class="md:w-8/12 lg:w-1/3 xl:w-1/5 lg:ml-20 w-4/5">
          <form>
            <h2 class="text-center pb-10 text-xl font-extrabold">Crete Your Account</h2>
            <!-- User input -->
            <div class="mb-6 flex items-center">
              <userIco class="h-6 mr-2" />
              <input
                type="text"
                class="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-900 focus:outline-none"
                placeholder="User Name"
                v-model="user"
              />
            </div>
            <!-- Email input -->
            <div class="mb-6 flex items-center">
              <emailIco class="h-6 mr-2" />
              <input
                type="text"
                class="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-900 focus:outline-none"
                placeholder="Email address"
                v-model="email"
              />
            </div>

            <!-- Password input -->
            <div class="mb-6 flex items-center">
              <passwordIco class="h-6 mr-2" />
              <input
                type="password"
                class="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-900 focus:outline-none"
                placeholder="Password"
                v-model="password"
              />
              
            </div>

            <!-- Error Message -->
            <div v-show="error" class="text-sm text-center p-3 -translate-y-5 text-red-500 transition-all">{{ errorMsg }}</div>

            <div class="flex justify-between items-center mb-6">
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck3"
                  checked
                />
                <label class="form-check-label inline-block text-gray-700" for="exampleCheck2"
                  >Remember me</label
                >
              </div>
              <router-link
                :to="{name: 'LoginView'}"
                class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >Login ?</router-link
              >
            </div>

            <!-- Submit button -->
            <div class="flex w-full justify-center">
              <button
                @click.prevent="register"
                class="inline-block h-fit px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-rose-600 hover:shadow-lg focus:bg-rose-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-500 active:shadow-lg transition duration-150 ease-in-out w-1/2"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign Up
              </button>

            </div>

     <!--   <a
              class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
              style="background-color: #3b5998"
              href="#!"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                class="w-3.5 h-3.5 mr-2"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                /></svg>Continue with Facebook
            </a>
            <a
              class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
              style="background-color: #55acee"
              href="#!"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-3.5 h-3.5 mr-2"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                /></svg>Continue with Twitter
            </a> -->
          </form>
        </div>
        <div class="md:w-8/12 lg:w-6/12 w-0  mb-12 md:mb-0">
          <img
            src="../assets/out-resturant.png"
            class="w-full"
            alt="Phone image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import emailIco from '../assets/envelope-regular.svg'
import passwordIco from '../assets/lock-alt-solid.svg'
import userIco from '../assets/user-alt-light.svg'
import {ref} from 'vue'

//fire base
import firebase from 'firebase/app'
import "firebase/auth";
import db from '../firebase/firebaseInit';
import router from '../router';


const email = ref("");
const password = ref("");
const user = ref("");
let error = ref(null);
let errorMsg = ref("");

async function register() {
  console.log(email, password, user);
  if (email.value && password.value && user.value) {
    error.value = false;
    errorMsg.value = "";
    const firebaseAuth = await firebase.auth();
    const createUser = await firebaseAuth.createUserWithEmailAndPassword(email.value, password.value)
    const result = await createUser;
    const dataBase = db.collection("users").doc(result.user.uid);
    await dataBase.set({
      Name: user.value,
      Email: email.value,
      isAdmin: false,
    });
    router.push({name:'Home'});
    return;
  }
  error.value=true;
  errorMsg.value = "Please fill all the fields"
  return
}

</script>

<style>

</style>