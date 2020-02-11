function calculate(){
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let productName = document.getElementById("product-name").value;
    let productPrice = document.getElementById("product-price").value;
    let productCount = document.getElementById("product-count").value;
    
    let totalPrice = productCount * productPrice * 1.07;
    let priceRounded = totalPrice.toFixed(2);
    document.getElementById("sentence").innerHTML = `${firstName} ${lastName} ordered ${productCount} ${productName}(s)`;
    document.getElementById("total").innerHTML = `Totalling:$${priceRounded}`;
}