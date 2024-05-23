// On page load
window.onload = function() {
    var toggleSidebar = localStorage.getItem('toggleSidebar');
    var isChecked = (toggleSidebar === 'true');
    document.getElementById('toggle-sidebar').checked = isChecked;
    document.querySelector('.abus').classList.toggle('move-right', isChecked);
};


// Checkbox state change
document.getElementById('toggle-sidebar').addEventListener('change', function() {
    localStorage.setItem('toggleSidebar', this.checked);
    document.querySelector('.abus').classList.toggle('move-right', this.checked);
});

// Not select the same page
// var sidebarLinks = document.querySelectorAll('.sidebar .menu a');
// for (var i = 0; i < sidebarLinks.length; i++) {
//     sidebarLinks[i].addEventListener('click', function(event) {
//         var currentUrl = window.location.href.split('#')[0];
//         var clickedUrl = this.href.split('#')[0];
//         if (currentUrl === clickedUrl) {
//             event.preventDefault();
//         }
//     });
// };


//preloader
document.addEventListener("DOMContentLoaded", function() {
  
    var sidebarLinks = document.querySelectorAll('.sidebar a');
    for (var i = 0; i < sidebarLinks.length; i++) {

        sidebarLinks[i].addEventListener('click', function(event) {

            var currentUrl = window.location.href.split('#')[0];
            var clickedUrl = this.href.split('#')[0];

            if (currentUrl === clickedUrl) {
                event.preventDefault();
            }

            
        });
    }

  
    var loader = document.getElementById('preloader');

    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.style.display = 'none';
        }, 200); 
    });
});


// scroll to top btn

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 100){
        toTop.classList.add('active');   
    }
    else{
        toTop.classList.remove('active');
    }
});

toTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// toggle sidebar

var label = document.querySelector('label[for="toggle-sidebar"]');
var checkbox = document.getElementById('toggle-sidebar');

label.addEventListener('click', function(e) {
    e.preventDefault();
    checkbox.checked = !checkbox.checked;

 
    var changeEvent = new Event('change');

    
    checkbox.dispatchEvent(changeEvent);
});


//Drop down profile menu

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
    subMenu.classList.toggle("open-menu");
}