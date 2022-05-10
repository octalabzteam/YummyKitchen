import { Store } from "vuex"
import {reactive} from 'vue'

export default {
    state: () => reactive({
        AllItems: [
            { 
            itemTitle: "Item 1", 
            itemPhoto: "https://yummy-kitchen.de/wp-content/uploads/2021/04/Samosa-600x338.jpg", 
            itemDesc: "1 frittierte gefüllt mit Kartoffeln, Erbsen, Karotten, Zwiebeln.", 
            availabe: true, 
            category: "1" 
            },
            { 
            itemTitle: "Item 2", 
            itemPhoto: "https://yummy-kitchen.de/wp-content/uploads/2021/04/Samosa-600x338.jpg", 
            itemDesc: "2 frittierte gefüllt mit Kartoffeln, Erbsen, Karotten, Zwiebeln.", 
            availabe: true, 
            category: "1" 
            },
            { 
            itemTitle: "Item 3", 
            itemPhoto: "https://yummy-kitchen.de/wp-content/uploads/2021/04/Samosa-600x338.jpg", 
            itemDesc: "2 frittierte gefüllt mit Kartoffeln, Erbsen, Karotten, Zwiebeln.", 
            availabe: true, 
            category: "1" 
            },
            { 
            itemTitle: "Item 4", 
            itemPhoto: "https://yummy-kitchen.de/wp-content/uploads/2021/04/Samosa-600x338.jpg", 
            itemDesc: "2 frittierte gefüllt mit Kartoffeln, Erbsen, Karotten, Zwiebeln.", 
            availabe: true, 
            category: "1" 
            },
            { 
            itemTitle: "Item 5", 
            itemPhoto: "https://yummy-kitchen.de/wp-content/uploads/2021/04/Samosa-600x338.jpg", 
            itemDesc: "2 frittierte gefüllt mit Kartoffeln, Erbsen, Karotten, Zwiebeln.", 
            availabe: true, 
            category: "1" 
            },
            { 
            itemTitle: "Item 6", 
            itemPhoto: "https://yummy-kitchen.de/wp-content/uploads/2021/04/Samosa-600x338.jpg", 
            itemDesc: "2 frittierte gefüllt mit Kartoffeln, Erbsen, Karotten, Zwiebeln.", 
            availabe: false, 
            category: "1" 
            },
          ],
        name: "YummyKitchen",
        editPost: null,
    }),
    getters: {},
    mutations: {
        SET_NAME(state, payload) {
            state.name = payload
        },
        SET_EDIT(state, payload) {
            state.editPost = payload
            console.log(state.editPost);
        },
    },
    actions: {
        saveName({commit}, data){
            commit('SET_NAME', data)
        },
        saveEdit({commit}, data){
            commit('SET_EDIT', data)
        },
    },
}