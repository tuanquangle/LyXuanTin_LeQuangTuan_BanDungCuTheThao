// Dang Ky
$(document).ready(function() {
    function kiemTraTenDK() {
        var mauKT = /[a-zA-Z0-9]{9,}$/;
        if($("#dk-name").val() == "") {
            $("#dkTen").html("*Bat buoc nhap !!");
            $("#dkTen").addClass("mauDo");
            return false;
        } else
        if (mauKT.test($("#dk-name").val()) == false){
            $("#dkTen").html("*It nhat 9 ki tu (chu hoac so)");
            $("#dkTen").addClass("mauDo");
            return false;
        } else {
            $("#dkTen").html("Nhap dung");
            $("#dkTen").addClass("mauDo");
            return true;
        }
    };
    $("#dk-name").blur(kiemTraTenDK);

    function kiemTraEmail() {
        var kt = /([a-zA-Z0-9]{5,})[@gmail.com]{10}$/;
        if($("#dk-email").val() == "") {
            $("#dkEmail").html("*Bat buoc nhap !!");
            $("#dkEmail").addClass("mauDo");
            return false;
        } else
        if (kt.test($("#dk-email").val()) == false){
            $("#dkEmail").html("*Sai dinh dang");
            $("#dkEmail").addClass("mauDo");
            return false;
        } else {
            $("#dkEmail").html("Nhap dung");
            $("#dkEmail").addClass("mauDo");
            return true;
        }
    };
    $("#dk-email").blur(kiemTraEmail);

    function kiemTraMK() {
        var mauMK = /[a-zA-Z0-9]{9,}$/;
        if($("#dk-pass").val() == "") {
            $("#dkMK").html("*Bat buoc nhap !!");
            $("#dkMK").addClass("mauDo");
            return false;
        } else
        if (mauMK.test($("#dk-pass").val()) == false){
            $("#dkMK").html("*It nhat 9 ki tu (chu hoac so)");
            $("#dkMK").addClass("mauDo");
            return false;
        } else {
            $("#dkMK").html("Nhap dung");
            $("#dkMK").addClass("mauDo");
            return true;
        }
    };
    $("#dk-pass").blur(kiemTraMK);

    function kiemTraReMK() {
        var mauMK = /[a-zA-Z0-9]{9,}$/;
        if($("#dk-re-pass").val() == "") {
            $("#dkReMK").html("*Bat buoc nhap !!");
            $("#dkReMK").addClass("mauDo");
            return false;
        } else
        if (mauMK.test($("#dk-re-pass").val()) == false){
            $("#dkReMK").html("*It nhat 9 ki tu (chu hoac so)");
            $("#dkReMK").addClass("mauDo");
            return false;
        } else {
            $("#dkReMK").html("Nhap dung");
            $("#dkReMK").addClass("mauDo");
            return true;
        }
    };
    $("#dk-re-pass").blur(kiemTraReMK);

    $("#btnSubmitDK").click(function() {
        if($("#dk-re-pass").val() != $("#dk-pass").val()) {
            $("#dkReMK").html("Xac Nhan Sai!");
            $("#dkReMK").addClass("mauDo");
            return false;
        } else
        if(kiemTraTenDK() == false || kiemTraEmail() == false || kiemTraMK == false || kiemTraReMK() == false) {
            alert("Thông Tin Chưa Đầy Đủ!");
            return false;
        }
        // Local Storage
        var username = document.getElementById("dk-name").value;
        var password = document.getElementById("dk-pass").value;
        var email = document.getElementById("dk-email").value;
        // Lưu thông tin đăng ký vào LocalStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("email", email);
        alert("Đăng Ký Thành Công");
        return true;
    });
});

