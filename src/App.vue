<template>
  <!-- 導航欄 -->
  <nav class="nav-container">
    <div class="logo">
      <!-- <img src="" alt="Logo" /> -->
      <P>MedBobi</P>
    </div>
    <div class="nav-items">
      <router-link
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.path"
        class="nav-item"
      >
        {{ item.text }}
      </router-link>
      <div class="lang-switch">
        <span class="current-lang">繁體中文</span>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </nav>

  <!-- 主要內容區域 -->
  <main class="main-content">
    <!-- 頂部圖片網格 -->
    <div class="image-grid">
      <div class="grid-item gray"></div>
      <div class="grid-item pink"></div>
      <div class="grid-item yellow"></div>
      <div class="grid-item blue"></div>
    </div>

    <!-- 關於我們區域 -->
    <section class="about-section">
      <h2 class="section-title">關於我們</h2>

      <div class="about-grid">
        <!-- 左側圖片 -->
        <div class="about-image"></div>

        <!-- 右側文字 -->
        <div class="about-content">
          <h3 class="content-title">醫護資源整合 Medbobi</h3>
          <div class="content-line"></div>
          <p class="content-text">與我們聯絡</p>
        </div>
      </div>

      <div class="about-grid">
        <!-- 左側圖片 -->
        <div class="about-image"></div>

        <!-- 右側內容 -->
        <div class="about-content teal">
          <h3 class="content-title">認識我們</h3>
          <div class="content-line"></div>
          <p class="content-text">聯絡方式</p>
        </div>
      </div>
    </section>

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

      <!-- 1.門診紀錄 -->
      <div class="service-process">
        <div class="process-item yellow-bg">
          <div class="yellow-text">
            <h3 class="process-title">1.門診紀錄</h3>
            <hr class="yellowLine" />
            <p class="ulText" style="display: flex; align-items: center">
              <span class="material-symbols-outlined" style="margin-right: 5px"
                >schedule</span
              >大幅縮短看診時間
            </p>
            <ul class="ulText">
              <li>患者描述症狀時,AI同步記錄整理</li>
              <li>自動生成結構化病史摘要</li>
              <li>醫師能快速掌握病情重點</li>
              <li>平均可節省30%診間時間</li>
            </ul>
            <p class="ulText" style="display: flex; align-items: center">
              <span class="material-symbols-outlined" style="margin-right: 5px"
                >browse_activity</span
              >即時數據分析
            </p>
            <ul class="ulText">
              <li>自動分析患者描述的症狀關聯</li>
              <li>智能比對相似病例</li>
              <li>協助醫師快速判斷</li>
              <li>提供治療建議參考</li>
            </ul>
          </div>
          <div class="yellowBoxImag">
            <img
              src="/male-doctor-with-stethoscope-and-clipboard.jpg"
              alt="門診紀錄"
            />
          </div>
        </div>

        <!-- 護理紀錄 -->
        <div class="process-item">
          <h3 class="process-title">2.護理紀錄</h3>
          <hr class="yellowLine" />
          <div class="half-width">
            <div class="gray-bg">
              <div class="coverbox">
                <p class="grayBox">過往病例紀錄</p>
              </div>
              <img
                src="/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
                alt="過往病例紀錄"
              />
            </div>
            <div class="gray-bg">
              <div class="coverbox">
                <p class="grayBox">Medbobi 系統紀錄</p>
              </div>
              <img src="/bobi護理紀錄3.png" alt="系統紀錄" />
            </div>
          </div>
        </div>

        <!-- 3.會議記錄 -->
        <div class="whitebackground">
          <!-- 左側區塊 -->
          <div class="left-section">
            <div class="process-title">3. 會議記錄</div>
            <hr class="yellowLine" />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="promtingtext">
                <p class="text">
                  擁有中英文醫療語音辨識功能
                  <br />
                  即時會議記錄輸出
                </p>
              </div>
            </div>
            <img src="/meeting.jpg" alt="會議圖片" class="img1" />
          </div>

          <!-- 右側區塊 -->
          <div class="right-section-3">
            <div class="layout-container">
              <!-- 語音功能圖片 -->
              <img src="/mic.png" alt="語音功能" class="feature-image" />
              <!-- 對話內容區 -->
              <div class="dialog-section">
                <div class="dialog-group">
                  <div class="conversation-title">對話內容</div>
                  <div class="dialog-box">
                    <p class="typing">
                      好的，我們今天要討論的是阿茲海默症的最新治療進展。
                      <br />王醫師提到最近在臨床試驗中，使用新型藥物 Lecanemab
                      治療早期患者，可以延緩認知功能退化約27%。
                      <br />李醫師補充說明，搭配生活型態的調整，效果會更好...
                    </p>
                  </div>
                </div>
                <div class="dialog-group">
                  <div class="conversation-title">智能總結</div>
                  <div class="dialog-box">
                    <p class="typing">
                      1. 研究進展：Lecanemab新藥臨床成效顯著
                      <br />
                      2. 治療建議：藥物治療配合生活習慣調整
                      <br />
                      3. 後續追蹤：需持續觀察患者反應及副作用
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4.住院摘要 -->
        <div class="background">
          <div>
            <div class="content-layout">
              <!-- 左側區域 -->
              <div class="left-section-4">
                <div class="process-title">4. 住院摘要</div>
                <hr class="yellowLine" />
                <div class="description">
                  (1)以AI驅動的語音辨識技術，提升醫護工作效率
                  <br />
                  <br />
                  (2)照護紀錄<b>即說即寫</b>，同步更新病歷系統
                  <br />
                  <br />
                  (3)減少紀錄時間，從60分鐘縮短至15分鐘
                  <br />
                  <br />
                  (4)自動將口述內容轉換為標準化醫療紀錄格式
                </div>
              </div>
              <!-- 右側區域 -->
              <div class="right-section-4">
                <div class="feature-list">
                  <div class="feature-item">即時報告記錄輸入</div>
                  <div class="feature-item">自動完成格式化報告</div>
                  <div class="feature-item">自動生成易讀描述報告</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 5.阿茲海默症諮詢標題 -->
        <div class="whitebackground-5">
          <div>
            <h2 class="process-title">5.阿茲海默症衛教</h2>
            <hr class="yellowLine" />
          </div>
          <div class="question-image">
            <img src="/Frame.png" alt="questions" />
          </div>
        </div>
       

        <!-- Medbobi 協助區塊 -->
        <div class="help-section">
          <div class="help-header">
            <div class="lightbulb-icon">
              <i class="fas fa-lightbulb"></i>
            </div>
            <div class="help-title">
              <h3>Medbobi 幫助你</h3>
            </div>
          </div>

          <!-- 回答區塊 -->
          <div class="answer-container">
            <div class="chat-box">
              <div class="chat-header">
                <img src="" alt="專家頭像" class="avatar" />
                <span class="expert-name">專家回答</span>
              </div>
              <div class="chat-content">
                <h4>阿茲海默症照護建議與解答：</h4>
                <ul class="answer-list">
                  <li>保持規律的生活作息和運動習慣</li>
                  <li>提供安全和熟悉的環境</li>
                  <li>保持耐心和理解的態度</li>
                  <li>尋求專業醫療協助和支持</li>
                  <li>參與社交活動和認知訓練</li>
                </ul>
                <div class="source-link">
                  <span>專業資料來源</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 聯絡資訊 -->
      <footer class="contact-info">
        <div class="info-container">
          <div class="company-info">
            <h3>醫護資源整合 Medbobi</h3>
            <div class="contact-details">
              <p>電話：+886-2-2122-2234</p>
              <p>傳真：+886-2-2122-2234</p>
              <p>手機：+886-2-2122-2234</p>
              <p>Email：service@medsaki.com</p>
            </div>
          </div>
          <div class="address-info">
            <h4>中興院區</h4>
            <p>新竹市中興路240巷2弄199號</p>
            <h4>新竹院區</h4>
            <p>新竹市光復路二段33號1樓</p>
          </div>
          <div class="service-info">
            <h4>服務內容</h4>
            <ul>
              <li>門診預約</li>
              <li>看診進度</li>
              <li>衛教諮詢</li>
              <li>社區關懷</li>
              <li>疾病預防管理</li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AboutPage",
  setup() {
    const navItems = ref([
      { text: "首頁", path: "/" },
      { text: "研發紀錄", path: "/research" },
      { text: "認識我們", path: "/about" },
      { text: "聯絡我們", path: "/contact" },
    ]);

    return {
      navItems,
    };
  },
});
</script>

