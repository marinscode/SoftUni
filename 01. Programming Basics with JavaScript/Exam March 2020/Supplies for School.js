function schoolMaterials(pencils, markers, literDetergent, discount) {
    let pencilsPrice = 5.80;
    let markersPrice = 7.20;
    let literDetergentPrice = 1.20;

    let totalPencilsPrice = pencils * pencilsPrice;
    let totalMarkersPrice = markers * markersPrice;
    let totalDetergentPrice = literDetergent * literDetergentPrice;
    let totalPrice = totalDetergentPrice + totalMarkersPrice + totalPencilsPrice;
    let discountedPrice = totalPrice - ((totalPrice * discount) / 100);

    console.log(discountedPrice.toFixed(3));
}

schoolMaterials(2,3,2.5,25);