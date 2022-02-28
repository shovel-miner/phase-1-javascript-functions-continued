function saturdayFun(target = "roller-skate"){
  console.log(`This Saturday, I want to ${target}!`);
  return `This Saturday, I want to ${target}!`;
}
saturdayFun();
function mondayWork(place="go to the office."){
    console.log (`This Monday, I will ${place}.`);
    return `This Monday, I will ${place}`;
}
mondayWork();
function wrapAdjective(symbol = "special"){
  return function(target = "*"){
   return `You are ${symbol}${target}${symbol}!`;
  };
 };
 
 wrapAdjective("a dedicated programmer");