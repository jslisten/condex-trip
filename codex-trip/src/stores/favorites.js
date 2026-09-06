import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const STORAGE_KEY = 'codex-trip-favorites'
  
  const favoriteIds = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
  
  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds.value))
  }
  
  function toggleFavorite(id) {
    const index = favoriteIds.value.indexOf(id)
    if (index > -1) {
      favoriteIds.value.splice(index, 1)
    } else {
      favoriteIds.value.push(id)
    }
    save()
  }
  
  function isFavorite(id) {
    return favoriteIds.value.includes(id)
  }
  
  function getFavoriteAttractions(attractions) {
    return attractions.filter(item => favoriteIds.value.includes(item.id))
  }
  
  return {
    favoriteIds,
    toggleFavorite,
    isFavorite,
    getFavoriteAttractions
  }
})
