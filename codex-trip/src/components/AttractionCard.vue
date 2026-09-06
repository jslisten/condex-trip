<template>
  <div class="attraction-card" @click="goDetail">
    <div class="card-image">
      <img :src="attraction.coverImage" :alt="attraction.name" loading="lazy" />
      <span class="category-tag">{{ attraction.category }}</span>
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ attraction.name }}</h3>
      <div class="card-info">
        <div class="rating">
          <span class="star">★★★★☆</span>
          <span class="score">{{ attraction.rating }}</span>
          <span class="count">({{ formatCount(attraction.ratingCount) }})</span>
        </div>
        <button 
          class="favorite-btn" 
          :class="{ active: isFavorite }"
          @click.stop="toggleFavorite"
        >
          <svg viewBox="0 0 24 24" :fill="isFavorite ? '#ff4757' : 'none'" stroke="#ff4757" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <p class="card-desc">{{ attraction.description.slice(0, 50) }}...</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFavoritesStore } from '../stores/favorites'

const props = defineProps({
  attraction: {
    type: Object,
    required: true
  }
})

const router = useRouter()
const favoritesStore = useFavoritesStore()

const isFavorite = computed(() => favoritesStore.isFavorite(props.attraction.id))

function goDetail() {
  router.push(`/detail/${props.attraction.id}`)
}

function toggleFavorite() {
  favoritesStore.toggleFavorite(props.attraction.id)
}

function formatCount(count) {
  if (count >= 10000) {
    return (count / 10000).toFixed(1) + '万'
  }
  return count
}
</script>

<style scoped>
.attraction-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  transition: transform 0.2s;
}

.attraction-card:active {
  transform: scale(0.98);
}

.card-image {
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 4px 10px;
  background: rgba(45, 90, 39, 0.85);
  color: #fff;
  font-size: 12px;
  border-radius: 4px;
}

.card-content {
  padding: 12px;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.card-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.rating {
  display: flex;
  align-items: center;
  font-size: 12px;
}

.star {
  color: #ffc107;
  margin-right: 4px;
  letter-spacing: -2px;
}

.score {
  color: #ff6b6b;
  font-weight: 600;
  margin-right: 4px;
}

.count {
  color: #999;
}

.favorite-btn {
  width: 32px;
  height: 32px;
  padding: 6px;
  background: #fff;
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

.card-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.4;
}
</style>