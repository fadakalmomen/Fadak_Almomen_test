<template>
  <div class="container-fluid rounded-start-4 p-3 p-md-5">
    <div class="col-12">
      <chat-header />
    </div>
    
    <div class="row chat-container m-0">
      <!-- Sidebar that collapses on mobile -->
      <div class="col-12 col-md-4 chat-list p-0" :class="{ 'd-none': isMobile && !showSidebar, 'd-block': !isMobile || showSidebar }">
        <div class="d-flex justify-content-end d-md-none p-2">
          <button class="btn btn-sm btn-light" @click="toggleSidebar">
            <span>×</span>
          </button>
        </div>
        <chatDetails />
      </div>
      
      <!-- Main content area -->
      <div class="col-12 col-md-8 p-0 d-flex flex-column">
        <div class="col-12 p-0 d-flex align-items-center">
          <!-- Mobile sidebar toggle button -->
          <div class="d-md-none me-2" v-if="!showSidebar">
            <button class="btn btn-sm btn-light" @click="toggleSidebar">
              <span>☰</span>
            </button>
          </div>
          <chat-head />
        </div>
        
        <div class="row m-0 p-0">
          <div class="col-12 col-lg-8 chat-messages-area p-0">
            <div class="">
              <chat-users />
            </div>
          </div>
          
          <div class="col-12 col-lg-4 p-0">
            <chat-media />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chatDetails from './chatDetails.vue';
import ChatHeader from './chatHeader.vue';
import chatMedia from './chatMedia.vue';
import chatUsers from './chatUsers.vue';
import chatHead from './chatHead.vue';

export default {
  components: {
    chatDetails,
    chatMedia,
    chatUsers,
    ChatHeader,
    chatHead,
  },
  data() {
    return {
      showSidebar: false,
      windowWidth: window.innerWidth
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth >= 768) {
        this.showSidebar = false;
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style scoped>
.container-fluid {
  position: relative;
  bottom:10px;
  height: 900px;
  width: 13500px;
  background-color:#F4F7FB;
  overflow-x: hidden;
}


.chat-container {
  height: calc(100vh - 12px);
  overflow: hidden;
}

.chat-list, .chat-messages-area {
  height: 100%;
  overflow-y: auto;

}


@media (max-width: 767px) {
  .container-fluid {
    padding: 10px !important;
  }
  
  .chat-container {
    height: calc(100vh - 100px);
  }
  
  .chat-list, .chat-messages-area {
    max-height: 80vh;
  }
}
@media (min-width: 1200px) {
  .container-fluid {
    max-width: 1400px;
    margin: 0 auto;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .container-fluid {
    max-width: 100%;
  }
}

</style>