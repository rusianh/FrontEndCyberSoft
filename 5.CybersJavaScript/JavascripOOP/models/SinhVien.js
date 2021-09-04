
//Prototype là lớp đối tượng trong JS <=5
var SinhVien = function () {
    //Khai Báo các thuộc tính
    this.maSV = "";
    this.tenSV = "";
    this.loaiSinhVien = "";
    this.diemRenLuyen = "";
    this.diemToan = "";
    this.diemLy = "";
    this.diemHoa = "";
    this.tinhDiemTrungBinh = function () {
        var dtb = (Number(this.diemHoa) + Number(this.diemLy) + Number(this.diemToan)) / 3;
        return dtb;
    }
    this.xepLoai = function () {
        var diemTrungBinh = this.tinhDiemTrungBinh;
        if (this.diemRenLuyen < 5) {
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

}