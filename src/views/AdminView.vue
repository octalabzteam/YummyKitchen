<template>
  <div class="h-screen w-full flex items-center justify-center">
    <div class="flex flex-col w-96 h-96 p-10 items-center shadow-2xl">
      <h2 class="text-3xl py-10">Administration</h2>
      <div>
        <h2>Add Admin</h2>
      </div>
      <div class="w-full pt-5">
        <input class="w-full border-2 p-2 rounded-full text-sm" placeholder="Enter user email to make them admin" type="text" id="addAdmins" v-model="adminEmail">
      </div>
      <span class="py-2 text-green-600" v-bind:class="functionMsgColor">{{ functionMsg }}</span>
      <button @click="addAdmin" class="bg-black text-white p-3 rounded-full">Submit</button>
    </div>
  </div>
</template>

<script setup>
import firebase from 'firebase/app'
import db from '../firebase/firebaseInit';

import {ref} from 'vue'
const adminEmail = ref("");

const functionMsg = ref("");
const functionMsgColor = ref("");

async function addAdmin() {
    const snapshot = await firebase.firestore().collection('users').get()
    snapshot.forEach(docs => {
      if (docs.data().Email == adminEmail.value) {
        db.collection('users').doc(docs.id).update({
          isAdmin: true,
        }).then(
          functionMsg.value="Sucessfully added as Admin",
          functionMsgColor.value="text-green-600",
          adminEmail.value = "",
        ).catch(err => {
          functionMsg.value=err;
        });
      }
      //console.log(docs.id);
    })
    if (adminEmail.value) {
      functionMsg.value="Email Not Found"
      functionMsgColor.value="text-red-600"
    }
    //console.log(snapshot.docs.map(doc => doc.data().Email));
    //return snapshot.docs.map(doc => doc.data());
}


</script>

<style>

</style>