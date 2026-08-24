// we'll build a order processing system to understand dry and how important a function is.

function isValidPrice(price){
    return typeof price === "number" && price >0;
}
function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}


function calculateDiscount(price, discount){
    if(!isValidPrice(price)){
        return 0;
    }
    let discountAmmount = (price * discount)/100;
    return price - discountAmmount;
}

function finalBill(price,vatPer = 15)
{
    let vat = (price * vatPer)/100;
    return price + vat;
}

function formatBDT(amount){
    return `${amount.toFixed(3)} BDT`;
}

function capitalized(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}