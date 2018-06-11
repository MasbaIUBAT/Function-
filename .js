function joogKor(first, second){
var joogFol = first+second;
return joogFol;
}
function duiGoonKor(songKha){
var goonFol = songKha*2;
return goonFol;
}
function dharDey(dharAmount){
var frienderTaka = dharAmount;
return frienderTaka;
}
 var chalerDam = 28;
 var dalerDam = 33;
 var total = joogKor(chalerDam,dalerDam);
 var dharLagbe = duiGoonKor(total);
 var takaPaichi = dharDey(dharLagbe);
 console.log(takaPaichi);
