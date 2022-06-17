// add JavaScript code


function populate(s1,s2){
    s1 = document.getElementById(s1);
    s2 = document.getElementById(s2);
    s2.innerHTML = "";

    if(s1.value == "audi"){
        var optionArray = ["|","a4|Audi A4","a5|Audi A5","a6|Audi A6","rs5|Audi RS5","rs6|Audi RS6","rs7|Audi RS7"];
    }else if(s1.value == "bmw"){
        var optionArray = ["|", "2series|BMW 2 Series","3series|BMW 3 Series","5series|BMW 5 Series","x4|BMW X4"]
    }else if(s1.value == "mercedes"){
        var optionArray = ["|","cClass|Mercedes-Benz C-Class","gla|Mercedes-Benz GLA","maybach|Mercedes-Benz Maybach S-Class"]
    }else if(s1.value == "tata"){
        var optionArray = ["|","punch|TATA Punch","harrier|TATA Harrier","safari|TATA Safari","nexon|TATA Nexon"]
    }

    for(var option in optionArray){
        let pair = optionArray[option].split("|");
        let newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}