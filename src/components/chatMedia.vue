<template>
  <div class="media-container rounded">
    <div class="header">
      <span class="media">Media</span>
      <span class="unit">(36)</span>
    </div>
    <div class="message-content">
      <div class="image-grid">
        <div class="image-box">
          <img src="@/assets/img1.png" alt="Image 1">
        </div>
        <div class="image-box">
          <img src="@/assets/img1.png" alt="Image 2">
        </div>
        <div class="image-box">
          <img src="@/assets/img1.png" alt="Image 3">
        </div>
        <div class="image-box">
          <img src="@/assets/img3.jpeg" alt="Image 4">
        </div>
        <div class="image-box">
          <img src="@/assets/img3.jpeg" alt="Image 5">
        </div>
        <div class="image-box">
          <img src="@/assets/img4.jpeg" alt="Image 6">
        </div>
      </div>
    </div>

    <div class="files-section">
      <div class="header">
        <span class="media">Files</span>
        <span class="unit">(36)</span>
      </div>
      <div class="file-list">
        <div class="file-item">
          <div class="file-icon-box">
            <img src="@/assets/adobe1.png" alt="Adobe Icon">
          </div>
          <div class="file-info">
            <span class="file-name">service-task.pdf</span>
            <span class="file-details">2 MB • 2 Dec 2022</span>
          </div>
        </div>
        <div class="file-item">
          <div class="file-icon-box">
            <img src="@/assets/figma 1.png" alt="Adobe Icon">
          </div>
          <div class="file-info">
            <span class="file-name">homepage-design.fig</span>
            <span class="file-details">2 MB • 2 Dec 2022</span>
          </div>
        </div>
        <div class="file-item">
          <div class="file-icon-box">
            <img src="@/assets/chrome1.png" alt="Adobe Icon">
          </div>
          <div class="file-info">
            <span class="file-name">about-us.html</span>
            <span class="file-details">2 MB • 2 Dec 2022</span>
          </div>
        </div>
        <div class="file-item">
          <div class="file-icon-box">
            <img src="@/assets/zip-folder 1.png" alt="Adobe Icon">
          </div>
          <div class="file-info">
            <span class="file-name">work-project.zip</span>
            <span class="file-details">2 MB • 2 Dec 2022</span>
          </div>
        </div>
        <div class="file-item">
          <div class="file-icon-box">
            <img src="@/assets/javascript1.png" alt="Adobe Icon">
          </div>
          <div class="file-info">
            <span class="file-name">custom.js</span>
            <span class="file-details">2 MB • 2 Dec 2022</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaFilesSection',
};
</script>

<style scoped>
.media-container {
  height: 70.5vh;
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;
  margin-left: -23px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header {
  margin-bottom: 16px;
  margin-right: 100%;

}

.media {
  font-weight: bold;
  color: #333;
}

.unit {
  color: #999;
  margin-left: 8px;
}

.message-content {
  margin-bottom: 16px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.image-box {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.image-box img {
  width: 100%;
  height: auto;
  display: block;
}

.files-section {
  margin-top: 16px;
}

.file-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 12px; 
}

.file-icon-box {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EFF4FA;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.file-icon-box img {
  width: 24px;
  height: 24px;
}

.file-info {
  display: flex;
  flex-direction: column;
}

.file-name {
  font-weight: bold;
  color: #333;
  font-size: 14px;
}

.file-details {
  color: #999;
  font-size: 12px;
}
</style>