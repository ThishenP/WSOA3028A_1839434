function initMap() {
    let mapOptions = {
        zoom: 14,
        center: { lat: -26.194717, lng: 28.047190 }
    }
    let map = new google.maps.Map(document.getElementById('map'), mapOptions)
    MapImages(map)
}
function MapImages(myMap) {

    const images = document.querySelectorAll("img");
    for (const image of images.entries()) {
      
        new google.maps.Size(42, 68);
        let icon = new google.maps.MarkerImage(
            image[1].src,
            null, 
            null, 
            null, 
            new google.maps.Size(image[1].clientWidth / 5, image[1].clientHeight / 5)
        );
        let marker = new google.maps.Marker({
            position: { lat: parseFloat(image[1].dataset.latitude), lng: parseFloat(image[1].dataset.longitude) },
            map: myMap,
            icon: icon
        });
        let InfoWindow = new google.maps.InfoWindow({
            content:   `<div class="image-holder">
            <a href="${image[1].src}">
                <img src="${image[1].src}" "${image[1].alt}" height=170>
                <p class="caption">${image[1].dataset.caption}</p>
            </a>
        </div>`

          
        });

        marker.addListener('click', function () {
            InfoWindow.open(map, marker);
        });
        


    }
    loadSwitcher()
}
function loadSwitcher(){
    let source = document.createElement('script');
    source.type = 'module';
    source.src = "../Source/js/switcher.js";
    document.getElementsByTagName('head')[0].appendChild(source);
}


document.addEventListener('DOMContentLoaded', function () {
    let source = document.createElement('script');
    source.type = 'text/javascript';
    source.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAyoisLKM7m6SGT4tpYIB5hTvCWuGBconU&callback=initMap";
    document.getElementsByTagName('head')[0].appendChild(source);
})
