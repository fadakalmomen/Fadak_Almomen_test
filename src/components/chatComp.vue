<template>
    <div class="container text-center rounded">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
            <div class="container-fluid d-flex align-items-center">
           
              <div class="profile-circle">
                <img
                  src="@/assets/user1.jpeg"
                  alt="Profile Picture"
                  class="rounded-circle"
                  style="width: 100%; height: 100%; object-fit: cover;"
                />
              </div>
  
             
              <div class="ms-auto d-flex align-items-center">
                <a href="#" class="me-3" style="color: #635BFF;" data-bs-toggle="modal" data-bs-target="#blckUserModal">
                  <i class="bi bi-ban"></i>
                </a>
  
                <a href="#" class="me-3" style="color: #FF0000;" data-bs-toggle="modal" data-bs-target="#deleteConversation">
                  <i class="bi bi-trash3"></i>
                </a>
  
                <a href="#" class="me-3" style="color: #29343D;">
                  <i class="bi bi-telephone"></i>
                </a>
  
                <a href="#" class="me-3" style="color: #29343D;">
                  <i class="bi bi-camera-video"></i>
                </a>
                <a href="#" class="me-3" style="color: #29343D;" data-bs-toggle="modal" data-bs-target="#unlockUser">
                  <i class="bi bi-list"></i>
                </a>
              </div>
            </div>
          </nav>
  
          
          <blckUserModal />
          <deleteConversation />
          <unlockUser/>
        </div>
  
       
        <div class="col-8">
          <div class="chat-container">
            <div class="chat-messages">
              
              <div class="position-relative" style="width: 35px; height: 35px;">
                <img
                  src="@/assets/icon.png"
                  alt="profile"
                  class="rounded-circle"
                  style="width: 100%; height: 100%;"
                />
              </div>
  
              <div class="message sender">
                <div class="message-header">
                  <span class="username">Andrew</span>
                  <span class="timestamp">2 hours ago</span>
                </div>
                <div class="message-content">
                  If I don't like something, I'll stay away from it.
                </div>
              </div>
  
              
              <div class="message receiver">
                <div class="message-header">
                  <span class="timestamp">2 hours ago</span>
                </div>
                <div class="message-content">
                  I want more detailed information.
                </div>
              </div>
  
             
              <div class="position-relative" style="width: 35px; height: 35px;">
                <img
                  src="@/assets/icon.png"
                  alt="profile"
                  class="rounded-circle"
                  style="width: 100%; height: 100%;"
                />
              </div>
  
              <div class="message sender">
                <div class="message-header">
                  <span class="username">Andrew</span>
                  <span class="timestamp">2 hours ago</span>
                </div>
                <div class="message-content">
                  They got there early
                </div>
              </div>
  
             
              <div class="message sender">
                <div class="message-header">
                  <span class="username">Andrew</span>
                  <span class="timestamp">2 hours ago</span>
                </div>
                <div class="message-content">
                  <img src="@/assets/img1.png" alt="" />
                </div>
              </div>
  
              
              <div class="message-input">
                <div class="icons-left">
                  <i class="bi bi-emoji-smile smile-icon"></i>
                </div>
                <input type="text" placeholder="Type a Message" class="input-field" />
                <div class="icons-right">
                  <i class="bi bi-upload upload-icon"></i>
                  <i class="bi bi-image upload-image"></i>
                  <i class="bi bi-mic mic-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        
        <div class="col-4">
          <chat-media />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import chatMedia from './chatMedia.vue';
  import blckUserModal from './blckUserModal.vue';
  import deleteConversation from './deleteConversation.vue';
  import unlockUser from './unlockUser.vue';
  
  export default {
    components: {
      chatMedia,
      blckUserModal,
      deleteConversation,
      unlockUser
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-left: -12px;
  }
  
  .profile-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 70.5vh;
    padding: 16px;
    margin-left: -12px;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .chat-messages {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 16px;
  }
  
  .message {
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 8px;
    max-width: 70%;
    font-size: 0.875rem;
  }
  
  .message.sender {
    background-color: #EFF4FA;
    margin-right: auto;
  }
  
  .message.receiver {
    background-color: #ECFDFD;
    margin-left: auto;
  }
  
  .message-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    font-size: 0.75rem;
    color: #666;
  }
  
  .username {
    font-weight: bold;
    color: #333;
  }
  
  .timestamp {
    color: #999;
  }
  
  .message-content {
    color: #333;
  }
  
  .message-input {
    position: relative;
    margin: 10%;
    padding: 7px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .input-field {
    width: 100%;
    padding: 2px;
    border: 1px solid #ddd;
    font-size: 1rem;
  }
  
  .message-input {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 5px 10px;
    background-color: #f9f9f9;
  }
  
  .icons-left,
  .icons-right {
    display: flex;
    align-items: center;
  }
  
  .icons-left {
    margin-right: 10px;
  }
  
  .icons-right {
    margin-left: 10px;
  }
  
  .bi {
    cursor: pointer;
    font-size: 20px;
    margin: 0 5px;
  }
  
  .bi:hover {
    color: #007bff;
  }
  
  .input-field {
    flex: 2;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 16px;
    background-color: transparent;
  }
  </style>