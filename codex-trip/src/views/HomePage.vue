<template>
  <div class="home-page page">
    <header class="search-header">
      <div class="search-box">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input 
          type="text" 
          v-model="searchKeyword" 
          placeholder="搜索景点名称"
          @input="handleSearch"
        />
        <button v-if="searchKeyword" class="clear-btn" @click="clearSearch">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <div class="category-tabs">
      <button 
        v-for="cat in categories" 
        :key="cat"
        class="category-tab"
        :class="{ active: currentCategory === cat }"
        @click="selectCategory(cat)"
      >
        {{ cat }}
      </button>
    </div>

    <div class="attraction-list container">
      <template v-if="loading">
        <SkeletonLoading v-for="i in 3" :key="i" />
      </template>
      <template v-else>
        <AttractionCard 
          v-for="item in filteredList" 
          :key="item.id" 
          :attraction="item"
        />
        <div v-if="filteredList.length === 0" class="empty-tip">
          <p>暂无相关景点</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import AttractionCard from '../components/AttractionCard.vue'
import SkeletonLoading from '../components/SkeletonLoading.vue'
import { attractions as mockAttractions, categories, searchAttractions, getAttractionsByCategory } from '../mock/attractions'

const searchKeyword = ref('')
const currentCategory = ref('全部')
const loading = ref(true)
const attractions = ref([])

const filteredList = computed(() => {
  let list = attractions.value
  if (searchKeyword.value) {
    list = searchAttractions(searchKeyword.value)
  } else if (currentCategory.value !== '全部') {
    list = getAttractionsByCategory(currentCategory.value)
  }
  return list
})

function selectCategory(cat) {
  currentCategory.value = cat
  searchKeyword.value = ''
}

function handleSearch() {
  if (searchKeyword.value) {
    currentCategory.value = '全部'
  }
}

function clearSearch() {
  searchKeyword.value = ''
}

async function fetchData() {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  attractions.value = [...mockAttractions]
  loading.value = false
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.home-page {
  padding-top: 60px;
}

.search-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 10px 12px;
  background: #2D5A27;
  display: flex;
  align-items: center;
  z-index: 50;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  background: #fff;
  border-radius: 20px;
}

.search-icon {
  width: 18px;
  height: 18px;
  color: #999;
  flex-shrink: 0;
}

.search-box input {
  flex: 1;
  height: 100%;
  padding: 0 10px;
  font-size: 14px;
  background: transparent;
}

.search-box input::placeholder {
  color: #bbb;
}

.clear-btn {
  width: 24px;
  height: 24px;
  padding: 4px;
  color: #999;
}

.clear-btn svg {
  width: 100%;
  height: 100%;
}

.category-tabs {
  display: flex;
  gap: 8px;
  padding: 12px;
  overflow-x: auto;
  background: #fff;
  -webkit-overflow-scrolling: touch;
}

.category-tabs::-webkit-scrollbar {
  display: none;
}

.category-tab {
  flex-shrink: 0;
  padding: 8px 16px;
  font-size: 14px;
  color: #666;
  background: #f0f0f0;
  border-radius: 16px;
  transition: all 0.2s;
}

.category-tab.active {
  color: #fff;
  background: #2D5A27;
}

.attraction-list {
  padding: 12px;
}

.empty-tip {
  text-align: center;
  padding: 40px 0;
  color: #999;
}
</style>