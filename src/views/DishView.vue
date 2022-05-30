<template>
    <div v-show="isAdmin" class="toggle-edit absolute right-10 top-10">
        <span class="mr-2">Edit Post</span>
        <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" id="default-toggle" class="sr-only peer" v-model="editPost">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
    </div>
    <div class="flex flex-col items-center text-center p-5 space-y-8">
        <img src="../assets/menu-icon.png" class="h-56" alt="">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-16 w-4/5 2xl:w-3/4">
            <DishComponent 
            :post="post" 
            v-for="(post, index) in AllItems" 
            :key="index" />
        </div>
    </div>


</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import DishComponent from '../components/DishComponent.vue'

const store = useStore();

const AllItems = computed(() => {
    return store.state.user.AllItems;
})

const isAdmin = computed(() => {
    return store.state.user.isAdmin;
})

const editPost = computed({
    get() {
        return store.state.user.editPost
    },
    set(payload) {
        store.commit("SET_EDIT", payload);
    }
}) 


</script>

<style scoped>

</style>