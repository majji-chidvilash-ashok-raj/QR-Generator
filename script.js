 const text = document.getElementById('text');
 const image = document.getElementById('image');
 const img = document.getElementById("img");
function generator(){
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ text.value;
}