function initMap(){
    let mapOptions = {
        zoom:9,
        center: {lat:-26.199593,lng:28.062860}
    }
    let map = new google.maps.Map(document.getElementById('map'),mapOptions)
    MapImages(map)
}
function MapImages(myMap){
    
    const images = document.querySelectorAll("img");
    for(const image of images.entries()){
        console.log('image: ', image[1].alt)
        console.log('pos: ', image[1].dataset.latitude,image[1].dataset.longitude)
        new google.maps.Size(42,68);
        let icon  = new google.maps.MarkerImage(
            image[1].src,
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(image[1].clientWidth/5, image[1].clientHeight/5)
        );  
        let marker  = new google.maps.Marker({
            position: {lat:parseFloat(image[1].dataset.latitude),lng:parseFloat(image[1].dataset.longitude)},
            map:myMap,
            icon: icon
        })
    }

}



document.addEventListener('DOMContentLoaded',initMap());