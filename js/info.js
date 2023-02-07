function CreateObjectStaff(accountNV, name, email, password, date, luongCB, career ,time) {
    this.account = accountNV;
    this.name = name;
    this.email = email;
    this.password = password;
    this.date = date;
    this.luongCB = luongCB;
    this.career = career;
    this.time = time;
};

let total;
CreateObjectStaff.prototype.totalCash = function () {
    if (this.career === "Giám Đốc") {
        total = (this.luongCB * 3);
    } else if (this.career === "Trưởng phòng") {
        total = (this.luongCB * 2);
    } else {
        total = this.luongCB;
    }
    return total;
};

CreateObjectStaff.prototype.Rank = function () {
    if (this.time >= 192) {
        return "Xuất sắc"
    } else if (this.time >= 176) {
        return "Giỏi"
    } else if (this.time >= 160) {
        return "Khá"
    } else {
        return "Trung bình"
    }
};
