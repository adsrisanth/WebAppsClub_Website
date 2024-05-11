<template>
    <div class="bg-slate-200 dark:bg-gray-900 text-black dark:text-white py-4">
      <div class="container mx-auto flex justify-center items-center flex-col">
        <div class="mb-2">
            <span>Designed and Developed by</span>
            <span class="text-[#e7a93c] hover:text-[#0ee2b7] duration-300">
                <a href="https://www.linkedin.com/in/dinesh-srisanth-adari-860129249/" class="text-lg font-bold">
                Dinesh SriSanth Adari
                </a>
            </span>
        </div>
        <p class="text-sm text-gray-400">&copy; {{ currentYear }} WebApps Club. All rights reserved.</p>
      </div>
      <div class="place-content-end">
        <a href="instagram.com"></a>
        <a href="linkedin.com"></a>
        <a href="x.com"></a>
        <a href="github.com"></a>
      </div>
    </div>
</template>
<!-- #2531b9-blue
#e7a93c-gold
#0ee2b7-gradient -->
  
<script setup>

import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());

</script>