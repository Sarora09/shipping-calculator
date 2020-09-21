// calculateButton variable created for label
const calculateButton = document.querySelector('label')
// shippingWeight variable created for user input
const shippingWeight = document.querySelector('input')
// shippingPrice variable created for calculated shipping price
const shippingPrice = document.querySelector('.shipping-price')
// Displays the input element on developer tools console
console.log(shippingWeight)
// Displays the element with shipping-price class on the developer tools console
console.log(shippingPrice)

shippingPrice.textContent = "$.00" //Adding the text content to a 'p' element with class of shipping-price

const shippingRate=5; // Defined value of shipping rate per weight

// Below event listener fires when a user clicks on calculateButton upon which below function() is called
calculateButton.addEventListener('click', function() {
  const rate = Number(shippingWeight.value)*shippingRate;
  console.log(`User input for shipping weight is ${shippingWeight.value}`)
  console.log(`Based on the user input and shipping rate per weight, the calculated shipping price is ${rate}`)
  shippingPrice.textContent='$'+rate+'.00'
  shippingPrice.style.fontSize = "4rem"
})
