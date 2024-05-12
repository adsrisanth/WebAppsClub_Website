<template>
    <div class="bg-[#113194] text-black dark:text-white ">
        <div class="bg-[#2533b7] text-white">
            <div class="flex flex-col md:flex-row justify-between pr-12 pl-12">
                <div class="w-fit">
                    <div class="md:w-full bg-slate-100 dark:bg-gray-900 rounded-b-xl justify-center">
                        <div class="p-10 vvsm:flex vvsm:justify-center md:w-[250px] h-1/2">
                            <img v-if="themeStore.isDark" src="../assets/images/WebsiteLogol.png" alt="ClubLogo">
                            <img v-else src="../assets/images/WebsiteLogo.png"alt="ClubLogo">
                        </div>
                    </div>
                    <div>
                        <div class="p-6 flex justify-between">
                            <a href="https://www.instagram.com"><img src="../assets/images/instagram.svg" width="25px" alt="WebApps_Insta"></a>
                            <a href="https://www.linkedin.com"><img src="../assets/images/linkedin.png" width="25px" alt="WebApps_Linkedin"></a>
                            <a href="https://www.x.com"><img src="../assets/images/twitter.svg" width="25px" alt="WebApps_Twitter"></a>
                            <a href="https://www.github.com"><img src="../assets/images/github.svg" width="25px" alt="WebApps_Twitter"></a>
                            <a href="https://www.youtube.com"><img src="../assets/images/telegram.svg" width="25px" alt="WebApps_Telegram"></a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col md:text-lg p-8">
                    <div class="flex flex-col font-poppins">
                        <span class="text-2xl font-lato pb-5">Info</span>
                        <span>K L University Greenfields</span>
                        <span>Vaddeswaram-522 502.</span>
                        <span>Guntur</span>
                    </div>
                    <div class="cursor-pointer pt-2 hover:text-[#e7a93c] dark:hover:text-[#0ee2b7] duration-300" @click="redirectToEmail">
                        <span class="text-xl">webapps@kluniversity.in</span>
                    </div>                
                    <div class="pt-5 cursor-pointer hover:text-[#e7a93c] dark:hover:text-[#0ee2b7] duration-300">Campus Map</div>
                    <div class="pt-5 cursor-pointer hover:text-[#e7a93c] dark:hover:text-[#0ee2b7] duration-300">Contact US</div>
                </div>
                <div class="flex flex-col md:text-lg font-poppins p-8">
                    <div class="text-2xl font-lato pb-5">Links</div>
                    <ul>
			            <li class="pb-2"><NuxtLink to="/"  exact-active-class="font-bold text-[#e7a93c]" class="text-xl  dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Home</NuxtLink></li>
			            <li class="pb-2"><NuxtLink to="/AboutUs" exact-active-class="font-bold text-[#e7a93c]"  class="text-xl dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 text-white">About Us</NuxtLink></li>
			            <li class="pb-2"><NuxtLink to="/OurWizards" exact-active-class="font-bold text-[#e7a93c]"  class="text-xl dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Our Wizards</NuxtLink></li>
			            <li class="pb-2"><NuxtLink to="/Gallery" exact-active-class="font-bold text-[#e7a93c]"  class="text-xl dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Gallery</NuxtLink></li>
			            <li class="pb-2"><NuxtLink to="/Courses" exact-active-class="font-bold text-[#e7a93c]"  class="text-xl dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Courses</NuxtLink></li>
	  	            </ul>
                </div>
                <div class="flex flex-col md:text-lg p-8">
                    <div class="text-2xl font-lato pb-5">Quick Links</div>
                    <ul>
                        <li class="pb-2 font-poppins hover:text-[#e7a93c] dark:text-[#0ee2b7] duration-300"><a href="https://www.kluniversity.in/" target="_blank" rel="noopener noreferrer">KL University</a></li>
                        <li class="pb-2 font-poppins hover:text-[#e7a93c] dark:text-[#0ee2b7] duration-300"><a href="https://sac.kluniversity.in/" target="_blank" rel="noopener noreferrer">KL SAC</a></li>
                        <li class="pb-2 font-poppins hover:text-[#e7a93c] dark:text-[#0ee2b7] duration-300"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                        <li class="pb-2 font-poppins hover:text-[#e7a93c] dark:text-[#0ee2b7] duration-300"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="text-gray-300 flex p-5 flex-col vvsm:text-sm md:text-lg">
            <div class="flex justify-center gap gap-1">Desined and Developed By 
                <span class="hover:text-[#e7a93c] font-bold duration-300"><a href="">Dinesh SriSanth Adari</a></span>
                </div>
            <div class="flex justify-center">&copy; {{ currentYear }} WebApps Club. All rights reserved.</div>
        </div>
    </div>
</template>
<!-- #2531b9-blue
#e7a93c-gold
#0ee2b7-gradient -->
<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const redirectToEmail = () => {
  const email = 'webapps@kluniversity.in';
  const subject = encodeURIComponent('WebApps CLub');
  const outlookUrl = `mailto:${email}?subject=${subject}`;
  window.location.href = outlookUrl;
};

const currentYear = ref(new Date().getFullYear());

import { useThemeStore } from '@/store/ThemeStore';

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