var i;

for(i = 1; i <= 10; i++){
    while(true){
     console.log(i);
     break;
    }
}

var j;

for(j = 99; j >= 1; j--){
    if(j > 1 ){
        console.log(j + " "+ "bottles of beer on the wall." + " " + j + " " + "bottles of beer."+ " " + "Take one down pass it around," + " " +j+ " " + "bottles of beer on the wall.");
} else {
    console.log(j+ " " + "bottle of beer on the wall." + " " + j + " " + "bottle of beer. Take it down pass it around" + " " + j + " " + "bottle of beer on the wall.");
}
}

var bools = ["true", "true", "false", "true", "false", "true", "true", "true"];
// console.log(bools);

var length = bools.length;

for(var k = 0; k < length; k++){
    if("false".indexOf(bools[k])){
 console.log(bools[k]);
    }
}

var str = "apples";
var vowels = "aeiou";
var stripped = "";
var strlength = str.length;
for(i = 0; i < strlength; i++ ){
    if(vowels.indexOf(str[i]) >= 0) stripped += str[i];
}
console.log(stripped);