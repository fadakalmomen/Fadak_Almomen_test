<template>
  <div class="headNav col-12">
    <nav class="navbar">
      <div class="container-fluid">
        <div class="left-section">
          <div class="profile-container">
            <div class="profile-circle">
              <img src="@/assets/user3.jpeg" alt="Profile Picture">
            </div>
            <span class="online-state"></span>
          </div>
          <span class="status-text">Away</span>
        </div>
        <div class="right-section">
          <a href="#" class="me-3 icon-link" data-bs-toggle="modal" data-bs-target="#blckUserModal" style="color: #635BFF">
            <i class="bi bi-ban"></i>
          </a>
          <a href="#" class="me-3 icon-link" data-bs-toggle="modal" data-bs-target="#deleteConversation" style="color:#FF0000;">
            <i class="bi bi-trash3"></i>
          </a>
          <a href="#" class="me-3 icon-link">
            <i class="bi bi-telephone"></i>
          </a>
          <a href="#" class="me-3 icon-link">
            <i class="bi bi-camera-video"></i>
          </a>
          <a href="#" class="me-3 icon-link" data-bs-toggle="modal" data-bs-target="#unlockUser">
            <i class="bi bi-list"></i>
          </a>
        </div>
      </div>
    </nav>
    
    <blckUserModal />
    <deleteConversation />
    <unlockUser />
  </div>
</template>

<script>
import blckUserModal from "./blckUserModal.vue";
import deleteConversation from "./deleteConversation.vue";
import unlockUser from "./unlockUser.vue";

export default {
  components: {
    blckUserModal,
    deleteConversation,
    unlockUser,
  },
};
</script>

<style scoped>
.headNav {
  background: #ffffff;
  border-top-right-radius: 12px;
  border-bottom: 1px solid #e0e0e0;
}

.container-fluid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-section {
  display: flex;
  align-items: center;
}

.right-section {
  display: flex;
  align-items: center;
}

.profile-container {
  position: relative;
  margin-right: 12px;
}

.profile-circle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
}

.profile-circle img {
  width: 38px;
  height: 38px;
  object-fit: cover;
  margin-left: 1px;
}

.online-state {
  width: 8px;
  height: 8px;
  background-color: #36C76C;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 28px;
}

.status-text {
  color: #98A4AE;
  font-size: 11px;
  white-space: nowrap;
}

.icon-link {
  color: #29343d;
  cursor: pointer;
}

.icon-link:hover {
  color: #635bff;
}
</style>
  