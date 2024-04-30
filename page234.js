window.onload = function () {
  const menu_Button = document.querySelector('.hamburger');
  const mobile_Menu = document.querySelector('.mobile-nav')

  menu_Button.addEventListener('click', function (){
    menu_Button.classList.toggle('is-active');
    mobile_Menu.classList.toggle('is-active');
  })
}