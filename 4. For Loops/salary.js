function salary(input){
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let i=2; i<= input.length; i++ ){
        let website = input[i]
        
        switch(website){
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;     
        }
        if (salary <= 0){
            console.log("You have lost your salary.");
            break;
        }
        
    }
    if (salary > 0){
        console.log(salary);
    }
}
salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);
salary(["3","500","Github.com","Stackoverflow.com","softuni.bg"]);
salary(["3","500","Github.com","Instagram","softuni.bg"]);
salary(["10","1500","Facebook","Facebook","Facebook","Facebook","Facebook","Facebook","Facebook","Facebook","Facebook","Facebook"]);
