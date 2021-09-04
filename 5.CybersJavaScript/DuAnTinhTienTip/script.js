function getEle(id) {
    return document.getElementById(id);
}

function calculateTip() {
    var tongBill = getEle("billamt").value;
    var haiLongVaTip = getEle("serviceQual").value;
    var soNguoiShare = getEle("peopleamt").value;

    //Validation
    if (tongBill === "" || haiLongVaTip == 0) {
        alert("Vui long chon gia Tri")
        return;
    }

    //Kiểm tra có nhập vào số người share tip hay không
    if(soNguoiShare === "" || soNguoiShare <=1){
        soNguoiShare = 1;
        getEle("each").style.display = "none";
    } else {
        getEle("each").style.display = "block"
    }

    //Tính toán
    var tongTip = (tongBill*haiLongVaTip)/soNguoiShare;
    // Lam tròn đến phần thập phân có 2 chữ số
    tongTip = Math.round(tongTip*100)/100;
    // Đảm bảo lúc nào cũng có 2 chữ số ở phần thập phân
    tongTip = tongTip.toFixed(2);

    //Hiển thị vùng div tiền tip
    getEle("totalTip").style.display = "block";
    getEle("tip").style.display = "block";
    getEle("tip").innerHTML = tongTip;

}

getEle("totalTip").style.display = "none";
getEle("tip").style.display = "none";

getEle("calculate").onclick = function () {
    calculateTip();
}
