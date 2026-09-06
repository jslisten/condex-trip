<template>
  <div class="detail-page page">
    <div class="back-btn" @click="goBack">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m15 18-6-6 6-6"/>
      </svg>
    </div>

    <div v-if="loading" class="loading">
      <div class="loading-spinner"></div>
      <p>加载中...</p>
    </div>

    <template v-else-if="attraction">
      <div class="carousel">
        <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(img, index) in attraction.images" :key="index" class="carousel-item">
            <img :src="img" :alt="attraction.name" />
          </div>
        </div>
        <div class="carousel-dots">
          <span 
            v-for="(_, index) in attraction.images" 
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="currentIndex = index"
          ></span>
        </div>
      </div>

      <div class="detail-content">
        <div class="detail-header">
          <h1 class="detail-title">{{ attraction.name }}</h1>
          <button class="favorite-btn" :class="{ active: isFavorite }" @click="toggleFavorite">
            <svg viewBox="0 0 24 24" :fill="isFavorite ? '#ff4757' : 'none'" stroke="#ff4757" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>

        <div class="rating-row">
          <span class="stars">★★★★☆</span>
          <span class="score">{{ attraction.rating }}</span>
          <span class="count">{{ formatCount(attraction.ratingCount) }}人点评</span>
        </div>

        <div class="info-section">
          <div class="info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{{ attraction.address }}</span>
          </div>
          <div class="info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>{{ attraction.openingHours }}</span>
          </div>
          <div class="info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
            <span>{{ attraction.ticketPrice }}</span>
          </div>
          <div class="info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>建议游玩 {{ attraction.suggestedDuration }}</span>
          </div>
        </div>

        <div class="intro-section">
          <h2>景点介绍</h2>
          <p>{{ attraction.description }}</p>
        </div>
      </div>
    </template>

    <div v-else class="not-found">
      <p>未找到该景点</p>
      <button @click="goBack">返回首页</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAttractionById } from '../mock/attractions'
import { useFavoritesStore } from '../stores/favorites'

const route = useRoute()
const router = useRouter()
const favoritesStore = useFavoritesStore()

const attraction = ref(null)
const loading = ref(true)
const currentIndex = ref(0)

const isFavorite = computed(() => 
  attraction.value ? favoritesStore.isFavorite(attraction.value.id) : false
)

function goBack() {
  router.back()
}

function toggleFavorite() {
  if (attraction.value) {
    favoritesStore.toggleFavorite(attraction.value.id)
  }
}

function formatCount(count) {
  if (count >= 10000) {
    return (count / 10000).toFixed(1) + '万'
  }
  return count
}

onMounted(async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 500))
  attraction.value = getAttractionById(route.params.id)
  loading.value = false
})
</script>

<style scoped>
.detail-page {
  background: #f5f5f5;
}

.back-btn {
  position: fixed;
  top: 12px;
  left: 12px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  z-index: 60;
  color: #fff;
}

.back-btn svg {
  width: 24px;
  height: 24px;
}

.carousel {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  height: 100%;
  transition: transform 0.3s ease;
}

.carousel-item {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.carousel-dots span {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transition: all 0.2s;
}

.carousel-dots span.active {
  width: 20px;
  border-radius: 4px;
  background: #fff;
}

.detail-content {
  padding: 16px;
  margin-top: -20px;
  background: #fff;
  border-radius: 16px 16px 0 0;
  position: relative;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.detail-title {
  font-size: 22px;
  font-weight: 600;
  color: #333;
  flex: 1;
  padding-right: 12px;
}

.favorite-btn {
  width: 40px;
  height: 40px;
  padding: 8px;
  background: #fff5f5;
  border-radius: 50%;
  transition: transform 0.2s;
}

.favorite-btn:active {
  transform: scale(1.2);
}

.favorite-btn svg {
  width: 100%;
  height: 100%;
}

.rating-row {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.stars {
  color: #ffc107;
  font-size: 14px;
  letter-spacing: -2px;
  margin-right: 6px;
}

.score {
  color: #ff6b6b;
  font-size: 16px;
  font-weight: 600;
  margin-right: 8px;
}

.count {
  color: #999;
  font-size: 13px;
}

.info-section {
  padding: 16px;
  background: #f8f8f8;
  border-radius: 8px;
  margin-bottom: 16px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  font-size: 14px;
  color: #666;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-item svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-right: 10px;
  color: #2D5A27;
}

.intro-section h2 {
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
}

.intro-section p {
  font-size: 15px;
  color: #666;
  line-height: 1.8;
}

.loading, .not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  color: #999;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f0f0f0;
  border-top-color: #2D5A27;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 12px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.not-found button {
  margin-top: 16px;
  padding: 10px 24px;
  background: #2D5A27;
  color: #fff;
  border-radius: 20px;
}
</style>