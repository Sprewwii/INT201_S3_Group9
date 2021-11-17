// สร้างตัวแปรเก็บ object ขนมต่าง ๆ ได้แก่ macarone, brownie, muffin, moji 
// โดยข้างใน object จะมีข้อมูล id name price amount และ path image อยู่
let macarone = {
    productId: "KN001",
    productName: "Macarone",
    price: 200,
    amountProducts: 5,
    img: "img/macarone.jpg"
  };
  
  let brownie = {
    productId: "KN002",
    productName: "Brownie",
    price: 130,
    amountProducts: 60,
    img: "img/brownie.jpeg"
  };
  
  let muffin = {
    productId: "KN003",
    productName: "Muffin",
    price: 180,
    amountProducts: 70,
    img: "img/muffin.jpeg"
  };
  
  let moji = {
    productId: "KN004",
    productName: "Moji",
    price: 100,
    amountProducts: 80,
    img: "img/moji.jpg"
  };
  
  // export ตัวแปรทั้งหมดในไฟล์ product.js
  export { macarone, brownie, muffin, moji };
  