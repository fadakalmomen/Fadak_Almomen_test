<template>
  <div class="chat-container">
    
    <div class="profile-header d-flex align-items-center">
      <div class="profile-pic position-relative">
        <img src="@/assets/user1.jpeg" alt="Profile" class="rounded-circle profile-img" />
        <span class="online-indicator position-absolute"></span>
      </div>
      <div class="profile-info ms-2">
        <h6 class="mb-0">Fadak Almomen</h6>
        <p class="text-muted mb-0">Marketing Director</p>
      </div>
      <div class="options ms-auto">
        <i class="bi bi-three-dots-vertical"></i>
      </div>
    </div>

    
    <div class="search-bar mt-3 mb-3">
      <div class="input-group">
        <span class="input-group-text bg-white border-end-0">
          <i class="bi bi-search"></i>
        </span>
        <input type="text" class="form-control border-start-0" placeholder="Search contacts" />
      </div>
    </div>

    
    <div class="recent-chats">
      <h6 class="mb-3">Recent Chats</h6>
      <div class="chat-list">
        <div class="chat-item d-flex align-items-center mb-2">
          <div class="position-relative">
            <img src="@/assets/icon.png" alt="user" class="rounded-circle chat-profile-pic" />
            <span class="status-indicator online"></span>
          </div>
          <div class="chat-info ms-2">
            <div class="d-flex justify-content-between">
              <h6 class="mb-0">Mathew Anderson</h6>
              <p class="text-muted mb-0">15 minutes</p>
            </div>
            <p class="text-muted mb-0">You: Yesterday was great...</p>
          </div>
        </div>
        
        <div class="chat-item d-flex align-items-center mb-2">
          <div class="position-relative">
            <img src="@/assets/user2.jpeg" alt="user" class="rounded-circle chat-profile-pic" />
            <span class="status-indicator offline"></span>
          </div>
          <div class="chat-info ms-2">
            <div class="d-flex justify-content-between">
              <h6 class="mb-0">Bianca Anderson</h6>
              <p class="text-muted mb-0">30 minutes</p>
            </div>
            <p class="text-muted mb-0">Nice looking dress you...</p>
          </div>
        </div>

        
        <div class="chat-item d-flex align-items-center mb-2">
          <div class="position-relative">
            <img src="@/assets/icon.png" alt="user" class="rounded-circle chat-profile-pic" />
            <span class="status-indicator online"></span>
          </div>
          <div class="chat-info ms-2">
            <div class="d-flex justify-content-between">
              <h6 class="mb-0">Michell Flintoff</h6>
              <p class="text-muted mb-0">3 minutes</p>
            </div>
            <p class="text-muted mb-0">Hi, how are you...</p>
          </div>
        </div>

        
        <div class="chat-item d-flex align-items-center mb-2">
          <div class="position-relative">
            <img src="@/assets/user2.jpeg" alt="user" class="rounded-circle chat-profile-pic" />
            <span class="status-indicator online"></span>
          </div>
          <div class="chat-info ms-2">
            <div class="d-flex justify-content-between">
              <h6 class="mb-0">sara </h6>
              <p class="text-muted mb-0">40 minutes</p>
            </div>
            <p class="text-muted mb-0">Nice ..............</p>
          </div>
        </div>

        
        <div class="chat-item d-flex align-items-center mb-2">
          <div class="position-relative">
            <img src="@/assets/user2.jpeg" alt="user" class="rounded-circle chat-profile-pic" />
            <span class="status-indicator online"></span>
          </div>
          <div class="chat-info ms-2">
            <div class="d-flex justify-content-between">
              <h6 class="mb-0">Bianca Anderson</h6>
              <p class="text-muted mb-0">30 minutes</p>
            </div>
            <p class="text-muted mb-0">i need more inf...</p>
          </div>
        </div>

        
        <div class="chat-item d-flex align-items-center mb-2">
          <div class="position-relative">
            <img src="@/assets/icon.png" alt="user" class="rounded-circle chat-profile-pic" />
            <span class="status-indicator recent"></span>
          </div>
          <div class="chat-info ms-2">
            <div class="d-flex justify-content-between">
              <h6 class="mb-0">Ahmed</h6>
              <p class="text-muted mb-0">30 minutes</p>
            </div>
            <p class="text-muted mb-0">Nic.....</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatComponent",
  data() {
    return {
      showPermissions: false,
    };
  },
  methods: {
    togglePermissions() {
      this.showPermissions = !this.showPermissions;
    },
  },
};
</script>

<style scoped>
.chat-container {
  background-color:#f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 299px;
  height: 100%;
  margin-left: 14%;

}

.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.profile-pic {
  width: 54px;
  height: 54px;
}

.profile-img {
  width: 100%;
  height: 100%;
}

.online-indicator {
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
  top: 0;
  right: 0;
}

.options {
  cursor: pointer;
}

.search-bar {
  width: 100%;
}

.recent-chats {
  width: 100%;
}

.chat-list {
  margin-top: 10px;
}

.chat-item {
  display: flex;
  align-items: center;
}

.chat-profile-pic {
  width: 40px;
  height: 40px;
}

.chat-info {
  flex-grow: 1;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
}

.status-indicator.online {
  background-color: green;
}

.status-indicator.offline {
  background-color: rgb(225, 7, 7);

}

.status-indicator.recent {
  background-color: rgb(241, 130, 20);

}
</style>
