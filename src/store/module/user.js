import { Store } from "vuex"

import firebase from 'firebase/app'
import "firebase/auth";
import db from '../../firebase/firebaseInit';

export default {
    state: () => ({
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
            itemPhoto: "https://yummy-kitchen.de/wp-content/uploads/2021/04/PaneerTikka-600x338.jpg", 
            itemDesc: "2 frittierte gefüllt mit Kartoffeln, Erbsen, Karotten, Zwiebeln.", 
            availabe: true, 
            category: "1" 
            },
            { 
            itemTitle: "Item 3", 
            itemPhoto: "https://yummy-kitchen.de/wp-content/uploads/2021/05/TandooriChicken-600x338.jpg", 
            itemDesc: "2 frittierte gefüllt mit Kartoffeln, Erbsen, Karotten, Zwiebeln.", 
            availabe: true, 
            category: "1" 
            },
            { 
            itemTitle: "Item 4", 
            itemPhoto: "https://yummy-kitchen.de/wp-content/uploads/2021/05/JhinkaTikka-600x338.jpg", 
            itemDesc: "2 frittierte gefüllt mit Kartoffeln, Erbsen, Karotten, Zwiebeln.", 
            availabe: true, 
            category: "1" 
            },
            { 
            itemTitle: "Item 5", 
            itemPhoto: "https://yummy-kitchen.de/wp-content/uploads/2021/04/ChefSpecialSalad-1-600x338.jpg", 
            itemDesc: "2 frittierte gefüllt mit Kartoffeln, Erbsen, Karotten, Zwiebeln.", 
            availabe: true, 
            category: "1" 
            },
            { 
            itemTitle: "Item 6", 
            itemPhoto: "https://yummy-kitchen.de/wp-content/uploads/2021/05/ChickenTikkaMasala-600x338.jpg", 
            itemDesc: "2 frittierte gefüllt mit Kartoffeln, Erbsen, Karotten, Zwiebeln.", 
            availabe: false, 
            category: "1" 
            },
            { 
            itemTitle: "Item 6", 
            itemPhoto: "https://yummy-kitchen.de/wp-content/uploads/2021/04/Samosa-600x338.jpg", 
            itemDesc: "2 frittierte gefüllt mit Kartoffeln, Erbsen, Karotten, Zwiebeln.", 
            availabe: false, 
            category: "1" 
            },
            { 
            itemTitle: "Item 6", 
            itemPhoto: "https://yummy-kitchen.de/wp-content/uploads/2021/04/Mushroom65-600x338.jpg", 
            itemDesc: "2 frittierte gefüllt mit Kartoffeln, Erbsen, Karotten, Zwiebeln.", 
            availabe: false, 
            category: "1" 
            },
          ],
        WelcomScreen: [
        {
            title: "Yummy Kitchen",
            short_desc: "Ritu Dalmia and Viviana Varese, an Indian and an Italian heart, invite you on a journey through their love for travel, discovery, and sharing their experiences along the way.",
            status: true,
            photo: "https://avada.theme-fusion.com/restaurant/wp-content/uploads/sites/112/2021/04/hero-mobile.jpg",
            logo: "https://yummy-kitchen.de/wp-content/uploads/2020/07/logo-restaurant@1x.png"
        },
        {
            title: "Our Wall of Best",
            description: "Ritu Dalmia and Viviana Varese, an Indian and an Italian heart, invite you on a journey through their love for travel, discovery, and sharing their experiences along the way. through their love for travel, discovery, and sharing their experiences along the way.",
            photo: "https://i0.wp.com/www.spicarestaurant.com/spica-uploads/2019/06/Spica-insalata-Som-tam-Thailandia-1-e1573739431995-800x800.jpg"
        },
        {
            homeMenu1: "https://i0.wp.com/www.spicarestaurant.com/spica-uploads/2019/11/IMG-0218-540x540.jpg",
            homeMenu2: "https://i0.wp.com/www.spicarestaurant.com/spica-uploads/2019/11/MG_6415-e1573739251360-540x540.jpg",
        }
          ],
        blogHtml: "Write your blog title here ...",
        blogTitle: "",
        blogPhotoName: "",
        blogPhotoFileUrl: null,
        blogPhotoPreview: null,
        name: "YummyKitchen",
        editPost: null,
        user: null,
        profileEmail: null,
        profileName: null,
        profileId: null,
        profileIniitials: null,
        isAdmin: null,
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
            state.isAdmin = doc.data().isAdmin;
        },
        SET_PROFILEINITIALS(state) {
            state.profileIniitials = state.profileName.charAt(0);
        },
        CHANGE_NAME(state, payload) {
            state.profileName = payload;
            console.log(state.profileName);

        }
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
            console.log(dbResults.data());
        },
        async updateUserSettings({commit, state}){
            const dataBase = await db.collection('users').doc(state.profileId);
            await dataBase.update({
                Name: state.profileName,
            });
            commit('SET_PROFILEINITIALS');
        },
    },
}