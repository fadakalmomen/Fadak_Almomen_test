<template>
  <nav class="sidebar">
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-3">
          <img src="@/assets/logo.png" alt="logo" width="88px" height="96px">
        </div>
        <div class="col-sm-9">
          <div class="row">
            <div class="col-8 col-sm-6 p-4">
              <p><strong> Hi TEAM</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-button" active-class="active">
          <span class="icon-container">
            <i class="bi bi-house-door"></i>
          </span>
          <span class="btn-text">Dashboard</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/orders" class="nav-button" active-class="active">
          <span class="icon-container">
            <i class="bi bi-box"></i>
          </span>
          <span class="btn-text">Orders</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/passengers" class="nav-button" active-class="active">
          <span class="icon-container">
            <i class="bi bi-people"></i>
          </span>
          <span class="btn-text">Passengers</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/captains" class="nav-button" active-class="active">
          <span class="icon-container">
            <i class="bi bi-bus-front"></i>
          </span>
          <span class="btn-text">Captains</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/categories" class="nav-button" active-class="active">
          <span class="icon-container">
            <i class="bi bi-list-task"></i>
          </span>
          <span class="btn-text">Categories</span>
        </router-link>
      </li>

     
      <li class="nav-item divider"></li>

      <li class="nav-item">
        <router-link to="/settlement" class="nav-button" active-class="active">
          <span class="icon-container">
            <i class="bi bi-layout-text-window-reverse"></i>
          </span>
          <span class="btn-text">Settlement</span>
        </router-link>
      </li>

    
      <li class="nav-item divider"></li>

      <li class="nav-item">
        <router-link to="/contact" class="nav-button" active-class="active">
          <span class="icon-container">
            <i class="bi bi-person-lines-fill"></i>
          </span>
          <span class="btn-text">Contact</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/reviews" class="nav-button" active-class="active">
          <span class="icon-container">
            <i class="bi bi-stars"></i>
          </span>
          <span class="btn-text">Reviews</span>
        </router-link>
      </li>

      
      <li class="nav-item divider"></li>

      <li class="nav-item">
        <button @click="togglePermissions" class="nav-button">
          <span class="icon-container"></span>
          <span class="btn-text">Permissions</span>
          <span class="arrow" :class="{ 'rotated': showPermissions }">▼</span>
        </button>
        <transition name="slide">
          <ul v-if="showPermissions" class="permissions-list">
            <li class="permission-item">
              <span class="icon-container">
                <i class="bi bi-eye"></i>
              </span>
              <span>View Users</span>
            </li>
            <li class="permission-item">
              <span class="icon-container">
                <i class="bi bi-pencil"></i>
              </span>
              <span>Edit Users</span>
            </li>
            <li class="permission-item">
              <span class="icon-container">
                <i class="bi bi-trash"></i>
              </span>
              <span>Delete Users</span>
            </li>
          </ul>
        </transition>
      </li>

      <li class="nav-item">
        <router-link to="/translation" class="nav-button" active-class="active">
          <span class="icon-container">
            <i class="bi bi-translate"></i>
          </span>
          <span class="btn-text">Translation</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/education-video" class="nav-button" active-class="active">
          <span class="icon-container">
            <i class="bi bi-film"></i>
          </span>
          <span class="btn-text">Education Video</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/settings" class="nav-button" active-class="active">
          <span class="icon-container">
            <i class="bi bi-gear"></i>
          </span>
          <span class="btn-text">Settings</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/content" class="nav-button" active-class="active">
          <span class="icon-container">
            <i class="bi bi-body-text"></i>
          </span>
          <span class="btn-text">Content</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SideBar',
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
.sidebar {
  width: 100%;
  height: auto;
  background-color: #ffffff;
  padding: 1rem;
  border-right: 1px solid #ddd;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-inline-start: 0%;
}

.sidebar-header {
  margin-bottom: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.sidebar-header img {
  max-width: 90%;
  margin-bottom: 0.5rem;
}

.nav {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.nav-item {
  margin-bottom: 5px;
  width: 100%;
}

.nav-button {
  width: 100%;
  padding: 10px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  color: #4f4f4f;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.icon-container {
  width: 24px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
}

.nav-button.active {
  background-color: #635bff;
  color: white;
  border-radius: 13px;
}

.nav-button:hover {
  background-color: #635bff;
  color: #ffffff;
  border-radius: 13px;
}

.permissions-list {
  list-style: none;
  padding-left: 35px;
  margin: 5px 0 0 0;
  width: 100%;
}

.permission-item {
  padding: 8px;
  display: flex;
  align-items: center;
  color: #4f4f4f;
  font-size: 0.9em;
}

.arrow {
  transition: transform 0.3s;
  margin-left: 5px;
}

.rotated {
  transform: rotate(180deg);
}


.divider {
  border-top: 1px solid #ddd;
  margin: 10px 0;
}

@media (max-width: 768px) {
  .sidebar {
    height: auto;
    min-height: 100vh;
  }
}
</style>
