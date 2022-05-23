/**
 * B1: Hiển thị danh sách kính
 * _Glasses
 * _GlassesList
 * B2: Xây dựng chức năng thử kính
 * B3: Xây dựng chức năng so sánh 
*/

let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

//Import cac lop doi tuong vao main
import { Glasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";

let glassesList = new GlassesList()
//Hàm rút gọn cú pháp láy elementbyID
const getELE = (id) => {
    return document.getElementById(id);
}

//Ham hien thi danh sach kinh
const showGlassesList = () => {
    let divGlassesList = getELE("vglassesList");

    //Tao doi tuong kinh va them kinh vao danhsach kinh
    //Duyet mang du lieu data co san
    dataGlasses.map((item, index) => {
        let gl = new Glasses(item.id, item.src, item.virtualImg, item.brand, item.name, item.color, item.price, item.description);
        glassesList.addGlasses(gl);
    });

    // console.log(glassesList);
    divGlassesList.innerHTML = glassesList.renderGlasses();
}

//Goi ham
showGlassesList();

const tryOnGlasses = (e) => {
    console.log(e);
    let gID = e.target.getAttribute("data-id");
    let gObject = {};
    // value la mot doi tuong kinh trong danh sach kinh
    for (const value of glassesList.glist) {
        if (value.id == gID) {
            gObject = value;
        }
    }
    console.log(gObject);
    showInfo(gObject);
}

window.tryOnGlasses = tryOnGlasses;

//Khai bao ham
const showInfo = (goObject) => {
    let divAvatar = getELE("avatar");
    let divInfo = getELE("glassesInfo");

    divAvatar.innerHTML = `
        <img id="kinh" src="${goObject.virtualImg}" >
     `;
    let status = "";
    if (goObject.status) {
        status = "Stocking"
    } else {
        status = "Sold Oud"
    }
    divInfo.innerHTML = `
        <h5>${goObject.name} - ${goObject.brand} (${goObject.color})</h5>
        <p class="class-text">
            <span class="btn btn-danger btn-sm mr-2">$${goObject.price}</span>
            <span class= "text-success">${status}</span>
        </p>
        <p class="class-text">
            ${goObject.description}
        </p>
     `;

    divInfo.style.display = "block";
}
/**
 * Before: GỠ kính ra
 * Affter: Gắn kính vào
 */
const removeGlasses = (isDisplay) => {
    let glasses = getELE("kinh");

    // if (glasses != null) {
    //     //isDisplay true thi hien kinh
    //     if (isDisplay) {
    //         glasses.style.opacity = 1;
    //     } else {
    //         //isDisplay true thi an kinh
    //         glasses.style.opacity = 0;
    //     }
    // }
    if (glasses == null) { return };
    if (isDisplay) {
        glasses.style.opacity = 1;
    } else {
        //isDisplay true thi an kinh
        glasses.style.opacity = 0;
    }
}

window.removeGlasses = removeGlasses;