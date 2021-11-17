//querySelectorส่วนต่าง ๆที่เกี่ยวข้องกับพื้นหลังที่เราจะทำการเปลี่ยนสีธีมหน้าเว็บ
const buttonGreen = document.querySelector("#btn-green");
const buttonBlue = document.querySelector("#btn-blue");
const buttonWhite = document.querySelector("#btn-white");
const buttonBlack = document.querySelector("#btn-black");
const bodyEle = document.querySelector('#bgcolor');
const nabarEle = document.querySelector('.navbar');
const headerEle = document.querySelector('.header');

//เซตพื้นหลังเริ่มต้นให้เป็นธีมสีเขียว
bodyEle.style.backgroundColor = "rgb(163, 195, 163)";
nabarEle.style.backgroundColor = "rgba(62, 111, 80, 0.544)";
/*
    เช็กว่า bgcolor ใน localStorage ที่เราเก็บไว้ตรงกับค่า value ใด แล้วให้เปลี่ยนสีธีมตามค่า value ที่เราเก็บไว้ใน localStorage
     เช่น ถ้าค่า value ใน localStorage มีค่าเป็นสีฟ้าก็ให้ทำการเซตธีมให้กลายเป็นสีฟ้า
*/
if (localStorage.getItem('bgcolor') == 'blue') {
    bodyEle.style.backgroundColor = "#B0C4DE";
    nabarEle.style.backgroundColor = "rgb(76, 151, 212)";
    headerEle.style.color = "#ffffff";
} else if (localStorage.getItem('bgcolor') == 'black') {
    bodyEle.style.backgroundColor = "#464043";
    nabarEle.style.backgroundColor = "rgb(36, 36, 36)";
    headerEle.style.color = "#ffffff";
} else if (localStorage.getItem('bgcolor') == 'white') {
    bodyEle.style.backgroundColor = "#D3D3D3";
    nabarEle.style.backgroundColor = "#696969";
    headerEle.style.color = "#464043";
}
// function colorWebsite() สำหรับเปลี่ยนสีเว็บไซต์ (มี 4 สี : เขียว ฟ้า ขาว ดำ)
function colorWebsite() {
    buttonGreen.addEventListener('click', () => {
        bodyEle.style.backgroundColor = "rgb(163, 195, 163)"; // เปลี่ยนสี bg ตามธีมที่เราตั้ง
        nabarEle.style.backgroundColor = "rgba(62, 111, 80, 0.544)"; // เปลี่ยนสี navbar ตามธีมที่เราตั้ง
        localStorage.setItem('bgcolor', 'green'); // เซตค่า key และ value ให้กับ localStorage โดย key เป็น bgcolor และ value เป็นสีของธีมนั้น
        headerEle.style.color = "#ffffff"; // เปลี่ยนสีตัวอักษร PRODUCT LIST 
        console.log(localStorage.getItem('bgcolor')); // แสดงค่า value ของ key bgcolor ที่เราเก็บใน localStorage
    });

    buttonBlue.addEventListener('click', () => {
        bodyEle.style.backgroundColor = "#B0C4DE";
        nabarEle.style.backgroundColor = "rgb(76, 151, 212)";
        localStorage.setItem('bgcolor', 'blue');
        headerEle.style.color = "#ffffff";
        console.log(localStorage.getItem('bgcolor'));
    });

    buttonBlack.addEventListener('click', () => {
        bodyEle.style.backgroundColor = "#464043";
        nabarEle.style.backgroundColor = "rgb(36, 36, 36)";
        headerEle.style.color = "#ffffff";
        localStorage.setItem('bgcolor', 'black');
        console.log(localStorage.getItem('bgcolor'));
    });

    buttonWhite.addEventListener('click', () => {
        bodyEle.style.backgroundColor = "#D3D3D3";
        nabarEle.style.backgroundColor = "#696969";
        headerEle.style.color = "#464043";
        localStorage.setItem('bgcolor', "white");
        console.log(localStorage.getItem('bgcolor'));
    });
};

//คลิกปุ่มให้เด้ง popup หน้าเปลี่ยนสีขึ้นมา แล้วเรียกใช้ function colorWebsite() เพื่อให้เลือกเปลี่ยนสีและทำการเปลี่ยนสีตามที่เลือก
const IdColor = document.querySelector("#color");
const popup = document.querySelector("#changeColorButton");
popup.addEventListener('click', () => {
    IdColor.style.display = "block"; //ให้แสดง popup ขึ้นมา
    colorWebsite(); 
});
//คลิกปุ่มปิด เพื่อซ้อน/ปิด popup หน้าเปลี่ยนสี
const closeButton = document.querySelector("#close-menucolor");
closeButton.addEventListener('click', () => {
    IdColor.style.display = "none";
});





