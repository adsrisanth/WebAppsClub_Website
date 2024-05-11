<template>
    <NavBar />
    <div class="absolute">
        <div class="flex w-full h-full justify-center place-items-center">
            <Loading v-if="isLoading"/>
        </div>
    </div>
    <div class="text-black w-full min-h-[100vh] dark:text-white bg-slate-200 dark:bg-gray-900" v-if="!isLoading" >
        <div class="flex flex-col vvsm:p-6 lg:p-24 lxl:flex-row h-full xl:place-items-center xl:justify-center gap-16" >
            <!-- Image Section -->
            <div class="md:flex md:overflow-hidden hover:shadow-lg hover:shadow-[#e7a93c] hover:rounded-xl dark:hover:shadow-[#0ee2b7] hover:duration-1000">
                <NuxtLink to="/">
                    <img src="../assets/images/team.jpg" class="w-full vvsm:rounded-lg md:rounded-xl" alt="Team Image">
                </NuxtLink>
            </div>
            <!-- Text Section -->
            <div class="lxl:w-1/2">
                <span class="vvsm:text-4xl text-[42px] font-montserrat text-[#e7a93c] font-bold dark:text-[#0ee2b7]">WHO ARE WE ¿</span>
                <span class="vvsm:text-sm flex flex-row md:text-[16px] text-xl font-inter dark:text-slate-200 mt-4" style="line-height: 1.8;">
                    Welcome to WebApps, a dynamic club dedicated to comprehensive app development. Our diverse community focuses on a wide range of programming languages, tools, and cutting-edge technologies. From Kotlin and pure Java for Android app development, to web3 and blockchain technologies, including decentralized applications (dApps) and smart contracts, we cover it all.
                    In addition, we dive into the world of cryptocurrencies, exploring their underlying blockchain technology and the exciting possibilities of decentralized finance. Our members also gain expertise in web development, mastering frontend technologies such as HTML, CSS, React.js, Nuxt.js, Next.js, and Vue.js, along with Tailwind CSS for responsive design.
                </span>
                <span class="vvsm:text-sm flex flex-row md:text-[16px] text-xl font-inter dark:text-slate-200 mt-4" style="line-height: 1.8;" >On the backend, we delve into Express.js, MySQL, Postman, and Node.js, enabling our members to build robust and scalable applications. And for those seeking a touch of elegance, we even venture into the realm of design, utilizing Figma for creating visually stunning interfaces.
                    With a strong focus on continuous learning, we strive to stay up-to-date with emerging frameworks and technologies. Join us at WebApps, where innovation, collaboration, and growth await you on the exhilarating journey of app development.
                </span>
            </div>
        </div>
        <Footer />
    </div>
    <div class="fixed bottom-10 right-10 z-50">
        <DarktoLight />
    </div>
    
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useThemeStore } from '@/store/ThemeStore';

const isLoading = ref(true);
const themeStore = useThemeStore();

onMounted(() => { 
    setTimeout(() => { isLoading.value = false; }, 2000);
});

useHead({
  title:"WebApps - AboutUs"
})

</script>