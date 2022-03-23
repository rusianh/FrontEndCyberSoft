//*** ES5 ****
/* var firstName1 = "fs1";
//Cho phép gán lại giá trị
firstName1 = "fs1 thay doi";
//Khai báo trùng tên biến
var firstName1 = "fs1 khai bao lai";
console.log(firstName1);
 */

//*** ES6 ****
/* let firstName2 = "fs2";

firstName2 = "fs2 gan lai";
//Không cho phép khai báo trùng tên biến;
//// let firstName2 = "fs2 khai bao trung ten ";
console.log(firstName2);
//Khống được phép gán lại giá trị
const PI = 3.14;
////PI = 3.1414;
console.log(PI);
 */
/** 
 * Hoisting
 */

//***ES5 ****

/* //Gọi gàm và hiến
console.log(sum(2, 3));
console.log(city); //underfind : chưa gán giá trị

//Khai bao hàm
function sum(x, y) {
    return x + y;
}

// Khai báo biến
var city = "Hanoi";
 */
/** 
 * !Arrow function
 * */
//*ES6
let hello = (text) => {
    return "this is" + text;
}
//Chỉ có 1 tham số thì có thêm cách viết bỏ giấu ngoặc tròn
// let hello = text => {
//     return "this is" + text;
// }
// chỉ có 1 lệnh return có thể bỏ dấu nhọn và từ khóa return
// let hello = text => "this is" + text;

console.log(hello("call arow func"));

//Lỗi cú pháp
// let hello = text => "Hello: " + text;


// console.log(hello("Cris"));
// console.log();
// console.log("hello");
// console.log("hello");

/**
 * !This
*/

//*ES5
let hocVien = {
    hoTen: "Nguyen Van A",
    lopHoc: " ngu van",
    diemThi: [10,9,8],
    // layThonTinHocVien: function(){
    //     this.diemThi.map(function(diem,index){ // call back function
    //         //C1 biên tạm
    //         // this là học viên
    //         var _bind = this;
    //         //context
    //         console.log("Ho Ten: " + _bind.hoTen + "- Lớp: " + _bind.lopHoc);
    //         console.log("Điểm thi: " + index +": "+ diem);
    //     })
    // }
    // layThonTinHocVien: function(){
    //     //C1 biên tạm
    //     // this là học viên
    //     var _bind = this;
    //     this.diemThi.map(function(diem,index){ // call back function
    //         //context
    //         console.log("Ho Ten: " + _bind.hoTen + "- Lớp: " + _bind.lopHoc);
    //         console.log("Điểm thi: " + index +": "+ diem);
    //     })
    // }

    // layThonTinHocVien: function(){
    //     //C2: sử dụng hàm bind() để định nghĩa lại ngữ cảnh của this
    //     this.diemThi.map(function(diem,index){ // call back function
    //         //context
    //         console.log("Ho Ten: " + this.hoTen + "- Lớp: " + this.lopHoc);
    //         console.log("Điểm thi: " + index +": "+ diem);
    //     }.bind(this));
    // }
    /* layThonTinHocVien: function(){
        
        this.diemThi.map((diem,index)=>{ // call back function
            //context
            console.log("Ho Ten: " + this.hoTen + "- Lớp: " + this.lopHoc);
            console.log("Điểm thi: " + index +": "+ diem);
        })
    } */
}

// hocVien.layThonTinHocVien();
// function hello(){
//     console.log("hello");
// }
// hello();

//Khai báo
// let hello = ()=> {
//     console.log("Hello");
// }
// hello();

/**
 * !Default Parameter Values
*/
//*ES5
function getUserInfo(name, age){
    //C1: Dùng if else
    // if(name == undefined || age == undefined){
    //     console.log("Gia trị không hợp lệ");
    //     name = "default name";
    //     age = 18;
    // }

    //C2: ternary operator
    // name = name == undefined ? "default name" : name;
    // age = age == undefined ? 31 :  name;
    
    //C3: Toán tử ||
    //underfine, null, NaN
    // name = name || "default name";
    // age = age || "48";

    // if(age >= 18 && age <30  ){
    //     console.log(name + " đang còn trẻ " + name + " nên đi chơi nhiều");
    // } else {
    //     console.log(name + " đã "+ age + " tuổi. Nên ở nhà") ;
    // }
}

// getUserInfo();

