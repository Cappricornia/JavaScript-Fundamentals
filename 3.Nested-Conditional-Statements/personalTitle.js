function personalTitle(input){
    let age = Number(input[0]);
    let gender = input[1];
    
    if (age < 0 || age > 120){
        throw new Error("Age condition not met");
    } 
    if (gender == "m"){
        if (age < 16){
            console.log("Master");
        } else{
            console.log("Mr.");
        }
    } else if (gender == "f"){
        if  (age < 16){
            console.log("Miss")
        } else{
        console.log("Ms.");
        }
    } else{
        console.log("Invalid gender");
    }
}

personalTitle(["12","f"]);
personalTitle(["17","m"]);
personalTitle(["25","f"]);
personalTitle(["13.5","m"]);
personalTitle(["13.5","cucumber"]);
personalTitle(["-1","cucumber"]);



