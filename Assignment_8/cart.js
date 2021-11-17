import { CookieUtil } from "./cookies.js";
import { kanom, showAllProducts } from "./script.js";

// สร้างตัวแปร productInCart เพื่อนำมาเก็บค่า Array
let productInCart = [];
let numberCart = 0;

/* function checkAndAdd() ใช้สำหรับการเช็คว่าขนมที่เพิ่มไปนั้นซ้ำกับของที่อยู่ในตะกร้าหรือไม่ 
หากใช่จะทำการเพิ่มจำนวนเข้าไปอีก 1 จะรับ parameter มาทั้งหมด 2 ตัว คือ kanom, quantity */
export function checkAndAdd(kanom, quantity) {
    if (productInCart.length > 0) {
        for (let product of productInCart) {
            if (product.productId === kanom.productId) {
                product.quantity = product.quantity + 1;
                // save cookies ทั้งประวัติตะกร้าสินค้าและประวัติ amount
                cookiesFunction.saveCookie();
                cookiesFunction.saveShopCookie();
                return;
            }
        }
    }
    // ใช้ method array push สำหรับกรณีที่ยังไม่มีการ add ขนมเลย
    productInCart.push({ productId: kanom.productId, productName: kanom.productName, price: kanom.price, quantity: quantity });
    // การเพิ่มตัวเลขตรง noti จะเพิ่มเฉพาะเวลา add kanom อันใหม่เข้าไป
    addNumCast();
    // save cookies ทั้งประวัติตะกร้าสินค้าและประวัติ amount
    cookiesFunction.saveCookie();
    cookiesFunction.saveShopCookie();
}

// function totalAmount() ราคาทั้งหมดของสินค้าที่อยู่ในตะกร้า
function totalAmount() {
    let total = 0;
    for (let product of productInCart) {
        total += (product.price * product.quantity);
    }
    return total;
}

// function addNumCast() การเพิ่มตัวเลขตรง notification ที่ตะกร้า
function addNumCast() {
    numberCart++;
    const amountOnCart = document.querySelector("#amount");
    amountOnCart.textContent = numberCart;
}

// function showPopUp() สำหรับการแสดงผล popup เมื่อกดปุ่มตะกร้า สินค้าจะขึ้นโชว์ก็ต่อเมื่อมีของใน array productInCart
const popup = document.querySelector('.modal');
function showPopUp() {
    const modal = document.querySelector('#content'); //ตำแหน่งที่จะวาง

    // ถ้าเกิดในกรณีที่ว่าไม่มีของในตะกร้าเลย popup จะทำการแสดงผลว่า No Product
    if (productInCart.length == 0) {
        const Text = document.createElement("p");
        Text.className = `modal-body`;
        Text.textContent = "No Product";
        modal.appendChild(Text);
    }
    // สำหรับกรณีที่มีการเพิ่มขนมในตะกร้า
    else {
        // pro = {detail quatity}
        productInCart.forEach(pro => {
            //ข้อมูลขนมที่เพิ่มเข้าไปที่จะแสดงใน popup
            const kanomDiv = document.createElement("div");
            kanomDiv.setAttribute("id", pro.productId);
            modal.appendChild(kanomDiv);
            const kanomName = document.createElement("p");
            kanomName.className = `modal-body`;
            kanomName.textContent = `Kanom :  ${pro.productName} , Price :  ${pro.price} , Quantity :  ${pro.quantity}`;
            kanomDiv.appendChild(kanomName);
            
            // สร้างปุ่มลบสินค้าตามประเภท อยู่ใน popup ตะกร้า
            const btnOneClear = document.createElement("button");
            btnOneClear.className = `modal-body`;
            btnOneClear.id = `removebtn`;
            btnOneClear.textContent = "remove";
            kanomDiv.appendChild(btnOneClear);

            // set event ในปุ่ม proKanom คือที่อยู่ใน productIncart --- ส่วน pro นั่นคือตัวที่เรา add เข้าไปใหม่
            btnOneClear.addEventListener('click', () => {
                let index = productInCart.findIndex(proKanom => proKanom.productId == pro.productId);
                productInCart.splice(index, 1);
                kanomDiv.remove();
                
                // เอาจำนวน quantity ที่อยู่ในตะกร้ากลับเข้าไปยัง amountProduct ดังเดิม
                let num = kanom.findIndex(proKanom => proKanom.productId === pro.productId);
                kanom[num].amountProducts = kanom[num].amountProducts + pro.quantity;

                // update noti บนตะกร้า
                numberCart = numberCart - 1;
                const amountOnCart = document.querySelector("#amount");
                amountOnCart.textContent = numberCart;

                // ทำการ update หน้าเว็บใหม่อีกครั้งหนึ่ง
                showAllProducts(kanom);
                removeAllShowCart();
                showPopUp();

                // ทำการ save cookies
                cookiesFunction.saveCookie();
                cookiesFunction.saveShopCookie();
            });
        })

        // สร้างหน้าแสดงผลรวม Price ตอนท้ายสุด
        const totalPriceAmount = document.createElement("p");
        totalPriceAmount.textContent = `Price = ${totalAmount()}`;
        totalPriceAmount.className = `modal-body`;
        modal.appendChild(totalPriceAmount);
    }
}

