

const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");

/* output:
Persiapan sebelum berangkat kegiatan.
Hari ini hujan. Bawa payung.
Berangkat kegiatan.
 */

 let x = 50;

 if(x > 70) {
     console.log(x);
 } else {
     console.log("Nilai kurang dari 70");
 }

 /* output
 Nilai kurang dari 70
 */




 let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);

/* output
Bonjour!
*/


// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

/* output
Anda mendapatkan diskon sebesar 0%
 */




 let name = "";

if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}

/* output:
Nama masih kosong
 */
