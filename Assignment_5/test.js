// import file จาก calRectangle.js
import {menu, findArea, findPerimeter, calculate} from "./calRectangle.js";

let Rectangle = calculate("MhaiSexy",4, 2);
let Rectangle2 = calculate("JameMorethanSexy", 7, 2);

console.log(`${Rectangle(1)}`); //ใช้ function findArea
console.log(`${Rectangle2(2)}`); //ใช้ function findParimeter
console.log(`${Rectangle2()}`); //กรณีที่ผู้ใช้งานไม่ใส่เลขเมนูที่เลือก
