//1.Atribute
var danhSachSinhVien = new DanhSachSinhVien();
var validate = new Validation();
//2.Constructor
//Main
function main() {
    getEle("idthemSinhVien").onclick = function () {
        themSinhVien();
    }
    // console.log(str);
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
    var dienThoai = getEle("dienThoai").value;
    //Kiểm tra validation
    if(validate.kiemTraRong(maSV)){
        getEle("maSV").style.borderColor = "red";
    } else {
        getEle("maSV").style.borderColor = "green";
    }

}
// var str = "Tôi là tring";
main();


