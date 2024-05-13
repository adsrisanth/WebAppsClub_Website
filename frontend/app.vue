<script setup>
import {useThemeStore} from '~/stores/ThemeStore';

const themeStore = useThemeStore();
onBeforeMount(()=>{
  themeStore.isDark = JSON.parse(localStorage.getItem('dark')) || false;
})
</script>

<template>
  <div :class="[themeStore.isDark ? 'dark':'light-any-other']">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout> 
  </div>
</template>
