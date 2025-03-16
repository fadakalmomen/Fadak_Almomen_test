<template>
  <div class="media-container">
    
    <div class="header">
      <span class="media">Media</span>
      <span class="unit">({{ mediaItems.length }})</span>
    </div>
    <div class="message-content" v-if="mediaItems.length > 0">
      <div class="image-grid">
        <div class="image-box" v-for="(item, index) in mediaItems" :key="index">
          <img :src="item.src" :alt="item.alt">
        </div>
      </div>
    </div>
    <div v-else class="empty-state">
      No media available.
    </div>

    
    <div class="files-section">
      <div class="header">
        <span class="media">Files</span>
        <span class="unit">({{ fileItems.length }})</span>
      </div>
      <div class="file-list" v-if="fileItems.length > 0">
        <div class="file-item" v-for="(file, index) in fileItems" :key="index">
          <div class="file-icon-box">
            <img :src="file.icon" :alt="file.name">
          </div>
          <div class="file-info">
            <span class="file-name">{{ file.name }}</span>
            <span class="file-details">{{ file.size }} • {{ file.date }}</span>
          </div>
        </div>
      </div>
      <div v-else class="empty-state">
        No files available.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaFilesSection',
  data() {
    return {
      mediaItems: [
        { src: require('@/assets/img1.png'), alt: 'Image 1' },
        { src: require('@/assets/image.png'), alt: 'Image 2' },
        { src: require('@/assets/img3.jpeg'), alt: 'Image 3' },
        { src: require('@/assets/img4.jpeg'), alt: 'Image 4' },
        { src: require('@/assets/img1.png'), alt: 'Image 5' },
        { src: require('@/assets/image.png'), alt: 'Image 6' },
        
      ],
      fileItems: [
        { icon: require('@/assets/adobe1.png'), name: 'service-task.pdf', size: '2 MB', date: '2 Dec 2022' },
        { icon: require('@/assets/figma 1.png'), name: 'homepage-design.fig', size: '2 MB', date: '2 Dec 2022' },
        { icon: require('@/assets/chrome1.png'), name: 'about-us.html', size: '2 MB', date: '2 Dec 2022' },
        { icon: require('@/assets/zip-folder 1.png'), name: 'work-project.zip', size: '2 MB', date: '2 Dec 2022' },
        { icon: require('@/assets/javascript1.png'), name: 'custom.js', size: '2 MB', date: '2 Dec 2022' },
      ],
    };
  },
};
</script>

<style scoped>
.media-container {
  height: 100%;
  width: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  background-color: #ffffffff;
  border-left: 1px solid #e0e0e0;
  border-bottom-right-radius: 12px;
}

.header {
  margin-bottom: 10px;
}

.media {
  font-weight: bold;
  color: #333;
  font-size: 14px;
}

.unit {
  color: #999;
  margin-left: 8px;
  font-size: 14px;
}

.message-content {
  margin-bottom: 12px;
  
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.image-box {
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
  aspect-ratio: 1/1;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.files-section {
  margin-top: 12px;
  
}

.file-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 10%;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.file-icon-box {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EFF4FA;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.file-icon-box img {
  width: 20px;
  height: 20px;
}

.file-info {
  display: flex;
  flex-direction: column;
}

.file-name {
  color: #333;
  font-size: 10px;
  font-weight: 600;
}

.file-details {
  color: #999;
  font-size: 10px;
}

.empty-state {
  color: #999;
  font-style: italic;
  text-align: center;
  padding: 16px;
}
</style>