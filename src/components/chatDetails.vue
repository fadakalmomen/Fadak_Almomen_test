<template>
  <div class="chat-container">
    <div class="profile-header">
      <div class="profile-pic position-relative">
        <img src="@/assets/icon.png" alt="Profile" class="rounded-circle profile-img" />
        <span class="online-indicator position-absolute"></span>
      </div>
      <div class="profile-info">
        <h6>Mathew Anderson</h6>
        <p>Marketing Director</p>
      </div>
      <div class="options" @click="toggleOptions">
        <i class="bi bi-three-dots-vertical"></i>
      </div>
    </div>

    <div class="search-bar">
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-search"></i>
        </span>
        <input type="text" class="form-control" placeholder="Search contacts" v-model="searchQuery" />
      </div>
    </div>

    <div class="recent-chats">
      <div class="recent-chats-header" @click="isDropdownOpen = !isDropdownOpen">
        <div class="title-container">
          <h6 class="recent-chats-title">Recent Chats</h6>
          <i class="chevron-icon" :class="isDropdownOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
        </div>
      </div>
      <div v-if="isDropdownOpen" class="dropdown-content">
        <div class="dropdown-item" v-for="item in dropdownItems" :key="item" @click="selectDropdownItem(item)">
          {{ item }}
        </div>
      </div>
      <div class="chat-list">
        <div
          v-for="(chat, index) in filteredChats"
          :key="index"
          class="chat-item"
        >
          <div class="chat-avatar position-relative">
            <img :src="chat.avatar" alt="user" class="rounded-circle" />
            <span :class="['status-indicator', chat.status]"></span>
          </div>
          <div class="chat-info">
            <div class="chat-header">
              <h6>{{ chat.name }}</h6>
              <p class="chat-time">{{ chat.time }}</p>
            </div>
            <p class="chat-message">{{ chat.message }}</p>
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
      searchQuery: "",
      isDropdownOpen: false,
      dropdownItems: ["last month ","last dayes"],
      chats: [
        {
          id: 1,
          name: "Michell Flintoff",
          message: "You: Yesterday was great...",
          time: "15 minutes",
          avatar: require("@/assets/user3.jpeg"),
          status: "online",
        },
        {
          id: 2,
          name: "Bianca Anderson",
          message: "Nice looking dress you...",
          time: "30 minutes",
          avatar: require("@/assets/user4.jpeg"),
          status: "offline",
        },
        {
          id: 3,
          name: "Andrew Johnson",
          message: "Sent a photo",
          time: "2 hours",
          avatar: require("@/assets/user8.jpeg"),
          status: "recent",
        },
        {
          id: 4,
          name: "Mark Strokes",
          message: "Lorem ipsum text sud...",
          time: "5 days",
          avatar: require("@/assets/user2.jpeg"),
          status: "online",
        },
        {
          id: 5,
          name: "Mark, Strokes",
          message: "Lorem ipsum text...",
          time: "5 days",
          avatar: require("@/assets/user9.jpeg"),
          status: "online",
        },
        {
          id: 6,
          name: "Bianca Anderson",
          message: "Nice looking dress you...",
          time: "30 minutes",
          avatar: require("@/assets/user4.jpeg"),
          status: "offline",
        },
      ],
    };
  },
  computed: {
    filteredChats() {
      if (!this.searchQuery) {
        return this.chats;
      }
      return this.chats.filter((chat) =>
        chat.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    toggleOptions() {
    
    },
    selectDropdownItem(item) {
      console.log("Selected item:", item);
     
    },
  },
};
</script>

<style scoped>
.chat-container {
  max-height: 598px;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.profile-header {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  flex-shrink: 0;
}

.profile-pic {
  position: relative;
}

.profile-img {
  width: 39px;
  height: 39px;
  object-fit: cover;
}

.online-indicator {
  width: 8px;
  height: 8px;
  background-color: #36C76C;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
}

.profile-info {
  margin-left: 10px;
  flex-grow: 1;
}

.profile-info h6 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.2;
}

.profile-info p {
  margin: 0;
  font-size: 11px;
  color: #98a4ae;
  line-height: 1.2;
}

.options {
  color: #98a4ae;
  cursor: pointer;
}

.search-bar {
  padding: 8px 15px;
  flex-shrink: 0;
}

.search-bar .input-group {
  border: 1px solid #e0e0e0;
  overflow: hidden;
  height: 28px;
}

.search-bar .input-group-text {
  background-color: white;
  border: none;
  padding: 0 8px;
  font-size: 12px;
}

.search-bar .form-control {
  border: none;
  font-size: 12px;
  padding: 0 8px;
}

.recent-chats {
  margin-top: 8px;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.recent-chats-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
  padding: 0 20px;
  flex-shrink: 0;
}

.title-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 50%;
}

.recent-chats-title {
  font-size: 12px;
  color: #98a4ae;
  margin: 0;
}

.chevron-icon {
  color: #98a4ae;
  font-size: 12px;
  padding: 1px;
  margin-left: 8px;
}

.dropdown-content {
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 8px;
  flex-shrink: 0;
}

.dropdown-item {
  padding: 4px 8px;
  cursor: pointer;
  color: #98a4ae;
  font-size: 11px;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.chat-list {
  overflow-y: auto;
  flex-grow: 1;
  scrollbar-width: thin;
}

.chat-list::-webkit-scrollbar {
  width: 4px;
}

.chat-list::-webkit-scrollbar-thumb {
  background-color: #e0e0e0;
  border-radius: 4px;
}

.chat-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  padding: 4px 8px;
}

.chat-item:hover {
  background: #F6F7F9;
}

.chat-avatar {
  position: relative;
  margin-right: 10px;
  flex-shrink: 0;
}

.chat-avatar img {
  width: 38px;
  height: 38px;
  object-fit: cover;
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
  background-color: #36C76C;
}

.status-indicator.offline {
  background-color: #FF6692;
}

.status-indicator.recent {
  background-color: #FFD648;
}

.chat-info {
  flex-grow: 1;
  min-width: 0;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1%;
  background: none;
  border: none;
  padding: 0;
}

.chat-header h6 {
  font-size: 12px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70%;
}

.chat-time {
  font-size: 9px;
  color: #98a4ae;
  margin: 0;
}

.chat-message {
  font-size: 11px;
  color: #98a4ae;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>