//Business methods
function Validation() {
    this.kiemTraRong = function (value, id) {
        if(value.trim()=== ""){
            getEle(id).style.borderColor = "red";
            return false;
        }
        getEle(id).style.borderColor = "green";
        return true;
    }

    //Kiem Tra Email
    this.kiemTraEmail = function (value, id) {
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(regexEmail.test(value)){
            getEle(id).style.borderColor = "green";
            return true;
        }
        getEle(id).style.borderColor = "red";
        return false;
    }
    //Tất cả là chữ
    this.kiemTraTatCaLaChu = function (value, id) {
        const regexAllLetter = /^[A-Za-z]+$/;

        if(regexAllLetter.test(value)){
            getEle(id).style.borderColor = "green";
            return true;
        }
        getEle(id).style.borderColor = "red";
        return false;
    }
    // Kiểm tra tất cả là só
    this.kiemTraTatCaLaSo = function (value, id) {
        const regexNumber = /^[0-9]+$/;
        if (regexNumber.test(value)) {
            getEle(id).style.borderColor = "green";
            return true;
        }
        getEle(id).style.borderColor = "green";
        return false;
    }
}