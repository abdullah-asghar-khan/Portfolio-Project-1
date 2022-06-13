const menuIcon = document.querySelector('.menu');
const navbar = document.querySelector('#myLinks');

menuIcon.onclick = ()=>  {
  menuIcon.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  console.log("Clicked")
};

window.onscroll = () => {
  menuIcon.classList.remove('fa-times');

  navbar.classList.remove('active');
};