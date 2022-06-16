const generateCoinChange=cents=>{
    let quarter=0;
    let dime=0;
    let nickle=0;
    let rupee=0;
    let penny=0;
    let remainingChange=cents;
    while(remainingChange>=25){
        remainingChange-=25;
        quarter++;
    }
    while(remainingChange>=10){
        remainingChange-=10;
        dime++;
    }
    while(remainingChange>=5){
        remainingChange-=5;
        nickle++;
    }
    while(remainingChange>=2){
        remainingChange-=2;
        rupee++;
    }    
    while(remainingChange>=1){
        remainingChange-=1;
        penny++;
    }
    console.log(`Quarters:${quarter},Dime:${dime},Nickle:${nickle},Rupee:${rupee},Penny:${penny}`)
};

generateCoinChange(87);
generateCoinChange(54);
generateCoinChange(29);


