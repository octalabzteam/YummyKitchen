<template>
    <header class="container z-30">
        <nav class="flex absolute left-24 top-10 items-center z-20">
            <!-- <div class="branding ml-5 md:ml-0">
                <router-link class="header text-3xl font-bold text-amber-800" to="/">YummyKitchen</router-link>
            </div> -->
            <!-- <div class="nav-links font-semibold w-1/4 md:w-auto">
                <ul class="space-x-14 lg:space-x-24 invisible md:visible">
                    <router-link class="link" to="#">Home</router-link>
                    <router-link class="link" to="#">Reservation</router-link>
                    <router-link class="link" to="#">Menu</router-link>
                    <router-link class="link" to="#">ContactUs</router-link>
                </ul>
            </div> -->
            <div class="left-option">
                <!-- <div class="nav-buttons space-x-2">
                    <router-link class="link" to="#">Login</router-link>
                    <router-link class="link" to="#">Signup</router-link>
                </div> -->
                <label for="check">
                    <input  @click="toggleMobileNav(), toggleClass()" class="menuIcon menu-icon"  type="checkbox" id="check"/> 
                    <span v-bind:class="[isActiveNav?'gold':'red']"></span>
                    <span v-bind:class="[isActiveNav?'gold':'red']" ></span>
                    <span v-bind:class="[isActiveNav?'gold':'red']" ></span>
                </label>

            </div>

        </nav>
        
        <transition name="mobile-nav" class="shadow-lg justify-center text-center" v-on:scroll.passive=toggleMobileNav()>
                <ul @click="toggleMobileNav(), toggleClass()" class="flex flex-col space-y-7 text-3xl font-semibold p-5 w-3/4 max-w-2xl fixed h-full top-0 left-0" v-show="mobileNav" style="background-color: #B59F4A;">
                    <router-link @click="toggleMenuBar()" class="link" :to="{name: 'Home'}">Home</router-link>
                    <router-link @click="toggleMenuBar()" class="link" to="#">Reservation</router-link>
                    <router-link @click="toggleMenuBar()" class="link" :to="{name: 'DishView'}">Menu</router-link>
                    <router-link @click="toggleMenuBar()" class="link" to="#">ContactUs</router-link>
                    <router-link @click="toggleMenuBar()" class="link font-normal text-base border-2 w-fit p-3 rounded-md border-white self-center" :to="{name: 'LoginView'}">Login / Register</router-link>
                </ul>
        </transition>
    </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular-wine.svg'
import menuIconBlack from '../assets/Icons/bars-regular.svg'


export default {
    name: "navigation",
    components: {
        menuIcon,
        menuIconBlack,

    },
    data() {
        return {
            mobileNav: false,
            isActiveNav: true
        };
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        toggleClass() {
            this.isActiveNav=!this.isActiveNav;
        },
        toggleMenuBar() {
            const checkbox = document.getElementById('check');
            checkbox.checked = !checkbox.checked;
        }
    }
}
</script>

<style scoped>
.link {
    color: white;
}
.link:hover {
    color: #a52a2a;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: all 1s ease;
}

.mobile-nav-enter {
    transform: translateX(-672px);
}
.mobile-nav-enter-to {
    transform: translateX(0);
}
.mobile-nav-leave-to {
    transform: translateX(-672px);
}
label {
 display:flex;
  flex-direction:column;
  width:70px;
  height: 60px;
  cursor:pointer;
}

label span{
  border-radius:10px;
  height:7px;
  margin: 7px 0;
  transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);

}


span:nth-of-type(1){
  width:50%;
  
}

span:nth-of-type(2){
  width:100%;
}


span:nth-of-type(3){
  width:75%;
 
}


input[type="checkbox"]{
  display:none;
}

.gold{
  background: #B59F4A;
}
.red{
    background: #a52a2a;
}

input[type="checkbox"]:checked ~ span:nth-of-type(1){
  transform-origin:bottom;
  transform:rotatez(45deg) translate(8px,0px)
  
}


input[type="checkbox"]:checked ~ span:nth-of-type(2){
  
  transform-origin:top;
  transform:rotatez(-45deg)
}


input[type="checkbox"]:checked ~ span:nth-of-type(3){
  
  transform-origin:bottom;
  width:50%;
  transform: translate(30px,-11px) rotatez(45deg);

}
</style>
