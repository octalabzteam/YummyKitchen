import { Store } from "vuex"
import {reactive} from 'vue'

import firebase from 'firebase/app'
import "firebase/auth";
import db from '../../firebase/firebaseInit';

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
        user: null,
        profileEmail: null,
        profileName: null,
        profileId: null,
        profileIniitials: null,
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
        UPDATE_USER(state, payload){
            state.user = payload
        },
        SET_PROFILE_INFO(state, doc) {
            state.profileId = doc.id;
            state.profileEmail = doc.data().Email;
            state.profileName = doc.data().Name;
        },
        SET_PROFILEINITIALS(state) {
            state.profileIniitials = state.profileName.match(/(\b\S)?/g);
        },
    },
    actions: {
        saveName({commit}, data){
            commit('SET_NAME', data)
        },
        saveEdit({commit}, data){
            commit('SET_EDIT', data)
        },
        async getCurrentUser({commit}) {
            const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid);
            const dbResults = await dataBase.get();
            commit('SET_PROFILE_INFO', dbResults);
            commit('SET_PROFILEINITIALS');
            console.log(dbResults);
        },
    },
}