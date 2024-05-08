<template>
    <div>
        <div class="w-screen h-screen flex items-center justify-center dark:bg-gray-950 bg-slate-100 dark:text-white text-black">
            <div class="absolute">
                <div class="flex justify-center place-items-center">
                    <LoadingSignIn v-if="isLoading"/>
                </div>
            </div>
            <div class=" text-white">
                <div class="text-center text-black dark:text-white text-[34px] font-bold mb-3">
                    <span>LOGIN</span>
                </div>
                <div class="text-center text-[14px] mb-6 text-gray-700 dark:text-gray-300">
                    <span>Welcome to </span>
                    <span class="text-[#0ee2b7]">WebApps!</span>
                    <span> Please enter your details.</span>
                </div>
                    <div>
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
                    <div class="mb-[30px] dark:text-white text-black">
                        <div class="mb-2 mt-6 ">
                            <span>Password</span>
                        </div>
                        <div class="flex-1">
                            <input
                              type="text"
                              class="w-[320px] h-[42px] border border-gray-500 dark:border-black bg-white dark:bg-gray-800 dark:text-white text-black placeholder-gray-600 dark:placeholder-gray-400 rounded-[12px] p-5 outline-none"
                              placeholder="Password"
                            />
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <RememberMe v-if="!isLoading"/>
                        </div>
                        <div class="text-[#0ee2b7] hover:text-[#e7a93c] duration-300">
                            <div class="">
                                <NuxtLink to="/forgot">Forgot Password</NuxtLink>
                            </div>
                        </div>
                    </div>
                <!-- Submit Button -->
                <button class="w-full bg-white border dark:border-black border-gray-500 text-black text-[14px] font-inter rounded-lg py-3 mt-4 hover:bg-[#2831bc] hover:text-white transition duration-300">
                  <NuxtLink to="/">LogIn</NuxtLink>
                </button>
                <button class="w-full bg-white border dark:border-black border-gray-500 text-black text-[14px] font-inter rounded-lg py-3 mt-4 hover:bg-[#2831bc] hover:text-white transition duration-300">
                    <div class="flex place-items-center justify-center gap gap-3">
                        <div>
                            <img src="../assets/images/outlook.svg" width="28px" height="28px" alt="">
                        </div>
                        <div>
                            <span>Sign in with Outlook</span>
                        </div>
                    </div>
                </button>
                <div class="mt-2 flex place-content-center gap gap-1 dark:text-white text-black">
                    <span>Does’t have an account?</span> 
                    <div class=" text-[#e7a93c] hover:text-[#0ee2b7] duration-300"><NuxtLink to="/signup">SignUp</NuxtLink></div>for free!
                </div>
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