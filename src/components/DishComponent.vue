<template>
    <a href="#" class="hover:-translate-y-2 transition-all hover:shadow-xl item-link">
        <div class="flex flex-col relative text-white">
            <div v-show="editPost" class="w-16 z-10 flex space-x-2 absolute top-3 right-3 toggle-edit">            
                <!-- <img src="../assets/icons/arrow-right-light.svg" alt=""> -->
                    <editlogo class="bg-gray-50 p-1 cursor-pointer hover:text-opacity-60 text-gray-600" />
                    <trashlogo class="bg-gray-50 p-1 cursor-pointer hover:text-opacity-60 text-red-600" />
            </div>
            <div class="flex relative flex-col w-full h-full item-card space-y-5">
                <img :src="post.itemPhoto" class="border-8 border-pink-900 object-cover" alt="">
                <div class="flex flex-col space-y-3">
                    <div class="item-card text-xl font-semibold">{{post.itemTitle}}</div>
                    <div class="item-card px-3 text-sm tracking-wide leading-relaxed">{{post.itemDesc}}</div>
                </div>
                <div class="flex justify-end w-full  z-10 space-x-10 ">
                    <a href="#" class="border-2 reserve-button hover:shadow-xl hover:-translate-y-2 transition-all" style="border-color:#B59F4A">
                        <div class="flex p-3 pr-14 relative items-center justify-center" >To Table<span class="absolute right-0"><img src="../assets/tray-plate-svgrepo-com.svg" alt="" class="h-8 px-2 transition-all"></span></div>
                    </a>
                </div>
            </div>
        </div>
    </a>
</template>

<script setup>
import { computed } from "@vue/runtime-core"
import {inject} from 'vue'
import editlogo from "../assets/edit-regular.svg"
import trashlogo from "../assets/trash-regular.svg"

const props = defineProps({post: Object})
const useStore = inject('useStore')
const store = useStore();

const editPost = computed(()=>{
    return store.state.user.editPost
})

</script>

<style scoped>
.item-card {
    background: rgb(128, 44, 58);
}
.item-button {
    border: azure
}
.item-link:hover {
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0.06);
}
</style>
