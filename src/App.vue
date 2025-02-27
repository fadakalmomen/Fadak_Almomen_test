<template>
  <router-view />

  <div class="container-fluid">
    <div class="row">
     
      <div class="col-2 col-md-3 p-0">
        <side-bar />
      </div>

      
      <div class="col-10 col-md-9 p-0">
      
        <navbars-component />

        
        <div>
          <chat-header />
        </div>

      
        <div class="row g-0 chat-area">
          
          <div class="col-4 p-0 m-0 chat-list">
            <chat-details />
          </div>

          <div class="col-8 p-0 chat-messages">
            <chat-comp />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarsComponent from './components/NavbarsComponent.vue';
import sideBar from './components/sideBar.vue';
import chatDetails from './components/chatDetails.vue';
import chatHeader from './components/chatHeader.vue';
import chatComp from './components/chatComp.vue';

export default {
  components: {
    NavbarsComponent,
    sideBar,
    chatDetails,
    chatHeader,
    chatComp,
  },
};
</script>

<style>
h1 {
  background: #24373a;
}

.row.g-0 {
  margin-right: 0;
  margin-left: 0;
}

.chat-area {
  display: flex;
  height: calc(10vh - 100px); 
}

.chat-list {
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.chat-messages {
  overflow-y: auto;
}

.chat-header {
  background: #f8f9fa;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>