const HomeWork =  require ('./hw.json');

// 1. All topping types
function AllToppingType (){
    for(let i=0 ; i<HomeWork[0].topping.length ; i++){
        console.log(HomeWork[0].topping[i].type); 
    }
}
console.log('All topping types without repetition : ')
AllToppingType ()





// 2. All batter types
function AllBatterType(){
    for(let i=0 ; i<3 ; i++){
        for(let j=0 ; j<HomeWork[i].batters.batter.length ; j++ ){
            console.log(HomeWork[i].batters.batter[j].type); 
        }
    }
}
console.log('All batter types : ')
AllBatterType()


/*
function AllBatterType2(){
    for(let i=0 ; i<HomeWork[0].batters.batter.length ; i++){
        console.log(HomeWork[0].batters.batter[i].type); 
    }
}
AllBatterType2()
*/



// 3. Ppu average 
function ppuAvg (){
 
    var sumValue = ppuSum() 
    var avg = sumValue/HomeWork.length ;
    return avg ;

}
console.log('The average of ppus is ' + ppuAvg());



// 4. Ppu sum
function ppuSum (){
    var sum = 0 ;
    for (let i=0 ; i<HomeWork.length ; i++){
        sum += HomeWork[i].ppu ;

    }
    return  sum ;
}
console.log('The sum of ppus is ' + ppuSum());





// 5. List of all mentioned IDs regardless to the type
function IdsAll (){
   
    for(let i=0 ; i<HomeWork.length ; i++){      
        console.log(HomeWork[i].id + ' for object [' + i + ']');

        // for batter id in object i
        for(let j=0  ; j<HomeWork[i].batters.batter.length ; j++){
            console.log(HomeWork[i].batters.batter[j].id);
        }
        // for topping id in object i
        for(let j=0 ; j<HomeWork[i].topping.length ; j++){
            console.log(HomeWork[i].topping[j].id);
        }


    }

}

IdsAll()
