//const state = ["Decision", "Attack", "Assist", "Bench", "Flee"]; //for reference
//                   0          1          2        3       4      // state 4 doesn't happen but just in case we needed some sort of functinoality I have this as a possibility
var state = 0;

var battling_pokemon = 0; //accesses userPokemonTeam[?].name
var enemy_battling_pokemon = 0;


var opening_procedure = false;



const top_left_button = document.getElementById("t1");
const top_right_button = document.getElementById("t2");
const bottom_left_button = document.getElementById("b1");
const bottom_right_button = document.getElementById("b2");

// opponent pokemon info
const opponent_pokemon_img = document.getElementById("o-img");
const e_pok_name = document.getElementById("e-pok-name");
const e_pok_lvl = document.getElementById("e-pok-lvl");
const e_pok_health_bar = document.getElementById("enemy-health-bar-inner");

// user pokemon info
const user_pokemon_img = document.getElementById("u-img");
const u_pok_name = document.getElementById("u-pok-name");
const u_pok_lvl = document.getElementById("u-pok-lvl");
const u_pok_health_bar = document.getElementById("player-health-bar-inner");
    

top_left_button.addEventListener("click", function(){ //Attack Button on Decision Page
    user_pokemon_img.classList.remove("slide-rev");
    console.log(userPokemonTeam[battling_pokemon].moves);

    if(state == 0){
        if(userPokemonTeam[battling_pokemon].stage == 1){

        
        top_left_button.classList.remove("buttonAT");
        top_left_button.classList.add("battle-button");
        top_left_button.textContent = userPokemonTeam[battling_pokemon].moves[0].name;
        
        top_right_button.classList.remove("buttonAS");
        top_right_button.classList.add("battle-button");
        top_right_button.textContent = userPokemonTeam[battling_pokemon].moves[1].name;
        
        bottom_left_button.classList.remove("buttonB");
        bottom_left_button.classList.add("battle-button");
        bottom_left_button.textContent = "Empty Slot";

        bottom_right_button.classList.remove("buttonF");
        bottom_right_button.classList.add("battle-button");
        bottom_right_button.textContent = "Empty Slot";

        }
        else if(userPokemonTeam[battling_pokemon].stage == 2){

        
            top_left_button.classList.remove("buttonAT");
            top_left_button.classList.add("battle-button");
            top_left_button.textContent = userPokemonTeam[battling_pokemon].moves[0].name;
            
    
            top_right_button.classList.remove("buttonAS");
            top_right_button.classList.add("battle-button");
            top_right_button.textContent = userPokemonTeam[battling_pokemon].moves[1].name;
            
            bottom_left_button.classList.remove("buttonB");
            bottom_left_button.classList.add("battle-button");
            bottom_left_button.textContent = userPokemonTeam[battling_pokemon].moves[2].name;
    
            bottom_right_button.classList.remove("buttonF");
            bottom_right_button.classList.add("battle-button");
            bottom_right_button.textContent = "Empty Slot";
    
        }
        else if(userPokemonTeam[battling_pokemon].stage == 3){

        
            top_left_button.classList.remove("buttonAT");
            top_left_button.classList.add("battle-button");
            top_left_button.textContent = userPokemonTeam[battling_pokemon].moves[0].name;
            
    
            top_right_button.classList.remove("buttonAS");
            top_right_button.classList.add("battle-button");
            top_right_button.textContent = userPokemonTeam[battling_pokemon].moves[1].name;
            
            bottom_left_button.classList.remove("buttonB");
            bottom_left_button.classList.add("battle-button");
            bottom_left_button.textContent = userPokemonTeam[battling_pokemon].moves[2].name;
    
            bottom_right_button.classList.remove("buttonF");
            bottom_right_button.classList.add("battle-button");
            bottom_right_button.textContent = userPokemonTeam[battling_pokemon].moves[3].name;
    
        }
        
        state = 1;
    }
    else if(state == 1){

        //Attack Function
        user_pokemon_img.classList.add("slide-rev");

        // Damage userPokemon -> opponentPokemon
        if (userPokemonTeam[battling_pokemon].moves[0].category !== "Status") {
            calculateUserActionDamage(userPokemonTeam[battling_pokemon].moves[0].name, userPokemonTeam[battling_pokemon].moves[0].type,
                userPokemonTeam[battling_pokemon].moves[0].category, userPokemonTeam[battling_pokemon].moves[0].power,
                 userPokemonTeam[battling_pokemon].moves[0].accuracy);
        }
        else {
            calculateUserStatusAttack(userPokemonTeam[battling_pokemon].moves[0].name, userPokemonTeam[battling_pokemon].moves[0].type,
                userPokemonTeam[battling_pokemon].moves[0].category, userPokemonTeam[battling_pokemon].moves[0].accuracy);
        }
        e_pok_name.textContent = enemyPokemonTeam[enemy_battling_pokemon].name;
        e_pok_lvl.textContent = enemyPokemonTeam[enemy_battling_pokemon].level;
        e_health = enemyPokemonTeam[enemy_battling_pokemon].HP / enemyPokemonTeam[enemy_battling_pokemon].maxHP *100;
        e_pok_health_bar.style.width = e_health + "%";
        u_pok_name.textContent = userPokemonTeam[battling_pokemon].name;
        u_pok_lvl.textContent = userPokemonTeam[battling_pokemon].level;
        u_health = userPokemonTeam[battling_pokemon].HP / userPokemonTeam[battling_pokemon].maxHP *100;
        u_pok_health_bar.style.width = e_health + "%";
        checkWIN();
        // Damage userPokemon -> opponentPokemon

        top_left_button.classList.remove("battle-button");
        top_left_button.classList.add("buttonAT");
        top_left_button.textContent = "Attack";
        
        top_right_button.classList.remove("battle-button");
        top_right_button.classList.add("buttonAS");
        top_right_button.textContent = "Assist";

        bottom_left_button.classList.remove("battle-button");
        bottom_left_button.classList.add("buttonB");
        bottom_left_button.textContent = "Bench";

        bottom_right_button.classList.remove("battle-button");
        bottom_right_button.classList.add("buttonF");
        bottom_right_button.textContent = "Flee";

        setTimeout(() => opponentAttack(), 1000);
        opponentAttack();
        opponent_pokemon_img.classList.remove("slide-rev");

        state = 0;
    }
    else if(state == 2){
        console.log(userPokemonTeam[0].assist.name);
        // Damage userPokemon -> opponentPokemon
        assistFlag = true;
        assistPokemonName = userPokemonTeam[0].name;
        if (userPokemonTeam[0].assist.category !== "Status") {
            calculateUserActionDamage(userPokemonTeam[0].assist.name, userPokemonTeam[0].assist.type,
                userPokemonTeam[0].assist.category, userPokemonTeam[0].assist.power,
                 userPokemonTeam[0].assist.accuracy);
        }
        else {
            calculateUserStatusAttack(userPokemonTeam[0].assist.name, userPokemonTeam[0].assist.type,
                userPokemonTeam[0].assist.category, userPokemonTeam[0].assist.accuracy);
        }
        assistFlag = false;
        assistPokemonName = "";
        e_pok_name.textContent = enemyPokemonTeam[enemy_battling_pokemon].name;
        e_pok_lvl.textContent = enemyPokemonTeam[enemy_battling_pokemon].level;
        e_health = enemyPokemonTeam[enemy_battling_pokemon].HP / enemyPokemonTeam[enemy_battling_pokemon].maxHP *100;
        e_pok_health_bar.style.width = e_health + "%";
        
        // Damage userPokemon -> opponentPokemon

        top_left_button.classList.remove("assist-button");
        top_left_button.classList.add("buttonAT");
        top_left_button.textContent = "Attack";

        top_right_button.classList.remove("assist-button");
        top_right_button.classList.add("buttonAS");
        top_right_button.textContent = "Assist";

        bottom_left_button.classList.remove("assist-button");
        bottom_left_button.classList.add("buttonB");
        bottom_left_button.textContent = "Bench";

        bottom_right_button.classList.remove("back-button");
        bottom_right_button.classList.add("buttonF");
        bottom_right_button.textContent = "Flee";

        state = 0;
    }
    else if(state == 3){
        
        if(userPokemonTeam[0].HP > 0){
            let fileName = userPokemonTeam[0].number.toString().padStart(3, "0") + userPokemonTeam[0].name + ".png"
            user_pokemon_img.src = "battle/" + fileName;
            //user_pokemon_img.style.transform = "scaleX(-1)";

            battling_pokemon = 0;
            currentUserPokemon = userPokemonTeam[battling_pokemon];
            // Testing health bar component
            u_pok_name.textContent = userPokemonTeam[battling_pokemon].name;
            u_pok_lvl.textContent = userPokemonTeam[battling_pokemon].level;
            u_health = userPokemonTeam[battling_pokemon].HP / userPokemonTeam[battling_pokemon].maxHP * 100;
            u_pok_health_bar.style.width = u_health + "%";
            //Testing health bar component

            top_left_button.classList.remove("bench-button");
            top_left_button.classList.add("buttonAT");
            top_left_button.textContent = "Attack";
            
            top_right_button.classList.remove("bench-button");
            top_right_button.classList.add("buttonAS");
            top_right_button.textContent = "Assist";

            bottom_left_button.classList.remove("bench-button");
            bottom_left_button.classList.add("buttonB");
            bottom_left_button.textContent = "Bench";

            bottom_right_button.classList.remove("back-button");
            bottom_right_button.classList.add("buttonF");
            bottom_right_button.textContent = "Flee";
        }
        else{
            console.log(userPokemonTeam[0].name + " is defeated");

            top_left_button.classList.remove("bench-button");
            top_left_button.classList.add("buttonAT");
            top_left_button.textContent = "Attack";
            
            top_right_button.classList.remove("bench-button");
            top_right_button.classList.add("buttonAS");
            top_right_button.textContent = "Assist";

            bottom_left_button.classList.remove("bench-button");
            bottom_left_button.classList.add("buttonB");
            bottom_left_button.textContent = "Bench";

            bottom_right_button.classList.remove("back-button");
            bottom_right_button.classList.add("buttonF");
            bottom_right_button.textContent = "Flee";
        }
        state = 0;
    }
    else{
        console.log("goofy business");
    }
});

