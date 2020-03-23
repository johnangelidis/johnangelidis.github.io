class Toy{
    constructor(name, price, range, rating, pic){
        this.name = name;
        this.price = price;
        this.range = range;
        this.rating = rating;
        this.pic = pic;
    }

    get details(){
        let str = `${this.name}`;
        str+= '\n';
        str+= `Price: ${this.price}`;
        str+= '\n';
        str+= `Age Range: ${this.range}`;
        str+= '\n';
        str+= `Rating: ${this.rating} stars`;

        return str;
    }

    get ToyItem(){
        let toyContainer = document.createElement("section");
        toyContainer.classList.add("container");
        //picture
        let imgElem = document.createElement("img");
        imgElem.src= `images/${this.pic}`;
        toyContainer.append(imgElem);

        //name
        let h2Elem = document.createElement("h2");
        h2Elem.innerText = this.name;
        toyContainer.append(h2Elem);

        //list
        let ulElem = document.createElement("ul");
        toyContainer.append(ulElem);

        //price
        let liPriceElem = document.createElement("li");
        liPriceElem.innerText = `Price: ${this.price}`;
        ulElem.append(liPriceElem);

        //age range
        let liRangeElem = document.createElement("li");
        liRangeElem.innerText = `Age Range: ${this.range}`;
        ulElem.append(liRangeElem);

        //rating
        let liRatingElem = document.createElement("li");
        liRatingElem.innerText = `Rating: ${this.rating} stars`;
        ulElem.append(liRatingElem);


        return toyContainer;        
    }


}

window.onload = function(){
    let toys = [];
    toys.push(new Toy("American Girl Doll", "$38.88", "5-7", "4", "doll.jpg"));
    toys.push(new Toy("House", "$65.00", "6-10", "5", "house.jpg"));
    toys.push(new Toy("Bike", "$49.99", "10-14", "5", "bike.jpg"));
    toys.push(new Toy("Basketball Hoop", "$59.99", "5-12", "4", "hoop.jpg"));
    toys.push(new Toy("Kitchen Set", "$65.00", "4-9", "5", "kitchen.jpg"));
    toys.push(new Toy("Army Set", "$9.99", "8-10", "3", "army.jpg"));

    let toysDiv = document.getElementById("toys");

    for(let i in toys){
        toysDiv.append(toys[i].ToyItem);
    }
}