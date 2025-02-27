<template>
  <nav class="navbar bg-body-tertiary chatHeader">
    <div class="container-fluid d-flex">
      <a class="navbar-brand">Chat</a>
      <div class="d-flex" role="search">
        <i class="bi bi-house-door m-2"></i>
        <button class="btn" type="submit">
          / <span class="chat-text p-2 m-2">Chat</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ChatHeader',
};
</script>

<style lang="scss" scoped>
.chatHeader {
  padding: 5px;
  margin-top: 5%;
  margin: 2%;
  margin-left: 6%;
  margin-right: 6%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}


.chat-text {
  color: #635BFF !important;
  background: #DDDBFF;
  border-radius: 10%;

}
</style>