top_right_button.addEventListener("click", function(){ //Assist Button on Decision Page
    user_pokemon_img.classList.remove("slide-rev");
    if(state == 0){

        top_left_button.classList.remove("buttonAT");
        top_left_button.classList.add("assist-button");
        top_left_button.textContent = userPokemonTeam[0].name;

        top_right_button.classList.remove("buttonAS");
        top_right_button.classList.add("assist-button");
        top_right_button.textContent = userPokemonTeam[1].name;
        
        bottom_left_button.classList.remove("buttonB");
        bottom_left_button.classList.add("assist-button");
        bottom_left_button.textContent = userPokemonTeam[2].name;

        bottom_right_button.classList.remove("buttonF");
        bottom_right_button.classList.add("back-button");
        bottom_right_button.textContent = "Go Back";
        
        state = 2;
        
    }
    else if(state == 1){
        user_pokemon_img.classList.add("slide-rev");
        //Attack function
        // Damage userPokemon -> opponentPokemon
        if (userPokemonTeam[battling_pokemon].moves[1].category !== "Status") {
            calculateUserActionDamage(userPokemonTeam[battling_pokemon].moves[1].name, userPokemonTeam[battling_pokemon].moves[1].type,
                userPokemonTeam[battling_pokemon].moves[1].category, userPokemonTeam[battling_pokemon].moves[1].power,
                 userPokemonTeam[battling_pokemon].moves[1].accuracy);
        }
        else {
            calculateUserStatusAttack(userPokemonTeam[battling_pokemon].moves[1].name, userPokemonTeam[battling_pokemon].moves[1].type,
                userPokemonTeam[battling_pokemon].moves[1].category, userPokemonTeam[battling_pokemon].moves[1].accuracy);
        }
        e_pok_name.textContent = enemyPokemonTeam[enemy_battling_pokemon].name;
        e_pok_lvl.textContent = enemyPokemonTeam[enemy_battling_pokemon].level;
        e_health = enemyPokemonTeam[enemy_battling_pokemon].HP / enemyPokemonTeam[enemy_battling_pokemon].maxHP *100;
        e_pok_health_bar.style.width = e_health + "%";
        checkWIN();
        // Damage userPokemon -> opponentPokemon


        top_left_button.classList.remove("battle-button");
        top_left_button.classList.add("buttonAT");
        top_left_button.textContent = "Attack";

        top_right_button.classList.remove("battle-button");
        top_right_button.classList.add("buttonAS");
        top_right_button.textContent = "Assist";

        bottom_left_button.classList.remove("battle-button");
        bottom_left_button.classList.add("buttonB");
        bottom_left_button.textContent = "Bench";

        bottom_right_button.classList.remove("battle-button");
        bottom_right_button.classList.add("buttonF");
        bottom_right_button.textContent = "Flee";


        setTimeout(() => opponentAttack(), 1000);
        opponentAttack();
        opponent_pokemon_img.classList.remove("slide-rev");

        state = 0;
    }
    else if(state == 2){
        console.log(userPokemonTeam[1].assist.name);
        // Damage userPokemon -> opponentPokemon
        assistFlag = true;
        assistPokemonName = userPokemonTeam[1].name;
        if (userPokemonTeam[1].assist.category !== "Status") {
            calculateUserActionDamage(userPokemonTeam[1].assist.name, userPokemonTeam[1].assist.type,
                userPokemonTeam[1].assist.category, userPokemonTeam[1].assist.power,
                 userPokemonTeam[1].assist.accuracy);
        }
        else {
            calculateUserStatusAttack(userPokemonTeam[1].assist.name, userPokemonTeam[1].assist.type,
                userPokemonTeam[1].assist.category, userPokemonTeam[1].assist.accuracy);
        }
        assistFlag = false;
        assistPokemonName = "";

        e_pok_name.textContent = enemyPokemonTeam[enemy_battling_pokemon].name;
        e_pok_lvl.textContent = enemyPokemonTeam[enemy_battling_pokemon].level;
        e_health = enemyPokemonTeam[enemy_battling_pokemon].HP / enemyPokemonTeam[enemy_battling_pokemon].maxHP *100;
        e_pok_health_bar.style.width = e_health + "%";
        // Damage userPokemon -> opponentPokemon

        top_left_button.classList.remove("assist-button");
        top_left_button.classList.add("buttonAT");
        top_left_button.textContent = "Attack";

        top_right_button.classList.remove("assist-button");
        top_right_button.classList.add("buttonAS");
        top_right_button.textContent = "Assist";

        bottom_left_button.classList.remove("assist-button");
        bottom_left_button.classList.add("buttonB");
        bottom_left_button.textContent = "Bench";

        bottom_right_button.classList.remove("back-button");
        bottom_right_button.classList.add("buttonF");
        bottom_right_button.textContent = "Flee";

        state = 0;
    }
    else if(state == 3){

        if(userPokemonTeam[1].HP > 0){

            let fileName = userPokemonTeam[1].number.toString().padStart(3, "0") + userPokemonTeam[1].name + ".png"
            user_pokemon_img.src = "battle/" + fileName;
            //user_pokemon_img.style.transform = "scaleX(-1)";
            battling_pokemon = 1;
            currentUserPokemon = userPokemonTeam[battling_pokemon];
            u_pok_name.textContent = userPokemonTeam[battling_pokemon].name;
            u_pok_lvl.textContent = userPokemonTeam[battling_pokemon].level;
            u_health = userPokemonTeam[battling_pokemon].HP / userPokemonTeam[battling_pokemon].maxHP *100;
            u_pok_health_bar.style.width = u_health + "%";
            
            top_left_button.classList.remove("bench-button");
            top_left_button.classList.add("buttonAT");
            top_left_button.textContent = "Attack";
            
            top_right_button.classList.remove("bench-button");
            top_right_button.classList.add("buttonAS");
            top_right_button.textContent = "Assist";

            bottom_left_button.classList.remove("bench-button");
            bottom_left_button.classList.add("buttonB");
            bottom_left_button.textContent = "Bench";

            bottom_right_button.classList.remove("back-button");
            bottom_right_button.classList.add("buttonF");
            bottom_right_button.textContent = "Flee";
        }
        else{
            console.log(userPokemonTeam[1].name + " is defeated");

            top_left_button.classList.remove("bench-button");
            top_left_button.classList.add("buttonAT");
            top_left_button.textContent = "Attack";
            
            top_right_button.classList.remove("bench-button");
            top_right_button.classList.add("buttonAS");
            top_right_button.textContent = "Assist";

            bottom_left_button.classList.remove("bench-button");
            bottom_left_button.classList.add("buttonB");
            bottom_left_button.textContent = "Bench";

            bottom_right_button.classList.remove("back-button");
            bottom_right_button.classList.add("buttonF");
            bottom_right_button.textContent = "Flee";
        }
        
        state = 0;
    }
    else{
        console.log("goofy business");
    }
});


