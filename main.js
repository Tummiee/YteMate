var link = document.querySelector('.link');
var format = document.querySelector('.format');
const hideButton = document.getElementById('hideButton')
const buttonToHide = document.getElementById('pasteButton');
const inputField = document.getElementById('inputField')
const loader = document.getElementById('loader');


function download() {
  if(link.value!=""){
   if(link.value.indexOf("https://youtu.be/") != -1)
     {
   var url1 = link.value.replace("https://youtu.be/","https://www.youtube.com/embed/");
  
  document.querySelector('.result1').innerHTML = `<iframe width="100%" height="190" style="border-radius:30px;" src="${url1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;


  var url2 = `https://loader.to/api/button/?url=${link.value}&f=${format.value}`;
  
  document.querySelector('.result2').innerHTML = `<iframe style="width:100%;height:60px;border:hidden;overflow:hidden;border-radius:30px;" scrolling="no" src="${url2}"></iframe>`;
  }
  else if(link.value.indexOf("https://www.youtube.com/watch?v=") != -1)
      {
  var url1 = link.value.replace("https://www.youtube.com/watch?v=","https://www.youtube.com/embed/");
  
  document.querySelector('.result1').innerHTML = `<iframe width="100%" height="190" src="${url1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  var u = link.value.replace("https://www.youtube.com/watch?v=","https://youtu.be/");
  var url2 = `https://loader.to/api/button/?url=${u}&f=${format.value}`;
  
  document.querySelector('.result2').innerHTML = `<iframe style="width:100%;height:60px;border:hidden;overflow:hidden;" scrolling="no" src="${url2}"></iframe>`;
      }
   }
}

hideButton.addEventListener('click', () => {
  buttonToHide.style.display = 'none';
})

buttonToHide.addEventListener('click' , async () => {
  if (!navigator.clipboard) {
    console.error("Clipboard API not supported");
    return; // Handle lack of support gracefully (e.g., display an error message)
  }

  try {
    const pastedText = await navigator.clipboard.readText();
    inputField.value = pastedText;
  } catch (error) {
    console.error("Error pasting from clipboard:", error);
    // Handle errors gracefully (e.g., display an error message)
  }
});



window.onload = function () {
  const menu_Button = document.querySelector('.hamburger');
  const mobile_Menu = document.querySelector('.mobile-nav')

  menu_Button.addEventListener('click', function (){
    menu_Button.classList.toggle('is-active');
    mobile_Menu.classList.toggle('is-active');
  })
}