 
 var visitorName = prompt("What is your name please?")

 //  Capitalise the first letter of their name
 
  var firstCharacter = visitorName.slice(0,1).toUpperCase();
 
  var restOfName = visitorName.slice(1, visitorName.length).toLowerCase();
 
  var capitalisedVisitorName = firstCharacter + restOfName;
 
  var capitalisedVisitorName = capitalisedVisitorName.slice(0,21)
 
  var welcome = document.getElementById('visitor')
 
   welcome.innerHTML = 'Hi ' + capitalisedVisitorName 

$(document).ready(function() {

    let $btns = $(".project-area .button-group button");

    $btns.click(function(e) {

        $(".project-area .button-group buttons").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $(".project-area .grid").isotope ({
           filter : selector
        });


        return false;
    })

    $(".project-area .button-group #btn1").trigger("click");

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });


    //   sticky navigation menu

    let nav_offset_top = $(".header_area").height() + 50;

    function navbarFixed() {
        if($(".header_area").length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                  $(".header_area .main-menu").addClass("navbar_fixed");
                }else{
                 $(".header_area .main-menu").removeClass("navbar_fixed");
                }
            })
        }
    }

    navbarFixed();
}); 