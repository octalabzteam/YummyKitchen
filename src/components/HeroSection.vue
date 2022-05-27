<template>
  <!-- Hero Section -->

  <div class="flex relative justify-end bg-black">
      <img class="absolute w-auto h-36 left-1/4 opacity-70" src="https://i0.wp.com/www.spicarestaurant.com/wp-content/themes/spica-theme/images/Home1.png" alt="">
      <div class="flex absolute md:relative flex-col self-center w-full pb-5 backdrop-blur-sm bg-gradient-to-t from-black md:w-1/3 items-center text-center px-3 space-y-5">
        <img v-bind:src="WelcomeInfo[0].logo" class="h-fit w-96" />
        <div class="font-normal text-base text-slate-300 leading-relaxed px-4">{{WelcomeInfo[0].short_desc}}</div>
      </div>
      <div class="flex h-screen w-full md:w-2/3 flex-col text-center justify-end hero-background">
        <div class="flex flex-row justify-end items-center p-12 text-center bg-gradient-to-t from-black" style="color: #B59F4A">
          <div class="pr-4">Via Address Goes Here | Ph: +39 xxxxxxxxxx</div>
              <a href="#!" type="button" class="border-2 border-amber-500 text-amber-500 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                <svg aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                class="w-2 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
            >
                <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
                </svg>
            </a>
              <a href="#!" type="button" class="border-2 border-amber-500 text-amber-500 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                <svg aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                class="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                >
                <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
                </svg>
            </a>
        </div>
    </div>
  </div>

  <!-- Main Dish Section -->

  <div class="flex h-fit md:h-screen mt-5 relative space-y-8 flex-col md:flex-row justify-center text-center pb-10">
    <!-- <img class="absolute opacity-10 right-1 top-1/2 md:top-0" src="../assets/pngwing.com.png" alt=""> -->
    <div class="flex z-10 justify-center items-center md:justify-end px-14 w-full h-full md-1/2 pattren">
      <img v-bind:src="WelcomeInfo[1].photo" alt="" class="h-fit lg:w-2/3 w-4/5 rounded-sm img-shad">
    </div>
    <div class="flex z-10 flex-col lg:text-left space-y-12 px-14 w-11/12 relative md:pt-36 tracking-wider">
      <div class="text-3xl" style="color:#B59F4A">{{WelcomeInfo[1].title}}</div>
      <div class="leading-loose">{{WelcomeInfo[1].description}} Has a greate Feature</div>
      <div class="leading-loose xl:w-2/3">{{WelcomeInfo[1].description}}</div>
    </div>
    <img class="absolute bottom-0 right-0 opacity-10 2xl:opacity-100 scale-75" src="../assets/hotel-corner.png" alt="">
  </div>

  <!--Carousel Home Page -->

  <div class="flex relative flex-col md:flex-row space-y-14 md:space-x-20 items-center justify-center md:space-y-0 py-40 px-10 md:px-2">
      <img class="absolute w-96 xl:w-auto z-0 left-0 top-0" src="https://i0.wp.com/www.spicarestaurant.com/wp-content/themes/spica-theme/images/home5.png" alt="">
      <div class="space-y-3 text-center z-10">
        <div class="text-3xl md:text-xl lg:text-3xl" style="color:#B59F4A">Best Of Yummy Kitchen</div>
        <h3 class="max-w-sm leading-loose">invite you on a journey through their love for travel, discovery, and sharing their experiences along the way. through their love for travel, discovery, and sharing their experiences along the way.</h3>
      </div>

      <div v-for="item in WelcomeInfo[2]" :key="item" v-bind:id="'dish'+idcount++" class=" hover:shadow-pink-800  transition-all ease-in-out duration-150 shadow-[0_10px_0px_-5px] shadow-pink-600">
        <a href="#">
        <img class="max-h-96" v-bind:src=item alt="">
        </a>
      </div>
  </div>

  <!--Down Hero Section -->
  <div class="flex relative h-96 secondary-hero text-white"> 
    <div class="absolute self-center left-0 right-0 m-auto">
      <div class="flex flex-col text-center tracking-normal space-y-5 w-full h-full">
        <h1 class="top-1/2 items-center text-4xl font-bold">Discover Our Restourant</h1>
        <div class="text-xl">A space that relates to the culmination of the love for travel, discovery, and shared experiences.</div>
      </div>
    </div>

  </div>

  <!--Opening Hours Section -->
  <div class="flex relative flex-col items-center pt-28 text-center space-y-8 h-screen w-full pb-20 lg:pb-0">
    <img class="absolute bottom-20 lg:bottom-0 right-14 md:right-0 h-64  md:h-80 lg:h-96 2xl:h-auto" src="../assets/out-resturant.png" alt="">
    <div class="text-3xl font-semibold" style="color: #B59F4A">Restaurant Hours</div>
    <div class="space-y-3 text-xl">
      <h1><span class="font-semibold">Monday   </span>5:30 pm – 12 pm</h1>
      <h1><span class="font-semibold">Tuesday </span>5:30 pm – 12 pm</h1>
      <h1><span class="font-semibold">Wednesday </span>5:30 pm – 12 pm</h1>
      <h1><span class="font-semibold">Thursday </span>5:30 pm – 12 pm</h1>
      <h1><span class="font-semibold">Friday </span>5:30 pm – 12 pm</h1>
      <h1><span class="font-semibold">Saturday </span>5:30 pm – 12 pm</h1>
      <h1><span class="font-semibold">Sunday </span>5:30 pm – 12 pm</h1>
    </div>
    <div class="flex pt-12 z-10 space-x-10 ">
      <a href="#" class="border-2 reserve-button hover:shadow-xl hover:-translate-y-2 transition-all" style="border-color:#B59F4A">
        <div class="flex p-3 pr-14 relative items-center justify-center" >RESERVATION <span class="absolute right-0"><img src="../assets/line-table-svgrepo-com.svg" alt="" class="h-8 px-2 transition-all"></span></div>
      </a>

      <a href="#" class="border-2 reserve-button hover:shadow-xl hover:-translate-y-2 transition-all" style="border-color:#B59F4A">
      <div class="relative flex p-3 pr-14 items-center justify-center" style="border-color:#B59F4A">DIRECTION<span class="absolute right-0 "><img src="../assets/direction-svgrepo-com.svg" alt="" class="h-7 px-2 transition-all"></span></div>
      </a>
    </div>
  </div>
</template>

<script setup>
  import reservationIcon from '../assets/line-table-svgrepo-com.svg'
  const props = defineProps({WelcomeInfo: Array});
  let idcount = 1;
</script>

<style scoped>
.hero-background {
  background: no-repeat center url(https://avada.theme-fusion.com/restaurant/wp-content/uploads/sites/112/2021/04/hero-mobile.jpg);
  background-size: cover;
}
 .img-shad {
   box-shadow: -50px 50px 2px #a52a2a11;
}
.pattren {
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='54' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23000' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
#dish2 {
  border-radius: 0px 0px 100% 0px;
  overflow: hidden;
}
#dish1 {
  border-radius: 100% 0px 0px 0px;
  overflow: hidden;
}
#dish1:hover, #dish2:hover {
  border-radius: 0;
}
.secondary-hero {
  background-image: 
  linear-gradient(to right, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)),
  url('https://thumbs.dreamstime.com/b/assortment-indian-recipes-food-various-traditional-cuisine-top-view-copy-space-202151680.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.reserve-button:hover>div>span>img {
  height: 40px;
}
</style>