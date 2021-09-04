//Khai báo các mảng giá và giá chờ cho các loại xe
const ARRAY_GIA_UBER_X = [8000, 12000, 10000];
const GIA_CHO_UBER_X = 2000;

const ARRAY_GIA_SUV = [9000, 14000, 12000];
const GIA_CHO_SUV = 3000;

const ARRAY_GIA_BLACK = [10000, 16000, 14000];
const GIA_CHO_BLACK = 4000;

function kiemTraLoaiXe() {
    var uberX = document.getElementById("uberX");
    var uberSUV = document.getElementById("uberSUV");
    var uberBlack = document.getElementById("uberBlack");

    if (uberX.checked) {
        return "uberX";
    } else if (uberSUV.checked) {
        return "uberSUV";
    } else if (uberBlack.checked) {
        return uberBlack;
    }
}

function tinhTienCho(thoiGianCho, giaCho) {
    var tienCho = 0;
    if (thoiGianCho >= 3) {
        tienCho = Math.round(thoiGianCho / 3.0) * giaCho;
    }
    return tienCho;
}

function tinhTien(soKm, thoiGianCho, arrayPrice, giaCho) {
    var tienCho = tinhTienCho(thoiGianCho, giaCho);
    if (soKm <= 1) {
        return arrayPrice[0] + tienCho
    } else if (soKm > 1 && soKm < 20) {
        return arrayPrice[0] + (soKm - 1) * arrayPrice[1] + tienCho;
    } else if (soKm > 20) {
        return arrayPrice[0] + 19 * arrayPrice[1] + (soKm - 20) * arrayPrice[2] + tienCho;
    }
}

function tinhTongTien() {
    var soKM = document.getElementById("soKM").value;
    var thoiGianCho = document.getElementById("thoiGianCho").value;

    soKM = parseFloat(soKM);
    thoiGianCho = parseFloat(thoiGianCho);

    var tongTien = 0;
    var loaiXe = kiemTraLoaiXe();
    switch (loaiXe) {
        case "uberX":
            tongTien = tinhTien(soKM, thoiGianCho, ARRAY_GIA_UBER_X, GIA_CHO_UBER_X)
            break;
        case "uberSUV":
            tongTien = tinhTien(soKM, thoiGianCho, ARRAY_GIA_SUV, GIA_CHO_SUV)
            break;
        case "uberBlack":
            tongTien = tinhTien(soKM, thoiGianCho, ARRAY_GIA_BLACK, GIA_CHO_BLACK)
            break;
        default:
            alert("Vui Long chon loai xe")
            break;
    }
    return tongTien;
}

document.getElementById("btnTinhTien").onclick = function () {
    var tongTien = tinhTongTien();
    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML = tongTien;
}

function renderRowChiTietKm(loaiXe, arrayKm, arrayPrice, tblBody) {
    for(var i = 0; i<arrayKm.length; i++){
        var tr = document.createElement("tr");

        var tdLoaiXe = document.createElement("td");
        var tdSuDung = document.createElement("td");
        var tdDonGia = document.createElement("td");
        var tdThanhTien = document.createElement("td");

        tdLoaiXe.innerHTML = loaiXe;
        tdSuDung.innerHTML = arrayKm[i] + " km";
        tdDonGia.innerHTML = arrayPrice[i];
        tdThanhTien= arrayPrice[i]* arrayPrice[i];

        tr.appendChild(tdThanhTien);
        tr.appendChild(tdSuDung);
        tr.appendChild(tdDonGia);
        tr.appendChild(tdThanhTien);

        tblBody.appendChild(tr);
    }
}

function renderThoiGianCho(thoiGianCho, giaCho, tblbody) {
    var tienCho = tinhTienCho(thoiGianCho, giaCho);
    var trThoiGianCho = document.createElement("tr");

    var tdPhutTitle = document.createElement("td");
    var tdPhut = document.createElement("td");
    var tdDonGia = document.createElement("td");
    var tdThanhTien = document.createElement("td");

    tdPhutTitle.innerHTML = " Thoi Gian Cho";
    tdPhut.innerHTML = thoiGianCho + " Phút";
    tdDonGia.innerHTML = giaCho;
    tdThanhTien.innerHTML = tienCho;

    trThoiGianCho.appendChild(tdPhutTitle);
    trThoiGianCho.appendChild(tdDonGia);
    trThoiGianCho.appendChild(tdDonGia);
    trThoiGianCho.appendChild(tdThanhTien);

    tblbody.appendChild(trThoiGianCho);
}

function renderRowTongCong(tongTien, tblbody) {
    var trTotal = document.createElement("tr");
    trTotal.className = "alert alert-success";

    var tdTotalTitle = document.createElement("td");
    tdTitle.setAttribute("colspan", 3);
    var tdToTal = document.createElement("td");

    tdTotalTitle.innerHTML = " Tổng tiền phải trả";
    tdToTal.innerHTML = tongTien;

    trTotal.appendChild(tdTotalTitle);
    trTotal.appendChild(tdToTal);

    tblbody.appendChild(trTotal);
}

