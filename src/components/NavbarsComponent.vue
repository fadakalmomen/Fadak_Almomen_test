<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid d-flex align-items-center">
      
      <div class="navbar-icons d-flex align-items-center">
        <a href="#" class="me-3">
          <i class="bi bi-search"></i>
        </a>
        <a href="#">
          <i class="bi bi-toggles"></i>
        </a>
      </div>

      <div class="ms-auto d-flex align-items-center">
        
        <a href="#" class="me-3" @click="toggleTheme">
          <i class="bi bi-moon"></i>
        </a>

        <a href="#" class="me-3" @click="handleNotificationClick">
          <i class="bi bi-bell"></i>
        </a>

        <button class="btn btn-outline-secondary rounded-circle p-0" style="width: 30px; height: 30px;">
          <div class="profile-circle">
            <img src="@/assets/flag.jpg" alt="City" class="rounded-circle" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
        </button>

        <div class="dropdown ms-2">
          <button class="btn btn-outline-secondary rounded-circle p-0 dropdown-toggle"
                  style="width: 40px; height: 40px;" id="profileDropdown"
                  data-bs-toggle="dropdown" aria-expanded="false">
            <div class="profile-circle">
              <img src="@/assets/user1.jpeg" alt="Profile Picture" class="rounded-circle" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </button>
          
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarsComponent',
  methods: {
    toggleTheme() {
      alert('Toggle theme clicked');
    },
    handleNotificationClick() {
      alert('Notification clicked');
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 10vh;
  background-color: #ffffff;
  padding: 1rem;
  border-right: 1px solid #f0eeee;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
}

.profile-circle {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
}

.profile-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.navbar-icons {
  margin-right: auto;
}

.bi {
  font-size: 1.2rem;
  color: #333;
}

.dropdown-menu {
  margin-top: 0.5rem;
}
</style>