//*ES6 ****
//Đặt giá trị defaul ngay lúc khai báo, sử dụng arrow function
let getUserInfoES6 = (name = "Mị", age = "48")=>{
    if(age >= 18 && age <30  ){
        console.log(name + " đang còn trẻ " + name + " nên đi chơi nhiều");
    } else {
        console.log(name + " đã "+ age + " tuổi. Nên ở nhà") ;
    }
}

// getUserInfoES6();

/**
 * !Rest Parameter
 * Dùng để khai báo hàm với số lượng tham số không xác định
 * Các tham số truyền vào thành 1 mảng
 * Để khai báo => đặt 3 dấu chấm trước biến đại diện
 **/

let tinhDiemTrungBinh = (...listDiem)=> {
    console.log(listDiem);
    let tongDiem = 0;
    for(let i = 0; i< listDiem.length; i++){
        tongDiem += listDiem[i];
    }
    console.log("tong diem TB la: ",tongDiem/listDiem.length);
}
// tinhDiemTrungBinh(8,9,10,6);

/**
 * !Spread Operator
 * Cú pháp giống Rest Parameter
 * Khác với rest nó nhận vào mảng và trả ra từng phần tử
 * Dùng thêm phần tử vào mảng hoặc thêm thuộc tính vào obj
 **/

//Them phần tử vào mảng
let mangC = [1,2,3,4];
let mangD = [...mangC];
mangD.push(5);

//Thêm thuộc tính cho đối tượng, có thể dung prototype để them đối tượng hoặc spread operator
let pet = {
    ten: "be na",
    bread: "snake"
}

let newPet = {
    age: "2",
    ...pet
}

// console.log(newPet);

// console.log(mangD)

/**
 * !Destructuring
 * Là một kỹ thuật dùng để lấy một hay nhiều giá trị của phần tử của mảng hoặc thuộc tính của obj, sau đó gán các giá trị này cho các biến khai báo trước
 * Cú pháp ngắn gọn hơn, tránh lặp code
 **/

//*Array
let program = ["javascript", "java", "python"];

//ES5
// console.log(program[0]);

//ES6: Cú pháp Destructuring
// let [first, second, third] = program;
// console.log(second);

//*Object
let pet1 = {
    name1: "Gâu đần",
    age: 3,
    breed: "golden",
    size: {
        weight: "30kg",
        height: "56cm"
    }
}

//ES5
// var name = pet1.name;
// var age = pet1.age;
// var size = pet1.size;

// console.log(size);

//ES6
let {name1,age} = pet1;
let{weight, height} = pet1.size;
// console.log(name1);
// console.log(weight);

let{weight:w, height:h} = pet1.size;
// console.log(w,h);

/**
 * !Template String
 * Template String còn gọi là template literals là cú pháp khai báo String trong ES6
 * Cho phép sử dụng multiline string, biến, biểu thức, hàm bên trong string mà không phải thông qua phép cộng String.
 **/

let fish = "cá";
let action = "bơi";

//*Mình là cá, việc của mình là bơi
//*ES5
// console.log("Mình là " + fish + " Việc của mình là " + action);
//*ES6
// console.log(`Mình là ${fish} việc của mình là ${action}`);

let a = 1;
let b = 2;
// console.log(``)
// document.getElementById("section1").innerHTML = `
// <div class="class1">
//     <p>Mình là ${fish} việc của mình là ${action}</p>
// </div>
// `;

/**
 * !Object Literal
 * 
 **/

//*ES5
// var namee = "Mị;"
// var myObject = {
//     namee: namee,
//     sayHi: function(){
//         console.log("Hi my name is "+ namee);
//     }
// }

// myObject.sayHi();

//*ES6
// let namee = "Mị;"
// let myObject = {
//     namee,
//     sayHi(){
//         console.log("Hi my name is "+ namee);
//     }
// }

// myObject.sayHi();

//*tên động
// let namee = "ten";
// let myObject = {
//     //ten: "Mị"
//     [namee]: "Mị",
//     sayHi(){
//         console.log("Hi my name is "+ this.ten);
//     }
// }

// myObject.sayHi();

//*for
let curencies = ["vnd",, "usd", "SGN"];
// for(let i =0; i<curencies.length ; i++){
//     console.log(curencies[i]);
// }

//ES5
//*for in
// for(let i in curencies){
//     console.log(curencies[i]);
// }

//ES6
//*for of
// for(let value of curencies){
//     console.log(value);
// }

// for(let [index, value] of curencies.entries()){
//     console.log(index, value);
// }