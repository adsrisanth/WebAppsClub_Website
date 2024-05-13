<template> 
    <div class="absolute">
        <div class="flex w-full min-h-[100vh] justify-center place-items-center"> 
            <LoadingHome v-if="isLoading" /> 
        </div> 
    </div> 
    <div class="w-full h-full ssm:w-full vsm:w-screen sm:w-screen vvsm:w-screen md:w-full bg-slate-200 dark:bg-gray-900">
        <div class="fixed bottom-10 right-10 z-50"> 
            <DarktoLight /> 
        </div>
        <!---NavBar--> 
        <NavBar /> 
        <div v-if="!isLoading">
            <div class="flex justify-center items-center w-full min-h-screen bg-slate-200 dark:bg-gray-900 dark:text-white text-black">
                <div class="flex flex-col gap gap-5 text-center"> 
                    <span class="vvsm:text-[31px] md:text-[62px] font-mono font-bold">WebAppsClub</span>
                    <span class=" vvsm:text md:text-[24px] font-montserrat">- Decentralized -</span>
                </div>
            </div>
            <div> 
                <Footer /> 
            </div> 
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useThemeStore } from '~/stores/ThemeStore';

const isLoading = ref(true);
const themeStore = useThemeStore();

onMounted(() => { setTimeout(() => { isLoading.value = false; }, 2000);
});

useHead({ title: "WebApps | KLSAC",
});
</script>