// code your solution here
//Function saturdayFun definition.
function saturdayFun(target = "roller-skate") {
  return `This Saturday, I want to ${target}!`;
}
// Function mondayWork definition.
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

// Function wrapAdjective definition.
function wrapAdjective(type = "*"){
  const flairing = function(adjective = "special"){
    return `You are ${type}${adjective}${type}!`;
  };
return flairing;
 
}