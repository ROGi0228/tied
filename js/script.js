$(document).ready(function(){

    
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight: true,
        slidesToShow: 2,
        speed: 1000,
        easing: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
        centerMode: true,
        variableWidth: false,
        
    });





    //E-mail Ajax Send
	$("#form__send").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


})


const anchors = document.querySelectorAll('a[href*="#"]')


for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

if (window.matchMedia("(min-width: 768px)").matches) {
    /* the viewport is at least 400 pixels wide */
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight: true,
        slidesToShow: 1,
        speed: 1000,
        easing: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
        centerMode: true,
        variableWidth: false,
        
    });


    
  } 

  $(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .navigation__links, .main-information, .navigation__logo1, .navigation__logo').toggleClass('active');
    })
  })