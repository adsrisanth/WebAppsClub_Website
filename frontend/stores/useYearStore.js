import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useYearStore = defineStore('year-store', () => {
  const yearListDropDown = [2024]
  const currentYear = ref(yearListDropDown[0])

  return {
    yearListDropDown,
    currentYear
  }
})
