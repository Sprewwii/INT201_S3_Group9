function menu() { // สร้าง function แสดง menu
    const menu = `
MENU
1: หาพื้นที่รูปสี่เหลี่ยมผืนผ้า
2: หาความยาวรอบรูปสี่เหลี่ยมผืนผ้า`;
    return menu;
}

// function findArea() รับ parameter length และ width ทำการหาพื้นที่รูปสี่เหลี่ยม
function findArea(length, width) {
    let area = length * width;
    return `Area = ${area}`;
}

// function findPerimeter() รับ parameter length และ width ทำการหาความยาวรอบรูปสี่เหลี่ยม
function findPerimeter(length, width) {
    let perimeter = 2 * (length + width);
    return `Perimeter = ${perimeter}`;
}

// function calculate() มีการใช้ rest parameter คือ ...num
function calculate(name, ...num){
    let userName = name ;
    let length = num[0];
    let width = num[1];

    /* function chooseMenu() มีการใช้ default parameter คือ numberMenu หาก
        ผู้ใช้งานไม่ใส่ค่า ChooseMenu มาจะแสดงผลค่า default เป็น "ไม่มีการเลือกmenu กรุณาเลือกmenu" */
    function chooseMenu(numberMenu = "ไม่มีการเลือกmenu กรุณาเลือกmenu"){
        
        //function show() เป็น higher order function โดยรับ parameter เป็น function
        function show(fn) {
            let resultMenu =`Menu ที่เลือก: ${numberMenu}
        name: ${userName}
        length: ${length}
        width: ${width}
        ${fn(length, width)}`;
        return resultMenu;
        }

        console.log(menu());
        switch (numberMenu) { // switch-case เข้าฟังก์ชันต่าง ๆ ตามกรณีตัวเลขที่เลือก
            case 1:
                return show(findArea);
            case 2:
                return show(findPerimeter);
            default:
                return numberMenu;
        }
    }

    // return chooseMenu ออกมาเป็น closure function
    return chooseMenu;
}

// export function ทั้งหมดใน file calRectangle.js
export {menu, findArea, findPerimeter, calculate}
