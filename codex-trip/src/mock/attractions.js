export const attractions = [
  {
    id: 1,
    name: '故宫博物馆',
    coverImage: 'https://picsum.photos/seed/gugong/400/300',
    images: [
      'https://picsum.photos/seed/gugong1/800/600',
      'https://picsum.photos/seed/gugong2/800/600',
      'https://picsum.photos/seed/gugong3/800/600'
    ],
    category: '景点',
    rating: 4.8,
    ratingCount: 125680,
    address: '北京市东城区景山前街4号',
    openingHours: '08:30-17:00（周一闭馆）',
    ticketPrice: '旺季60元/人 淡季40元/人',
    suggestedDuration: '3-4小时',
    description: '故宫又名紫禁城，是明清两代的皇家宫殿，也是世界上现存规模最大、保存最完整的木质结构古建筑群。故宫收藏了大量珍贵文物，是中国文化的瑰宝。建议从午门进入，沿中轴线参观三大殿，再游览东西六宫。'
  },
  {
    id: 2,
    name: '天坛公园',
    coverImage: 'https://picsum.photos/seed/tiantan/400/300',
    images: [
      'https://picsum.photos/seed/tiantan1/800/600',
      'https://picsum.photos/seed/tiantan2/800/600',
      'https://picsum.photos/seed/tiantan3/800/600'
    ],
    category: '景点',
    rating: 4.7,
    ratingCount: 89520,
    address: '北京市东城区天坛路1号',
    openingHours: '06:00-21:00',
    ticketPrice: '34元（联票）',
    suggestedDuration: '2-3小时',
    description: '天坛是明清两代祭天祈谷的场所，是中国古代建筑艺术的杰作。主要建筑有祈年殿、回音壁和圜丘。祈年殿蓝色琉璃瓦顶熠熠生辉，是天坛的标志性建筑。'
  },
  {
    id: 3,
    name: '颐和园',
    coverImage: 'https://picsum.photos/seed/yiheyuan/400/300',
    images: [
      'https://picsum.photos/seed/yiheyuan1/800/600',
      'https://picsum.photos/seed/yiheyuan2/800/600',
      'https://picsum.photos/seed/yiheyuan3/800/600'
    ],
    category: '公园',
    rating: 4.9,
    ratingCount: 156780,
    address: '北京市海淀区新建宫门路19号',
    openingHours: '06:00-20:00',
    ticketPrice: '60元（联票）',
    suggestedDuration: '4-5小时',
    description: '颐和园是中国现存最大的皇家园林，以昆明湖和万寿山为主体，汇集了江南园林的精华。长廊、十七孔桥、石舫等景点闻名遐迩。建议从东宫门进入，依次参观佛香阁、排云殿、长廊和昆明湖。'
  },
  {
    id: 4,
    name: '八达岭长城',
    coverImage: 'https://picsum.photos/seed/badaling/400/300',
    images: [
      'https://picsum.photos/seed/badaling1/800/600',
      'https://picsum.photos/seed/badaling2/800/600',
      'https://picsum.photos/seed/badaling3/800/600'
    ],
    category: '景点',
    rating: 4.6,
    ratingCount: 203450,
    address: '北京市延庆区军都山关沟北侧',
    openingHours: '07:00-18:00（暑期开放）',
    ticketPrice: '40元',
    suggestedDuration: '3-4小时',
    description: '八达岭长城是明长城最具代表性的地段，也是万里长城中最早向游客开放的部分。长城依山势起伏蜿蜒，有好汉坡等著名景点。建议乘缆车登城，省时省力。'
  },
  {
    id: 5,
    name: '国家博物馆',
    coverImage: 'https://picsum.photos/seed/guobowuguan/400/300',
    images: [
      'https://picsum.photos/seed/guobowuguan1/800/600',
      'https://picsum.photos/seed/guobowuguan2/800/600',
      'https://picsum.photos/seed/guobowuguan3/800/600'
    ],
    category: '博物馆',
    rating: 4.8,
    ratingCount: 67890,
    address: '北京市东城区东长安街16号',
    openingHours: '09:00-17:00（周一闭馆）',
    ticketPrice: '免费（需预约）',
    suggestedDuration: '3-4小时',
    description: '中国国家博物馆是代表国家收藏、研究、展览和传播中华优秀传统文化、社会主义先进文化和国际化最具代表性的国家级历史文化博物馆。馆藏文物丰富，包括后母戊鼎、四羊方尊等镇馆之宝。'
  },
  {
    id: 6,
    name: '南锣鼓巷',
    coverImage: 'https://picsum.photos/seed/nanluoguxiang/400/300',
    images: [
      'https://picsum.photos/seed/nanluoguxiang1/800/600',
      'https://picsum.photos/seed/nanluoguxiang2/800/600',
      'https://picsum.photos/seed/nanluoguxiang3/800/600'
    ],
    category: '美食街',
    rating: 4.5,
    ratingCount: 98230,
    address: '北京市东城区南锣鼓巷胡同',
    openingHours: '全天开放',
    ticketPrice: '免费',
    suggestedDuration: '2-3小时',
    description: '南锣鼓巷是北京最古老的街区之一，有着740多年的历史。这里汇集了各种特色小吃、文创店和传统胡同文化。建议漫步时光穿梭，可去品尝美食，感受老北京胡同的独特韵味。'
  }
]

export const categories = ['全部', '景点', '公园', '博物馆', '美食街']

export function getAttractionById(id) {
  return attractions.find(item => item.id === Number(id))
}

export function getAttractionsByCategory(category) {
  if (category === '全部' || !category) {
    return attractions
  }
  return attractions.filter(item => item.category === category)
}

export function searchAttractions(keyword) {
  if (!keyword) return attractions
  return attractions.filter(item => 
    item.name.toLowerCase().includes(keyword.toLowerCase())
  )
}