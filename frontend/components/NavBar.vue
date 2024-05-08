<template>
	<nav class="relative px-4 py-4 flex justify-between items-center dark:bg-black bg-white">
		<NuxtLink to="/"><img v-if="themeStore.isDark"  src="../assets/images/clublogolight.png" class="w-fit h-[4.4rem]" alt="clublogo">
			<img v-else src="../assets/images/clublogodark.png" class="w-fit h-16" alt="clublogo"></NuxtLink>
	  	<div class="lg:hidden">
			<button @click="toggleMenu" class="navbar-burger flex items-center text-blue-600 p-3">
		  		<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
		  		</svg>
			</button>
	  	</div>
	  	<ul class="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
			<li><NuxtLink to="/" class="text-gray-800 text-xl dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Home</NuxtLink></li>
			<li><NuxtLink to="/" class="text-gray-800 text-xl dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">About Us</NuxtLink></li>
			<li><NuxtLink to="/" class="text-gray-800 text-xl dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Services</NuxtLink></li>
			<li><NuxtLink to="/" class="text-gray-800 text-xl dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Pricing</NuxtLink></li>
			<li><NuxtLink to="/" class="text-gray-800 text-xl dark:hover:text-[#0ee2b7] dark:duration-300 hover:text-[#e7a93c] duration-300 dark:text-white">Contact</NuxtLink></li>
	  	</ul>
	  	<div class="hidden lg:flex lg:items-center">
			<NuxtLink to="/signin" class="py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200">Sign In</NuxtLink>
			<NuxtLink to="/signup" class="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200 ml-3">Sign Up</NuxtLink>
	  	</div>
	</nav>
	<div class="navbar-menu" :class="{ 'hidden': menuHidden }">
	  	<div v-if="menuHidden" class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" @click="toggleMenu"></div>
	  	<nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 dark:bg-gray-900 bg-white border-r overflow-y-auto">
			<div class="flex items-center justify-between">
    			<img src="../assets/images/clublogodark.png" width="200px" class="mb-5" alt="">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" @click="toggleMenu" class="text-gray-600 hover focus:outline-none h-6 w-6 cursor-pointer">
				    <path fill="currentColor" d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"></path>
				</svg>
			</div>
			<ul>
			  	<li><NuxtLink to="/" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Home</NuxtLink></li>
			  	<li><NuxtLink to="/" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">About Us</NuxtLink></li>
			  	<li><NuxtLink to="/" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Services</NuxtLink></li>
			  	<li><NuxtLink to="/" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Pricing</NuxtLink></li>
			  	<li><NuxtLink to="/" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Contact</NuxtLink></li>
			</ul>
			<div class="mt-auto">
			  	<a class="block px-4 py-3 mb-3 leading-loose text-xs text-center text-white font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
			  	<a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl" href="#">Sign Up</a>
			</div>
	  	</nav>
	</div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useThemeStore } from '@/store/ThemeStore';

const menuHidden = ref(true);
const themeStore = useThemeStore();

function toggleMenu() {
  menuHidden.value = !menuHidden.value;
}

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