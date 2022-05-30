<template>
    <div v-show="isAdmin" class="toggle-edit absolute right-10 top-10">
        <span class="mr-2">Toggle Editing post</span>
        <input type="checkbox" v-model="editPost">
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