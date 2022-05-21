
//*ES6
// class Student {
//     constructor(name, address){
//         this.name = name;
//         this.address = address;
//     }
// }

// let student = new Student("Mị", "HaNoi");
// console.log(student.name, student.address);

//!Extend - Tính kế thừa
//*ES5 Test
function Father(name){
    this.name = name;
}
Father.prototype.creatColorEyes = function(){
    console.log("black");
}

function Children(name){
    //Kế thừa thuộc tính từ Father
    Father.apply(this,arguments);
}
//Kế thừa phước thức từ Father 
Children.prototype = new Father;
//Override
Children.prototype.creatColorEyes = function(){
    console.log("white");
}
//Tạo thuộc tính riêng cho con
Children.prototype.createColorSkin = function(){
    console.log("Pink");
}

// var child = new Children("hi");
// console.log(child.name);
// child.creatColorEyes();

//*ES6
class Person {
    constructor(name){
        this.name = name;
    }
    createColorEyes(){
        console.log("black");
    }
}

//Extend
class Manager extends Person {
    //super
    age = 19;
    getEeys(){
        super.createColorEyes;
    }

    createColorSkin(){
        console.log("ColorSkin");
    }
}

let manager = new Manager("Manger");
// console.log(manager.name);
// manager.createColorSkin();
// console.log(manager.age);

//!Proxy | Get giúp lấy giá trị ra và xử lý, rồi xuất ra bên ngoài và 
//set - giúp set lại gia trị thuộc tính đang muốn truy cập, và set chỉ có kiểu trả về boolean => set dc trả về true và ngc lại.

let pet2 = {
    name : "cau vang",
    age : 2,
    breed : "shiba"
}

// let pet3 = new Proxy(pet2,{
//     get(target,prop, receiver){
//         if(typeof target[prop] ==='string'){
//             return target[prop].toUpperCase();
//         }

//         return target[prop];
//     }
// })
// console.log(pet2.name);
// console.log(pet3.age);
// console.log(pet3.name);


let pet3 = new Proxy(pet2,{
    set(target,prop, val){
        if(prop === "age" && typeof val !== 'number'){
            throw new TypeError("Age must be number");
        }

        target[prop]= val;
        return true;
    }
})

// pet3.age = "123";
pet3.age = 10;