bottom_left_button.addEventListener("click", function(){ //Bench Button on Decision Page
    user_pokemon_img.classList.remove("slide-rev");
    if(state == 0){
        //Bench function
        opponentInit();

        top_left_button.classList.remove("buttonAT");
        top_left_button.classList.add("bench-button");
        top_left_button.textContent = userPokemonTeam[0].name;
        
        

        top_right_button.classList.remove("buttonAS");
        top_right_button.classList.add("bench-button");
        top_right_button.textContent = userPokemonTeam[1].name;
        
        
        bottom_left_button.classList.remove("buttonB");
        bottom_left_button.classList.add("bench-button");
        bottom_left_button.textContent = userPokemonTeam[2].name;
        

        bottom_right_button.classList.remove("buttonF");
        bottom_right_button.classList.add("back-button");
        bottom_right_button.textContent = "Go Back";

        state = 3;
    }
    else if(state == 1){
        user_pokemon_img.classList.add("slide-rev");
        //Attack function
        // Damage userPokemon -> opponentPokemon
        if (userPokemonTeam[battling_pokemon].moves[2].category !== "Status") {
            calculateUserActionDamage(userPokemonTeam[battling_pokemon].moves[2].name, userPokemonTeam[battling_pokemon].moves[2].type,
                userPokemonTeam[battling_pokemon].moves[2].category, userPokemonTeam[battling_pokemon].moves[2].power,
                 userPokemonTeam[battling_pokemon].moves[2].accuracy);
        }
        else {
            calculateUserStatusAttack(userPokemonTeam[battling_pokemon].moves[2].name, userPokemonTeam[battling_pokemon].moves[2].type,
                userPokemonTeam[battling_pokemon].moves[2].category, userPokemonTeam[battling_pokemon].moves[2].accuracy);
        }
        e_pok_name.textContent = enemyPokemonTeam[enemy_battling_pokemon].name;
        e_pok_lvl.textContent = enemyPokemonTeam[enemy_battling_pokemon].level;
        e_health = enemyPokemonTeam[enemy_battling_pokemon].HP / enemyPokemonTeam[enemy_battling_pokemon].maxHP *100;
        e_pok_health_bar.style.width = e_health + "%";
        u_pok_name.textContent = userPokemonTeam[battling_pokemon].name;
        u_pok_lvl.textContent = userPokemonTeam[battling_pokemon].level;
        u_health = userPokemonTeam[battling_pokemon].HP / userPokemonTeam[battling_pokemon].maxHP *100;
        u_pok_health_bar.style.width = e_health + "%";
        checkWIN();
        // Damage userPokemon -> opponentPokemon


        top_left_button.classList.remove("battle-button");
        top_left_button.classList.add("buttonAT");
        top_left_button.textContent = "Attack";


        top_right_button.classList.remove("battle-button");
        top_right_button.classList.add("buttonAS");
        top_right_button.textContent = "Assist";

        bottom_left_button.classList.remove("battle-button");
        bottom_left_button.classList.add("buttonB");
        bottom_left_button.textContent = "Bench";

        bottom_right_button.classList.remove("battle-button");
        bottom_right_button.classList.add("buttonF");
        bottom_right_button.textContent = "Flee";



        setTimeout(() => opponentAttack(), 1000);
        opponentAttack();
        opponent_pokemon_img.classList.remove("slide-rev");
        
        state = 0;
    }
    else if(state == 2){

        console.log(userPokemonTeam[2].assist.name);
        // Damage userPokemon -> opponentPokemon
        assistFlag = true;
        assistPokemonName = userPokemonTeam[2].name;
        if (userPokemonTeam[2].assist.category !== "Status") {
            calculateUserActionDamage(userPokemonTeam[2].assist.name, userPokemonTeam[2].assist.type,
                userPokemonTeam[2].assist.category, userPokemonTeam[2].assist.power,
                 userPokemonTeam[2].assist.accuracy);
        }
        else {
            calculateUserStatusAttack(userPokemonTeam[2].assist.name, userPokemonTeam[2].assist.type,
                userPokemonTeam[2].assist.category, userPokemonTeam[2].assist.accuracy);
        }
        assistFlag = false;
        assistPokemonName = "";

        e_pok_name.textContent = enemyPokemonTeam[enemy_battling_pokemon].name;
        e_pok_lvl.textContent = enemyPokemonTeam[enemy_battling_pokemon].level;
        e_health = enemyPokemonTeam[enemy_battling_pokemon].HP / enemyPokemonTeam[enemy_battling_pokemon].maxHP *100;
        e_pok_health_bar.style.width = e_health + "%";
        // Damage userPokemon -> opponentPokemon

        top_left_button.classList.remove("assist-button");
        top_left_button.classList.add("buttonAT");
        top_left_button.textContent = "Attack";

        top_right_button.classList.remove("assist-button");
        top_right_button.classList.add("buttonAS");
        top_right_button.textContent = "Assist";

        bottom_left_button.classList.remove("assist-button");
        bottom_left_button.classList.add("buttonB");
        bottom_left_button.textContent = "Bench";

        bottom_right_button.classList.remove("back-button");
        bottom_right_button.classList.add("buttonF");
        bottom_right_button.textContent = "Flee";

        state = 0;
    }
    else if(state == 3){

        if(userPokemonTeam[2].HP > 0){
            //TEST
            let fileName = userPokemonTeam[2].number.toString().padStart(3, "0") + userPokemonTeam[2].name + ".png"
            user_pokemon_img.src = "battle/" + fileName;
            //user_pokemon_img.style.transform = "scaleX(-1)";

            battling_pokemon = 2;
            currentUserPokemon = userPokemonTeam[battling_pokemon];
            u_pok_name.textContent = userPokemonTeam[battling_pokemon].name;
            u_pok_lvl.textContent = userPokemonTeam[battling_pokemon].level;
            u_health = userPokemonTeam[battling_pokemon].HP / userPokemonTeam[battling_pokemon].maxHP * 100;
            u_pok_health_bar.style.width = u_health + "%";

            top_left_button.classList.remove("bench-button");
            top_left_button.classList.add("buttonAT");
            top_left_button.textContent = "Attack";
            
            top_right_button.classList.remove("bench-button");
            top_right_button.classList.add("buttonAS");
            top_right_button.textContent = "Assist";

            bottom_left_button.classList.remove("bench-button");
            bottom_left_button.classList.add("buttonB");
            bottom_left_button.textContent = "Bench";

            bottom_right_button.classList.remove("back-button");
            bottom_right_button.classList.add("buttonF");
            bottom_right_button.textContent = "Flee";
        }
        else{
            console.log(userPokemonTeam[2].name + " is defeated");
        }
        state = 0;
    }
    else{
        console.log("goofy business");
    }
});

