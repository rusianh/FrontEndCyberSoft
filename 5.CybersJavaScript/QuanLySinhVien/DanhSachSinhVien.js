function DanhSachSinhVien() {
    this.danhSachSinhVien = [];
    this.dsKetQuaTimKiem =[];
    this.themSinhVien = function (sinhVienThem) {
        this.danhSachSinhVien.push(sinhVienThem);
    }
    this.xoaSinhVien = function (listSVXoa) {
        for (let i = 0; i < listSVXoa.length; i++) {
            for (let j = 0; j < this.danhSachSinhVien.length; j++) {
                if(listSVXoa[i] === this.danhSachSinhVien[j].maSV){
                    this.danhSachSinhVien.splice(j,1);
                    console.log("Đã xóa");
                }
            }
        }
    }
    this.suaSinhVien = function (svCapNhat) {

    }
    this.timKiemSinhVien = function (keyWord) {
        this.dsKetQuaTimKiem =[];
        for (let i = 0; i < this.danhSachSinhVien.length; i++) {
            var sv = this.danhSachSinhVien[i];
            if(! sv.hoTen.toLowerCase().search(keyWord.toLowerCase()) ){
                this.dsKetQuaTimKiem.push(sv);
            }
            // console.log(sv.hoTen.toLowerCase().search(keyWord.toLowerCase()));
        }
        return this.dsKetQuaTimKiem;
    }
}