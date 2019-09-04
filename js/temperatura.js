// Cálculos de conversões de temperatura 
function convertTemp(direction) {
 
    var fj = document.convert.ftemp, cj = document.convert.ctemp, kj = document.convert.ktemp;
  
    if (direction == "ftoc") {
        cj.value = Math.round((fj.value - 32) * (5 / 9));
        kj.value = Math.round(((fj.value - 32) * (5 / 9)) + (273.15));
    }
    else if (direction == "ktof") {
        fj.value = Math.round((kj.value - 273.15) * (9 / 5)) + 32;
        cj.value = Math.round((fj.value - 32) * (5 / 9));
  
    }
    else {
        fj.value = Math.round((parseInt(cj.value) * (9 / 5)) + 32);
        kj.value = Math.round((parseInt(cj.value) + 273));
    }
 }
  
 function clearAll() {
    document.convert.ftemp.value = "";
    document.convert.ctemp.value = "";
    document.convert.ktemp.value = "";
 }
 
