<template>
    <div class="bg-[#113194] text-black dark:text-white ">
        <div class="bg-[#2533b7] text-white">
            <div class="flex flex-col vvsm:w-full md:flex-row md:justify-evenly">
                <div class="flex flex-col vvsm:w-full md:w-[200px]">
                    <div class="flex justify-center">
                        <div class="bg-slate-200 dark:bg-gray-900 rounded-b-xl vvsm:w-[200px] sm:w-[300px] md:w-[200px]">
                        <img v-if="themeStore.isDark" src="../assets/images/WebsiteLogol.png" class="p-6" alt="ClubLogo">
                        <img v-else src="../assets/images/WebsiteLogo.png" alt="ClubLogo">
                    </div>
                    </div>

                        <div class="p-6 flex justify-between">
                            <a href="https://www.instagram.com/klsac_webapps?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><img src="../assets/images/instagram.svg" width="25px" alt="WebApps_Insta"></a>
                            <a href="https://www.linkedin.com/company/webapps-technology-club/mycompany/"target="_blank" rel="noopener noreferrer"><img src="../assets/images/linkedin.png" width="25px" alt="WebApps_Linkedin"></a>
                            <a href="https://www.threads.net/@klsac_webapps?xmt=AQGzdgXc6OnW5urnxuXj0qudAFIjIhrqrRq9WuODmw_1I6c" target="_blank" rel="noopener noreferrer"><img src="../assets/images/twitter.svg" width="25px" alt="WebApps_Twitter"></a>
                            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><img src="../assets/images/github.svg" width="25px" alt="WebApps_Twitter"></a>
                            <a href="https://t.me/klsacwebapps" target="_blank" rel="noopener noreferrer"><img src="../assets/images/telegram.svg" width="25px" alt="WebApps_Telegram"></a>
                        </div>
                </div>
                <div class="flex flex-col vvsm:text-sm sm:text-lg pt-8 vvsm:place-items-center md:place-items-start">
                    <div class="flex flex-col font-poppins vvsm:place-items-center md:place-items-start">
                        <span>K L University Greenfields</span>
                        <span>Vaddeswaram-522 502.</span>
                        <span>Guntur</span>
                    </div>
                    <div class="cursor-pointer pt-2 hover:text-[#e7a93c] dark:hover:text-[#0ee2b7] duration-300" @click="redirectToEmail">
                        <span class="vvsm:text-sm md:text-xl">webapps@kluniversity.in</span>
                    </div>                
                    <div class="pt-5 cursor-pointer hover:text-[#e7a93c] dark:hover:text-[#0ee2b7] duration-300">Campus Map</div>
                    <div class="pt-5 cursor-pointer hover:text-[#e7a93c] dark:hover:text-[#0ee2b7] duration-300">Contact US</div>
                </div>
                <div class="flex flex-col vvsm:text-sm sm:text-lg font-poppins pt-8 vvsm:place-items-center md:place-items-start">
                    <ul>
			            <li class="vvsm:pb-1 md:pb-2"><NuxtLink to="/"  exact-active-class="font-bold text-[#e7a93c]" class="sm:text-xl vvsm:text-sm flex vvsm:place-content-center md:place-content-start dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Home</NuxtLink></li>
			            <li class="vvsm:pb-1 md:pb-2"><NuxtLink to="/AboutUs" exact-active-class="font-bold text-[#e7a93c]"  class="sm:text-xl vvsm:text-sm flex vvsm:place-content-center md:place-content-start dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">About Us</NuxtLink></li>
			            <li class="vvsm:pb-1 md:pb-2"><NuxtLink to="/OurWizards" exact-active-class="font-bold text-[#e7a93c]"  class="sm:text-xl vvsm:text-sm flex vvsm:place-content-center md:place-content-start dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Our Wizards</NuxtLink></li>
			            <li class="vvsm:pb-1 md:pb-2"><NuxtLink to="/Gallery" exact-active-class="font-bold text-[#e7a93c]"  class="sm:text-xl vvsm:text-sm flex vvsm:place-content-center md:place-content-start dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Gallery</NuxtLink></li>
			            <li class="vvsm:pb-1 md:pb-2"><NuxtLink to="/Courses" exact-active-class="font-bold text-[#e7a93c]"  class="sm:text-xl vvsm:text-sm flex vvsm:place-content-center md:place-content-start dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Courses</NuxtLink></li>
	  	            </ul>
                </div>
                <div class="flex flex-col vvsm:text-sm sm:text-lg pt-8">
                    <ul>
                        <li class="font-bold vvsm:pb-1 md:pb-2 font-poppins hover:text-[#e7a93c] hover:dark:text-[#0ee2b7] duration-300"><a href="https://www.kluniversity.in/" class="flex vvsm:place-content-center md:place-content-start" target="_blank" rel="noopener noreferrer">KL University</a></li>
                        <li class="font-bold pb-5 font-poppins hover:text-[#e7a93c] hover:dark:text-[#0ee2b7] duration-300"><a href="https://sac.kluniversity.in/" class="flex vvsm:place-content-center md:place-content-start" target="_blank" rel="noopener noreferrer">KL SAC</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="text-gray-300 flex p-5 flex-col vvsm:text-sm md:text-lg">
            <div class="flex justify-center gap gap-1">Designed and Developed By 
                <span class="hover:text-[#e7a93c] font-bold duration-300"><a href="https://www.linkedin.com/in/dinesh-srisanth-adari-860129249/" target="_blank" rel="noopener noreferrer">Dinesh SriSanth Adari</a></span>
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

const redirectToEmail = () => {
  const email = 'webapps@kluniversity.in';
  const subject = encodeURIComponent('WebApps CLub');
  const outlookUrl = `mailto:${email}?subject=${subject}`;
  window.location.href = outlookUrl;
};

const currentYear = ref(new Date().getFullYear());

import { useThemeStore } from '~/stores/ThemeStore';

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