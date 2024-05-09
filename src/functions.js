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

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

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