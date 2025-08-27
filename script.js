function order(id, name, price) {
  let amount = parseFloat(price);
  let tax_amount = amount * 0.05; // 5% tax
  let total_amount = amount + tax_amount;
  let transaction_uuid = id + "_" + Math.floor(Math.random() * 100000);

  // Set form values
  document.getElementById("amount").value = amount;
  document.getElementById("tax_amount").value = tax_amount;
  document.getElementById("total_amount").value = total_amount;
  document.getElementById("transaction_uuid").value = transaction_uuid;

  // Create signature for eSewa
  let message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  let secret = "8gBm/:&EnhH.1/q";
  let hash = CryptoJS.HmacSHA256(message, secret);
  document.getElementById("signature").value = CryptoJS.enc.Base64.stringify(hash);

  alert(`${name} added to cart. Total: NPR ${total_amount.toFixed(2)}`);
}
