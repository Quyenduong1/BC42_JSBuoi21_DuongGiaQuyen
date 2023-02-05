// Tạo mảng danh sach 
let addInfoList = [];

// * ham them thong tin 
function createAccount() {
    // B1: DOM 

    let account = document.querySelector("#tknv").value;
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let datepicker = document.querySelector("#datepicker").value;
    let Cash = +document.querySelector("#luongCB").value;
    let Career = document.querySelector("#chucvu").value;
    let TimeWork = document.querySelector("#gioLam").value;
    
    let isValid = validate();
        if(!isValid){
            return;
        };
    // B2: Khoi tao object 

    let addInfo = new buttonAddInfo(account, name, email, password, datepicker, Cash, Career, TimeWork);


    // B3: thêm object vào mảng addInfoList :
    // ( dung arrray ( mang ) de luu tru 1 danh sach ) 
    addInfoList.push(addInfo);

    // B4: Hiển thị danh sách addInfoList ra danh sách table 
    renderTable(addInfoList);
    
}



//  ham xoa thong tin
function deleteInfo(addInfoId) {
    addInfoList = addInfoList.filter((addInfo) => {
        return addInfo.id != addInfoId;
    });

    renderTable(addInfoList);
}

function selectedInfo(addInfoId) {
    let selectInfo = addInfoList.find((addInfo) => {
      return addInfo.id == addInfoId;
    });
  
    document.querySelector("#tknv").value = selectInfo.account;
    document.querySelector("#name").value = selectInfo.name;
    document.querySelector("#email").value = selectInfo.email;
    // document.querySelector("#password").value = selectInfo.password;
    // document.querySelector("#datepicker").value = selectInfo.datepicker;
    document.querySelector("#luongCB").value = selectInfo.Cash;
    document.querySelector("#chucvu").value = selectInfo.Career;
    document.querySelector("#gioLam").value = selectInfo.TimeWork;
  
    document.querySelector("#btnCreate").disabled = true;
    document.querySelector("#tknv").disabled = true;
  }

// viet hàm renderTable ngoai hàm (hàm danh sách thông tin vào table)
function renderTable(addInfoList) {
    let html = addInfoList.reduce((output, addInfo) => {
        return (
          output +
          `
          <tr>
          <td>${addInfo.account}</td>
          <td>${addInfo.name}</td>
          <td>${addInfo.email}</td>
          <td>${addInfo.TimeWork}</td>
          <td>${addInfo.Career}</td>
          <td>${addInfo.CalcCash()}</td>
          <td>${addInfo.CalcRank()}</td>
            <td>
              <button
                class="btn btn-primary"
                onclick="selectedInfo('${addInfo.id}')"
              >
                Chỉnh sửa
              </button>
              <button
                class="btn btn-danger"
                onclick="deleteInfo('${addInfo.id}')"
              >
                Xoá
              </button>
            </td>
          </tr>
        `
        );
      }, "");

    document.querySelector("#tableDanhSach").innerHTML = html;
    
}

function validate() {
    let isValid = true;



    let id = document.querySelector("#tknv").value;
    if(!id.trim()) {
        isValid = false;
        document.querySelector("#tbTKNV").innerHTML = " không đc để trống";

    }

    let email = document.querySelector("#email").value;
    if(!email.trim()){
        isValid = false;
        document.querySelector("#tbEmail").innerHTML = " email k dc để trống";
    }

    let password = document.querySelector("#password").value;
    if(!password.trim()){
      isValid = false;
      document.querySelector("#tbMatKhau").innerHTML = " mật khẩu khong dc de trong";
    }

    if(!name.trim()) {
      isValid = false;
      document.querySelector("#tbTen").innerHTML = " không đc để trống";
    }

    

    return isValid;
}



