<template>
    <div class="modal fade" id="unlockUser" tabindex="-1" aria-labelledby="unlockUserLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0 d-flex flex-column align-items-center">
           
            <i class="bi bi-unlock mb-3 big-icon" style="color: #635BFF;"></i>
            
            <h5 class="modal-title text-center" id="unlockUserModalLabel">Unlock User</h5>
          </div>
          <div class="modal-body">
            <p class="text-center">You Are Going To Unblock This User, Are You Sure?</p>
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
    name: 'UnlockUserModal',
    methods: {
      confirmUnlock() {
        alert("User unlocked!");
  
        const modalElement = document.getElementById('unlockUserModal');
        const modal = Modal.getInstance(modalElement);
        modal.hide();
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