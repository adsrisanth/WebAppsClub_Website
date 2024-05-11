<template> 
    <div class="w-full h-full ssm:w-full vsm:w-screen sm:w-screen vvsm:w-screen md:w-full bg-slate-200 dark:bg-gray-900">
        <div class="absolute">
            <div class="flex w-full min-h-[100vh] justify-center place-items-center"> 
                <LoadingHome v-if="isLoading" /> 
            </div> 
        </div> 
        <div class="fixed bottom-10 right-10 z-50"> 
            <DarktoLight /> 
        </div>
        <!---NavBar--> 
        <NavBar /> 
        <div class="flex justify-center items-center w-full min-h-screen bg-slate-200 dark:bg-gray-900 dark:text-white text-black" v-if="!isLoading">
            <div class="flex flex-col gap gap-5 text-center"> 
                <span class="text-[50px] font-mono font-bold">WebApps Club</span>
                <span class="text-[24px] font-montserrat">- Decentralized -</span>
            </div>
        </div>
        <div> 
            <Footer /> 
        </div> 
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useThemeStore } from '@/store/ThemeStore';

const isLoading = ref(true);
const themeStore = useThemeStore();

onMounted(() => { setTimeout(() => { isLoading.value = false; }, 2000);
});

useHead({ title: "WebApps | KLSAC",
});
</script>