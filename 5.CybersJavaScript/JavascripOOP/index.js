//var maSinhVien = document.getElementById("maSinhVien").value;

var xuLyXacNhan = function () {
    //Lấy thông tin người dùng nhập từ input
    var maSinhVien = document.querySelector("#maSinhVien").value;
    var tenSinhVien = document.querySelector("#tenSinhVien").value;
    var loaiSinhVien = document.querySelector("#loaiSinhVien").value;
    var diemToan = document.querySelector("#diemToan").value;
    var diemLy = document.querySelector("#diemLy").value;
    var diemHoa = document.querySelector("#diemHoa").value;
    var diemRenLuyen = document.querySelector("#diemRenLuyen");
    //Tính điểm trung bình
    var diemTrungBinh = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
    var xepLoaiSinhVien = xepLoai(diemTrungBinh, diemRenLuyen);
    // console.log(xepLoaiSinhVien);
    
    //Xử Lý in kết quả ra giao diện
    document.querySelector("#txtTenSinhVien").innerHTML = tenSinhVien;
    document.querySelector('#txtMaSinhVien').innerHTML = maSinhVien;
    document.querySelector('#txtLoaiSinhVien').innerHTML = xepLoaiSinhVien;
    document.querySelector('#txtDiemTrugnBinhSinhVien').innerHTML = diemTrungBinh.toFixed(2);
    document.querySelector('#txtXepLoaiSinhVien').innerHTML = xepLoaiSinhVien;
}

// Hàm tính điểm trung bình
var tinhDiemTrungBinh = function (diemToan, diemLy, diemHoa) {
    var dtb = (Number(diemHoa) + Number(diemLy) + Number(diemToan)) / 3;
    return dtb;
}
// Xếp loại học viên
var xepLoai = function (diemTrungBinh, diemRenLuyen) {
    if (diemRenLuyen < 5) {
        return "yếu";
    } else {
        if (diemTrungBinh < 5) {
            return "Yếu";
        } else if (diemTrungBinh >= 5 && diemTrungBinh < 6.5) {
            return "Trung Bình";
        } else if (diemTrungBinh >=6.5 && diemTrungBinh <8) {
            return " Khá"
        } else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
            return " Giỏi";
        } else {
            return "Xuất Sắc";
        }

    }
}

//ĐỊnh nghĩa sự kiện cho click cho nút xác nhận
document.querySelector("#btnXacNhan").onclick = xuLyXacNhan;