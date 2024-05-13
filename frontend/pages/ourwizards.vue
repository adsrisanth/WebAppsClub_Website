<template>
    <div class="w-full h-full ssm:w-full vsm:w-screen sm:w-screen vvsm:w-screen md:w-full bg-slate-200 dark:bg-gray-900">
        <div class="absolute">
            <div class="flex w-full min-h-[100vh] justify-center place-items-center">
                <Loading v-if="isLoading"/>
            </div>
        </div>
        <div class="fixed bottom-10 right-10 z-50">
            <DarktoLight />
        </div>
        <!---NavBar-->
        <NavBar />
        <div class="w-full min-h-[100vh]">

        </div>
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useThemeStore } from '../stores/ThemeStore';

const isLoading = ref(true);
const themeStore = useThemeStore();

onMounted(() => { 
    setTimeout(() => { isLoading.value = false; }, 2000);
});

useHead({
  title:"WebApps - Wizards"
})

</script>
