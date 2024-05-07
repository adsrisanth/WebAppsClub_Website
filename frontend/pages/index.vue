<template>
    <div class="w-screen h-screen bg-slate-200 dark:bg-gray-900">
        <div class="absolute ">
            <div class="flex justify-center place-items-center">
                <LoadingHome v-if="isLoading"/>
            </div>
        </div>
        <div class="absolute flex bottom-10 end-10 ">
            <DarktoLight />
        </div>
        <!---NavBar-->
        <div class="flex justify-between items-center dark:bg-gray-950 bg-white border-b border-gray-300 dark:border-gray-900 shadow-xl py-4 px-6">
            <div class="ml-6">
                <NuxtLink to="/"><img v-if="themeStore.isDark" src="../assets/images/clublogolight.png" class="w-fit h-20" alt="clublogo">
                <img v-else src="../assets/images/clublogodark.png" class="w-fit h-20" alt="clublogo"></NuxtLink>
            </div>
            <div>
                <ul class="flex space-x-4 text-2xl font-inter gap gap-5">
                    <li><NuxtLink to='/'><div class="text-gray-800 dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Home</div></NuxtLink></li>
                    <li><NuxtLink to='/'><div class="text-gray-800 dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">About</div></NuxtLink></li>
                    <li><NuxtLink to='/'><div class="text-gray-800 dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Services</div></NuxtLink></li>
                    <li><NuxtLink to='/'><div class="text-gray-800 dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Contact</div></NuxtLink></li>
                </ul>
            </div>
            <div class="flex gap gap-5 pr-5">
                <NuxtLink to="/signin">
                    <div class="bg-[#2831bc] text-white hover:bg-[#fe373b] font-inter hover:text-white duration-300 text-xl py-2 px-5 w-max h-max rounded-xl">
                        <span>Sign In</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="/signup">
                    <div class="bg-[#2831bc] text-white hover:bg-[#1bbbd3] font-inter hover:text-white duration-300 text-xl py-2 px-5 w-max h-max rounded-xl">
                        <span>Sign up</span>
                    </div>
                </NuxtLink>
                <a href="https://www.kluniversity.in/" target="_blank" rel="noopener noreferrer">
                    <div class="bg-[#a51c24] text-white hover:bg-red-900 font-oswald hover:text-white duration-300 text-xl py-2 px-5 w-max h-max rounded-xl">
                        <span>KLSAC</span>
                    </div>
                </a>
            </div>
        </div>
        <div class="flex h-[90dvh] place-items-center justify-center gap gap-16">
            <div class="w-1/4">
                <span class="text-[42px] font-montserrat text-[#e7a93c] font-bold dark:text-[#0ee2b7]">Who We Are</span>
                <span class="flex flex-row text-2xl dark:text-white"> Welcome to WebApps, where we are passionate about app development and 
                    cutting-edge technologies. Our club focuses on a diverse range of programming languages, tools, and concepts, from Kotlin 
                    and pure Java to blockchain, decentralized technologies, cryptocurrencies, AI, and web development.</span>
            </div>
            <div class="hover:shadow-lg hover:shadow-[#e7a93c] hover:rounded-3xl dark:hover:shadow-[#0ee2b7] hover:duration-500">
                <NuxtLink to="/"><img src="../assets/images/team.jpg" width="600px" class="rounded-3xl"></NuxtLink>
            </div>
        </div>
        <!---Footer-->
        <div class="flex relative top-full justify-center text-2xl font-inter gap gap-1">
            <span>Designed and developed By</span>
            <a href="https://www.linkedin.com/in/dinesh-srisanth-adari-860129249/" target="_blank" rel="noopener noreferrer" class=" text-[#e7a93c] hover:text-[#0ee2b7] hover:duration-300">
                <span>Dinesh SriSanth Adari</span>
            </a>
        </div>
    </div>
</template>
<!-- #2531b9-blue
#e7a93c-gold
#0ee2b7-gradient -->
<script setup>
import { ref, onMounted } from 'vue';
import { useThemeStore } from '@/store/ThemeStore';

const isLoading = ref(true);
const themeStore = useThemeStore();

onMounted(() => { 
    setTimeout(() => { isLoading.value = false; }, 2000);
});

useHead({
  title:"WebApps | KLSAC"
})

</script>