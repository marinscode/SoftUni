function change(btc, yuan, commission) {
    let btcRateToLeva = 1168;
    let chineseYuanRateToDollar = 0.15;
    let dollarRateToLeva = 1.76;
    let euroRateToLeva = 1.95;

    let btcInLeva = btc * btcRateToLeva;
    let chineseYuanToLeva = yuan * chineseYuanRateToDollar * dollarRateToLeva;
    let euro = (btcInLeva + chineseYuanToLeva) / euroRateToLeva;

    let commissionInEuro = euro * (commission / 100);
    let result = euro - commissionInEuro;

    console.log(result.toFixed(2));
 
}

change(1, 5, 5);