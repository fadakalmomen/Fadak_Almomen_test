<template>

    <div class="modal fade" id="deleteConversation" tabindex="-1" aria-labelledby="deleteConversationLabel" aria-hidden="true" ref="deleteConversationModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header border-0 d-flex flex-column align-items-center">
            <i class="bi bi-trash3 mb-3 big-icon" style="color: #FF0000;"></i>
            <h5 class="modal-title text-center" id="deleteConversationLabel">Delete Conversation</h5>
          </div>
          <div class="modal-body">
            <p class="text-center">Are you sure you want to delete this conversation? You will not be able to undo this action.</p>
          </div>
          <div class="modal-footer border-0 d-flex justify-content-center gap-3">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" @click="confirmUnlock">Yes</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
    
  <script>
  import { Modal } from 'bootstrap'; 
  
  export default {
    name: 'DeleteConversation',
    methods: {
      confirmUnlock() {
        alert("Conversation deleted!");
  
        
        const modalElement = this.$refs.deleteConversationModal;
        const modal = Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        } else {
          console.error("Modal instance not found.");
        }
      }
    }
  };
  </script>
    
    <style scoped>
    .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
    background-color: #575CD4;
    border-color: #575CD4;
  }
  
  .modal-dialog {
    max-width: 492px;
    width: 100%;
  }
  
  .modal-content {
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .modal-body p {
    font-size: 16px;
    color: #737373;
    margin: 20px 0;
  }
  
  .modal-footer {
    border-top: none;
    padding: 16px;
  }
  
  .modal-footer .btn {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 5px;
    width: 100px;
  }
  
  .modal-footer .btn-secondary {
    background-color: #e0e0e0;
    border-color: #e0e0e0;
    color: #333;
  }
  
  .modal-footer .btn-primary {
    background-color: #575CD4;
    border-color: #575CD4;
    color: white;
  }
  
  .big-icon {
    font-size: 4rem; 
  }
    
    </style>
  