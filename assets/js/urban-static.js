
var mapStyles = [
{
"featureType": "administrative",
"elementType": "labels.text.fill",
"stylers": [
    {
        "color": "#444444"
    }
]
},
{
"featureType": "landscape",
"elementType": "all",
"stylers": [
    {
        "color": "#f2f2f2"
    }
]
},
{
"featureType": "landscape",
"elementType": "geometry.fill",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "landscape.man_made",
"elementType": "geometry.fill",
"stylers": [
    {
        "hue": "#ffd100"
    },
    {
        "saturation": "44"
    }
]
},
{
"featureType": "landscape.man_made",
"elementType": "geometry.stroke",
"stylers": [
    {
        "saturation": "-1"
    },
    {
        "hue": "#ff0000"
    }
]
},
{
"featureType": "landscape.natural",
"elementType": "geometry",
"stylers": [
    {
        "saturation": "-16"
    }
]
},
{
"featureType": "landscape.natural",
"elementType": "geometry.fill",
"stylers": [
    {
        "hue": "#ffd100"
    },
    {
        "saturation": "44"
    }
]
},
{
"featureType": "poi",
"elementType": "all",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "road",
"elementType": "all",
"stylers": [
    {
        "saturation": "-30"
    },
    {
        "lightness": "12"
    },
    {
        "hue": "#ff8e00"
    }
]
},
{
"featureType": "road.highway",
"elementType": "all",
"stylers": [
    {
        "visibility": "simplified"
    },
    {
        "saturation": "-26"
    }
]
},
{
"featureType": "road.arterial",
"elementType": "labels.icon",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "transit",
"elementType": "all",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "water",
"elementType": "all",
"stylers": [
    {
        "color": "#c0b78d"
    },
    {
        "visibility": "on"
    },
    {
        "saturation": "4"
    },
    {
        "lightness": "40"
    }
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
    {
        "hue": "#ffe300"
    }
]
},
{
"featureType": "water",
"elementType": "geometry.fill",
"stylers": [
    {
        "hue": "#ffe300"
    },
    {
        "saturation": "-3"
    },
    {
        "lightness": "-10"
    }
]
},
{
"featureType": "water",
"elementType": "labels",
"stylers": [
    {
        "hue": "#ff0000"
    },
    {
        "saturation": "-100"
    },
    {
        "lightness": "-5"
    }
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "water",
"elementType": "labels.text.stroke",
"stylers": [
    {
        "visibility": "off"
    }
]
}
]

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    nav_collapse()
});

$(document).ready(function() {
    nav_collapse()
})

function nav_collapse() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function() {
//     $('.navbar-toggle:visible').click();
// });

// Create a clone of the menu, right next to original.
$('#sticky-header').addClass('original')
          .clone()
          .insertAfter('#sticky-header')
          .addClass('cloned')
          .css('position','fixed')
          .css('top','0')
          .css('margin-top','0')
          .css('z-index','500')
          .removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {
    if ($('.original').length) {
      var orgElementPos = $('.original').offset();
      var navPos = $('nav').offset()
      var navHeight = $('nav').height()
      orgElementTop = orgElementPos.top - navHeight;

      if ($(window).scrollTop() >= (orgElementTop)) {
        // scrolled past the original position; now only show the cloned, sticky element.

        // Cloned element should always have same left position and width as original element.
        orgElement = $('.original');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.cloned').css('left',leftOrgElement+'px').css('top',navHeight).css('width',widthOrgElement).show();
        $('.original').css('visibility','hidden');
      } else {
        // not scrolled past the menu; only show the original menu.
        $('.cloned').hide();
        $('.original').css('visibility','visible');
      }
    }
}

// define url paths here along with the function that should be executed on this page
// see below for the root page
init_mapping = {
    '/': inithome
}

function init() {
    var path = window.location.pathname;
    init_func = init_mapping[path]
    if (init_func !== undefined) {
        init_func()
    }
};


// example function
function inithome() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    if (window.screen.availWidth <= 1024) {
        var zoom = 13;
        var autoOpen = false;
    } else {
        var autoOpen = true;
        var zoom = 15;
    }
    try {
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            // zoom: 15,
            zoom: zoom,
            maxZoom: zoom,
            minZoom: zoom,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(map_center_lat, map_center_lng),

            // Disables the default Google Maps UI components
            disableDefaultUI: true,
            scrollwheel: false,
            draggable: false,

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: mapStyles

        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using out element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
    } catch (ReferenceError) {
        console.log('google not defined, no maps today!');
    }

}


function addMarker(map, lat, lng, content, autoOpen) {
    
    var info = content || ''
    var LatLng = new google.maps.LatLng(lat, lng);
    var Marker = new google.maps.Marker({
        position: LatLng,
        map: map,
    });
    var InfoWindow = new google.maps.InfoWindow({
        content: info,
        maxWidth: 300,
        position: LatLng
    });
    if (autoOpen === true) {
        InfoWindow.open(map, Marker);
    }

    google.maps.event.addListener(Marker, 'click', function() {
        InfoWindow.open(map, Marker);
    });
}