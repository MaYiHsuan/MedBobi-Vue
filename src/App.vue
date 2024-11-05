<template>
  <nav class="nav-container">
    <div class="logo">
      <!-- <img src="/" alt="Logo" /> -->
      <p>Medbobi</p>
    </div>
    <div class="nav-items">
      <div class="lang-switch">
        <span class="current-lang">繁體中文</span>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </nav>

  <!-- 主要內容區域 -->
  <main class="main-content">
    <!-- 頂部照片 -->
    <section class="gallery-container">
      <div class="image-row">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="image-item"
          :class="{
            expanded: selectedIndex === index,
            collapsed: selectedIndex !== null && selectedIndex !== index,
          }"
          @click="toggleImage(index)"
        >
          <div class="image-wrapper">
            <img :src="image.url" :alt="image.title" class="gallery-image" />
            <div class="image-overlay" v-show="selectedIndex === index">
              <h3 class="image-title">{{ image.title }}</h3>
              <p class="image-description">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="titletext">
        <p class="bobiTitle">Medbobi</p>
        <h1 class="h1text">
          致力於打造全方位智慧醫療生態系統，運用創新科技整合<br />
          醫療資源，為您提供更優質、更便捷的醫療服務體驗
        </h1>
        <button class="titlebutton">登入立即體驗</button>
        <!-- @click="goToLogin" -->
      </div>
    </section>

    <!-- 關於我們 -->
    <!-- <div class="top">關於我們</div> -->

    <div class="hero-section">
      <!-- 第一部分：原有的漸層背景容器 -->
      <!-- 漸層背景容器 -->
      <div class="green-background-1">
        <div class="gradient-container">
          <!-- 左側文字區域 -->
          <div class="text-content fade-in">
            <div class="brand-name slide-in-left">醫護聲易通 Medbobi</div>
            <div class="slogan">
              "智慧對話，專業解答，
              <br />
              為您提供最貼心的服務"
            </div>
          </div>

          <!-- 右側手機圖示 -->
          <div class="phone-container">
            <div class="phone phone-top"></div>
            <div class="phone phone-bottom"></div>
          </div>
        </div>
      </div>

      <!-- 第二部分：AI輔助診斷區塊 -->
      <div>
        <div class="ai-section">
          <!-- 左側圖片 -->
          <div class="ai-image-container slide-in-left">
            <img src="" alt="AI診斷" class="ai-image" />
          </div>
          <!-- 右側內容 -->
          <div class="ai-content slide-in-right">
            <h2 class="ai-title">AI 輔助診斷</h2>
            <div class="yellow-line"></div>
            <ul class="feature-list">
              <li class="feature-item">運用LLM協助語音診斷</li>
              <li class="feature-item">提升診斷準確度</li>
              <li class="feature-item">縮短就診等待時間</li>
              <li class="feature-item">即時分析病症資料</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 服務介紹 -->
    <section class="services-section">
      <h2 class="section-title">服務介紹</h2>

      <!-- 服務照片網格 -->
      <div class="doctor-grid">
        <div class="doctor-image">
          <img
            src="/male-doctor-with-stethoscope-and-clipboard.jpg"
            alt="門診紀錄"
          />
          <div class="overlay">
            <span class="material-symbols-outlined icon">stethoscope</span>
            <!-- 使用正確的圖標名稱 -->
            <span class="iconTitle">門診紀錄</span>
          </div>
        </div>
        <div class="doctor-image">
          <img
            src="/female-medical-professional-holds-clipboard-in-hospital-room.jpg"
            alt="護理紀錄"
          />
          <div class="overlay">
            <span class="material-symbols-outlined icon"
              >medication_liquid</span
            >
            <!-- 使用正確的圖標名稱 -->
            <span class="iconTitle">護理紀錄</span>
          </div>
        </div>
        <div class="doctor-image">
          <img src="/team-taking-meeting-notes.jpg" alt="會議紀錄" />
          <div class="overlay">
            <span class="material-symbols-outlined icon">clinical_notes</span>
            <!-- 使用正確的圖標名稱 -->
            <span class="iconTitle">會議紀錄</span>
          </div>
        </div>
        <div class="doctor-image">
          <img src="/doctor-approaches-patient.jpg" alt="住院摘要" />
          <div class="overlay">
            <span class="material-symbols-outlined icon">home_health</span>
            <!-- 使用正確的圖標名稱 -->
            <span class="iconTitle">住院摘要</span>
          </div>
        </div>
        <div class="doctor-image">
          <img src="/nurse-helping-patient.jpg" alt="衛教諮詢" />
          <div class="overlay">
            <span class="material-symbols-outlined icon">vaccines</span>
            <!-- 使用正確的圖標名稱 -->
            <span class="iconTitle">衛教諮詢</span>
          </div>
        </div>
        <div class="doctor-image">
          <img src="/medical-doctors-desk.jpg" alt="其他服務" />
          <div class="overlay">
            <span class="material-symbols-outlined icon">info</span>
            <!-- 使用正確的圖標名稱 -->
            <span class="iconTitle">其他服務</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AboutPage",
  setup() {
    const selectedIndex = ref<number | null>(0);
    const galleryImages = ref([
      {
        url: "/pexels-gustavo-fring-3985163.jpg",
        title: "專業醫療團隊",
        description: "我們的專業醫療團隊提供全方位醫療照護服務",
      },
      {
        url: "/doctor-approaches-patient.jpg",
        title: "細心照護",
        description: "以病人為中心的貼心護理服務",
      },
      {
        url: "/doctors-medical-gear.jpg",
        title: "醫療諮詢",
        description: "提供專業的醫療諮詢與建議",
      },
      {
        url: "/hospital-room-interior.jpg",
        title: "完整紀錄",
        description: "詳實的醫療記錄管理系統",
      },
    ]);

    const toggleImage = (index: number) => {
      selectedIndex.value = selectedIndex.value === index ? null : index;
    };

    return {
      selectedIndex,
      galleryImages,
      toggleImage,
    };
  },
});
</script>

