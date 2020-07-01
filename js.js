$(document).ready(function(){
        
    var countBook = 0;
    var countDestination = 0;


    
    $(".toggleBook").click(function(){
        if($(window).width() < 768)
        {
            $("#book ul").slideToggle();
            $("#book ul").css("position","static");
            countBook++;
            if(countBook%2 == 0)
            {
                $("#book").css("padding-bottom","16px");
            }
            else
            {
            $("#book").css("padding-bottom","0");
            }
        }   
    })

    $(".toggleDestination").click(function(){
        if($(window).width() < 768){
            $("#Destinations ul").slideToggle();
            $("#Destinations ul").css("position","static");
            countDestination++;
            if(countDestination%2 == 0)
            {
                $("#Destinations").css("padding-bottom","16px");
            }
            else
            {
            $("#Destinations").css("padding-bottom","0");
            }
        }
    })

    $('.slide-content').mouseover(function(){
        $('.slidersentence').css('display','block');
    })
    $('.slide-content').mouseout(function(){
        $('.slidersentence').css('display','none');
    })

    /* Commence la page a l'index 1*/
    var slideIndex = 1;
    showSlide(slideIndex);

    /* incremente de 1 le slider*/
    function plusSlide(n) {
    showSlide(slideIndex += n);
    }
    /* Donne la classe a l'image courante */
    function currentSlide(n) {
    showSlide(slideIndex = n);
    }
    $('.Prev').click(function(){
        plusSlide(-1);
    })
    $('.Next').click(function(){
        plusSlide(+1);
    })
    $("[class*='slidebtn']").click(function(){
        var b = this.className;
        var a = b.match(/(\d)/);
        if(a[0]){
            currentSlide(a[0]);
        }
    })

    function showSlide(n) {
    var i;
    /* recupere les images */
    var Slide = document.getElementsByClassName("mySlides");

    /*  recupere les boutons */
    var button = document.getElementsByClassName("slidebtn");
    
    /* Si la classe est > au nombre d'image retour a 1*/
    if (n > Slide.length) {slideIndex = 1}

    /* Si la classe est < a 0 passe au dernier slide */
    if (n < 1) {slideIndex = Slide.length}

    /* Display none toute les images */
    for (i = 0; i < Slide.length; i++) {
        Slide[i].style.display = "none";  
    }

    /* Enleve la classe active a tout les boutons */
    for (i = 0; i < button.length; i++) {
        button[i].className = button[i].className.replace("active", "");
    }

    /* Donne display block a l'image et active au bouton courant */
    Slide[slideIndex-1].style.display = "block";  
    button[slideIndex-1].className += " active";

    }

  
    function ChangeDiv(){
        /* compteur static */
        if( typeof ChangeDiv.counter == 'undefined' ) {
            ChangeDiv.counter = 0;
        }
        if( window.innerWidth < 768){
        var Flag = document.getElementsByClassName("Flag");
        
        /* display none tout les flags */
        for (i = 0; i < Flag.length; i++) {
        Flag[i].style.display = "none";  
        }
        /* donne block au flag courant */
        Flag[ChangeDiv.counter].style.display = "block";
        
        if(ChangeDiv.counter < Flag.length-1){
            ChangeDiv.counter++;
        }else{
            ChangeDiv.counter = 0;
        }
    }


    }
   
    if( window.innerWidth < 768){
        ChangeDiv();
    }
        setInterval(() => {
            ChangeDiv();
        }, 2000); 
    

})
