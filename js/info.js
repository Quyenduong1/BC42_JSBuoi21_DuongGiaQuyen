function buttonAddInfo(account, name, email, password, datepicker, Cash, Career, TimeWork) {
    this.account = account;
    this.name = name;
    this.email = email;
    this.password = password;
    this.datepicker = datepicker;
    this.Cash = Cash;
    this.Career = Career;
    this.TimeWork = TimeWork;
};

let total;
buttonAddInfo.prototype.CalcCash = function () {
    if (this.Career === "Giám Đốc") {
        total = this.Cash * 3;
        console.log(total);
    } else if (this.Career === "Trưởng phòng") {
        total = this.Cash * 2;
    } else if (this.Career == "Nhân viên"){
        total = this.Cash * 1;
    }
    return total;
}

let rank;
buttonAddInfo.prototype.CalcRank = function () {    
    if (this.Career == "Nhân viên" && this.TimeWork  >= 192){
        rank = "Xuất sắc";
    } else if (this.Career == "Nhân viên" && this.TimeWork >= 176 && this.TimeWork < 192){
        rank = "Giỏi";
    } else if (this.Career == "Nhân viên" && this.TimeWork >= 160 && this.TimeWork < 176) {
        rank = "Khá"
    } else if (this.Career == "Nhân viên" && this.TimeWork < 160) {
        rank = "Trung Bình";
    } else {
        rank = " ";
    }
    return rank;
}