<style scoped>
.main-content {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  max-width: 1360px;
}
/* head */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #26a69a;
  color: white;
}

.logo {
  height: 40px;
}

.logo img {
  height: 100%;
}

.nav-items {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.lang-switch {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
}

/* 頂部圖片網格 */
.gallery-container {
  padding: 20px;
  overflow: hidden;
}

.image-row {
  display: flex;
  gap: 10px;
  height: 600px;
  width: 100%;
}

.image-item {
  flex: 1;
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
}

.image-wrapper {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-item.expanded {
  flex: 3;
}

.image-item.collapsed {
  flex: 0.5;
}

.image-item:hover .gallery-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.expanded .image-overlay {
  opacity: 1;
}

.image-title {
  font-size: 1.5rem;
  margin-bottom: 8px;
  font-weight: bold;
}

.image-description {
  font-size: 1rem;
  line-height: 1.4;
}

.titletext {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.h1text {
  margin: 10px 0 20px 0;
}

.bobiTitle {
  font-size: 40px;
  font-weight: bold;
  color: #166868;
  margin: 10px 0 0 0;
}

.titlebutton {
  border: 2px solid #166868;
  color: #166868;
  background-color: transparent;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 25px;
}

/* 滑鼠懸停時的效果 */
.titlebutton:hover {
  background-color: #166868;
  color: white;
}

/* 按下時的效果 */
.titlebutton:active {
  background-color: #166868;
  color: white;
}

/* 關於我們區域 */
.green-background-1 {
  display: flex;
  justify-content: center;
}

.top {
  font-size: 40px;
  font-weight: bold;
  gap: 10px;
  padding-bottom: 10px;
}

.hero-section {
  background: linear-gradient(135deg, #8cd7d7 0%, #166868 100%);
  width: 100%;
  min-height: 400px;
  height: 1000px;
  overflow: hidden;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.gradient-container {
  padding: 40px;
  min-height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 800px;
}

.text-content {
  flex: 1;
  padding: 20px;
  z-index: 2;
}

.brand-name {
  font-size: 32px;
  font-weight: bold;
  color: #166868;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.brand-name::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #ffe66d;
}
/* 添加淡入動畫 */
.fade-in {
  animation: fadeIn 1s ease-in forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 從左滑入動畫 */
.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  animation: slideInLeft 0.8s ease forwards;
  animation-delay: 0.3s; /* 延遲執行 */
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 從右滑入動畫 */
.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  animation: slideInRight 0.8s ease forwards;
  animation-delay: 0.6s; /* 延遲執行 */
}
/* 左側圖片容器 */
.ai-image-container {
  flex: 1;
  max-width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ai-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.ai-image:hover {
  transform: scale(1.02);
}

/* AI診斷區塊樣式 */
.ai-section {
  padding: 40px;
  position: relative;
  min-height: 300px;
  display: flex;
  justify-content: flex-end;
  max-width: 1360px;
}

.ai-content {
  width: 50%;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}

.ai-title {
  font-size: 28px;
  font-weight: bold;
  color: #166868;
  margin-bottom: 15px;
}

.yellow-line {
  width: 60%;
  height: 4px;
  background-color: #ffe66d;
  margin-bottom: 20px;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-item {
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
  padding-left: 20px;
  position: relative;
}

.feature-item::before {
  content: "-";
  position: absolute;
  left: 0;
  color: #166868;
}
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slogan {
  font-size: 24px;
  color: #ffffff;
  line-height: 1.6;
  margin-top: 20px;
}

.phone-container {
  position: relative;
  width: 300px;
  height: 400px;
  margin-right: 40px;
}

.phone {
  position: absolute;
  width: 200px;
  height: 380px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.phone-top {
  right: 40px;
  top: 0;
  transform: rotate(-5deg);
  z-index: 2;
}

.phone-bottom {
  right: 80px;
  top: 20px;
  transform: rotate(-15deg);
  opacity: 0.8;
}

/* 添加互動效果 */
.phone-container:hover .phone-top {
  transform: rotate(0deg) translateY(-10px);
}

.phone-container:hover .phone-bottom {
  transform: rotate(-10deg) translateY(10px);
}

/* 服務介紹樣式 */
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 24;
}

.section-title {
  font-size: 2.25rem;
  font-weight: bold;
}

.services-section {
  padding: 2rem;
  background-color: #f5f5f5;
}

.doctor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 使用三列的網格 */
  gap: 1.5rem;
  max-width: 1200px; /* 可根據需要調整最大寬度 */
  width: 100%;
  justify-self: center;
}

.icon-container {
  position: relative;
  display: inline-block;
}

.image {
  width: 300px; /* 調整圖片大小 */
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.doctor-image:hover .overlay {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.5);
}

.icon {
  margin-right: 5px; /* 圖標與文字之間的距離 */
  font-size: 50px; /* 調整圖標大小 */
}

.iconTitle {
  font-size: 24px;
}

.doctor-image {
  width: 400px;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 15px;
  position: relative;
  display: inline-block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.doctor-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-process {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .doctor-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .doctor-image {
    width: 300px;
  }

  /* 頂部 */
  .image-row {
    height: 300px;
  }

  .image-title {
    font-size: 1.2rem;
  }

  .image-description {
    font-size: 0.9rem;
  }

  .image-item.expanded {
    flex: 2;
  }

  /* 關於我們 */
  .gradient-container {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .text-content {
    padding: 20px 0;
  }

  .brand-name {
    font-size: 28px;
  }

  .brand-name::after {
    left: 20%;
    width: 60%;
  }

  .slogan {
    font-size: 20px;
  }

  .phone-container {
    margin: 40px auto;
    width: 250px;
    height: 300px;
  }

  .phone {
    width: 160px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .doctor-grid {
    grid-template-columns: 1fr;
  }
}
</style>
