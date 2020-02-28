//header
// function make_header() {
//     var header1 = document.createElement('header');
//     header1.setAttribute('id', 'myHeader');
//     document.body.appendchild(header1);

//     var h3ID = document.createElement('H3');
//     var h3text = document.createTextNode("This is a h3 element in a header element");
//     headerID.appendChild(h3text);

//     document.getElementById('myHeader').appendChild(h3ID);
// }

// const header1 = class {
//     constructor() {
//         this.show = make_header();
//     }
// }

// header1 = new header1();


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
        this.show = show_img(src, 200, 150, "Logo");
    }
}

logo1 = new img('./resources/Images/logo.png');