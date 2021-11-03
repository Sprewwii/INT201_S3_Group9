// import ตัวแปรจากไฟล์ product.js เข้ามาใช้
import { macarone, brownie, muffin, moji } from "./product.js";

// เอาตัวแปรที่ทำการ import มานำมาเก็บใน array kanom
const kanom = [macarone, brownie, muffin, moji];

// หา div id = products ด้วยคำสั่ง querySelector
const divProductsEle = document.querySelector("#products");

// ใช้ loop for in สำหรับเรียกค่าใน array มาแสดงผล
for (let index in kanom) {
  // สร้าง element div เพื่อกำหนด div แต่ละตัวให้มี class เป็นของตัวเอง
  const divKanomEle = document.createElement("div");
  // setAttribute เพื่อกำหนด id ของ div ให้เป็นของขนมที่เก็บ
  divKanomEle.setAttribute("id", kanom[index].productId);
  // appendChild สำหรับการแทรก div id ขนมต่่าง ๆ ไปเก็บไว้ใน div id = products
  divProductsEle.appendChild(divKanomEle);
  
  // แสดงผลรูปขนม มีการสร้าง element img
  const kKanomImgEle = document.createElement("img");
  // src สำหรับ set path ของรูปภาพขนมนั้น ๆ
  kKanomImgEle.src = `${kanom[index].img}`;
  // classname สำหรับกำหนดชื่อรูป
  kKanomImgEle.className = `photoKanom`;
  // appendChild สำหรับการแทรก kKanomImgEle ไปใส่ใน divKanomEle และสร้าง element br
  divKanomEle.appendChild(kKanomImgEle);
  divKanomEle.appendChild(document.createElement("br"));

  // สร้าง element p และแสดงผล Kanom Id ก่อนจะนำไปแทรกใน divKanomEle
  const kKanomIdEle = document.createElement("p");
  kKanomIdEle.textContent = "Kanom Id: " + kanom[index].productId;
  divKanomEle.appendChild(kKanomIdEle);

  // สร้าง element p และแสดงผล Kanom Name ก่อนจะนำไปแทรกใน divKanomEle
  const kKanomNameEle = document.createElement("p");
  kKanomNameEle.textContent = "Kanom Name: " + kanom[index].productName;
  divKanomEle.appendChild(kKanomNameEle);

  // สร้าง element p และแสดงผล Price ก่อนจะนำไปแทรกใน divKanomEle
  const kKanomPriceEle = document.createElement("p");
  kKanomPriceEle.textContent = "Price: " + kanom[index].price;
  divKanomEle.appendChild(kKanomPriceEle);

  // สร้าง element p และแสดงผล AmountProducts ก่อนจะนำไปแทรกใน divKanomEle
  const kKanomAmountProductsEle = document.createElement("p");
  kKanomAmountProductsEle.textContent =
    "AmountProducts: " + kanom[index].amountProducts;
    divKanomEle.appendChild(kKanomAmountProductsEle);

  // สร้าง element button เป็นปุ่ม add ก่อนจะนำไปแทรกใน divKanomEle
  const kKanomButtonEle = document.createElement("button");
  kKanomButtonEle.textContent = "Add";
  divKanomEle.appendChild(kKanomButtonEle);
}


