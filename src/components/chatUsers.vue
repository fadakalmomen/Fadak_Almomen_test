<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div v-for="(message, index) in messages" :key="index" :class="['message-container', message.type]">
       
        <div v-if="message.avatar" class="avatar-container">
          <img :src="message.avatar" alt="profile" class="rounded-circle" />
        </div>

        <div class="message-content-container">
         
          <div v-if="message.sender" class="username">{{ message.sender }}</div>
          
         
          <div v-if="message.text" class="message">
            <div class="message-content">{{ message.text }}</div>
          </div>
          
          
          <img v-if="message.image" :src="message.image" alt="" class="message-image" />
        </div>
      </div>
    </div>

    <div class="message-input">
      <div class="icons-left">
        <i class="bi bi-emoji-smile smile-icon"></i>
      </div>
      <input type="text" placeholder="Type a Message" class="input-field" />
      <div class="icons-right">
        <span class="image-upload-container"> 
          <i class="bi bi-image-fill upload-image"></i>
          <i class="bi bi-plus plus"></i>
        </span>
        <i class="bi bi-paperclip paperclip"></i>
        <i class="bi bi-mic mic-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          avatar: require("@/assets/user8.jpeg"),
          sender: "Andrew, 2 hours ago",
          text: "If I don't like something, I'll stay away from it.",
          type: "sender",
        },
        {
          sender: "2 hours ago",
          text: "If I don't like something, I'll stay away from it.",
          type: "receiver",
        },
        {
          avatar: require("@/assets/user8.jpeg"),
          sender: "Andrew, 2 hours ago",
          text: "I want more detailed information.",
          type: "sender",
        },
        {
          sender: "2 hours ago",
          text: "If I don't like something, I'll stay away from it.",
          type: "receiver",
        },
        {
          text: "They got there early, and they got really good seats.",
          type: "receiver",
        },
        {
          avatar: require("@/assets/user8.jpeg"),
          sender: "Andrew, 2 hours ago",
          image: require("@/assets/im.jpeg"),
          type: "sender",
        },
      ],
    };
  },
  computed: {
   
    filteredMessages() {
      return this.messages.filter(message => message.text || message.image);
    }
  }
};
</script>

<style scoped>
.chat-container {
  max-height: 600px;
  height: 100%;
  width: 100%;
  padding-bottom: 10px;
  background: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
}

.chat-messages {
  flex: 1;
  padding-left: 20px;
  padding-bottom: 90px;
  overflow-y: auto;
  height: 100%;
  width: 100%;
}

.message-input {
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 8px;
  background: #ffffff;
  border-top: 1px solid #eaeaea;
}

.image-upload-container {
  position: relative;
  display: inline-block;
}

.upload-image {
  font-size: 16px;
}

.plus {
  position: absolute;
  top: 4px;
  left: 5px;
  font-size: 7px;
  border-radius: 50%;
  color: #000;
}

.input-field {
  flex: 1;
  padding: 4px 8px;
  border: none;
  margin: 0 8px;
  outline: none;
  font-size: 12px;
  height: 24px;
}

.icons-left, .icons-right {
  display: flex;
  align-items: center;
}

.smile-icon {
  font-size: 14px;
  cursor: pointer;
}

.upload-icon, .plus, .paperclip, .upload-image, .mic-icon {
  font-size: 14px;
  cursor: pointer;
  margin-left: 8px;
}

.message-container {
  display: flex;
  margin-bottom: 10px;
}

.message-container.sender {
  justify-content: flex-start;
}

.message-container.receiver {
  justify-content: flex-end;
}

.avatar-container {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  flex-shrink: 0;
}

.avatar-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.message-content-container {
  max-width: 70%;
  display: flex;
  flex-direction: column;
}

.sender .message-content-container {
  align-items: flex-start;
}

.receiver .message-content-container {
  align-items: flex-end;
}

.username {
  color: #98A4AE;
  font-size: 10px;
  margin-bottom: 5px;
}

.message {
  padding: 10px;
  border-radius: 10px;
  word-break: break-word;
}

.sender .message {
  background-color: #EFF4FA;
}

.receiver .message {
  background-color: #ECFDFD;
}

.message-content {
  font-size: 11px;
}

.message-image {
  max-width: 100%;
  margin-top: 5px;
}
</style>