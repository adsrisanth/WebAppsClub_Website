<template>
    <div class="bg-[#2c3364] text-black dark:text-white">
        <div>
            <div class="flex md:flex-row vvsm:flex-col gap gap-2 p-5 bg-[#113194]">
                <div class="flex items-center md:border-r-4 md:border-gray-900 dark:md:border-gray-200 p-5">
                    <NuxtLink to="/"><img v-if="themeStore.isDark"  src="../assets/images/clublogolight.png" class="w-72 md:w-96" alt="clublogo">
		    	<img v-else src="../assets/images/clublogodark.png" class="w-72 md:w-96" alt="clublogo"></NuxtLink>
                </div>
                <div class="pl-10 text-xl font-montserrat">
                    <ul>
                        <span class="text-4xl font-bold font-merriweather text-[#2831bc] dark:text-[#0ee2b7]">Topics</span>
			            <li class="mt-2"><NuxtLink to="/"  exact-active-class="font-bold themeStore.isDark ? 'text-gray-400 dark:text-[#0ee2b7]' :ecolor dark:text-[#0ee2b7]" class="text-gray-800 text-xl  dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Home</NuxtLink></li>
			            <li class="mt-2"><NuxtLink to="/AboutUs" exact-active-class="font-bold ecolor"  class="text-gray-800 text-xl dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">About Us</NuxtLink></li>
			            <li class="mt-2"><NuxtLink to="/OurWizards" exact-active-class="font-bold ecolor"  class="text-gray-800 text-xl dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Our Wizards</NuxtLink></li>
			            <li class="mt-2"><NuxtLink to="/Gallery" exact-active-class="font-bold ecolor dark:text-[#000]"  class="text-gray-800 text-xl dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Gallery</NuxtLink></li>
			            <li class="mt-2"><NuxtLink to="/Courses" exact-active-class="font-bold ecolor dark:text-[#000]"  class="text-gray-800 text-xl dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Courses</NuxtLink></li>
	  	            </ul>
                </div>
            </div>
            <div class="flex justify-center items-center flex-col pt-2 border-t-2 border-gray-500">
                <div class="mb-2">
                    <span>Designed and Developed by</span>
                    <span class="text-[#e7a93c] hover:text-[#0ee2b7] duration-300">
                        <a href="https://www.linkedin.com/in/dinesh-srisanth-adari-860129249/" class="text-lg font-bold">
                            Dinesh SriSanth Adari
                        </a>
                    </span>
                </div>
            </div>
            <div>
                <div class="flex items-center flex-col justify-center text-sm text-gray-400">
                    &copy; {{ currentYear }} WebApps Club. All rights reserved.
                    <div class="p-4 flex space-x-4">
                        <a href="https://www.instagram.com"><img src="../assets/images/instagram.svg" width="25px" alt="WebApps_Insta"></a>
                        <a href="https://www.linkedin.com"><img src="../assets/images/linkedin.svg" width="25px" alt="WebApps_Linkedin"></a>
                        <a href="https://www.x.com"> 
                            <img v-if="themeStore.isDark" src="../assets/images/twitter.svg" width="25px" alt="WebApps_Twitter">
                            <img v-else src="../assets/images/twitterx.svg" width="25px" alt="WebApps_Twitter">
                        </a>
                        <a href="https://www.github.com"> 
                            <img v-if="themeStore.isDark" src="../assets/images/githubd.svg" width="25px" alt="WebApps_Twitter">
                            <img v-else src="../assets/images/github.svg" width="25px" alt="WebApps_Twitter">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- #2531b9-blue
#e7a93c-gold
#0ee2b7-gradient -->
  
<script setup>
import { useThemeStore } from '@/store/ThemeStore';
import { ref, onMounted, onUnmounted } from 'vue';

const currentYear = ref(new Date().getFullYear());
const themeStore = useThemeStore();

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

function handleClickOutside(event) {
  if (!event.target.closest('.navbar-menu') && !event.target.closest('.navbar-burger')) {
	menuHidden.value = true;
  }
}

</script>
<style>
.ecolor{
	color:#e7a93c;
}</style>