/* ปุ่ม clear ของในตะกร้าทั้งหมด โดยการดักจับ event 
มีการใช้ function retrunAmountAll() เพื่อทำการคืนค่า amount กลับเข้าที่ทั้งหมด 
กำหนดให้ productIncart เป็น array เปล่า และ numberCart เป็น 0 
ก่อนที่จะ update หน้าเว็บทั้งหมดใหม่ด้วย function showAllProduct 
ทำการ update หน้า cart ขึ้นใหม่ด้วย removeAllShowCart ต่อด้วยการแสดง popup ด้วย showPopUp()
และ ทำการ save cookies ทั้งประวัติตะกร้าสินค้าและประวัติ amount */
const clearBtn = document.getElementById("clearButton");
clearBtn.addEventListener('click', () => {
    returnAmountAll();
    productInCart = [];
    numberCart = 0;
    const amountOnCart = document.querySelector("#amount");
    amountOnCart.textContent = numberCart;
    showAllProducts(kanom);
    removeAllShowCart();
    showPopUp();
    cookiesFunction.saveCookie();
    cookiesFunction.saveShopCookie();
});

// function returnAmountAll() เอาจำนวนที่เรากดเพิ่มในตะกร้า ไปบวกคืน (สำหรับกรณีลบของในตะกร้า)
function returnAmountAll() {
    productInCart.forEach(pro => {
        let index = kanom.findIndex(proKanom => proKanom.productId == pro.productId);
        kanom[index].amountProducts = kanom[index].amountProducts + pro.quantity;
    });
}

// function removeAllShowCart() เอาข้อมูลทั้งหมดในตะกร้าสินค้าออก (ที่อยู่ใน popup ตะกร้า)
function removeAllShowCart() {
    const elements = document.querySelector("#content");
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
}

// event กดปุ่มตะกร้าแล้วโชว์ popup โดยพอกดขึ้นมาแล้วจะมีการใช้ function showPopUp() ทำการเช็คและแสดง
const btn = document.getElementById("basket");
btn.addEventListener('click', () => {
    popup.style.display = "block";
    showPopUp();
});

// event กดปุ่มปิด popup ตะกร้า มีการใช้ function removeAllShowCart() เพื่อกันการชนข้อมูลเมื่อเปิด popup ใหม่อีกครั้งหนึ่ง
const closeBtn = document.querySelector(".btn-close");
closeBtn.addEventListener('click', () => {
    popup.style.display = "none";
    removeAllShowCart();
});

// ส่วนของ cookiesFunction
export let cookiesFunction = {

    // function loadCookie() สำหรับการ get ค่าจาก cookies มาแสดงผล
    loadCookie: function () { 
        let textCookie = CookieUtil.get("cart"); // ยกตัวอย่าง KN004-4,KN002-2,
        console.log(textCookie)
        if (textCookie !== null) {
            let products = textCookie.split(","); // ยกตัวอย่าง ['KN004-4', 'KN002-2', '']
            products.forEach((product) => {
                if (product !== "") {
                    let productCookie = product.split("-"); // ยกตัวอย่าง ['KN004', '4'] ['KN002', '2']
                    let findProduct = kanom.find((item) => item.productId === productCookie[0]);
                    checkAndAdd(findProduct, Number(productCookie[1]));
                }
            });
        }
    },

    // function saveCookie() สำหรับการ save ประวัติการเพิ่มของในตะกร้า โดยเก็บ productId และ quantity
    saveCookie: function () {
        let textCookie = "";
        productInCart.forEach(product => {
            textCookie += `${product.productId}-${product.quantity},`;
        });
        CookieUtil.set("cart", textCookie);
    },

    // function deleteCookie() สำหรับการลบประวัติ cookies
    deleteCookie: function () {
        productInCart = [];
        CookieUtil.unset("cart");
    },

    // function saveShopCookie() สำหรับเก็บค่า amountProducts
    saveShopCookie: function () {
        let textProductsCookie = "";
        kanom.forEach(product => {
            textProductsCookie += `${product.amountProducts},`;  // ตัวอย่าง "2,3,4,9"
        });
        CookieUtil.set("shop", textProductsCookie);
    },

    /* function loadShopCookie() เรียกโหลดแค่ตอนเปิด browser มีการเช็คว่าเป็นค่า "" หรือ null ไหม? เพื่อกัน error
    ใช้สำหรับการแสดงค่า amount หลังจากที่ทำการเพิ่มสินค้าในตะกร้าไปแล้ว */
    loadShopCookie: function () {
        let textProductsCookie = CookieUtil.get("shop");
        if (textProductsCookie !== "" && textProductsCookie !== null) {
            let shopProducts = textProductsCookie.split(","); // ["5", "10", "155", "10"]
            for (let i = 0; i < kanom.length; i++) {
                kanom[i].amountProducts = Number(shopProducts[i])
                showAllProducts(kanom);
            }
        }
    }
}