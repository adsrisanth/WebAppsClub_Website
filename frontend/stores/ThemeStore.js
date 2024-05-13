export const useThemeStore = defineStore('theme-store',() => {
    const isDark = ref(false);

    function toggleTheme(){
        isDark.value = !isDark.value;
        localStorage.setItem('dark', isDark.value);
    };
    
    return {
        isDark,
        toggleTheme
    }
})