import $ from 'jquery';

class Modal {
  constructor() {
   this.openModalButton = $(".open-modal");
   this.modal = $(".modal");
   this.closeModalButton = $(".modal__close");
   this.events();
  }
  
  events() {
    //open
    this.openModalButton.click(this.openModal.bind(this)); 
    
    //close
    this.closeModalButton.click(this.closeModal.bind(this));
    
    //press 'Escape' button    
    $(document).keyup(this.keyPressHandler.bind(this));
  }
  
  keyPressHandler(e){    
    if(e.keyCode === 27){
      this.closeModal();
    }
  }
  
  openModal() {    
    this.modal.addClass("modal--is-visible");
    return false;
  }
  closeModal(){
    this.modal.removeClass("modal--is-visible");
    return false;
  }
}

export default Modal;