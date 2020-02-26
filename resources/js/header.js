//header
function show_img(src, width, height, alt){
    var img = document.createElement('img');
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    document.body.appendChild(img);
}

const img = class {
    constructor(src) {
        this.src = src;
        this.show = show_img(src, 200, 150, "Logo of Utrecht University");
    }
};

logo1 = new img('./resources/Images/logo.png');