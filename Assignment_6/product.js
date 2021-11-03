// สร้างตัวแปรเก็บ object ขนมต่าง ๆ ได้แก่ macarone, brownie, muffin, moji 
// โดยข้างใน object จะมีข้อมูล id name price amount และ path image อยู่
let macarone = {
    productId: "KN001",
    productName: "macarone",
    price: 200,
    amountProducts: 50,
    img: "img/macarone.jpg"
  };
  
  let brownie = {
    productId: "KN002",
    productName: "brownie",
    price: 130,
    amountProducts: 60,
    img: "img/brownie.jpeg"
  };
  
  let muffin = {
    productId: "KN003",
    productName: "muffin",
    price: 180,
    amountProducts: 70,
    img: "img/muffin.jpeg"
  };
  
  let moji = {
    productId: "KN004",
    productName: "moji",
    price: 100,
    amountProducts: 80,
    img: "img/moji.jpg"
  };
  
  // export ตัวแปรทั้งหมดในไฟล์ product.js
  export { macarone, brownie, muffin, moji };
  