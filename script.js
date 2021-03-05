$('#myCarousel').owlCarousel({
    autoplay:true,
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('#slide2').owlCarousel({
    autoplay:true,
    center: true,
    loop: true,
    nav: true,
    items:5,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        425:{
            items:2
        },
        600:{
            items:3
        },
        768:{
            items:4
        }

    }
});
$('#slide3').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:true,
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        }
    }
})
$(document).ready(function(){
    $(".icon_menu").click(function(){
      $(".menu").slideToggle("slow");
    });
  });