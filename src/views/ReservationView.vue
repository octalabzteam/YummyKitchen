<template>
    <ModalComponent :modalMessage="modalMessage" v-if="modalActive" v-on:change="closeModal"/>
    <div class="flex flex-col h-screen justify-center p-4 xl:pl-20 w-full text-lg">
        <div class="flex flex-col py-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 ">
            <div class="flex py-6 justify-around">
                <div class="w-3/5 flex flex-col space-y-1">
                    <label for="Quantity">Number of Person</label>
                    <input type="number" id="Quantity" v-model="varPerson" min="1" max="10" class="border-2 border-yellow-600 w-3/4 pl-1">
                </div>
                <div>{{varDate}} | {{varPerson}} | {{varTime}}</div>
            </div> 
            <DatePicker 
            :min-date="new Date()"
            is-expanded
            v-model="date"
            mode="dateTime" 
            is24hr
            :valid-hours="[10,11,12,13,16,17,18,19,20,21,22,23,24]"
            class="datepickercss"
            />
        </div>
        <button @click="tet" class="bg-yellow-600 w-24 p-2 px-5 text-white">Cofirm</button>
    </div>
    <img src="../assets/restaruantinside.png" class="h-64 md:h-96 lg:h-1/2 xl:h-3/4 2xl:h-5/6 bottom-0 absolute right-0 ">
</template>

<script setup>
import ModalComponent from '../components/ModalComponent.vue'

import {useStore} from 'vuex'

import { ref } from '@vue/reactivity';
import { Calendar, DatePicker } from 'v-calendar';

const store = useStore();
let modalMessage = ref(null);
const modalActive = ref(false);


const date = ref(new Date());
const varDate = ref("1 Jun 2022")
const varPerson = ref(2)
const varTime = ref("17:00")
const timezone = '';
let reserved = {};


function tet() {
    console.log(date.value);
    date.value = "2022-06-17T08:18:35.113Z"
    reserved = {
        UserEmail: store.state.user.profileEmail,
        Person: varPerson.value,
        DateTime: date.value,
    }
    modalMessage.value = "Your Reservation is Confirmed on " + date.value
    modalActive.value = !modalActive.value
}
function closeModal () {
  modalActive.value = !modalActive.value;
}
</script>

<style>
.vc-container.vc-is-expanded {
border: 2px solid rgb(196, 143, 28);
}

.vc-time-picker.vc-bordered {
    border-top: 1px solid rgb(196, 143, 28) !important;
}
.vc-time-month, .vc-time-day {
    color: rgb(196, 143, 28) !important;
}
.vc-time-date {
    padding-bottom: 15px;
}
.vc-time-content {
padding: 10px;
}
</style>

<!--https://vcalendar.io/disable-dates.html -->