// Dang Nhap
$(document).ready(function() {
    function kiemTraTenDN() {
        var mauKT = /[a-zA-Z0-9]{9,}$/;
        if($("#dn-name").val() == "") {
            $("#dnTen").html("*Bat buoc nhap !!");
            $("#dnTen").addClass("mauDo");
            return false;
        } else
        if (mauKT.test($("#dn-name").val()) == false){
            $("#dnTen").html("*It nhat 9 ki tu (chu hoac so)");
            $("#dnTen").addClass("mauDo");
            return false;
        } else {
            $("#dnTen").html("Nhap dung");
            $("#dnTen").addClass("mauDo");
            return true;
        }
    };
    $("#dn-name").blur(kiemTraTenDN);

    function kiemTraMKDN() {
        var mauMK = /[a-zA-Z0-9]{9,}$/;
        if($("#dn-pass").val() == "") {
            $("#dnMK").html("*Bat buoc nhap !!");
            $("#dnMK").addClass("mauDo");
            return false;
        } else
        if (mauMK.test($("#dn-pass").val()) == false){
            $("#dnMK").html("*It nhat 9 ki tu (chu hoac so)");
            $("#dnMK").addClass("mauDo");
            return false;
        } else {
            $("#dnMK").html("Nhap dung");
            $("#dnMK").addClass("mauDo");
            return true;
        }
    };
    $("#dn-pass").blur(kiemTraMKDN);

    $("#btnSubmitDN").click(function() {
        if(kiemTraTenDN() == false || kiemTraMKDN() == false) {
            alert("Thông Tin Chưa Đầy Đủ!");
            return false;
        }
        var username = document.getElementById("dn-name").value;
        var password = document.getElementById("dn-pass").value;

        // Lấy thông tin đăng ký từ LocalStorage
        var regUsername = localStorage.getItem("username");
        var regPassword = localStorage.getItem("password");

        // Kiểm tra thông tin đăng nhập
        if (username === regUsername && password === regPassword) {
            // Lưu thông tin đăng nhập vào SessionStorage
            sessionStorage.setItem("username", username);

            // Hiển thị thông báo chào mừng
            showWelcomeMessage();
        } else {
            // Thông báo lỗi nếu thông tin đăng nhập không đúng
            alert("Tên đăng nhập hoặc mật khẩu không đúng.");
            return false;
        }
        alert("Đăng Nhập Thành Công");
        return true;
    });

    $("#btnIns").click(function() {
        alert("Liên Kết Đăng Nhập Thành Công Với Instagram");
        $(".log").addClass("hide");
        return true;
    });

    $("#btnGg").click(function() {
        alert("Liên Kết Đăng Nhập Thành Công Với Tài Khoản Google");
        $(".log").addClass("hide");
        return true;
    });

    $("#btnFb").click(function() {
        alert("Liên Kết Đăng Nhập Thành Công Với Facebook");
        $(".log").addClass("hide");
        return true;
    });

    $("#btnTt").click(function() {
        alert("Liên Kết Đăng Nhập Thành Công Với Twitter");
        $(".log").addClass("hide");
        return true;
    });

    function showWelcomeMessage() {
        var username = sessionStorage.getItem("username");

        // Hiển thị tên đăng nhập và ẩn form đăng nhập
        document.getElementById("username-display").innerHTML = username;
        document.getElementById("welcome-message").style.display = "block";
        document.getElementById("log").style.display = "none";
    }
});


// Thong Tin
$(document).ready(function() {
    function kiemTraTenNguoiNhan() {
        var mauKT = /(^[A-Z]{1})+([a-z]+)(\s[A-Z]{1}([a-z]*))*$/;
        if($("#buy-name").val() == "") {
            $("#ttTen").html("*Bat buoc nhap !!");
            $("#ttTen").addClass("mauDo");
            return false;
        } else
        if (mauKT.test($("#buy-name").val()) == false){
            $("#ttTen").html("*Phai viet Hoa chu cai dau");
            $("#ttTen").addClass("mauDo");
            return false;
        } else {
            $("#ttTen").html("Nhap dung");
            $("#ttTen").addClass("mauDo");
            return true;
        }
    };
    $("#buy-name").blur(kiemTraTenNguoiNhan);

    function kiemTraSDT() {
        var mauMK = /[0-9]{10}$/;
        if($("#buy-phone").val() == "") {
            $("#ttPhone").html("*Bat buoc nhap !!");
            $("#ttPhone").addClass("mauDo");
            return false;
        } else
        if (mauMK.test($("#buy-phone").val()) == false){
            $("#ttPhone").html("*Số Điện Thoại chuẩn 10 số");
            $("#ttPhone").addClass("mauDo");
            return false;
        } else {
            $("#ttPhone").html("Nhap dung");
            $("#ttPhone").addClass("mauDo");
            return true;
        }
    };
    $("#buy-phone").blur(kiemTraSDT);

    function kiemTraDC() {
        var mauMK = /((([0-9]{1,}\s)*([A-Z]{1})+([a-z]+)(\s[A-Z]{1}([a-z]*)))+)(([,]{1}\s)(([A-Z]{1})+([a-z]+)(\s[A-Z]{1}([a-z]*))*((\s)*[0-9]*))+)(([,]{1}\s)(([A-Z]{1})+([a-z]+)(\s[A-Z]{1}([a-z]*))+)+)$/;
        if($("#buy-dc").val() == "") {
            $("#ttDc").html("*Bat buoc nhap !!");
            $("#ttDc").addClass("mauDo");
            return false;
        } else
        if (mauMK.test($("#buy-dc").val()) == false){
            $("#ttDc").html("*Sai định dạng (Đường, Huyện, Thành Phố)");
            $("#ttDc").addClass("mauDo");
            return false;
        } else {
            $("#ttDc").html("Nhap dung");
            $("#ttDc").addClass("mauDo");
            return true;
        }
    };
    $("#buy-dc").blur(kiemTraDC);

    $("#btnSubmitTT").click(function() {
        if(kiemTraTenNguoiNhan() == false || kiemTraSDT() == false || kiemTraDC() == false){
            alert("Thông tin chưa đầy đủ!");
            return false;
        }
        // Local Storage
        var cusName = document.getElementById("buy-name").value;
        var cusPhonge = document.getElementById("buy-phone").value;
        var cusAd = document.getElementById("buy-dc").value;
        var cusPay = document.getElementById("buy-pay").value;
        // Lưu thông tin đăng ký vào LocalStorage
        localStorage.setItem("CusName", cusName);
        localStorage.setItem("CusPhone", cusPhonge);
        localStorage.setItem("CusAd", cusAd);
        localStorage.setItem("CusPay", cusPay);
        alert("Đặt Hàng Thành Công. Cám ơn bạn đã tin tưởng và sử dụng sản phẩm của chúng tôi");
        return true;
    });
});