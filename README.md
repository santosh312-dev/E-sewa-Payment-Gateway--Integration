If you are absolute beginner and want to learn how to integrate payment method like esewa in website then this repository for you.

**for production**
let secret = "YOUR_MERCHANT_SECRET"; // provided by eSewa
let message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=YOUR_PRODUCT_CODE`;
let hash = CryptoJS.HmacSHA256(message, secret);
document.getElementById("signature").value = CryptoJS.enc.Base64.stringify(hash);


