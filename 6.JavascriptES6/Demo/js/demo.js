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
// let hello = (text) => {
//     return "this is" + text;
// }
//Chỉ có 1 tham số thì có thêm cách viết bỏ giấu ngoặc tròn
// let hello = text => {
//     return "this is" + text;
// }
// chỉ có 1 lệnh return có thể bỏ dấu nhọn và từ khóa return
// let hello = text => "this is" + text;

// console.log(hello("call arow func"));

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

function getUserInfo(name, age){
    if(age >= 18 && age <30  ){
        console.log(name + " đang còn trẻ" + name + " nên đi chơi nhiều");
    } else {
        console.log(name + " đã "+ age + " tuổi. Nên ở nhà") ;
    }
}