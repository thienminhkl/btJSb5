// Bài tập 1
function kiemTraTS() {
    var diemChuan = Number(document.getElementById("dc").value);
    var mon1 = Number(document.getElementById("m1").value);
    var mon2 = Number(document.getElementById("m2").value);
    var mon3 = Number(document.getElementById("m3").value);

    var DTK = diemTongKet(mon1, mon2, mon3);
    var kq = kiemTraDiem(mon1, mon2, mon3, DTK, diemChuan);

    document.getElementById("txtKq").innerHTML = kq + "<br> Điểm tổng kết của thí sinh là: " + DTK;
}

function diemTongKet(diem1, diem2, diem3) {
    var kv1 = document.getElementById("kv1");
    var kv2 = document.getElementById("kv2");
    var kv3 = document.getElementById("kv3");
    var kvx = document.getElementById("kvx");

    var dt1 = document.getElementById("dt1");
    var dt2 = document.getElementById("dt2");
    var dt3 = document.getElementById("dt3");
    var dt0 = document.getElementById("dt0");


    var diemKV = Number(kvCheck(kv1, kv2, kv3, kvx));
    var diemDT = Number(dtCheck(dt1, dt2, dt3, dt0));
    var diemTongKet = diem1 + diem2 + diem3 + diemKV + diemDT;
    return diemTongKet;
}

function kiemTraDiem(diem1, diem2, diem3, DTK, diemChuan) {
    var kq = "";
    if ((diem1 > 0 && diem1 <= 10) && (diem2 > 0 && diem2 <= 10) && (diem2 > 0 && diem2 <= 10)) {
        if (DTK >= diemChuan) {
            kq = "Đậu";
        } else {
            kq = "Trượt";
        }
    } else if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        kq = "Trượt";
    } else {
        alert("Điểm không phù hợp");
    }
    return kq;
}

function kvCheck(radio1, radio2, radio3, radio4) {
    if (radio1.checked) {
        return "2";
    } else if (radio2.checked) {
        return "1";
    } else if (radio3.checked) {
        return "0.5";
    } else if (radio4.checked) {
        return "0";
    } else {
        alert("Chưa chọn khu vực");
        return "";
    }
}

function dtCheck(radio1, radio2, radio3, radio4) {
    if (radio1.checked) {
        return "2.5";
    } else if (radio2.checked) {
        return "1.5";
    } else if (radio3.checked) {
        return "1";
    } else if (radio4.checked) {
        return "0";
    } else {
        alert("Chưa chọn đối tượng");
        return "";
    }
}

document.getElementById("btnKq").onclick = kiemTraTS;

// Bài tập 2
function tinhTienDien() {
    var dienTT = Number(document.getElementById("dienTT").value);
    var tienDien = tongTienDien(dienTT);


    document.getElementById("txtTienDien").innerHTML = "Tổng tiền điện mà khách hàng phải trả là " + tienDien.toLocaleString() + "VNĐ";
}


function tongTienDien(dienTT) {
    var tienDien = 0;
    if (dienTT <= 0) {
        alert("Nhập lại số điện tiêu thụ")
    } else if (dienTT > 0 && dienTT <= 50) {
        tienDien = dienTT * 500;
    } else if (dienTT > 50 && dienTT <= 100) {
        tienDien = 50 * 500 + ((dienTT - 50) * 650);
    } else if (dienTT > 100 && dienTT <= 200) {
        tienDien = 50 * 500 + 50 * 650 + ((dienTT - 100) * 850);
    } else if (dienTT > 200 && dienTT <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + ((dienTT - 200) * 1100);
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + ((dienTT - 350) * 1300);
    }

    return tienDien;
}

document.getElementById("btnTienDien").onclick = tinhTienDien;


// Bài tập 3
function tinhTienThue() {
    var ngPT = Number(document.getElementById("ngPT").value);
    var thuNhap = Number(document.getElementById("thuNhap").value);

    var tienThue = thuNhapChiuThue(thuNhap, ngPT);


    document.getElementById("txtThue").innerHTML = "Tổng thuế mà phải trả là " + tienThue.toLocaleString() + "VNĐ";
}


function thuNhapChiuThue(thuNhap, ngPT) {
    var tnChiuThue = thuNhap - 4000000 - (ngPT * 1600000);
    var x = tnChiuThue / 1000000;
    var tienThue = 0;

    if (x <= 0) {
        tienThue = 0;
    } else if (x > 0 && x <= 60) {
        tienThue = x * 0.05;
    } else if (x > 60 && x <= 120) {
        tienThue = 60 * 0.05 + ((x - 60) * 0.1);
    } else if (x > 120 && x <= 210) {
        tienThue = 60 * 0.05 + 60 * 0.1 + ((x - 120) * 0.15);
    } else if (x > 210 && x <= 384) {
        tienThue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + ((x - 210) * 0.2);
    } else if (x > 384 && x <= 624) {
        tienThue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.15 + ((x - 384) * 0.25);
    } else if (x > 624 && x <= 960) {
        tienThue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.15 +  240 * 0.25 + ((x - 624) * 0.3);
    } else {
        tienThue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.15 +  240 * 0.25 +  336 * 0.3 + ((x - 960) * 0.35);
    }

    return tienThue * 1000000;
}

document.getElementById("btnThue").onclick = tinhTienThue;

// Bài tập 4
const HDND = 4.5;
const DVND = 20.5;
const thueND = 7.5;
const HDDN = 15;
const DVDN = 75;
const thueDN = 50;


function displayNone() {
    document.getElementById("divSKN").style.display = 'none';
}

function displayBlock() {
    document.getElementById("divSKN").style.display = 'block';
}

document.getElementById("btnDN").onclick = displayBlock;
document.getElementById("btnND").onclick = displayNone;

function tinhTienCap() {
    var tienCap = chuyenDoi();

    document.getElementById("txtCap").innerHTML = "Tiền cap mà KH phải trả là: " + tienCap.toLocaleString() + "$";
}

function chuyenDoi() {
    var hienThi = document.getElementById("divSKN").style.display;
    var soKenh = Number(document.getElementById("SCC").value);
    var soKetNoi = Number(document.getElementById("SKN").value);
    var tienCap = 0;

    if (hienThi == "block" || hienThi == "") {
        tienCap = tinhTienDN(soKenh, soKetNoi);
    } else {
        tienCap = tinhTienND(soKenh);
    }

    return tienCap;
}

function tinhTienND(soKenh) {
    return (HDND + DVND +(thueND * soKenh));
}

function tinhTienDN(soKenh, soKetNoi) {
    if (soKetNoi < 0 || soKenh < 0) {
        alert("Nhập lại số kết nối/ số kênh");
        return 0;
    } else if (soKetNoi > 0 && soKetNoi <= 10){
        return (HDDN + DVDN + (thueDN * soKenh));
    } else {
        return (HDDN + DVDN + (5 * (soKetNoi -10)) + (thueDN * soKenh));
    }
}

document.getElementById("btnCap").onclick = tinhTienCap;
