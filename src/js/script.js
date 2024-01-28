$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 800,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src=icons/chevron-left-solid.png></button>',
        nextArrow: '<button type="button" class="slick-next"><img src=icons/chevron-right-solid.png></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false,
                }
            }
        ]
      });
      (function($) {
        $(function() {
          
          $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
              .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
              .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
          });
          
        });
        })(jQuery);

        function toggleSlide(item) {
            $(item).each(function(i) {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__secondwrap').eq(i).toggleClass('catalog-item__secondwrap_active');
                })
            });
        };
    
        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');
    //Modal
    $("[data-modal=consultation]").on("click", function() {
      $(".overlay, #consultation").fadeToggle()
    })
    $(".modal__close").on("click", function() {
      $(".overlay, #consultation, #order, #thanks").fadeOut()
    })

    $(".button_mini").each(function(i) {
      $(this).on("click", function() {
        $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
        $(".overlay, #order").fadeToggle()
      })
    })
    //Forms

    function validateForm(form) {
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          },
        },  
          messages: {
            name: "Пожалуйста введите имя",
            phone: "Пожалуйста введите cвой телефон",
            email: {
              required: "Пожалуйста введите email адрес",
              email: "Введите правильный email адрес",
            },
          },
        
      });
    }

    validateForm("#consultation-form")
    validateForm("#consultation form")
    validateForm("#order form")

    //Mask
    $("input[name=phone]").mask("+(999) 999-999-999");
    //Send-Form
    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
      });
      return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn()
    } else {
      $(".pageup").fadeOut()
    }

    
  })

  // $("a[href]")

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {

        event.preventDefault();
  
        // Store hash
        let hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

  new WOW().init();
  });



  