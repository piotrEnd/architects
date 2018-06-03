
$(document).foundation();

$(function() { 
    $('#collapsing-tabs').on('change.zf.tabs');

    $(document).foundation();
    $('#example-tabs').foundation('selectTab', 'panel1');   
 });



 var random_images_array = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg'];

 function getRandomImage(imgAr, path) {
    path = path || '/public/img/random/'; 
    var num = Math.floor( Math.random() * imgAr.length );

    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}