bottom_right_button.addEventListener("click", function(){ //Flee Button on Decision Page
    user_pokemon_img.classList.remove("slide-rev");
    opponent_pokemon_img.classList.remove("slide-rev");
    if(state == 0){
        //Flee function
        
        user_pokemon_img.classList.remove("slide-rev");
        popupBattle.classList.toggle("hidden");
        world = true;
    }
    else if(state == 1){
        user_pokemon_img.classList.add("slide-rev");
        //Attack Function
        // Damage userPokemon -> opponentPokemon
        if (userPokemonTeam[battling_pokemon].moves[3].category !== "Status") {
            calculateUserActionDamage(userPokemonTeam[battling_pokemon].moves[3].name, userPokemonTeam[battling_pokemon].moves[3].type,
                userPokemonTeam[battling_pokemon].moves[3].category, userPokemonTeam[battling_pokemon].moves[3].power,
                 userPokemonTeam[battling_pokemon].moves[3].accuracy);
        }
        else {
            calculateUserStatusAttack(userPokemonTeam[battling_pokemon].moves[3].name, userPokemonTeam[battling_pokemon].moves[3].type,
                userPokemonTeam[battling_pokemon].moves[3].category, userPokemonTeam[battling_pokemon].moves[3].accuracy);
        }
        e_pok_name.textContent = enemyPokemonTeam[enemy_battling_pokemon].name;
        e_pok_lvl.textContent = enemyPokemonTeam[enemy_battling_pokemon].level;
        e_health = enemyPokemonTeam[enemy_battling_pokemon].HP / enemyPokemonTeam[enemy_battling_pokemon].maxHP *100;
        e_pok_health_bar.style.width = e_health + "%";
        u_pok_name.textContent = userPokemonTeam[battling_pokemon].name;
        u_pok_lvl.textContent = userPokemonTeam[battling_pokemon].level;
        u_health = userPokemonTeam[battling_pokemon].HP / userPokemonTeam[battling_pokemon].maxHP *100;
        u_pok_health_bar.style.width = e_health + "%";
        checkWIN();
        // Damage userPokemon -> opponentPokemon

        top_left_button.classList.remove("battle-button");
        top_left_button.classList.add("buttonAT");
        top_left_button.textContent = "Attack";

        top_right_button.classList.remove("battle-button");
        top_right_button.classList.add("buttonAS");
        top_right_button.textContent = "Assist";

        bottom_left_button.classList.remove("battle-button");
        bottom_left_button.classList.add("buttonB");
        bottom_left_button.textContent = "Bench";

        bottom_right_button.classList.remove("battle-button");
        bottom_right_button.classList.add("buttonF");
        bottom_right_button.textContent = "Flee";

        setTimeout(() => opponentAttack(), 1000);
        opponentAttack();
        opponent_pokemon_img.classList.remove("slide-rev");

        state = 0;
    }
    else if(state == 2){
        top_left_button.classList.remove("assist-button");
        top_left_button.classList.add("buttonAT");
        top_left_button.textContent = "Attack";

        top_right_button.classList.remove("assist-button");
        top_right_button.classList.add("buttonAS");
        top_right_button.textContent = "Assist";

        bottom_left_button.classList.remove("assist-button");
        bottom_left_button.classList.add("buttonB");
        bottom_left_button.textContent = "Bench";

        bottom_right_button.classList.remove("back-button");
        bottom_right_button.classList.add("buttonF");
        bottom_right_button.textContent = "Flee";

        state = 0;
    }
    else if(state == 3){
        
        top_left_button.classList.remove("bench-button");
        top_left_button.classList.add("buttonAT");
        top_left_button.textContent = "Attack";
        
        top_right_button.classList.remove("bench-button");
        top_right_button.classList.add("buttonAS");
        top_right_button.textContent = "Assist";

        bottom_left_button.classList.remove("bench-button");
        bottom_left_button.classList.add("buttonB");
        bottom_left_button.textContent = "Bench";

        bottom_right_button.classList.remove("back-button");
        bottom_right_button.classList.add("buttonF");
        bottom_right_button.textContent = "Flee";
        
        state = 0;
    }
    else{
        console.log("goofy business");
    }
});

