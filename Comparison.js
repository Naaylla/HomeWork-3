function comparison(object1,object2){
    for(var attribut in object1){
        if(object2[attribut] !== undefined && object1[attribut] !== object2[attribut]){
            if(object1[attribut] !== undefined && object2[attribut] !== object1[attribut]){
                return false;
            }
        }
    }
    return true;
}
var test1={
    Property1: "A",
    Property2: "B",
}
var test2={
    Property1: "C",
    Property2: "D",
}
console.log(comparison(test1,test2));
