// สร้าง obj changeBackground โดยภายในจะมีเก็บ obj ต่าง ๆ และ function อีก 3 ตัว นั่นก็คือ loadLocal(), colorWebsite(), buttonColorPopup()
export let changeTheme = {
    // obj สำหรับเก็บ querySelector ส่วนต่าง ๆ ที่เกี่ยวข้องกับพื้นหลังที่เราจะทำการเปลี่ยนสีธีมหน้าเว็บ
    buttonGreen: document.querySelector("#btn-green"),
    buttonBlue: document.querySelector("#btn-blue"),
    buttonWhite: document.querySelector("#btn-white"),
    buttonBlack: document.querySelector("#btn-black"),
    bodyEle: document.querySelector('#bgcolor'),
    navbarEle: document.querySelector('.navbar'),
    headerEle: document.querySelector('.header'),

    /* function loadLocal() สำหรับตรวจสอบว่า bgcolor ใน localStorage ที่เราเก็บไว้ตรงกับค่า value ใด เริ่มต้นจะเป็นธีมสีเขียว
    โดยจะให้เปลี่ยนสีธีมตามค่า value ที่เราเก็บไว้ใน localStorage เช่น ถ้าค่า value ใน localStorage มีค่าเป็นสีฟ้าก็ให้ทำการเซตธีมให้กลายเป็นสีฟ้า */
    loadLocal: function(){
        this.bodyEle.style.backgroundColor = "rgb(163, 195, 163)";
        this.navbarEle.style.backgroundColor = "rgba(62, 111, 80, 0.544)";
        if (localStorage.getItem('bgcolor') == 'blue') {
            this.bodyEle.style.backgroundColor = "#B0C4DE";
            this.navbarEle.style.backgroundColor = "rgb(76, 151, 212)";
            this.headerEle.style.color = "#ffffff";
        } else if (localStorage.getItem('bgcolor') == 'black') {
            this.bodyEle.style.backgroundColor = "#464043";
            this.navbarEle.style.backgroundColor = "rgb(36, 36, 36)";
            this.headerEle.style.color = "#ffffff";
        } else if (localStorage.getItem('bgcolor') == 'white') {
            this.bodyEle.style.backgroundColor = "#D3D3D3";
            this.navbarEle.style.backgroundColor = "#696969";
            this.headerEle.style.color = "#464043";
        }
    },

    /* function colorWebsite() สำหรับเปลี่ยนสี โดยมีการเปลี่ยนสี background navbar header
    และในตอนท้ายจะมีการเซตค่า key และ value ให้กับ localStorage โดย key เป็น bgcolor และ value เป็นสีของธีมนั้น */
    colorWebsite: function(){
        this.buttonGreen.addEventListener('click', () => {
            this.bodyEle.style.backgroundColor = "rgb(163, 195, 163)";
            this.navbarEle.style.backgroundColor = "rgba(62, 111, 80, 0.544)";
            this.headerEle.style.color = "#ffffff"; 
            localStorage.setItem('bgcolor', 'green');
        });

        this.buttonBlue.addEventListener('click', () => {
            this.bodyEle.style.backgroundColor = "#B0C4DE";
            this.navbarEle.style.backgroundColor = "rgb(76, 151, 212)";
            this.headerEle.style.color = "#ffffff";
            localStorage.setItem('bgcolor', 'blue');
        });
    
        this.buttonBlack.addEventListener('click', () => {
            this.bodyEle.style.backgroundColor = "#464043";
            this.navbarEle.style.backgroundColor = "rgb(36, 36, 36)";
            this.headerEle.style.color = "#ffffff";
            localStorage.setItem('bgcolor', 'black');
        });
    
        this.buttonWhite.addEventListener('click', () => {
            this.bodyEle.style.backgroundColor = "#D3D3D3";
            this.navbarEle.style.backgroundColor = "#696969";
            this.headerEle.style.color = "#464043";
            localStorage.setItem('bgcolor', "white");
        });
    },

    // function buttonColorPopup() สำหรับจัดการเรื่องของปุ่มใน popUp เปลี่ยนสี 
    buttonColorPopup: function(){
        const IdColor = document.querySelector("#color");
        const popup = document.querySelector("#changebgColorButton");
        // ปุ่มกดเพื่อแสดง popup เปลี่ยนสีขึ้นมา โดยเรียกใช้ function colorWebsite()
        popup.addEventListener('click', () => {
            IdColor.style.display = "block";
            this.colorWebsite();
        });
        // คลิกปุ่มปิด เพื่อซ้อน/ปิด popup หน้าเปลี่ยนสี
        const closeButton = document.querySelector("#close-menucolor");
        closeButton.addEventListener('click', () => {
            IdColor.style.display = "none";
        });
    }
}