<template>
    
    <NavBar />
    <div class="absolute">
                <div class="flex justify-center place-items-center">
                    <LoadingAbout v-if="isLoading"/>
                </div>
            </div>

    <div class="w-full h-[100vh] bg-slate-200 dark:bg-gray-800">
        <span class="text-black dark:text-white">Dinesh SriSanth</span>
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
  title:"WebApps - About"
})

</script>