// สร้างตัวแปร productInCart เพื่อนำมาเก็บค่า Array
let productInCart = [];

/* function checkAndAdd() ใช้สำหรับการเช็คว่าขนมที่เพิ่มไปนั้นซ้ำกับของที่อยู่ในตะกร้าหรือไม่ หากใช่จะทำการเพิ่มจำนวนเข้าไปอีก 1 จะรับ parameter มาทั้งหมด 3 ตัว คือ kanomId, kanom, price */
export function checkAndAdd(kanomId, kanom, price) {
    for (let product of productInCart) {
        if (product[1] === kanom) {
            product[3] = product[3] + 1;
            return;
        }
    }
    // ใช้ method array push สำหรับกรณีที่ยังไม่มีการ add ขนมเลย
    productInCart.push([kanomId, kanom, price, 1]);
}

// function totalAmount() ราคาทั้งหมดของสินค้าที่อยู่ในตะกร้า
function totalAmount() {
    let total = 0;
    for (let productPrice of productInCart) {
        total = total + (productPrice[2] * productPrice[3]);
    }
    return total;
}

// function showCart() แสดงผลสินค้าที่อยู่ในตะกร้าทั้งหมด
function showCart() {
    let popup = `Cart:`;
    productInCart.forEach(pro => {
        popup = `${popup} \n{Kanom : ${pro[1]} , Price : ${pro[2]} , Amount : ${pro[3]}}`
    });
    alert(`${popup} \nTotal : ${totalAmount()}`);
}

// querySelector ปุ่ม ตะกร้าจากหน้า index มา จากนั้นก็ดักจับ event เมื่อกดปุ่มให้เรียกใช้งานฟังก์ขัน showCart() มาทำงาน
const basketBtn = document.querySelector("#basket");
basketBtn.addEventListener('click', () => {
  showCart();
});