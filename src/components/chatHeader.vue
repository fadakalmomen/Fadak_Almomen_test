<template>
  <nav class="navbar chatHeader">
    <div class="container-fluid">
      <a class="navbar-brand">Chat</a>
      <div class="search-container" role="search">
        <i class="bi bi-house-door"></i>
        <button class="btn chat-btn" type="submit">
          <span class="bold-slash">/</span> <span class="chat-text">Chat</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.chatHeader {
  padding: 10px 3px;
  margin-bottom: 30px;
  border-radius: 8px;
  height: 50px;
  width: 100%;
  box-shadow: 0 1px 3px #AFB6C933;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container-fluid{
  position: relative;
  bottom: 10px;

}
.search-container {
  display: flex;
  align-items: center;
  height: 50px; 
}

.bold-slash {
  font-weight: bolder; 
  margin: 0 4px; 
}

.chat-text {
  color: #635BFF !important;
  background: #DDDBFF;
  border-radius: 6px;
  padding: 2px 4px; 
}


.chat-btn {
  border: none;
  background: transparent;
  font-size: 16px;
  color: #707077;
  display: flex;
  align-items: center;
  padding: 3px;
  margin: 0;
}

.chat-btn:hover {
  background-color: #ecebfd;
  border-radius: 6px;
  cursor: pointer;
}

.bi-house-door {
  font-size: 18px;
  color: #29343D; 
  margin-right: 4px;
}
</style>