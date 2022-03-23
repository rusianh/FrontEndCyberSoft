// var sinhVien = {
//     //scope
//     maSV: 1,
//     tenSinhVien: "Nguyễn Văn A",
//     loaiSinhVien: 'Khó Khăn',
//     diemToan: 1,
//     diemLy: 2,
//     diemHoa: 3,
//     tinhDiemTrungBinh: function () {
//         var dtb = (Number(this.diemToan) + Number(this.diemHoa) + Number(this.diemLy)) / 3;
//         return dtb;
//     }
// }

// console.log(sinhVien);
// console.log("ma sv ", sinhVien.maSV);
// console.log("ten sinh vien: ", sinhVien["tenSinhVien"])
// //console.log(this);
// var dtb = sinhVien.tinhDiemTrungBinh();
// console.log("điểm trung bình: ", dtb);

var sinhVien = new SinhVien();
var validation = new Validation();
var xuLyXacNhan = function () {
    sinhVien.maSV = document.querySelector("#maSinhVien").value;
    sinhVien.tenSV = document.querySelector("#tenSinhVien").value;
    sinhVien.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
    sinhVien.diemToan = document.querySelector("#diemToan").value;
    sinhVien.diemLy = document.querySelector("#diemLy").value;
    sinhVien.diemHoa = document.querySelector("#diemHoa").value;
    sinhVien.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
    //Don đến giao diện hiển thị dữ liệu
    //Kiem Tra validation
    var valid = true;
    //Kiểm tra rỗng
    valid &= validation.kiemTraRong(sinhVien.maSV, "Mã Sinh Viên", "#error_maSinhVien_required")
        & validation.kiemTraRong(sinhVien.tenSV, "Tên Sinh Viên", "#error_tenSinhVien_required")
        & validation.kiemTraRong(sinhVien.diemToan, "Điểm Toán", "#error_diemToan_required")
        & validation.kiemTraRong(sinhVien.diemLy, "Điểm Lý", "#error_diemLy_required")
        & validation.kiemTraRong(sinhVien.diemHoa, "Điểm Hóa", "#error_diemHoa_required")
        & validation.kiemTraRong(sinhVien.diemRenLuyen, "Điểm rèn luyện", "#error_diemRenLuyen_required");

    //Kiểm tra tất cả là số
    valid &= validation.kiemTraTatCaLaSo(sinhVien.maSV,"Mã Sinh Viên","#error_maSinhVien_all_number");
    //Kiểm tra độ dài
    valid &= validation.kiemTraDoDaiChuoi(sinhVien.maSV,"Mã Sinh Viên","#error_maSinhVien_min_max_length",1,4);

    //Tất cả là chữ
    valid &= validation.kiemTraTatCaLaChu(sinhVien.tenSV, "Tên Sinh Viên", "#error_tenSinhVien_required")

    //Thông báo dữ liệu nhập không phu hợp => Kết thúc
    if (!valid) {
        alert("Dũ liệu không hợp lệ");
        return;
    }

    //Xu ly in ket qua 
    document.querySelector('#txtTenSinhVien').innerHTML = sinhVien.tenSV;
    document.querySelector('#txtMaSinhVien').innerHTML = sinhVien.maSV;
    document.querySelector('#txtLoaiSinhVien').innerHTML = sinhVien.loaiSinhVien;
    document.querySelector('#txtDiemTrugnBinhSinhVien').innerHTML = sinhVien.tinhDiemTrungBinh().toFixed(2);
    document.querySelector('#txtXepLoaiSinhVien').innerHTML = sinhVien.xepLoai();

    // console.log("sinh vien ", sinhVien);
}

document.querySelector("#btnXacNhan").onclick = xuLyXacNhan;

// var x =true;
// var y = false;
// var z = true;
// x&=y;
// console.log(x);