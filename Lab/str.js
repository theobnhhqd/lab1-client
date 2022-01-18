var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6); //แสดงอาร์เรย์นับจากหลังสุุด
console.log('\n' + res + '\n') // print Banana

var res = str.slice(7);
console.log(res + '\n') //print Banana, Kiwi

console.log(str.length); //จำนวนอักษร

console.log(str.substring(7,13)) // เลือกแสดงจากตำแหน่ง

console.log(str.replace("Banana","Grape")) //แทนที่

console.log(str.toUpperCase()) //ตัวพิมพ์ใหญ่

console.log(str.toLowerCase())

console.log(str.concat(","," Grape")) //ต่อหรือเชื่อมอาร์เรย์

console.log(str.charAt(0)) //แสดงอักษรตำแหน่งที่กำหนด

console.log(str.indexOf("Kiwi")) //แสดงตำแหน่งที่คำนั้นอยู่

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");  //ตำแหน่งสุดท้ายที่คำนั้นอยู่
console.log(pos + '\n') //print21

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate"); //หาตำแหน่งแรกของคำนั้น
console.log(pos + '\n') //print7

var n1 ='2';
var n2 = '3';
console.log(n1+n2+'\n') //23

var n3 = parseInt(n1) + parseInt(n2);
console.log(n3) //
