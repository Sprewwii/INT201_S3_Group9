// import ตัวแปรจากไฟล์ product.js เข้ามาใช้
import { macarone, brownie, muffin, moji } from "./product.js";
import { checkAndAdd, cookiesFunction } from "./cart.js";
import { changeTheme } from "./changeTheme.js";

// เอาตัวแปรที่ทำการ import มานำมาเก็บใน array kanom
export let kanom = [macarone, brownie, muffin, moji];

// load cookies ประวัติการเพิ่มสินค้าลงในตะกร้า
cookiesFunction.loadCookie();
changeTheme.loadLocal();
changeTheme.buttonColorPopup();

// function showAllProducts สำหรับเพื่อแสดงผล product ทั้งหมดบนหน้าเว็บ
export function showAllProducts(kanom) {

  // หา div id = products ด้วยคำสั่ง querySelector
  const divProductsEle = document.querySelector("#products");
 
  //ใช้ method array forEach สำหรับการนำค่าใน array kanom มาใส่ใน tag ต่าง ๆ
  kanom.forEach((product) => {
    // สร้าง element div เพื่อกำหนด div แต่ละตัวให้มี class เป็นของตัวเอง
    const divKanomEle = document.createElement("div");
    // setAttribute เพื่อกำหนด id ของ div ให้เป็นของขนมที่เก็บ
    divKanomEle.setAttribute("id", product.productId);
    divKanomEle.className = "products";
    // appendChild สำหรับการแทรก div id ขนมต่่าง ๆ ไปเก็บไว้ใน div id = products
    divProductsEle.appendChild(divKanomEle);

    // สร้าง element p และแสดงผล Kanom Name ก่อนจะนำไปแทรกใน divKanomEle
    const kKanomNameEle = document.createElement("p");
    kKanomNameEle.className = `card-header`;
    kKanomNameEle.textContent = product.productName;
    divKanomEle.appendChild(kKanomNameEle);

    // แสดงผลรูปขนม มีการสร้าง element img
    const kKanomImgEle = document.createElement("img");
    // src สำหรับ set path ของรูปภาพขนมนั้น ๆ
    kKanomImgEle.src = `${product.img}`;
    // classname สำหรับกำหนดชื่อรูป
    kKanomImgEle.className = `photoKanom`;
    // appendChild สำหรับการแทรก kKanomImgEle ไปใส่ใน divKanomEle และสร้าง element br
    divKanomEle.appendChild(kKanomImgEle);
    divKanomEle.appendChild(document.createElement("br"));

    // สร้าง element p และแสดงผล Price ก่อนจะนำไปแทรกใน divKanomEle
    const kKanomPriceEle = document.createElement("p");
    kKanomPriceEle.className = `card-title`;
    kKanomPriceEle.textContent = "Price: " + product.price;
    divKanomEle.appendChild(kKanomPriceEle);

    // สร้าง element p และแสดงผล AmountProducts ก่อนจะนำไปแทรกใน divKanomEle
    const kKanomAmountProductsEle = document.createElement("p");
    kKanomAmountProductsEle.className = `card-text`;
    kKanomAmountProductsEle.textContent =
      "AmountProducts: " + product.amountProducts;
    divKanomEle.appendChild(kKanomAmountProductsEle);

    // สร้าง element button เป็นปุ่ม add ก่อนจะนำไปแทรกใน divKanomEle
    const kKanomButtonEle = document.createElement("button");
    kKanomButtonEle.textContent = "Add";
    divKanomEle.appendChild(kKanomButtonEle);

    /* querySelector ปุ่ม add ของขนมแต่ละอย่างจากหน้า index มา จากนั้นก็ดักจับ event 
    เมื่อคลิกปุ่มให้ตรวจสอบโดยการเรียกใช้ฟังก์ชัน changeAmount() โดยส่ง index และ id ของขนมแต่ละอย่าง 
    ถ้าของในสต็อกยังมีเหลืออยู่ให้เรียกใช้ฟังก์ชัน checkAndAdd() โดยส่ง id ชื่อและราคาของขนมแต่ละอย่างเพื่อ add
    เข้าไปเก็บใน productInCart[] (ในตะกร้า) และให้แสดงผลเมื่อคลิกปุ่ม add ว่า Add Kanom: id ของขนม Success!!!` */
    kKanomButtonEle.addEventListener('click', () => {
      if (changeAmount(product)) {
        checkAndAdd(product, 1);
        alert(`Add Kanom: ${product.productId} Success!!!`);
      }
      // ในทุกๆครั้งที่กดปุ่มจะทำการ update kKanomAmountProductsEle เสมอเพื่อแสดงผลบนเว็บว่าขณะนี้เหลือขนมอีกเท่าไหร่
      kKanomAmountProductsEle.textContent = "AmountProducts: " + product.amountProducts;
    });
  });
}

