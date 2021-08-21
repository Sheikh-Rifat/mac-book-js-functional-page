function extraMemoryCost(memoryInput) {
    let memoryPrice = document.getElementById("memory-price");

    if (memoryInput == "extraMemory") {
        memoryPrice.innerText = 180;
    }
     else if (memoryInput == "baseMemory") {
        memoryPrice.innerText = 0;
    }

    return memoryPrice;
};



// storage output
function extraStorageCost(storageInput) {
    let storagePrice = document.getElementById("storage-price");

    if (storageInput == "extraStorage") {

        storagePrice.innerText = 100;
    } 
    else if (storageInput == "premiumStorage") {
        storagePrice.innerText = 180;
    } 
    else if (storageInput == "baseStorage") {
        storagePrice.innerText = 0;
    }

    return storagePrice;
};


// delivery output
function deliveryCost(deliveryInput) {
    let deliveryCharge = document.getElementById("delivery-charge");

    if (deliveryInput == "freeDelivery") {
        deliveryCharge.innerText = 0;
    }
     else if (deliveryInput == "paidDelivery") {
        deliveryCharge.innerText = 20;
    }

    return deliveryCharge;
};



// total function

function totalCart(memory, storage, delivery, promoCode) {
    let basePriceText = document.getElementById("base-price").innerText;

    //base price converted to integer
    let basePrice = parseInt(basePriceText);

    // extra memory add-ons 
    let memoryCostText = extraMemoryCost(memory).innerText;
    let memoryCost = parseInt(memoryCostText);

    // extra storage add=ons
    let storageCostText = extraStorageCost(storage).innerText;
    let sotrageCost = parseInt(storageCostText);

    //  add free or fast delivery charge
    let deliveryChargeText = deliveryCost(delivery).innerText;
    let deliveryCharge = parseInt(deliveryChargeText);

    // total 
    let totalBalance = document.getElementById("cart-total");

    // total addition
    totalBalance.innerText = basePrice + memoryCost + sotrageCost + deliveryCharge;




    // bonus part----------


    // adding expected cost to cart checkout total expense
    let checkOutTotal = document.getElementById("checkout-total");

    checkOutTotal.innerText = totalBalance.innerText;


    // adding promo code
    promoCode = document.getElementById("promo").value;
    if (promoCode == "stevekaku") {
        let totalBalanceFloat = parseFloat(totalBalance.innerText);
        let discount = totalBalanceFloat * .20;
        let discountedAmount = totalBalanceFloat - parseFloat(discount);

        checkOutTotal.innerText = discountedAmount;

    }

};






// for base memory
document.getElementById("base-memory").addEventListener("click", function () {
    extraMemoryCost("baseMemory");
    totalCart("baseMemory")

});

// for extra memory
document.getElementById("extra-memory").addEventListener("click", function () {

    extraMemoryCost("extraMemory");
    totalCart("extraMemory");


});




// for base storage
document.getElementById("base-storage").addEventListener("click", function () {

    extraStorageCost("baseStorage");
    totalCart("baseStorage");


});

// for extra storage
document.getElementById("extra-storage").addEventListener("click", function () {

    extraStorageCost("extraStorage");
    totalCart("extraStorage");


});

// for premium storage
document.getElementById("premium-storage").addEventListener("click", function () {

    extraStorageCost("premiumStorage");
    totalCart("premiumStorage");


});






// for free delivery
document.getElementById("delivery-free").addEventListener("click", function () {

    deliveryCost("freeDelivery");
    totalCart("freeDelivery");

});

// for fast delivery
document.getElementById("fast-delivery").addEventListener("click", function () {

    deliveryCost("paidDelivery");
    totalCart("paidDelivery");


});





// promo code apply event
document.getElementById("button-addon2").addEventListener("click", function () {

    totalCart("promoCode");
    document.getElementById("promo").value = "";

});