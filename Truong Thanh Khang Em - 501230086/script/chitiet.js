function load(){
    var search = location.search.substring(1).split('&');
    var src = search[0].substring(5);
    product_image.src = src;

    search.shift();
    var product_info = Products;
   
    search.forEach((elm) => {
        product_info = product_info[elm.split('=')[1]];
    });

    product_name.textContent = product_info.Ten;
    brand.textContent = 'Thương hiệu: ' + product_info.Hang;
    price.textContent = 'Giá: ' + product_info.Gia
    SL.textContent = 'Số lượng còn lại: ' + product_info.SL;
    common.textContent =  product_info.DacDiem;
}

load();

