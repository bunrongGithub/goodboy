const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () =>{
   navBarLinks.classList.toggle('active');
})
// const Login =document.getElementById('Login');
// const register =document.getElementById('register');
var i=0;
function openForm(){
   if(i==0){
      document.getElementById('register').style.display="block";
      document.querySelector('.section').style.display="none";
      i=1;
   }else{
      document.getElementById('register').style.display="none";
      document.querySelector('.section').style.display="block";
      i=0;
   }
  
}
function openMenu(){
   if(i==0){
      document.querySelector('.navbar-links').style.display="inline-block";
      i=1;
   }else{
      document.querySelector('.navbar-links').style.display="none";
      i=0;
   }
 
}
function closeForm(){
   document.getElementById('register').style.display="none";
   document.querySelector('.section').style.display="block";
}