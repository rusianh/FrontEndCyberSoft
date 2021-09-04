//1.Atribute
var objDSSV = new DanhSachSinhVien();
var validate = new Validation();
//2.Constructor
//Main

function main() {
    getEle("idthemSinhVien").onclick = function () {
        themSinhVien();
    }
    // console.log(str);
    // console.log(document.querySelector("#maSV"));
}

//3.Input, output methods
//4.Business methods
function getEle(id) {
    element = document.getElementById(id);
    return element;
}

function themSinhVien() {
    //Lấy dữ liệu từ người dùng nhập
    var maSV = getEle("maSV").value;
    var hoTen = getEle("hoTen").value;
    var cMND = getEle("cMND").value;
    var email = getEle("email").value;
    var soDT = getEle("soDT").value;
    //Kiểm tra validation
    valid = true;

    valid &= validate.kiemTraRong(maSV, "maSV")
        & validate.kiemTraRong(hoTen, "hoTen")
        & validate.kiemTraRong(cMND, "cMND")
        & validate.kiemTraRong(email, "email")
        & validate.kiemTraRong(soDT, "soDT");
    // if(validate.kiemTraRong(maSV)){
    //     getEle("maSV").style.borderColor = "red";
    // } else {
    //     getEle("maSV").style.borderColor = "green";
    // }

    // Kiểm tra email
    valid &= validate.kiemTraEmail(email,"email")
    console.log(valid);

    //Thêm Sinh Viên
    var sinhVien = new SinhVien(maSV,hoTen, email, soDT, cMND);
    objDSSV.themSinhVien(sinhVien);
    console.log(objDSSV.danhSachSinhVien);
}

// var str = "Tôi là tring";
main();