function opponentAttack(){
    /*console.log(currentEnemyPokemon.name);
    console.log(currentEnemyPokemon.level);
    console.log(currentEnemyPokemon.HP);
    e_pok_name.textContent = currentEnemyPokemon.name;
    e_pok_lvl.textContent = currentEnemyPokemon.level;
    e_health = currentEnemyPokemon.HP / currentEnemyPokemon.maxHP *100;
    e_pok_health_bar.style.width = e_health + "%";
    */
    opponent_pokemon_img.classList.add("slide-rev");
    var enemy_attack = 0;

    if(enemyPokemonTeam[enemy_battling_pokemon].stage == 1){
        //rand logic 0 or 1
        enemy_attack = Math.floor(Math.random() * 2); // 0-1
    }
    else if(enemyPokemonTeam[enemy_battling_pokemon].stage == 2){
        //rand logic 0 or 1 or 2
        enemy_attack = Math.floor(Math.random() * 3); // 0-1
    }
    else{
        // rand logic 0 or 1 or 2 or 3
        enemy_attack = Math.floor(Math.random() * 4); // 0-1
    }


    setTimeout(() => {
        if (enemyPokemonTeam[enemy_battling_pokemon].moves[enemy_attack].category !== "Status") {
            calculateEnemyActionDamage(enemyPokemonTeam[enemy_battling_pokemon].moves[enemy_attack].name, enemyPokemonTeam[enemy_battling_pokemon].moves[enemy_attack].type,
                enemyPokemonTeam[enemy_battling_pokemon].moves[enemy_attack].category, enemyPokemonTeam[enemy_battling_pokemon].moves[enemy_attack].power,
                enemyPokemonTeam[enemy_battling_pokemon].moves[enemy_attack].accuracy);
        }
        else {
            calculateEnemyStatusAttack(enemyPokemonTeam[enemy_battling_pokemon].moves[enemy_attack].name, enemyPokemonTeam[enemy_battling_pokemon].moves[enemy_attack].type,
                enemyPokemonTeam[enemy_battling_pokemon].moves[enemy_attack].category, enemyPokemonTeam[enemy_battling_pokemon].moves[enemy_attack].accuracy);
        }
        u_pok_name.textContent = userPokemonTeam[battling_pokemon].name;
        u_pok_lvl.textContent = userPokemonTeam[battling_pokemon].level;
        u_health = userPokemonTeam[battling_pokemon].HP / userPokemonTeam[battling_pokemon].maxHP *100;
        u_pok_health_bar.style.width = e_health + "%";
        e_pok_name.textContent = enemyPokemonTeam[enemy_battling_pokemon].name;
        e_pok_lvl.textContent = enemyPokemonTeam[enemy_battling_pokemon].level;
        e_health = enemyPokemonTeam[enemy_battling_pokemon].HP / enemyPokemonTeam[enemy_battling_pokemon].maxHP *100;
        e_pok_health_bar.style.width = e_health + "%";

    },1000);

    checkWIN();

}

