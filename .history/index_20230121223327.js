//BT1: Tính tiền lương nhân viên
function inputSoNgayLam () {
    //input
    var soNgayLam = document.getElementById('soNgayLam').value;
    var luongMotNgay = 100000;
    //output
    var result = 0;

    var result = parseInt(soNgayLam) * parseInt(luongMotNgay);

    document.getElementById('result').value = result.toLocaleString() + ' VND';
}

//BT2: Tính trung bình cộng 5 số
function average () {
    //input
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var n3 = document.getElementById('n3').value;
    var n4 = document.getElementById('n4').value;
    var n5 = document.getElementById('n5').value;
    //output
    var average = 0;
    var soLuongInput = 5;

    var sum = parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5);
    
    var average =  sum / parseFloat(soLuongInput) ;
    
    document.getElementById('average').value = average;
}

//BT3: Quy đổi tiền
function tradeMoney () {
    //input
    var inputUsd = document.getElementById('inputUSD').value;
    var tyGia = 23500;
    
    //output
    var tradeMoney = 0;

    var tradeMoney = parseInt(inputUsd) * parseInt(tyGia);
    document.getElementById('tradeMoney').value = tradeMoney;


}










/*
Link vercel: 
https://tran-huu-phuoc-bc-43-bt-js-buoi1.vercel.app/
*/