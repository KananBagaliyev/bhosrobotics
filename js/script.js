$(document).ready(function(){

    $('.project_slider').owlCarousel({
        items: 1,
        loop: true,
        singleItem: true,
        nav: true,
        dots: false,
        animateOut: 'slideOut',
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        responsive:{
            0:{
                items: 1,
            },
            600:{
                items: 3,
            },
            992:{
                items: 5,
            }
        }
    });
    
    $('.about_slider').owlCarousel({
        items: 1,
        loop: true,
        singleItem: true,
        nav: true,
        dots: false,
        animateOut: 'slideOut',
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        responsive:{
            0:{
                items: 1,
            },
            600:{
                items: 1,
            },
            992:{
                items: 2,
            }
        }
    });

    $('.event_slider').owlCarousel({
        items: 1,
        loop: true,
        singleItem: true,
        nav: false,
        dots: false,
        animateOut: 'slideOut',
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        responsive:{
            0:{
                items: 1,
            },
            600:{
                items: 2,
            },
            992:{
                items: 3,
            }
        }
    });
    
    if(document.querySelector('#instafeed-container')!=null){
        var userFeed = new Instafeed({
            get: 'user',
            target: "instafeed-container",
            resolution: 'medium_resolution',
            accessToken: 'IGQVJYTG5PLWZACLXFkcmpXblZAEMUFDWkNscjRKTGs2WGlTZAF9BX09QUVhGaXlEblRmUk9sUXZASNUw1NFVQQlRUQlNhWlN4VGVUYkpNTXdaWkd4aGlwYklabU0yUmYtLWkxaE1iczRsSEYtWUQxTU9zdwZDZD',
            template:'<div class="col-lg-3"><div class="news_item"><a href="{{link}}" target="_blank"><div class="image"><img src="{{image}}" alt=""><div class="fade_image"></div></div><div class="news_detail"><span class="time">{{timestamp}}</span><p class="content">{{caption}}</p></div><a/></div></div>',
            limit:5,
            filter: function(image) {
        
                var date = new Date(image.timestamp);
                m = date.getMonth();
                d = date.getDate();
                y = date.getFullYear();
        
                var month_names = new Array ( );
                month_names[month_names.length] = "Jan";
                month_names[month_names.length] = "Feb";
                month_names[month_names.length] = "Mar";
                month_names[month_names.length] = "Apr";
                month_names[month_names.length] = "May";
                month_names[month_names.length] = "Jun";
                month_names[month_names.length] = "Jul";
                month_names[month_names.length] = "Aug";
                month_names[month_names.length] = "Sep";
                month_names[month_names.length] = "Oct";
                month_names[month_names.length] = "Nov";
                month_names[month_names.length] = "Dec";
        
                var thetime = month_names[m] + ' ' + d + ' ' + y;
        
                image.timestamp = thetime;
        
                return true;
            }
        });
        userFeed.run();
    }
    
    
    
    
    function instafeed( count){
        if(document.querySelector('#instafeed')!=null){
            var userFeed = new Instafeed({
                get: 'user',
                target: "instafeed",
                resolution: 'medium_resolution',
                accessToken: 'IGQVJYTG5PLWZACLXFkcmpXblZAEMUFDWkNscjRKTGs2WGlTZAF9BX09QUVhGaXlEblRmUk9sUXZASNUw1NFVQQlRUQlNhWlN4VGVUYkpNTXdaWkd4aGlwYklabU0yUmYtLWkxaE1iczRsSEYtWUQxTU9zdwZDZD',
                template:'<div class="col-lg-3"><div class="news_item"><a href="{{link}}" target="_blank"><div class="image"><img src="{{image}}" alt=""><div class="fade_image"></div></div><div class="news_detail"><span class="time">{{timestamp}}</span><p class="content">{{caption}}</p></div><a/></div></div>',
                limit:4+count,
                filter: function(image) {
            
                    var date = new Date(image.timestamp);
                    m = date.getMonth();
                    d = date.getDate();
                    y = date.getFullYear();
            
                    var month_names = new Array ( );
                    month_names[month_names.length] = "Jan";
                    month_names[month_names.length] = "Feb";
                    month_names[month_names.length] = "Mar";
                    month_names[month_names.length] = "Apr";
                    month_names[month_names.length] = "May";
                    month_names[month_names.length] = "Jun";
                    month_names[month_names.length] = "Jul";
                    month_names[month_names.length] = "Aug";
                    month_names[month_names.length] = "Sep";
                    month_names[month_names.length] = "Oct";
                    month_names[month_names.length] = "Nov";
                    month_names[month_names.length] = "Dec";
            
                    var thetime = month_names[m] + ' ' + d + ' ' + y;
            
                    image.timestamp = thetime;
            
                    return true;
                }
            });
            userFeed.run();
        }
    }
    
    instafeed(0);
    
    
    let count = 0
    $('#load_more').click(function(){
        count+=4;
        instafeed(count);
    })
    
    $('#accordion_about .header').click(function(){
        console.log($(this).find('.expand'))
        $(this).parent().find('.content').slideToggle();
        $(this).find('.expand').toggleClass('shrink')
    })
    
    $('.menu_btn').click(function(){
        $('.mobile_navigation_bar').slideToggle();
        $(this).toggleClass('animate')
    })

})

