async function showBreweries(){
    let response = await fetch('https://api.openbrewerydb.org/breweries');
    let json = await response.json();
    let breweries = document.getElementById("breweries");

    for(i in json){
        let brewery = json[i];
        breweries.append(getBrewery(brewery));
    }
}

function getBrewery(brewery){
    let brewerySection = document.createElement("div");
    brewerySection.classList.add("brewery");

    //Name
    let name = document.createElement("h3");
    name.innerText = brewery.name;
    brewerySection.append(name);

    //List
    let ulElem = document.createElement("ul");

    //Type
    let type = document.createElement("li");
    lcType = brewery.brewery_type;
    cpType = lcType.charAt(0).toUpperCase() + lcType.slice(1);
    type.innerText = `${cpType} Brewery`;
    type.classList.add("center");
    ulElem.append(type);

    //Street
    let address = document.createElement("li");
    address.innerText = "Address:";
    address.classList.add("bold");
    ulElem.append(address);

    let street = document.createElement("li");
    street.innerText = brewery.street;
    ulElem.append(street);

    //City
    let city = document.createElement("li");
    city.innerText = `${brewery.city}, ${brewery.state}, ${brewery.postal_code}`;
    ulElem.append(city);

    //Phone
    let ph0ne = document.createElement("li");
    ph0ne.innerText = "Phone:";
    ph0ne.classList.add("bold");
    ulElem.append(ph0ne);

    let phone = document.createElement("li");
    phone.innerText = brewery.phone;
    ulElem.append(phone);

    //Website
    let website = document.createElement("li");
    website.innerText = "Website:";
    website.classList.add("bold");
    ulElem.append(website);

    let link = document.createElement("li");
    link.innerText = brewery.website_url;

    let anchor = document.createElement("a");
    anchor.setAttribute("href", brewery.website_url);
    anchor.append(link);
    ulElem.append(anchor);
    
    
    
    brewerySection.append(ulElem);
    return brewerySection;
}

window.onload = function(){
    this.showBreweries();
}

