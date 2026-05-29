$(document).ready(function(){

    let index = 0;
    let slides = $(".slide");

    function mostrarSlide(i){

        slides.removeClass("active");

        slides.eq(i).addClass("active");
    }

    $(".next").click(function(){

        index++;

        if(index >= slides.length){
            index = 0;
        }

        mostrarSlide(index);

    });

    $(".prev").click(function(){

        index--;

        if(index < 0){
            index = slides.length - 1;
        }

        mostrarSlide(index);

    });

  /* ===== CONTADOR DE TITULOS ===== */

$(".contador").each(function(){

    let $this = $(this);
    let numeroFinal = parseInt($this.attr("data-numero"));

    $({ contador: 0 }).animate(
        { contador: numeroFinal },

        {
            duration: 3000,

            step: function(valor){

                $this.text(Math.floor(valor));

            },

            complete: function(){

                $this.text(numeroFinal);

            }
        }
    );

});

});