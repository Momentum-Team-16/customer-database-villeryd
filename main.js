const customerContainer = document.querySelector("#customers");

for (let customer of customers) {
    //create card for the customer
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("small");

    //create div for customer name
    let name  = document.createElement("div");
    name.classList.add("card-title");
    name.innerText = `${customer.name.first} ${customer.name.last}`;

    //add name and card to customer container
   
    

    //create thumbnail div for card
    let thumb = document.createElement("div");
    thumb.classList.add("card-image", "circle");
    let pic = document.createElement("img");
    pic.src = customer.picture.thumbnail;
    thumb.appendChild(pic);

    let email = document.createElement("div");
    email.classList.add("email");
    email.innerText = `${customer.email}`;

    let address = document.createElement("div");
    address.classList.add("address");
    address.innerText = `${customer.location.street.number} ${customer.location.street.name}  
    ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode} `;

    let dob = document.createElement("div");
    dob.classList.add("dob");
    dob.innerText = `DOB: ${moment(customer.dob.date).format('ll')}`

    let registered = document.createElement("div");
    registered.classList.add("registered");
    registered.innerText = `Customer Since: ${moment(customer.registered.date).format('ll')}`



    card.appendChild(thumb);
    card.appendChild(name);
    card.appendChild(email);
    card.appendChild(address);
    card.appendChild(dob);
    card.appendChild(registered);

    customerContainer.appendChild(card);
    //
  




}
