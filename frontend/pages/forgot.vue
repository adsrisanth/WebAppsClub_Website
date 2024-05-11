<template>
  <div>
    <div class="w-screen h-screen flex items-center justify-center dark:bg-gray-950 bg-slate-100 dark:text-white text-black">
      <div class="absolute ">
        <div class="flex justify-center place-items-center">
          <LoadingForgot v-if="isLoading"/>
        </div>
      </div>
      <div class=" text-white">
        <div class="text-center text-black dark:text-white text-[34px] font-bold mb-3">
          <span>Forgot Password</span>
        </div>
        <div class="mt-5">
          <div class="mb-2 dark:text-white text-black">
            <span>Email or UserName</span>
          </div>
          <div class="flex-1 mr-2">
            <input
              type="text"
              class="w-[320px] h-[42px] border border-gray-500 dark:border-black bg-white dark:bg-gray-800 dark:text-white text-black placeholder-gray-600 dark:placeholder-gray-400 rounded-[12px] p-5 outline-none"
              placeholder="Email"
            />
          </div>
        </div>
        <!-- Send OTP -->
        <NuxtLink to="/">
          <button class="w-full bg-white border dark:border-black border-gray-500 text-black text-[14px] font-inter rounded-lg py-3 mt-10 hover:bg-[#2831bc] hover:text-white transition duration-300">
            <span>OTP</span>
          </button>
        </NuxtLink>
      </div>
    </div>
    <div class="absolute flex top-10 end-10 ">
        <DarktoLight />
    </div>
    <div class="absolute flex top-10 start-10">
        <NuxtLink to="/"><Back /></NuxtLink>
    </div>
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
title:"WebApps - SignIn"
})

</script>