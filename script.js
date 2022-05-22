// Demo : Operators

// 1- Can ve Ada 'nın boy ve kg bilgilerini alın.

//2- Alınan bilgilere göre kilo indekslerini hesaplayınız

// ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi

// 3- Hesaplanan indeks bilgisine göre karşılaştırma yapınız

// 4- Aşağıdaki tabloya göre can ve ada hangi gruba giriyor

// 0 -18.4 : Zayıf 
//18.5 - 24.9 : Normal
//25.0 - 29.9 : Fazla Kilolu
//30.0 - 34.9 : Obez
//35.0 - 39.9 : Morbid
//40.0 - 44.9 : Ölüm


const kgCan = 60;
const kgAda = 40;

const heightCan = 1.70;
const heightAda = 1.50;

let IndexCan = kgCan / (heightCan * heightCan);
let IndexAda = kgAda / (heightAda * heightAda);

console.log("Can'ın indeksi " + IndexCan.toFixed(2), ",", "Ada'nın indeksi " + IndexAda.toFixed(2));
/*let a;
a = indexCan < 24, 9;
console.log(a); */

let adaHigherIndex = IndexAda > IndexCan;
let canHigherIndex = IndexCan > IndexAda;

console.log("Ada'nın kilo indeksi Can'ın kilo indeksinden daha büyük : " + adaHigherIndex);
console.log("Can'ın kilo indeksi Ada'nın kilo indeksinden daha büyük : " + canHigherIndex);

let AdaWeak = (IndexAda >= 0) && (IndexAda <= 18.4);
let AdaNormal = (IndexAda > 18.5) && (IndexAda <= 24.9);
let AdaObese = (IndexAda > 30.0) && (IndexAda <= 34.9);

console.log("Ada zayıf : " + AdaWeak);
console.log("Ada'nın kilosu normal: " + AdaNormal);
console.log("Ada obez : " + AdaObese);

//I am owesome!