
(function($) {
    "use strict";

    $(document).ready(function() {



      // particle.min.js hosted on GitHub
      // Scroll down for initialisation code

      !function(a){var b="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;"function"==typeof define&&define.amd?define(["exports"],function(c){b.ParticleNetwork=a(b,c)}):"object"==typeof module&&module.exports?module.exports=a(b,{}):b.ParticleNetwork=a(b,{})}(function(a,b){var c=function(a){this.canvas=a.canvas,this.g=a.g,this.particleColor=a.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*a.options.velocity,y:(Math.random()-.5)*a.options.velocity}};return c.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},c.prototype.h=function(){this.g.beginPath(),this.g.fillStyle=this.particleColor,this.g.globalAlpha=.7,this.g.arc(this.x,this.y,5,0,2*Math.PI),this.g.fill()},b=function(a,b){this.i=a,this.i.size={width:this.i.offsetWidth,height:this.i.offsetHeight},b=void 0!==b?b:{},this.options={particleColor:void 0!==b.particleColor?b.particleColor:"#fff",background:void 0!==b.background?b.background:"#1a252f",interactive:void 0!==b.interactive?b.interactive:!0,velocity:this.setVelocity(b.speed),density:this.j(b.density)},this.init()},b.prototype.init=function(){if(this.k=document.createElement("div"),this.i.appendChild(this.k),this.l(this.k,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background))this.l(this.k,{background:this.options.background});else{if(!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background))return console.error("Please specify a valid background image or hexadecimal color"),!1;this.l(this.k,{background:'url("'+this.options.background+'") no-repeat center',"background-size":"cover"})}if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.i.appendChild(this.canvas),this.g=this.canvas.getContext("2d"),this.canvas.width=this.i.size.width,this.canvas.height=this.i.size.height,this.l(this.i,{position:"relative"}),this.l(this.canvas,{"z-index":"20",position:"relative"}),window.addEventListener("resize",function(){return this.i.offsetWidth===this.i.size.width&&this.i.offsetHeight===this.i.size.height?!1:(this.canvas.width=this.i.size.width=this.i.offsetWidth,this.canvas.height=this.i.size.height=this.i.offsetHeight,clearTimeout(this.m),void(this.m=setTimeout(function(){this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&this.o.push(this.p),requestAnimationFrame(this.update.bind(this))}.bind(this),500)))}.bind(this)),this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&(this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p),this.canvas.addEventListener("mousemove",function(a){this.p.x=a.clientX-this.canvas.offsetLeft,this.p.y=a.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(a){this.p.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p)}.bind(this))),requestAnimationFrame(this.update.bind(this))},b.prototype.update=function(){this.g.clearRect(0,0,this.canvas.width,this.canvas.height),this.g.globalAlpha=1;for(var a=0;a<this.o.length;a++){this.o[a].update(),this.o[a].h();for(var b=this.o.length-1;b>a;b--){var c=Math.sqrt(Math.pow(this.o[a].x-this.o[b].x,2)+Math.pow(this.o[a].y-this.o[b].y,2));c>120||(this.g.beginPath(),this.g.strokeStyle=this.options.particleColor,this.g.globalAlpha=(120-c)/120,this.g.lineWidth=2,this.g.moveTo(this.o[a].x,this.o[a].y),this.g.lineTo(this.o[b].x,this.o[b].y),this.g.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},b.prototype.setVelocity=function(a){return"fast"===a?1:"slow"===a?.33:"none"===a?0:.66},b.prototype.j=function(a){return"high"===a?5e3:"low"===a?2e4:isNaN(parseInt(a,10))?1e4:a},b.prototype.l=function(a,b){for(var c in b)a.style[c]=b[c]},b});

      // Initialisation

      var canvasDiv = document.getElementById('particle-canvas');
      var options = {
        particleColor: '#25464f',
        background: '#041624',
        interactive: true,
        speed: 'medium',
        density: 'high'
      };
      var particleCanvas = new ParticleNetwork(canvasDiv, options);

        /*=========================================================================
         ===  MENU SCROLL FIXED
         ========================================================================== */
        var s = $(".lgx-header-position");
        var pos = s.position();

        $(window).on('scroll', function () {
          console.log('Scroll');
            var windowpos = $(window).scrollTop();
            if (windowpos >= pos.top) {
                s.addClass("menu-onscroll");
            } else {
                s.removeClass("menu-onscroll");
            }
        });

        /*=========================================================================
         ===  MENU SCROLL FIXED END
         ========================================================================== */






        /*=========================================================================
         ===  Circular CountDown
         ========================================================================== */
        if ( $('#circular-countdown').length ) {
            $("#circular-countdown").TimeCircles({
                "animation": "smooth",
                "bg_width": 1.0,
                "fg_width": 0.1,
                "circle_bg_color": "#ddd",
                "time": {
                    "Days": {
                        "text": "Days",
                        "color": "#ec398b",
                        "show": true
                    },
                    "Hours": {
                        "text": "Hours",
                        "color": "#fac400",
                        "show": true
                    },
                    "Minutes": {
                        "text": "Minutes",
                        "color": "#00acee",
                        "show": true
                    },
                    "Seconds": {
                        "text": "Seconds",
                        "color": "#483fa1",
                        "show": true
                    }
                }
            });
        }
        /*=========================================================================
         ===  Circular CountDown End
         ========================================================================== */




        /*=========================================================================
         ===  // SITE PATH
         ========================================================================== */
        var lgx_path = window.location.protocol + '//' + window.location.host;
        var pathArray = window.location.pathname.split('/');
        for (var i = 1; i < (pathArray.length - 1); i++) {
            lgx_path += '/';
            lgx_path += pathArray[i];
        }

        /*=========================================================================
         ===  // SITE PATH END
         ========================================================================== */


        /*=========================================================================
         ===  COUNTER START
         ========================================================================== */
        var lgxCounter = $('.lgx-counter');
        if (lgxCounter.length) {
            lgxCounter.counterUp({
                delay: 10,
                time: 5000
            });
        }
        /*=========================================================================
         ===  COUNTER END
         ========================================================================== */


        /*=========================================================================
         ===  Modal Video
         ========================================================================== */
        /* Get iframe src attribute value i.e. YouTube video url
         and store it in a variable */
        var url = $("#modalvideo").attr('src');

        /* Remove iframe src attribute on page load to
         prevent autoplay in background */
        $("#modalvideo").attr('src', '');

        /* Assign the initially stored url back to the iframe src
         attribute when modal is displayed */
        $("#lgx-modal").on('shown.bs.modal', function(){
            $("#modalvideo").attr('src', url);
        });

        /* Assign empty url value to the iframe src attribute when
         modal hide, which stop the video playing */
        $("#lgx-modal").on('hide.bs.modal', function(){
            $("#modalvideo").attr('src', '');
        });
        /*=========================================================================
         ===  Modal Video END
         ========================================================================== */




        /*=========================================================================
         ===  countdown
         ========================================================================== */
        if ( $('#lgx-countdown').length ) {

            var dataTime = $('#lgx-countdown').data('date'); // Date Format : Y/m/d

            $('#lgx-countdown').countdown(dataTime, function(event) {
                var $this = $(this).html(event.strftime(''
                    /*+ '<span class="lgx-weecks">%w <i> weeks </i></span> '*/
                    + '<span class="lgx-days">%D <i> Days </i></span> '
                    + '<span class="lgx-hr">%H <i> Hour </i></span> '
                    + '<span class="lgx-min">%M <i> Minu </i></span> '
                    + '<span class="lgx-sec">%S <i> Seco </i></span>'
                ));
            });
        }

        /*=========================================================================
         ===  countdown END
         ========================================================================== */




        /*=========================================================================
         ===  SMOOTH SCROLL - REQUIRES JQUERY EASING PLUGIN
         ========================================================================== */

        $( 'a.lgx-scroll' ).on( 'click', function(event) {
            var $anchor = $(this);
            var topTo   = $( $anchor.attr('href') ).offset().top;

            if ( window.innerWidth < 768 ) {
                topTo = ( topTo - 90 );
            }

            $( 'html, body' ).stop().animate({
                scrollTop: topTo
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
            return false;
        } );

        /*=========================================================================
         ===  SMOOTH SCROLL END
         ========================================================================== */



        /*=========================================================================
         ===  magnific popup
         ========================================================================== */
        $('.lgx-gallery-popup').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            },
            image: {
                titleSrc: 'title'
            }
            // other options
        });
        /*=========================================================================
         ===  magnific popup END
         ========================================================================== */



        if($('#instafeed').length){
            var userFeed = new Instafeed({
                get: 'user',
                userId: '623597756',
                clientId: '02b47e1b98ce4f04adc271ffbd26611d',
                accessToken: '623597756.02b47e1.3dbf3cb6dc3f4dccbc5b1b5ae8c74a72',
                resolution: 'standard_resolution',
                template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
                sortBy: 'most-recent',
                limit: 8,
                links: false
            });
            userFeed.run();
        }




        /*=========================================================================
         ===  HOME PAGE Slider
         ========================================================================== */
        if ($("#lgx-main-slider").length) {
            $("#lgx-main-slider").owlCarousel({
                margin: 0,
                items: 1,
                loop: true,
                animateOut: 'fadeOut',
                autoplay:true,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: 5000,
                autoplaySpeed: 500,
                nav: true,
                addClassActive : true
            });
        }


        /*=========================================================================
         ===  HOME PAGE Slider END
         ========================================================================== */



        /*=========================================================================
         ===  gallery SLIDER
         ========================================================================== */
        if ($('#lgx-owlgallery').length) {
            $("#lgx-owlgallery").owlCarousel({
                margin: 0,
                items: 3,
                loop: true,
                autoplay:true,
                dots: false,
                navText: ["<img src='./assets/img/arrow-left.png'>","<img src='./assets/img/arrow-right.png'>"],
                autoplayTimeout: 5000,
                autoplaySpeed: 500,
                nav: true,
                addClassActive : true,
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }

            });
        }
        /*=========================================================================
         ===  gallery SLIDER END
         ========================================================================== */






        /*=========================================================================
         ===  HOME PAGE Slider
         ========================================================================== */
        if ($("#lgx-slider-center").length) {
            $("#lgx-slider-center").owlCarousel({
                margin: 0,
                center: true,
                items: 1,
                loop: true,
                //animateOut: 'fadeOut',
                autoplay:true,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: 5000,
                autoplaySpeed: 500,
                nav: true,
                addClassActive : true,
                responsive:{
                    991:{
                        items:2
                    }
                }
            });
        }
        /*=========================================================================
         ===  HOME PAGE Slider END
         ========================================================================== */




        /*=========================================================================
         ===  TESTIMONIAL SLIDER
         ========================================================================== */
        if ($('#lgx-owltestimonial').length) {
            $("#lgx-owltestimonial").owlCarousel({
                margin: 0,
                items: 2,
                loop: true,
                autoplay:true,
                dots: true,
                navText: ["<img src='./assets/img/arrow-left-ash.png'>","<img src='./assets/img/arrow-right-ash.png'>"],
                autoplayTimeout: 5000,
                autoplaySpeed: 500,
                nav: true,
                addClassActive : true,
                responsive:{
                    0:{
                        items:1
                    },
                    787:{
                        items:1
                    }
                }
            });
        }


        /*=========================================================================
         ===  TESTIMONIAL SLIDER END
         ========================================================================== */



        // HEADER DISPLAY FLEX ISSUE
        if ($(window).width() < 787) {
            $('#navbar').removeClass('lgx-collapse');
        }



        /*=========================================================================
         ===  Typed Animation START
         ========================================================================== */
        if($('#lgx-typed-string').length){
            $('#lgx-typed-string').typed({
                strings: ["UX Conference 2019", "UI Conference 2019","You learn Advance"],
                // typing speed
                typeSpeed: 10,
                // time before typing starts
                startDelay: 0,
                // backspacing speed
                backSpeed: 0,
                // shuffle the strings
                shuffle: false,
                // time before backspacing
                backDelay: 500,
                // loop
                loop: true,
                // false = infinite
                loopCount: false,
                // show cursor
                showCursor: true,
                // character for cursor
                cursorChar: "|",
                // either html or text
                contentType: 'html'
            });
        }

        /*=========================================================================
         ===  Typed Animation END
         ========================================================================== */

        /*=========================================================================
         ===  Typed Animation START
         ========================================================================== */
        if($('#lgx-typed-center').length){
            $('#lgx-typed-center').typed({
                strings: ["Festival", "World","Event"],
                // typing speed
                typeSpeed: 100,
                // time before typing starts
                startDelay: 0,
                // backspacing speed
                backSpeed: 0,
                // shuffle the strings
                shuffle: false,
                // time before backspacing
                backDelay: 500,
                // loop
                loop: true,
                // false = infinite
                loopCount: false,
                // show cursor
                showCursor: true,
                // character for cursor
                cursorChar: "|",
                // either html or text
                contentType: 'html'
            });
        }

        /*=========================================================================
         ===  Typed Animation END
         ========================================================================== */



        /*=========================================================================
         ===  GOOGLE MAP
         ========================================================================== */
        if (typeof google != 'undefined') {
            //for Default  map
            if ($('.map-canvas-default').length) {
                $(".map-canvas-default").googleMap({
                    zoom: 8, // Initial zoom level (optiona
                    coords: [40.7127, 74.0059], // Map center (optional)
                    type: "ROADMAP", // Map type (optional),
                    mouseZoom: false
                });

                //for marker
                $(".map-canvas-default").addMarker({
                    coords: [40.7127, 74.0059], // GPS coords
                    title: 'Eventpoint',
                    text: '121 King St, Melbourne VIC 3000, Australia',
                    icon: lgx_path + '/assets/img/map/map-icon.png'
                });
            }

            // FOR DARK MAP
            if ($('.map-canvas-dark').length) {
                $(".map-canvas-dark").googleMap({
                    zoom: 8, // Initial zoom level (optiona
                    coords: [40.7127, 74.0059], // Map center (optional)
                    type: "HYBRID", // Map type (optional),
                    mouseZoom: false
                });

                //for marker
                $(".map-canvas-dark").addMarker({
                    coords: [40.7127, 74.0059], // GPS coords
                    title: 'Eventpoint',
                    text: '121 King St, Melbourne VIC 3000, Australia',
                    icon: lgx_path + '/assets/img/map/map-icon.png'
                });
            }
        }


        /*=========================================================================
         ===  //GOOGLE MAP END
         ========================================================================== */



        /* ==========================================================================
         SUBSCRIPTION & AJAX SUBMISSION
         ========================================================================== */

        var isEmail = function (email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

        $('form.lgx-subscribe-form').on('submit', function (evnt) {
            evnt.preventDefault();
            //  console.log(lgx_path);
            // console.log('subs submit');
            var $subform = $(this);
            var emailInput = $('form.lgx-subscribe-form').find('input#subscribe');
            if (isEmail(emailInput.val())) {
                // console.log('ok');
                $.ajax({
                    url: lgx_path + '/assets/php/subscribe.php',
                    type: 'post',
                    data: {'email': emailInput.val().toLowerCase()},
                    beforeSubmit: function (argument) {
                        // body...
                    },
                    success: function (ajaxResponse) {

                        var ajaxResponse = $.parseJSON(ajaxResponse);
                        // console.log(ajaxResponse);

                        $('#lgx-subalert').addClass("alert alert-success lgx-sub-alert").html(ajaxResponse.message);

                        try {
                            var ajaxResponse = $.parseJSON(ajaxResponse);
                            if (!ajaxResponse.error) {
                                emailInput.css('color', '#0f0');
                            } else {
                                emailInput.removeAttr('style'); //css('color', '#f00');
                                throw ajaxResponse.message;
                            }
                            //alert( ajaxResponse.message );
                        } catch (e) {
                            // e.message;
                            // alert(e.message );

                        }
                    },
                    error: function (argument) {
                        var ajaxResponse = $.parseJSON(ajaxResponse);
                        $('#lgx-subalert').addClass("alert alert-danger lgx-sub-alert").html(ajaxResponse.message);
                        // body...
                    }
                });
                $subform[0].reset();
            } else {
                emailInput.css('color', '#f00');
                return false;
            }
        });

        $('form.subscribe-form input#subscribe').on('keyup', function (evnt) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            this.style.color = (isEmail($(this).val())) ? '#f5832b' : '#f00';
        });

        /* ==========================================================================
         SUBSCRIPTION & AJAX SUBMISSION
         ========================================================================== */



        /*=========================================================================
         ===  Start Contact Form Validation And Ajax Submission
         ========================================================================== */

        var alertInterval;//store the timeout interval ID

        //clear interval for alert message window
        $('#lgx-form-modal').on('hide.bs.modal', function (ev) {
            clearInterval(alertInterval);
        });

        var $contactForm = $('form.lgx-contactform');
        $contactForm.validate({
            submitHandler: function (form) {
                //console.log(form);
                var $form = $(form);
                //console.log($form.serialize());
                $.ajax({
                    url: lgx_path + '/assets/php/contact.php',
                    type: 'post',
                    data: $form.serialize(),
                    beforeSubmit: function (argument) {
                        //ajax loading icon
                    },
                    success: function (ajaxResponse) {
                        try {
                            var ajaxResponse = $.parseJSON(ajaxResponse);
                            if (ajaxResponse.error) {
                                //for field error
                                //console.log(ajaxResponse.error_field);
                                for (var i = 0; i < ajaxResponse.error_field.length; i++) {
                                    if ($('p#' + ajaxResponse.error_field[i] + '-error').length) {
                                        $('p#' + ajaxResponse.error_field[i] + '-error').text(ajaxResponse.message[ajaxResponse.error_field[i]]);
                                    } else {
                                        $('#' + ajaxResponse.error_field[i]).after('<p id="' + ajaxResponse.error_field[i] + '-error" class="help-block">' + ajaxResponse.message[ajaxResponse.error_field[i]] + '</p>');
                                    }
                                }

                            } else {
                                $('.lgx-form-msg').removeClass('alert-danger').addClass('alert-success').text(ajaxResponse.message);
                                $('#lgx-form-modal').modal('show');
                                alertInterval = setInterval(function () {
                                    $('#lgx-form-modal').modal('hide');
                                }, 5000);
                                $form[0].reset();
                            }
                        } catch (e) {
                            $('.lgx-form-msg').removeClass('alert-success').addClass('alert-danger').text('Sorry, we are failed to contact with you. Please reload the page and try again.');
                            $('#lgx-form-modal').modal('show');
                            alertInterval = setInterval(function () {
                                $('#lgx-form-modal').modal('hide');
                            }, 5000);
                        }
                    },
                    error: function (argument) {
                        $('.lgx-form-msg').removeClass('alert-success').addClass('alert-danger').text('Sorry, we can not communicate with you. Please make sure you are connected with internet.');
                        $('#lgx-form-modal').modal('show');
                        alertInterval = setInterval(function () {
                            $('#lgx-form-modal').modal('hide');
                        }, 5000);
                    },
                    complete: function () {

                    }
                });

                return false;
            },
            errorElement: 'p',
            errorClass: 'help-block',
            rules: {
                'lgxname': {
                    required: true,
                    minlength: 3
                },

                'lgxemail': {
                    required: true,
                    email: true
                },

                'lgxsubject': {
                    required: true,
                    minlength: 5
                },

                'lgxmessage': {
                    required: true,
                    minlength: 5
                }
            }
        });

        /*=========================================================================
         ===  Start Contact Form Validation And Ajax Submission END
         ========================================================================== */

    });//DOM READY


})(jQuery);
