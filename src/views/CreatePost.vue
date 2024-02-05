<template>
  <div class="flex flex-col justify-center items-center h-screen">
      <div class="h-3/4 w-3/4">
           <QuillEditor v-model:content="content" theme="snow" :toolbar="toolbarOptions" />
           <button @click="showContent()" class="p-2 bg-slate-400">Save</button>
           <button @click="show()" class="p-2 bg-slate-400">Load</button>
      </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }], 
    ['link', 'image']
]

const content = ref({})
let Savedcontent = null
let parsed = null;

function showContent() {
    console.log(JSON.stringify(content.value));
    Savedcontent = JSON.stringify(content.value)
    console.log(JSON.parse(Savedcontent));
}
function show() {
    parsed = JSON.parse(Savedcontent)
    console.log(parsed.ops[0].insert);
    content.value = JSON.parse(Savedcontent)
}
</script>
