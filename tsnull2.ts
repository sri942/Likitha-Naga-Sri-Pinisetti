//optional chaining
interface Institute{
    sqft:number;
    yard?:{
        sqft:number;
    };
}
function printYardSize(institute:Institute)
{
    const yardSize=institute.yard?.sqft;
    if(yardSize===undefined){
        console.log('no yard');
    }
    else{
        console.log(`yard is ${yardSize} sqft`);
    }
}
let instit:Institute={sqft:435000};
printYardSize(instit);