<template>
  <div class="profile justify-center flex w-auto h-screen items-center">
    <ModalComponent :modalMessage="modalMessage" v-if="modalActive" v-on:change="closeModal"/>
    <div class="max-w-5xl px-16 py-6">
        <h2 class="text-center mb-4 font-light text-3xl">Account Settings</h2>
        <div class="rounded-lg shadow-xl p-8 bg-white flex flex-col w-96 mx-8 my-auto">
            <div class="inline-flex w-20 h-20 text-3xl bg-black text-white self-center items-center justify-center rounded-full">{{ store.state.user.profileIniitials }}</div>
            <div class="flex self-center text-white text-sm px-4 py-6 rounded-lg bg-gray-300 mx-4 my-0 text-center capitalize">
                <adminIcon class="w-4 h-auto mr-2" />
                <span>admin</span>
            </div>
            <div class="mx-3 my-0">
                <label class="text-sm block pb-1" for="firstName">Name:</label>
                <input class="w-full border-0 bg-slate-200 p-2 h-10" type="text" id="firstName" v-model="name" />
            </div>
            <div class="mx-3 my-0">
                <label class="text-sm block pb-1" for="username">Username:</label>
                <input class="w-full border-0 bg-slate-200 p-2 h-10" disabled type="text" id="username" v-model="username" />
            </div>
            <div class="mx-3 mt-0 mb-4">
                <label class="text-sm block pb-1" for="email">Email:</label>
                <input class="w-full border-0 bg-slate-200 p-2 h-10" disabled type="text" id="email" v-model="email" />
            </div>
            <button @click="updateProfile" class="self-center bg-black rounded-full px-8 py-2 hover:bg-slate-700 hover:shadow-lg text-md text-white">Save</button>
        </div>
    </div>
</div>
</template>

<script setup>
import adminIcon from '../assets/user-crown-light.svg'
import ModalComponent from '../components/ModalComponent.vue'
import {computed, ref} from 'vue'
import {useStore} from 'vuex'

const store = useStore();


const modalMessage = "Changes are saved!";
const modalActive = ref(null);

function closeModal () {
  modalActive.value = !modalActive.value;
}

const name = computed({
    get() {
        return store.state.user.profileName
    },
    set(payload) {
        store.commit("CHANGE_NAME", payload);
    }
})
const email = computed({
    get() {
        return store.state.user.profileEmail
    },
})
const username = computed({
    get() {
        return store.state.user.profileId
    },
})
function updateProfile() {
    store.dispatch("updateUserSettings");
    modalActive.value = !modalActive.value;
}



</script>

<style>

</style>