//findIndex สำหรับแสดงผลช่อง index ตัวที่ตรงเงื่อนไขตัวแรกสุด ถ้าไม่เจอก็จะ return -1 ออกมา
//parameter เป็น Arrow function
//findIndex((element) => { ... } )
//findIndex((element, index) => { ... } )
//findIndex((element, index, array) => { ... } )
console.log("findIndex() syntax: Arrow Function");
//ตัวอย่างที่ 1
let scores1 = [82, 42, 50, 64, 99];
let failedScoreIndex = scores1.findIndex((score) => {
    return score < 50
})
console.log(`Index failedScoreIndex is ${failedScoreIndex}`); //1 เพราะเจอค่าใน index ที่ 1

//ตัวอย่างที่ 2
let scores2 = [82, 75, 90, 64, 99];
let failedScoreIndex2 = scores2.findIndex((score) => {
    return score < 50
})
console.log(`Index failedScoreIndex is ${failedScoreIndex2}`); //-1 เพราไม่เจอค่า

//ตัวอย่างที่ 3
let scores3 = [82, 75, 2, 5, 0];
let failedScoreIndex3 = scores3.findIndex((score) => {
    return score < 50
})
console.log(`Index failedScoreIndex is ${failedScoreIndex3}`); //2 เพราะว่าเอาเฉพาะค่าที่ตรงกรณีตัวแรกสุด

console.log(`\nfindIndex() syntax: Function(Object)`);
//parameter เป็น function(Object)
const student = [
    {
      name:'Mhai',
      bloodType: 'O',
    },
    {
      name:'Prew',
      bloodType: 'A',
    },
    {
      name:'Fah',
      bloodType: 'B',
    },
    {
      name:'Yok',
      bloodType: 'B',
    },
    {
        name:'Jamez',
        bloodType: 'O',
    }
  ]
  
  //ตัวอย่างที่ 1
  const index = student.findIndex(function(friend){return friend.bloodType === 'A'});
  console.log(`Index BloodType A is ${index}`); //1

  //ตัวอย่างที่ 2
  const index2 = student.findIndex(function(friend){return friend.bloodType === 'AB'});
  console.log(`Index BloodType AB is ${index2}`); //-1 เพราะไม่มีคนกรุ๊ปเลือด AB

  //ตัวอย่างที่ 3
  const index3 = student.findIndex(function(friend){return friend.bloodType === 'B'});
  console.log(`Index BloodType B is ${index3}`); //2 เอาตัวที่ตรงกรณีตัวแรกสุด

//sort ส่วนใหญ่จะใช้ในการเรียงตัวอักษร(String) โดยจะอิงจากตัวแรกสุดของ String นั้นๆ ดังนั้นเมื่อเอาไปเทียบตัวเลขมันจึงเรียงผิด
//เรียงลำดับค่าใน array สำหรับกรณีที่ไม่ได้กำหนดเงื่อนไขจะอิงจากตัวหนังสือหรือตัวเลขตัวแรก ถ้าตัวแรกเหมือนกันจะค่อยไปเช็คในตัวถัดไป
//sort((firstEl, secondEl) => { ... } )
console.log("\nsort() syntax: Arrow Function");
//ตัวอย่างที่ 1 น้อยไปมาก
let number = [44, 120, 8, 15, 73, 13];
number.sort((a,b) => a-b); //ถ้าเกิดว่า a-b ได้ค่าติดลบจะเอาค่า a ไว้ก่อน b แต่ถ้าเป็นบวกก็จะเอาค่า b ไว้ก่อน a ถ้าได้ค่าเป็น 0 จะไม่เกิดการเปลี่ยนแปลง
console.log(`Sort Number = ${number}`); //1,5,10,25,40,100

//ตัวอย่างที่ 2 มากไปน้อย
let number2 = [44, 120, 8, 15, 73, 13];
number2.sort((a,b) => b-a); //ใช้เหมือนกับตัวอย่างที่ 1 แต่เป็นการเรียงจากมากไปน้อย
console.log(`Sort Number = ${number2}`); //1,5,10,25,40,100

//ตัวอย่างที่ 3 เทียบตัวอักษร
let names = ["Hataiwan", "Kodchakorn", "Athiti", "Kannika", "Supicha"];
names.sort((name1,name2) => name1-name2);
console.log(`Sort Name = ${names}`); //Hataiwan,Kodchakorn,Athiti,Kannika,Supicha ไม่เรียงเลย เพราะว่าตัวอักษรไม่สามารถเอามา - เทียบค่ากันได้

console.log(`\nfind() syntax: Function(Object)`);
//parameter เป็น function(Object)
//ตัวอย่างที่ 1
const friends = ['Mhai', 'Prew', 'Fah', 'Yok', 'Jamezkung'];
friends.sort(function(x, y) {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
console.log(`Sort Friends = ${friends}`); //Fah,Jamezkung,Mhai,Prew,Yok เทียบจาก ASCII

//ตัวอย่างที่ 2
const friends2 = ['Mhai', 'prew', 'Prew', 'Yok', 'Jamezkung'];
friends2.sort(function(x, y) {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
console.log(`Sort Friends = ${friends2}`); //Jamezkung,Mhai,Prew,Yok,prew อิงจาก ASCII 

//ตัวอย่างที่ 3
const friends3 = ['Mhai', 'Fah2', 'Fah1', 'Yok', 'Jamezkung'];
friends3.sort(function(x, y) {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
console.log(`Sort Friends = ${friends3}`); //Fah1,Fah2,Jamezkung,Mhai,Yok เพราะเลข 1 มาก่อน 2
