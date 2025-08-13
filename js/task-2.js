function getShipppingMessage(county, price, deliveryFee) {
    return `Shipping to ${county} will cost ${price + deliveryFee} credits`;
}

console.log(getShipppingMessage('Australia', 120, 50));
console.log(getShipppingMessage('Germany', 80, 20));    
console.log(getShipppingMessage('Sweden', 100, 20));