function opponentInit(){

    //enemy battling pokemon
    if(opening_procedure == false){
        
        enemy_battling_pokemon = 0;
        let fileName = enemyPokemonTeam[enemy_battling_pokemon].number.toString().padStart(3, "0") + enemyPokemonTeam[enemy_battling_pokemon].name + ".png"
        opponent_pokemon_img.src = "battle/" + fileName;

        currentEnemyPokemon = enemyPokemonTeam[enemy_battling_pokemon];
        e_pok_name.textContent = enemyPokemonTeam[enemy_battling_pokemon].name;
        e_pok_lvl.textContent = enemyPokemonTeam[enemy_battling_pokemon].level;
        e_health = enemyPokemonTeam[enemy_battling_pokemon].HP / enemyPokemonTeam[enemy_battling_pokemon].maxHP *100;
        e_pok_health_bar.style.width = e_health + "%";
    }
    else{
        e_pok_name.textContent = enemyPokemonTeam[enemy_battling_pokemon].name;
        e_pok_lvl.textContent = enemyPokemonTeam[enemy_battling_pokemon].level;
        e_health = enemyPokemonTeam[enemy_battling_pokemon].HP / enemyPokemonTeam[enemy_battling_pokemon].maxHP *100;
        e_pok_health_bar.style.width = e_health + "%";
    }
}

