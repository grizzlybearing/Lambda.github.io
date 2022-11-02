let btn = document.querySelector('#btn');
btn.setAttribute('disabled',true);
    function create_form ( )
{    
   
    let username = document.querySelector('#username'); 
    let data = document.querySelector('#date'); 
    let email = document.querySelector('#email'); 
    let table = document.querySelector('#number');
     if(username.value.length < 1 || email.value.length <1 || data.value.length<1 || table.selectedIndex < 1){
      btn.setAttribute('disabled',true);
    } else{
      btn.removeAttribute('disabled');
    }
}

let modal1 = document.querySelector('#modal-1');
let closeButton = document.querySelector('#modal-close');
btn.onclick = function () {
  modal1.classList.add('modal_active');
}

closeButton.onclick = function () {
  modal1.classList.remove('modal_active');
  location.reload();
} 