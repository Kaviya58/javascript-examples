//get dimensions of an image
let img = new Image();

img.src = '//tse2.mm.bing.net/th?id=OIP.MueSqss_i93xWF-cLfKgdQHaHa&pid=Api&P=0';

img.onload = function(){
    console.log('Width : ' + this.width);
    console.log('Height : ' + this.height);
}