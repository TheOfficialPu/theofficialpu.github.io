$(document).ready(function(){ 
    
    function goToByScroll(id){   
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
            'slow');
    }

    $("#projects-button").click(function(e) {  
        e.preventDefault();  
        goToByScroll('projects');           
    });

    $("#work-button").click(function(e) {  
        e.preventDefault();  
        goToByScroll('work');           
    });
    
    $(window).scroll(function(){ 

    var a = 15;
    var pos = $(window).scrollTop();
    if(pos > a) { 
        $("#nav-bar-background").addClass('color-change-bg-nav-bar');
    }
    else {
        $("#nav-bar-background").removeClass('color-change-bg-nav-bar');
    }
    }); 
    $('#dl-resume').on('click',function(e){
        e.preventDefault();  
        window.location.href = 'cv.pdf';
    })
})