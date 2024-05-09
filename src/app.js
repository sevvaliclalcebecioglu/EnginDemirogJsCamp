console.log("Merhaba Tobeto") // Bunu yazmadan koda başlamak günah :)) 

// Sonuna ";" koymak ya da koymamak fark etmez

// undefined : tanımlanmamış demektir. (benAslındaYoğum:))

// var keywordunu değil , let keywordunu kullanırım .

// Değişkenler tanımlandıkları kapsamda geçerlidir. 

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

// const : sabit 

// const ile bir değişken tanımladığım zaman sabit olduğu için ona başka bir değer atayamam .

const euroDun = 11.2
//euroDun = 11 // const olduğu için bunu yapamıyoruz.

console.log(euroDun)

// Birden fazla değeri aynı anda kullanmak için array'leri kullanırız .

//array : dizi 
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

// Döngü elimdeki bir veriyi dolaşmama yarar. 

// Programlamada i dediğimiz zaman index olduğunu anlarız.

// Front-end de javascript'i veri çekmek, o veriyi manüpüle etmek, ekrana istediğimiz gibi basmak vs için kullanıyoruz. 

// lenght : uzunluk 

// konutKredileri.lenght : konutKredilerinin elemanlarının uzunluğunca 

// Bu yaptığımız dinamiklik sayesinde de frontend tarafındaki kişi yeni bir data geldiği zaman kodunu değiştirmez. 

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)