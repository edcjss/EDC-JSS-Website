function openNav() {

  if(document.getElementById('mobile__menu').className=="overlay"){ 
       document.getElementById("mobile__menu").classList.add('overlay_clicked');
       document.getElementById('menu').innerText='close';
       document.getElementById('menu').style.backgroundColor='#17a2b8';
       document.getElementById('menu').style.opacity='.7';
       document.getElementById('menu').style.color='white';
       document.getElementById('menu').style.borderColor='#17a2b8';


  }

  else{
       document.getElementById("mobile__menu").classList.remove('overlay_clicked');  
       document.getElementById("mobile__menu").classList.add('overlay');
       document.getElementById('menu').innerText='menu';
       document.getElementById('menu').style.backgroundColor='white';
       document.getElementById('menu').style.color='black';

  }

}