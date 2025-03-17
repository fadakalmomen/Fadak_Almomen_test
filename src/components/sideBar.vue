<template>
  <nav class="sidebar p-2">
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-3">
          <img src="@/assets/logo.png" alt="logo" width="87.8px" height="96px">
        </div>
        <div class="col-sm-9">
          <div class="row">
            <div class="col-8 col-sm-6 p-4">
              <p class="title">Hi TEAM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <ul class="nav">
      <template v-for="(section, sectionIndex) in navSections" :key="`section-${sectionIndex}`">
        
        <template v-for="(item, itemIndex) in section.items" :key="`item-${sectionIndex}-${itemIndex}`">
          <li class="nav-item">
            
            <template v-if="!item.hasSubmenu">
              <router-link 
                :to="item.path" 
                class="nav-button" 
                :class="{'active': item.path === '/dashboard'}" 
                active-class="active"
              >
                <span class="icon-container">
                  <i :class="item.icon"></i>
                </span>
                <span class="btn-text">{{ item.text }}</span>
              </router-link>
            </template>
            
            
            <template v-else>
              <button @click="toggleSubmenu(item)" class="nav-button">
                <span class="icon-container">
                  <i :class="item.icon"></i>
                </span>
                <span class="btn-text">{{ item.text }}</span>
                <i :class="isDropdownOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
              </button>
              <transition name="slide">
                <ul v-if="item.isOpen" class="permissions-list">
                  <li v-for="(subItem, subIndex) in item.submenu" :key="`subitem-${subIndex}`" class="permission-item">
                    <span class="icon-container">
                      <i :class="subItem.icon"></i>
                    </span>
                    <span>{{ subItem.text }}</span>
                  </li>
                </ul>
              </transition>
            </template>
          </li>
        </template>
        
        
        <li v-if="sectionIndex < navSections.length - 1" class="nav-item divider"></li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      navSections: [
        {
          items: [
            { path: '/dashboard', icon: 'bi bi-house-door', text: 'Dashboard', isActive: true },
            { path: '/orders', icon: 'bi bi-box', text: 'Orders' },
            { path: '/passengers', icon: 'bi bi-people', text: 'Passengers' },
            { path: '/captains', icon: 'bi bi-bus-front', text: 'Captains' },
            { path: '/categories', icon: 'bi bi-list-task', text: 'Categories' }
          ]
        },
        {
          items: [
            { path: '/settlement', icon: 'bi bi-layout-text-window-reverse', text: 'Settlement' }
          ]
        },
        {
          items: [
            { path: '/contact', icon: 'bi bi-person-lines-fill', text: 'Contact' },
            { path: '/reviews', icon: 'bi bi-stars', text: 'Reviews' }
          ]
        },
        {
          items: [
            { 
              path: '#', 
              icon: '', 
              text: 'Permissions', 
              hasSubmenu: true,
              isOpen: false,
              submenu: [
                { icon: 'bi bi-eye', text: 'View Users' },
                { icon: 'bi bi-pencil', text: 'Edit Users' },
                { icon: 'bi bi-trash', text: 'Delete Users' }
              ]
            },
            { path: '/translation', icon: 'bi bi-translate', text: 'Translation' },
            { path: '/education-video', icon: 'bi bi-film', text: 'Education Video' },
            { path: '/settings', icon: 'bi bi-gear', text: 'Settings' },
            { path: '/content', icon: 'bi bi-body-text', text: 'Content' }
          ]
        }
      ]
    };
  },
 
  methods: {
    toggleSubmenu(item) {
      item.isOpen = !item.isOpen;
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 300px;
  height: auto;
  background-color: #ffffff;
  padding: 1rem;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-inline-start: 0%;
  border: none;
}

.title {
  font-size: 14px;
  position: relative;
  top: 10px;
  left: 14px;
  font-weight: 600;
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
  font-family: Manrope;
  font-size: 15px;
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