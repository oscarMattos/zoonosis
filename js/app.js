// function to responsive nav
function responsiveNav() {
    var navItems = document.getElementById('nav-ul'); 
    if ( navItems.classList.contains("hidden-sm") ){
    	navItems.classList.remove("hidden-sm");
    	navItems.classList.add("visible-sm");
    }
    else{
        navItems.classList.remove("visible-sm");
        navItems.classList.add("hidden-sm");
    }
}

//Active button

/*

var selector, elems, makeActive;

selector = '#nav-ul li a';

elems = document.querySelectorAll(selector);

makeActive = function () {
    for (var i = 0; i < elems.length; i++){
    	elems[i].classList.remove('active');
    }    
    this.classList.add('active');
};

for (var i = 0; i < elems.length; i++){
	elems[i].addEventListener('click', makeActive);
}
*/
    
    





