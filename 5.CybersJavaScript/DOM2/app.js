function myFunction() {
    var list = document.getElementsByTagName('ul');
    var ulDauTien = list[0];
    var listLI = list[0].getElementsByTagName('li');
    var liDauTien = listLI[0];
    liDauTien.innerHTML = "Xin chao da doi!!!";
    liDauTien.style.color = "red";
    liDauTien.style.fontSize = "20px";
}