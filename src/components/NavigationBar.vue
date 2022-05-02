<template>
    <header>
        <nav class="flex justify-start md:justify-around h-16 items-center shadow-lg z-20" style="background-color: #B59F4A;">
            <div class="branding ml-5 md:ml-0">
                <router-link class="header text-3xl font-bold text-amber-800" to="/">YummyKitchen</router-link>
            </div>
            <div class="nav-links font-semibold w-1/4 md:w-auto">
                <ul class="space-x-14 lg:space-x-24 invisible md:visible">
                    <router-link class="link" to="#">Home</router-link>
                    <router-link class="link" to="#">Reservation</router-link>
                    <router-link class="link" to="#">Menu</router-link>
                    <router-link class="link" to="#">ContactUs</router-link>
                </ul>
            </div>
            <div class="left-option">
                <div class="nav-buttons space-x-2">
                    <router-link class="link" to="#">Login</router-link>
                    <router-link class="link" to="#">Signup</router-link>
                </div>
                <div class="ml-2">
                    <menuIcon @click="toggleMobileNav" class="menuIcon h-10 w-auto absolute menu-icon top-1.5 right-5 md:invisible "/>
                </div>
            </div>

        </nav>
        
        <transition name="mobile-nav" class="shadow-lg md:invisible">
                <ul class="flex flex-col space-y-7 text-2xl font-semibold p-5 w-3/4 max-w-sm fixed h-full top-0 left-0" v-show="mobileNav" style="background-color: #B59F4A;">
                    <router-link class="link" to="#">Home</router-link>
                    <router-link class="link" to="#">Reservation</router-link>
                    <router-link class="link" to="#">Menu</router-link>
                    <router-link class="link" to="#">ContactUs</router-link>
                </ul>
        </transition>
    </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg'



export default {
    name: "navigation",
    components: {
        menuIcon
    },
    data() {
        return {
            mobileNav: false,
        };
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        }
    }
}
</script>

<style scoped>
.link {
    color: white;
}
.link:hover {
    color: brown;
}
.menuIcon:hover {
    cursor: pointer;
    color: brown;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: all 1s ease;
}

.mobile-nav-enter {
    transform: translateX(-384px);
}
.mobile-nav-enter-to {
    transform: translateX(0);
}
.mobile-nav-leave-to {
    transform: translateX(-384px);
}
</style>
