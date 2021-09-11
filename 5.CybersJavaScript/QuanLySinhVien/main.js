//1.Atribute
var objDSSV = new DanhSachSinhVien();
var validate = new Validation();


//Bổ sung thuộc tính: ( Không làm ảnh hương file gốc)
SinhVien.prototype.diemToan = "";
SinhVien.prototype.diemLy = "";
SinhVien.prototype.diemHoa = "";
SinhVien.prototype.diemTB = "";
SinhVien.prototype.loai = "";
//Bổ sung phương thức
SinhVien.prototype.tinhDiemTB = function () {
    this.diemTB = (Number(this.diemToan) + this.diemLy + this.diemHoa) / 3;
}
SinhVien.prototype.xepLoai = function () {
    if (diemTB < 5) {
        return "Yếu";
    } else if (diemTB >= 5 && diemTB < 6.5) {
        return "Trung Bình";
    } else if (diemTB >= 6.5 && diemTB < 8) {
        return " Khá"
    } else if (diemTB >= 8 && diemTB < 9) {
        return " Giỏi";
    } else {
        return "Xuất Sắc";
    }
}
//2.Constructor
//Main

function main() {

    //Onclick
    //Thêm SInh Viên
    getEle("idthemSinhVien").onclick = function () {
        themSinhVien();
    }
    // Lưu localstorage
    getEle("setStorage").onclick = function () {
        setStorage();
    }
    getEle("getStorage").onclick = function () {
        getStorage();
    }
    // Xóa sinh viên
    getEle("delSinhVien").onclick = function () {
        // Mảng các checkbox
        var listSVEleCheckbox = document.getElementsByClassName("checkbox");
        // Mang sinh vien dc chon
        var listSVEleChecked = [];
        //console.log(listSVEleCheckbox)

        /*for (const ele of listSVEleCheckbox) {
            if(ele.checked){
                listSVEleChecked.push(ele.value);
            }
        }*/
        for (let i = 0; i < listSVEleCheckbox.length; i++) {
            //Kiểm tra phân tử checkbox đã đc chọn hay chưa;
            if (listSVEleCheckbox[i].checked) {
                listSVEleChecked.push(listSVEleCheckbox[i].value);
                console.log("listSVEleCheckbox: ", listSVEleCheckbox);


            }
        }
        //console.log("list checked",listSVEleChecked);

        objDSSV.xoaSinhVien(listSVEleChecked);
        //console.log("DSSV sau xoa: ",objDSSV.danhSachSinhVien)

        capNhatDanhSachSinhVien(objDSSV.danhSachSinhVien);
    }
    //Tim kiếm sinh viên
    getEle("timKiem").onclick = function () {
        var tuKhoa = getEle("tuKhoa").value;
        var listResult = objDSSV.timKiemSinhVien(tuKhoa)
        capNhatDanhSachSinhVien(listResult);
    }
    //Onchange:
    getEle("tuKhoa").onchange, getEle("tuKhoa").onkeyup = function () {
        var tuKhoa = getEle("tuKhoa").value;
        var listResult = objDSSV.timKiemSinhVien(tuKhoa)
        capNhatDanhSachSinhVien(listResult);
    }


}

//3.Input, output methods
//4.Business methods
function getEle(id) {
    element = document.getElementById(id);
    return element;
}

function taoTheTD(className, value) {
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    return td;
}

//============
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
    valid &= validate.kiemTraEmail(email, "email")


    //Nhập sai không chạy tiếp
    if (!valid) {
        return;
    }
    //Thêm Sinh Viên
    var sinhVien = new SinhVien(maSV, hoTen, email, soDT, cMND);
    objDSSV.themSinhVien(sinhVien);
    //Hiện danh sách lên table
    capNhatDanhSachSinhVien(objDSSV.danhSachSinhVien)
    //console.log(objDSSV.danhSachSinhVien);
}

function capNhatDanhSachSinhVien(danhSachSinhVien) {
    var listTableSinhVien = getEle("tbodySinhVien");
    listTableSinhVien.innerHTML = "";

    for (var i = 0; i < danhSachSinhVien.length; i++) {
        //Lấy thông tin sv trong mảng
        let sv = danhSachSinhVien[i];

        //Tạo thẻ tr
        var trSinhVien = document.createElement("tr");
        trSinhVien.id = sv.maSV;
        trSinhVien.className = "trSV";
        //Tạo thẻ td và filter dữ liệu sinh viên thứ i;
        var tdCheckBox = document.createElement("td")
        var ckbMSV = document.createElement("input")
        // console.log(ckbMSV);
        ckbMSV.setAttribute("class", "checkbox");
        ckbMSV.setAttribute("type", "checkbox");
        ckbMSV.setAttribute("value", sv.maSV);
        tdCheckBox.appendChild(ckbMSV);

        var tdMaSV = taoTheTD("maSV", sv.maSV);
        var tdHoTen = taoTheTD("hoTen", sv.hoTen);
        var tdCMND = taoTheTD("cMND", sv.cMND);
        var tdEmail = taoTheTD("email", sv.email);
        var tdSoDT = taoTheTD("soDT", sv.soDT);
        //Append các td vào tr
        trSinhVien.appendChild(tdCheckBox);
        trSinhVien.appendChild(tdMaSV);
        trSinhVien.appendChild(tdHoTen);
        trSinhVien.appendChild(tdCMND);
        trSinhVien.appendChild(tdEmail);
        trSinhVien.appendChild(tdSoDT);
        //Append các tr vào tbodySinhVien
        listTableSinhVien.appendChild(trSinhVien);
    }
}

function setStorage() {
    //Chuyển đổi dssv thành chuỗi json
    var jsonDanhSachSinhVien = JSON.stringify(objDSSV.danhSachSinhVien);
    //Set tên và giá trị json lưu trong localstorage
    localStorage.setItem("dsSV", jsonDanhSachSinhVien);
}

function getStorage() {
    //Lấy ra chuỗi json thành mảng dssv
    var jsonDanhSachSinhVien = localStorage.getItem("dsSV");
    var mangDSSV = JSON.parse(jsonDanhSachSinhVien);
    objDSSV.danhSachSinhVien = mangDSSV;
    capNhatDanhSachSinhVien(objDSSV.danhSachSinhVien);
    console.log(objDSSV.danhSachSinhVien);

}

function doiMauMacDinhTr() {

}

// var str = "Tôi là tring";
main();

