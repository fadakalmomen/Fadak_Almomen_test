<template>
  <router-view />
  <div class="container-fluid">
    <div class="row">
      
      <div class="col-2 col-md-3 p-0">
        <side-bar/>
      </div>
      
      <div class="col-10 col-md-9 p-0">
        <navbars-component />
        
        <div class="chat-area">
          <chat-components/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarsComponent from './components/NavbarsComponent.vue';
import sideBar from './components/sideBar.vue';
import chatComponents from './components/chatComponents.vue';
export default {
  components: {
    NavbarsComponent,
    sideBar,
    chatComponents
  },
};
</script>

<style>

.chat-area {
  display: flex;
  height: calc(100vh - 100px); 
  
}

.chat-header {
  background: #f8f9fa;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>
