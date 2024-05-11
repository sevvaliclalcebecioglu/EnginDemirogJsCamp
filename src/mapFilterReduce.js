// let cart => array, bu array içindede birden fazla objem olabilir.

let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
] 
// Şu an backend sistemimiz olmadığı için manuel bir şekilde yazıyoruz.

// cart.map => mesela sepetin hepsini dolaşmamıza yarar.

console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : " 
    + product.unitPrice * product.quantity+"</li>")
})
console.log("</ul>")

let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)

console.log(total)


let quantityOver2 = cart.filter(product=>product.quantity>2)

console.log(quantityOver2)



////////////////////////////////////////////////////////

// Angular, react ile geliştirdiğimiz uygulamalara SPA diyoruz.
// Yani bir datayı değiştirdiğimiz zaman bunu haber vermemiz gerekiyor.

function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20}) 
}

addToCart(cart)

console.log(cart)

// front-end de referans değiştirmek çok önemli.

let sayi = 10

function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)

