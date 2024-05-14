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
    };

  
    var loader = document.getElementById('preloader');
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.style.display = 'none';
        }, 200); 
    });
});