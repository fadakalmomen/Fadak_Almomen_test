<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid d-flex align-items-center">
      
      <div class="navbar-icons d-flex align-items-center">
        <router-link to="/search" class="me-3">
          <i class="bi bi-search"></i>
        </router-link>
        <router-link to="/grid">
          <i class="bi bi-ui-radios-grid"></i>
        </router-link>
      </div>
      
      <div class="ms-auto d-flex align-items-center">
        
        <a href="#" class="me-3 position-relative" @click="toggleTheme">
          <i :class="isDarkTheme ? 'bi bi-sun' : 'bi bi-moon'"></i>
        </a>
        <a href="#" class="me-3 position-relative" @click="handleNotificationClick">
          <i class="bi bi-bell"></i>
          <span v-if="notificationCount" class="badge bg-danger">{{ notificationCount }}</span>
        </a>
        <div class="flag-container me-3">
          <img src="@/assets/flag.png" alt="Country Flag" class="flag-image">
        </div>
        <div class="dropdown">
          <div class="profile-dropdown-container" @click="toggleDropdown">
            <div class="profile-circle">
              <img src="@/assets/icon.png" alt="Profile Picture">
            </div>
            <span class="dropdown-caret">
              <i class="bi bi-caret-down-fill"></i>
            </span>
          </div>
          
          <ul class="dropdown-menu dropdown-menu-end" :class="{ 'show': isDropdownOpen }" aria-labelledby="profileDropdown">
            <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
            <li><router-link class="dropdown-item" to="/settings">Settings</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click.prevent="logout">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarsComponent',
  data() {
    return {
      isDarkTheme: false,
      notificationCount: 59,
      isDropdownOpen: false
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      if (this.isDarkTheme) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    },
    handleNotificationClick() {
      alert('You have notifications');
    },
    logout() {
      alert('Logged out');
      this.isDropdownOpen = false;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isDropdownOpen = false;
      }
    });
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown);
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 72px;
  padding: 1rem;
  padding-right: 60px;
  display: flex;
  background: var(--navbar-bg, #ffffff);
  flex-direction: row;
}

.dark-theme {
  --navbar-bg: #333;
  --text-color: #ffffff;
}

.profile-dropdown-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.profile-circle {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  border: none;
}

.profile-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dropdown-caret {
  margin-left: 5px;
}

.dropdown-caret i {
  font-size: 0.8rem;
  color: var(--text-color, #333);
}

.flag-container {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flag-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.navbar-icons {
  margin-right: auto;
}

.bi {
  font-size: 1.2rem;
  color: var(--text-color, #333);
  padding-right: 15px;
}

.badge {
  position: relative;
  bottom: 10px;
  right: 20px;
  font-size: 0.5rem;
}

.dropdown-menu {
  margin-top: 0.5rem;
}

.dropdown-menu.show {
  display: block;
  position: absolute;
  top: 45px;
  right: 0;
}

a {
  cursor: pointer;
}

.position-relative {
  position: relative;
}
</style>