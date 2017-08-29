$(document).ready(function(){ 
    
    function goToByScroll(id){   
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
            'slow');
    }

    
    $("#projects-nav").click(function(e) {  
        e.preventDefault();  
        goToByScroll('projects');           
    });   
    $("#work-nav").click(function(e) {  
        e.preventDefault();  
        goToByScroll('work');           
    });
    $("#about-me-nav").click(function(e) {  
        e.preventDefault();  
        goToByScroll('about-me');           
    });
    $("#resume-nav").click(function(e) {  
        e.preventDefault();  
        goToByScroll('resume');           
    });
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
    });
    $('#menu-drop-down').on('click',function(){
        $('#right-menu-bar').toggleClass('right-menu-bar-opened');
        $('#menu-drop-down').toggleClass('menu-drop-down-hover');
    });
    $('#menu-drop-down').hover(function(){
        if(!$('#right-menu-bar').hasClass('right-menu-bar-opened')){
            $('#right-menu-bar').addClass('right-menu-bar-peek');
        }
    },
                              function(){
        $('#right-menu-bar').removeClass('right-menu-bar-peek');
    });
    $('#facebook').on('click',function(){
        window.open('https://www.facebook.com/theofficialpu', "_blank");
    });
    $('#github').on('click',function(){
        window.open('https://github.com/TheOfficialPu', "_blank");
    });
    $('#linkedin').on('click',function(){
        window.open('https://www.linkedin.com/in/apurv-prashanth-8ba63b120/', "_blank");
    });
    $('#email').on('click',function(){ 
        window.open('mailto:a2prasha@uwaterloo.ca');
    }); 
})