<style scoped>
/* 導航欄樣式 */
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
.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 2rem;
}

.grid-item {
  height: 200px;
  border-radius: 8px;
}

.gray {
  background-color: #f5f5f5;
}
.pink {
  background-color: #ffcdd2;
}
.yellow {
  background-color: #fff9c4;
}
.blue {
  background-color: #b3e5fc;
}

/* 關於我們區域 */
.about-section {
  padding: 2rem;
}

.section-title {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.about-image {
  background-color: #f5f5f5;
  height: 300px;
  border-radius: 8px;
}

.about-content {
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
}

.about-content.teal {
  background-color: #b2dfdb;
}

.content-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.content-line {
  width: 50px;
  height: 2px;
  background-color: #26a69a;
  margin: 1rem 0;
}

.content-text {
  color: #666;
}

/* 服務介紹樣式 */
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 24;
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

/* 1.門診紀錄 */
.process-item {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
}

.process-content {
  padding: 2rem;
  min-height: 200px;
  border-radius: 8px;
}

.process-title {
  font-size: 2.25rem;
  margin-bottom: 1rem;
  color: rgba(22, 104, 104, 1);
  font-weight: 800;
}

.ulText {
  font-weight: 800;
}

.yellow-bg {
  width: 100%;
  height: 712px;
  background: linear-gradient(to right, #8cd7d7, #f5f5f5);
  min-height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;
}

.yellow-text {
  font-size: 24px;
}

.yellowBoxImag {
  width: 600px;
  height: 600px;
  overflow: hidden;
  border-radius: 15px;
  aspect-ratio: 1;
}

.yellowBoxImag img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.yellowLine {
  border: none;
  height: 5px;
  background-color: rgba(255, 230, 109, 1);
  width: 30rem;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 2rem;
}

/* 2.護理紀錄 */
.half-width {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  display: flex;
  justify-content: center;
}

.gray-bg {
  height: 600px;
  overflow: hidden;
  border-radius: 15px;
  aspect-ratio: 1;
  position: relative;
  display: inline-block;
}

.gray-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grayBox {
  z-index: 1;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 230, 109, 0.6);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 800;
  font-size: 1.25rem;
  opacity: 1;
  transition: opacity 0.3s ease;
}
.gray-bg:hover .grayBox {
  background-color: rgba(255, 230, 109, 1);
}

/* 3.會議紀錄 */
.whitebackground {
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
}

/* 左側區塊樣式 */
.left-section-3 {
  flex: 1;
  max-width: 50%;
  display: flex;
  justify-content: center;
}

.meetingtitle {
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  color: #166868;
  border-bottom: 7px solid #ffe66d;
  margin-bottom: 20px;
}

.text {
  font-size: 18px;
  width: 100%;
  color: #000;
  line-height: 1.6;
  margin-bottom: 20px;
}

.img1 {
  width: 100%;
  height: auto;
}

/* 右側區塊樣式 */
.right-section {
  flex: 1;
  max-width: 50%;
}

.layout-container {
  background-color: #8cd7d7;
  border-radius: 15px;
  padding: 20px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.voice-image-container {
  width: 30%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.feature-image {
  height: 150px;
  border-radius: 8px;
}

.dialog-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dialog-group {
  width: 100%;
}

.conversation-title {
  font-size: 20px;
  color: #166868;
  font-weight: bold;
  margin-bottom: 10px;
}

.dialog-box {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden; /* 防止打字效果溢出 */
}

.typing {
  width: 100%;
  white-space: nowrap; /* 防止文字換行 */
  overflow: hidden;
  border-right: 1px solid transparent;
  animation: typing 2s steps(30, end), blink-caret 0.75s step-end infinite;
  font-family: Consolas, Monaco;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: currentColor;
  }
}

/* 4.住院摘要 */
.background {
  background-image: url("/hospital-room-interior.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 500px;
  padding: 20px;
  border-radius: 15px;
  position: relative;
}

.content-layout {
  display: flex;
  justify-content: space-between;
  height: 100%;
  gap: 40px;
}

.left-section-4 {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.right-section-4 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.description {
  font-size: 18px;
  color: #333;
  line-height: 1.6;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  height: 300px;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}

.feature-item {
  background-color: #ffb5b5;
  padding: 15px 25px;
  border-radius: 8px;
  font-size: 18px;
  color: #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: bold;
}

.feature-item:hover {
  transform: translateX(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 5.阿茲海默症衛教 */
.whitebackground-5 {
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  height: 2100px;
  display: flex; 
  flex-direction: column;
}

.question-image {
  display: flex;
  justify-content: center;
}

.question-image img{
  max-width: 1000px;
}



.help-section {
  margin-bottom: 3rem;
}

.help-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.lightbulb-icon {
  color: #ffd700;
  font-size: 2rem;
}

.answer-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.chat-box {
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
}
.chat-header {
  background-color: #00bcd4;
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.chat-content {
  padding: 1.5rem;
}

.answer-list {
  list-style-type: none;
  padding: 0;
}

.answer-list li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.answer-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #00bcd4;
}

.source-link {
  margin-top: 1.5rem;
  text-align: right;
  color: #00bcd4;
  cursor: pointer;
}
.contact-info {
  background-color: #26a69a;
  color: white;
  padding: 3rem 2rem;
}
.info-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.contact-details p {
  margin: 0.5rem 0;
}
.info-container {
  grid-template-columns: 1fr;
  text-align: center;
}
.contact-info {
  padding: 2rem 1rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .doctor-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .doctor-image {
    width: 300px;
  }

  .yellowBoxImag {
    width: 500px;
    height: 500px;
  }

  .yellow-bg {
    flex-direction: column;
    height: 1000px;
  }

  .half-width {
    grid-template-columns: 1fr;
  }

  .process-group {
    grid-template-columns: 1fr;
  }

  .process-images {
    grid-template-columns: 1fr;
  }

  .content-layout {
    flex-direction: column;
  }

  .left-section,
  .right-section {
    width: 100%;
    padding: 10px;
  }

  .title {
    font-size: 24px;
  }

  .feature-item {
    font-size: 16px;
    padding: 12px 20px;
  }

  .greenbackground {
    flex-direction: column;
  }

  .left-section-4,
  .right-section-4 {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .doctor-grid {
    grid-template-columns: 1fr;
  }
  .yellowBoxImag {
    width: 100px;
    height: 100px;
  }
}
</style>
