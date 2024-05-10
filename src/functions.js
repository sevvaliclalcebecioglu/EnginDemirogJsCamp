// log da bir fonksiyondur.

function addToCart(quantity,productName="Elma") { // bir şey tanımlanmazsa elma gönder demektir.
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

// Yukarıda bir kere yazdığım fonksiyon sayesinde addToCart'ı kullanarak istediğim kadar şey ekleyebilirim. 

// JavaScriptte undifened var. Tanımlanmamış demektir. Null ile karıştırılmamalıdır.

// JavaScriptte typeScript kullanmadığım sürece tip güvenliği yoktur. Tip belirtmediğim için de istediğimi kullanabilirim.

// Çağrımızdaki parametreler sırasıyla yerleşir.

//addToCart()
addToCart(10)
//addToCart(15)


let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()  // Bunu çağırdığım zaman ekrana hello world yazar.

// Fonksiyonu değişkene atayabiliriz.

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

// javascripte ; koymak önemli değildir.

// ürünü sepete eklerken birden çok bilgiye ihtiyacım var.
function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

// parametreleri ayrı ayrı geçmek yerine , o özellikleri içeren obje oluştururum .

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

// Bana product diye bir şey ver. Ben onu kullanayım. 

// Aşağıda product1'i product ismi ile ele alıyorum.

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

// değer ve referans tip 

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName) // ekrana karpuz yazdı.

// Objeler(arrays) => referans tiptir
// Burdada diyorki product2'nin referans numarası product3'ün referans numarasıdır. Yani bellekteki veriyi artık hem product2 hemde product3 tutuyor. product2'nin name karpuz dediğim zamanda , zaten product2 referans no olarak product3 ile aynı numarayı tuttuğu için , karpuz product2'ye değil ikisinin ortak tuttuğu referans numarasına atanır . Ve ekrana product3'ü yazdırdığımız zaman da çıktı olarak bana karpuz verir.

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

// Sayısal veriler => değer tip
// Değer tip : Direk değeri atıyoruz ve işimiz bitiyor. Değeri atıyoruz , kendini değil.
// Mesela; sayı2 sayı 1'e atandıktan sonra sayı1 20 oluyor. Sonra sayı2= 100 dediğimiz zaman da sadece sayı2'nin değeri değişiyor . sayı1 = 20 olarak ekrana yazılıyor
// Bütün yazılım dillerinde bu böyledir. Farklı özellikler olabilir belki ama mantık bu şekildedir.
// Demekki biz sayılara değer tip diyeceğiz.
// Değer tip ; stackde tutulur. Heap ile bir alakası yoktur.

// Aynı anda birden fazla döngüyü sepete ekleyebiliriz.

function addToCart4(products) {
    console.log(products)
}

// array'lerin içinde objelerde tutabiliriz.
// 1.41 saniyede kaldık

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products) // addToCarta elimdeki tüm ürünleri gönderiyorum.

function add(bisey,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)