function checkWIN(){
    var user_pokemon_alive = userPokemonTeam.length;
    var enemy_pokemon_alive = enemyPokemonTeam.length;
    userAlive = true;
    enemyAlive = true;

    for(let i=0; i<userPokemonTeam.length; i++){
        if(userPokemonTeam[i].HP <= 0){
            user_pokemon_alive -= 1;
        }
    }
    for(let i=0; i<enemyPokemonTeam.length; i++){
        if(enemyPokemonTeam[i].HP <= 0){
            enemy_pokemon_alive -= 1;
        }
    }
    if(user_pokemon_alive > 0 && enemy_pokemon_alive <= 0){ //user wins
        userAlive = true;
        enemyAlive = false;
        popupBattle.classList.toggle("hidden");
        world = true;
    }
    else if(user_pokemon_alive <= 0 && enemy_pokemon_alive > 0){ //enemy wins
        userAlive = false;
        enemyAlive = true;
        popupBattle.classList.toggle("hidden");
        world = true;
    }
    else{
        console.log("The battle continues");
    }
    if(!userAlive || !enemyAlive){
        printBattleResult(userAlive, userExitBattle, enemyExitBattle, currentUserPokemon, currentEnemyPokemon);
    }
    //printBattleResult(userAlive, userExitBattle, enemyExitBattle, currentUserPokemon, currentEnemyPokemon);
}