<template>
  <div class="favorites-page page">
    <header class="page-header">
      <h1>我的收藏</h1>
    </header>

    <div class="favorites-list container">
      <template v-if="favorites.length > 0">
        <AttractionCard 
          v-for="item in favorites" 
          :key="item.id" 
          :attraction="item"
        />
      </template>
      <div v-else class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <p class="empty-title">暂无收藏</p>
        <p class="empty-tip">去首页逛逛，发现心仪的景点吧</p>
        <button @click="goHome">去首页</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AttractionCard from '../components/AttractionCard.vue'
import { useFavoritesStore } from '../stores/favorites'
import { attractions as mockAttractions } from '../mock/attractions'

const router = useRouter()
const favoritesStore = useFavoritesStore()

const favorites = computed(() => 
  favoritesStore.getFavoriteAttractions(mockAttractions)
)

function goHome() {
  router.push('/')
}
</script>

<style scoped>
.favorites-page {
  padding-top: 60px;
}

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 16px;
  background: #2D5A27;
  display: flex;
  align-items: center;
  z-index: 50;
}

.page-header h1 {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}

.favorites-list {
  padding: 16px 12px;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
}

.empty-state svg {
  width: 80px;
  height: 80px;
  color: #ddd;
  margin-bottom: 20px;
}

.empty-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
}

.empty-tip {
  font-size: 14px;
  color: #999;
  margin-bottom: 24px;
}

.empty-state button {
  padding: 12px 32px;
  background: #2D5A27;
  color: #fff;
  font-size: 15px;
  border-radius: 24px;
}
</style>