// เรียกใช้ function showAllProduct
showAllProducts(kanom);

/* function changeAmount() ใช้เช็กของในสต็อกว่ามีอยู่ไหม ถ้าไม่มีให้แสดงผลว่า Out Of Stock และ return false ออกมา แต่ถ้ามีขนมอยู่ให้ลบ
จำนวนของสต็อกออกไป 1 โดย querySelector หา tag ที่เเสดงขนมในหน้า index แล้วเปลี่ยนจำนวนสต็อกให้เป็นจำนวนที่ลบ 1 แล้ว และ return true */
function changeAmount(product) {
  if (product.amountProducts == 0) {
    alert(`Out Of Stock`);
    return false;
  } else {
    product.amountProducts--;
    return true;
  }
}

// สร้างตัวแปร search ขึ้นมาสำหรับรองรับ class searchButton(icon search)
const search = document.querySelector("#searchButton");
/* สร้างเงื่อนไขเมื่อกด icon search หากตัวแถบค้นหายังไม่ขึ้น จะทำการ remove class d-none จาก inputForm เพื่อทำการแสดงผล 
แต่ถ้าหาก class inputForm ยังแสดงผลอยู่เมื่อกด icon search จะทำการใส่ d-none ลง class เพื่อปิดแถบค้นหา */
search.addEventListener("click", (event) => {
  // ป้องกันไม่ให้ event เกิดขึ้นตอนที่เราเปิด browser ขึ้นมา(ป้องกันการเกิด default)
  event.preventDefault();
  const searchBar = document.querySelector("#inputForm");
  if (searchBar.classList.contains("d-none")) {
    searchBar.classList.remove("d-none");
  } else {
    searchBar.classList.add("d-none");
    document.querySelector("#inputForm input").value = "";
    showHideProducts(kanom);
  }
});

// function hideAllProducts() สำหรับซ่อนสินค้าทั้งหมด โดยเปลี่ยนมาใช้ให้อิงกับ css แทน
function hideAllProducts() {
  kanom.forEach((product) => {
    const productKanom = document.getElementById(product.productId);
    productKanom.style.display = "none";
  });
}

/* function showHideProducts() สำหรับแสดงสินค้าที่ต้องการ โดยเปลี่ยนมาใช้ให้อิงกับ css แทน 
โดยจะซ่อนสินค้าทั้งหมดก่อน จึงทำการแสดงสินค้าตาม array ที่รับจาก parameter ต้องการออกมา */
function showHideProducts(kanom) {
  hideAllProducts();
  kanom.forEach((product) => {
    const showKanom = document.getElementById(product.productId);
    showKanom.style.display = "";
  });
}

/* สร้างตัวแปร searchBtn สำหรับรับ class inputForm ที่เป็นตัว buttonเอา product ทั้งหมดในหน้าเว็บออกก่อนที่จะเรียกใช้งาน function searchProduct() */
const searchBtn = document.querySelector("#inputForm button");
searchBtn.addEventListener("click", () => {
  searchProducts(document.querySelector("#inputForm input").value)
}, false);

/* function searchProducts ที่รับ parameter มาจาก การกรอกเงื่อนไขใน searchBtn โดยใช้ array method filter 
เพื่อทำการหาตัวที่เข้ากรณีที่กำหนดภายใน และใช้ includes เช็คตัวอักษรที่ผู้ใช้งานได้กรอกไปนั่น มีอยู่ในชื่อขนมไหนบ้าง 
มีการใช้ LowerCase เพื่อป้องกัน case sensitive (ปัญหาที่เกิดจาการพิมพ์ตัวพิมพ์ใหญ่ตัวพิมพ์เล็ก) 
มีการใช้ function showHideProducts() เพื่อทำการแสดงผลสินค้าที่เราได้ทำการค้นหา  */
function searchProducts(searchName) {
  const filteredProduct = kanom.filter(
    (kanom) => kanom.productName.toLowerCase().includes(searchName.toLowerCase())
  );
  showHideProducts(filteredProduct);
}

// Function changeTextAmount() สำหรับการ Update text ที่แสดงผล amountProduct บนหน้าเว็บไซต์
export function changeTextAmount(kanom) {
  kanom.forEach(products => {
    const change = document.querySelector(`#${products.productId} .card-text`);
      change.textContent = `AmountProducts: ${products.amountProducts}`;
      console.log(change);
  });
}