import { CookieUtil } from "./cookies.js";
import { kanom, changeTextAmount } from "./script.js";

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
                cookiesFunction.saveCookie(); // save ประวัติ cookies
                return;
            }
        }
    }   
    // ใช้ method array push สำหรับกรณีที่ยังไม่มีการ add ขนมเลย โดยจะทำการเก็บเป็น Object ที่ประกอบด้วย key กับ value
    productInCart.push({ productId: kanom.productId, productName: kanom.productName, price: kanom.price, quantity: quantity });
    addNumCart(); // การเพิ่มตัวเลขตรง noti จะเพิ่มเฉพาะเวลา add kanom อันใหม่เข้าไป
    cookiesFunction.saveCookie(); // save cookies ทั้งประวัติตะกร้าสินค้าและประวัติ amount
}

// function totalAmount() จากตอนแรกใช้เป็น For of ได้ทำการเปลี่ยนมาใช้ Array Method reduce แทน สำหรับรวมราคาทั้งหมดของสินค้าที่อยู่ในตะกร้า
function totalAmount() {
    let totalPrice = productInCart.reduce((total, current) => {
        return total + (current.price * current.quantity);
    },0);
    return totalPrice;
}

// function addNumCart() การเพิ่มตัวเลขตรง notification ที่ตะกร้า
function addNumCart() {
    numberCart++;
    const amountOnCart = document.querySelector("#amount");
    amountOnCart.textContent = numberCart;
}

// function showPopUp() สำหรับการแสดงผล popup เมื่อกดปุ่มตะกร้า สินค้าจะขึ้นโชว์ก็ต่อเมื่อมีของใน array productInCart
function showPopUp() {
    removeAllShowCart(); 
    const modal = document.querySelector('#content'); //ตำแหน่งที่จะวาง

    // ถ้าเกิดในกรณีที่ว่าไม่มีของในตะกร้าเลย popup จะทำการแสดงผลว่า No Product
    if (productInCart.length == 0) {
        const text = document.createElement("p");
        text.className = `modal-body`;
        text.textContent = "No Product";
        modal.appendChild(text);
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
                let index = productInCart.findIndex(proKanom => proKanom.productId === pro.productId);
                productInCart.splice(index, 1);
                kanomDiv.remove();
                
                // เอาจำนวน quantity ที่อยู่ในตะกร้ากลับเข้าไปยัง amountProduct ดังเดิม
                let num = kanom.findIndex(proKanom => proKanom.productId === pro.productId);
                kanom[num].amountProducts = kanom[num].amountProducts + pro.quantity;

                // update notification บนตะกร้า
                numberCart = numberCart - 1;
                const amountOnCart = document.querySelector("#amount");
                amountOnCart.textContent = numberCart;

                // ทำการ update amount หน้าเว็บใหม่อีกครั้งหนึ่ง
                changeTextAmount(kanom);

                //showAllProducts(kanom);
                showPopUp();

                // ทำการ save cookies
                cookiesFunction.saveCookie();
            });
        })

        // สร้างหน้าแสดงผลรวม Price ตอนท้ายสุด
        const totalPriceAmount = document.createElement("p");
        totalPriceAmount.textContent = `Price = ${totalAmount()}`;
        totalPriceAmount.className = `modal-body`;
        modal.appendChild(totalPriceAmount);
    }
}

/* ปุ่ม clear ของในตะกร้าทั้งหมด โดยการดักจับ event มีการใช้ function retrunAmountAll() เพื่อทำการคืนค่า amount กลับเข้าที่ทั้งหมด 
กำหนดให้ productIncart เป็น array เปล่า และ numberCart เป็น 0 ก่อนที่จะ update ค่า text amount ด้วย function changeTextAmount 
ทำการ update หน้า cart ขึ้นใหม่ด้วย removeAllShowCart ต่อด้วยการแสดง popup ด้วย showPopUp() และ ทำการ save cookies */
const clearBtn = document.getElementById("clearButton");
clearBtn.addEventListener('click', () => {
    returnAmountAll();
    productInCart = [];
    numberCart = 0;
    const amountOnCart = document.querySelector("#amount");
    amountOnCart.textContent = numberCart;
    changeTextAmount(kanom);
    showPopUp();
    cookiesFunction.saveCookie();
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
    const removeElements = document.querySelector("#content");
    while (removeElements.firstChild) {
        removeElements.removeChild(removeElements.firstChild);
    }
}

// event กดปุ่มตะกร้าแล้วโชว์ popup โดยพอกดขึ้นมาแล้วจะมีการใช้ function showPopUp() ทำการเช็คและแสดง
const popup = document.querySelector('.modal');
const btn = document.getElementById("basket");
btn.addEventListener('click', () => {
    popup.style.display = "block";
    showPopUp();
});

// event กดปุ่มปิด popup ตะกร้า มีการใช้ function removeAllShowCart() เพื่อกันการชนข้อมูลเมื่อเปิด popup ใหม่อีกครั้งหนึ่ง
const closeBtn = document.querySelector(".btn-close");
closeBtn.addEventListener('click', () => {
    popup.style.display = "none";
});

// ส่วนของ cookiesFunction
export let cookiesFunction = {
    // function loadCookie() สำหรับการ get ค่าจาก cookies มาแสดงผล
    loadCookie: function() {
        let cart = JSON.parse(CookieUtil.get("cart"));
        if (cart !== null) {
            cart.forEach(product => {
                let findProduct = kanom.find((item) => item.productId === product.productId);
                kanom.amountProducts-product.quantity;
                checkAndAdd(findProduct, Number(product.quantity));
            });
        }
    },

    // function saveCookie() สำหรับการ save ประวัติการเพิ่มของในตะกร้า โดยเก็บ productId และ quantity
    saveCookie: function() {
        let textCookie = [];
        productInCart.forEach((product) => {
            textCookie.push({ productId: product.productId, quantity: product.quantity });
        })
        CookieUtil.set("cart", JSON.stringify(textCookie));
    },

    // function deleteCookie() สำหรับการลบประวัติ cookies
    deleteCookie: function () {
        productInCart = [];
        CookieUtil.unset("cart");
    }
}





 // ไว้แก้ชาติหน้าตอนบ่ายๆอะ !ถึงแล้วบอกนะเดี๋ยวมาดู
        // let textProductsCookie = JSON.parse(CookieUtil.get("shop"));
        // console.log(`${textProductsCookie} get`);
        // if (textProductsCookie !== null) {
        //     for (let i = 0; i < kanom.length; i++) {
        //         kanom[i].amountProducts = textProductsCookie[i];
        //     }
        //     console.log(kanom);
        //     // changeTextAmount(kanom);
        // }



        // let textProductsCookie = JSON.parse(CookieUtil.get("shop")); 
        // console.log(`${textProductsCookie} jsjsjs`);
        //     if(textProductsCookie != null){
        //         for (let i = 0; i < kanom.length; i++) {
        //             textProductsCookie[i] = kanom[i].amountProducts - Number(textProductsCookie[i])
        //             const change = document.querySelector(`#${kanom[i].productId} .card-text p`);
        //             if (change !== null){
        //             change.textContent = `AmountProducts: ${textProductsCookie[i]}`;
        //             // showAllProducts(kanom);
        //             }
        //         }
        //     }

        // นางทัวดี
        // let textProductsCookie = [];
        // kanom.forEach(product => {
        //     textProductsCookie.push(product.amountProducts);
        // });
        
        // CookieUtil.set("shop", JSON.stringify(textProductsCookie));
        // console.log(`${JSON.stringify(textProductsCookie)} SS`);
