function Common(array1, array2)
{
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]) {
                console.log(array1[i]);
            }
        }
    }
}
var test1 = [1, 2, 3, 5];
var test2 = [1, 8, 9, 5];
console.log("common elements are :");
Common(test1,test2);