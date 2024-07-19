//$(document).ready(function(){ 

    //canvas settings
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    //canvas settings

    // html items other than the canvas: 
    const popupMenu = document.getElementById("popupMenu");
    const popupMenu2 = document.getElementById("popupMenu2");
    const obtainButton = document.getElementById("obtainButton");
    const exitButton = document.getElementById("exitButton");
    const healButton = document.getElementById("healButton");
    const battleButton = document.getElementById("battleButton");
    const exitButton2 = document.getElementById("exitButton2");
    const popupBattle = document.getElementById("battle-UI");

    // html items other than the canvas

    //trainer location
    var x_pos = 25;
    var y_pos = 25;
    //trainer location

    //movement settings
    const step = 2;
    var noKey = true;
    var last_move = '';
    var current_move = '';
    let isMovingUp = false;
    let isMovingDown = false;
    let isMovingLeft = false;
    let isMovingRight = false;
    const draw_delay = 20; //how long until the movement image changes (going in a single direction)
    var types = [0, 1, 2, 3]; //multiplier to get to the different individual character image positions on the sprite image
    var w_index = 0; //where a move is currently in the types array
    var w_count = 0; //how many "calls" of a key have happened (decides when to switch image) below are all the same just for different keys 
    var a_index = 0; 
    var a_count = 0;
    var s_index = 0;
    var s_count = 0;
    var d_index = 0;
    var d_count = 0;
    //movement settings

    //trainer settings
    const trainer = new Image(25, 25);
    const trainer_width = 50;
    const trainer_height = 50;
    var trainer_badges = 2;
    var world = true;
    var pokemonCaught = 1;
    var pokemonDef = 34;
    var trainersDef = 7;
    var trainer_steps=0;
    trainer.src = "images/pokemon_player.png";
    //trainer settings

    //professor oak / hoen settings
    const oak=new Image();
    const oakWidth=14;
    const oakHeight=20;
    oak.src="images/npc.png";
    let oaksrcX=0;
    let oaksrcY=0;

    const hoen=new Image();
    const hoenWidth=15;
    const hoenHeight=21;
    hoen.src="images/npc.png";
    let hoensrcX=0;
    let hoensrcY=0;

    const badge2rival = new Image();
    const badge2rivalWidth = 16;
    const badge2rivalHeight = 21;
    badge2rival.src="images/npc.png";
    let badge2rivalsrcX=0;
    let badge2rivalsrcY=0;

    const badge3rival = new Image();
    const badge3rivalWidth = 16;
    const badge3rivalHeight = 21;
    badge3rival.src="images/npc.png";
    let badge3rivalsrcX=0;
    let badge3rivalsrcY=0;

    const badge4rival = new Image();
    const badge4rivalWidth = 14;
    const badge4rivalHeight = 21;
    badge4rival.src="images/npc.png";
    let badge4rivalsrcX=0;
    let badge4rivalsrcY=0;

    const badge5rival = new Image();
    const badge5rivalWidth = 14;
    const badge5rivalHeight = 21;
    badge5rival.src="images/npc.png";
    let badge5rivalsrcX=0;
    let badge5rivalsrcY=0;

    const badge6rival = new Image();
    const badge6rivalWidth = 15;
    const badge6rivalHeight = 21;
    badge6rival.src="images/npc.png";
    let badge6rivalsrcX=0;
    let badge6rivalsrcY=0;

    const badge7rival = new Image();
    const badge7rivalWidth = 15;
    const badge7rivalHeight = 21;
    badge7rival.src="images/npc.png";
    let badge7rivalsrcX=0;
    let badge7rivalsrcY=0;

    const badge8rival = new Image();
    const badge8rivalWidth = 13;
    const badge8rivalHeight = 21;
    badge8rival.src="images/npc.png";
    let badge8rivalsrcX=0;
    let badge8rivalsrcY=0;

    const champion = new Image();
    const championWidth = 15;
    const championHeight = 20;
    champion.src="images/npc.png";
    let championsrcX=0;
    let championsrcY=0;
    //professor oak / hoen settings

    //grass settings
    const grass = new Image(25, 25);
    const grass_width = 25;
    const grass_height = 25;
    grass.src = "images/pokemon_grass.png";
    //grass settings

    //tree settings
    const tree = new Image(25, 25);
    const tree_width = 75;
    const tree_height = 75;
    tree.src = "images/pokemon_tree.png"
    //tree settings

    //keys settings
    const key = new Image(25, 25);
    const key_width = 60;
    const key_height = 40;
    key.src = "images/keys.png"

    const ikey = new Image(25,25);
    const ikey_width = 40;
    const ikey_height = 40;
    ikey.src = "images/keys.png";
    //keys settings

    //generic
    var encounterSteps = Math.floor(Math.random() * 100);
    var encounterReset = false;
    const POKEMON_PER_PAGE = 15;
    var currentPage = 1;
    var musicPlaying = false;


    document.addEventListener('keydown', function(event){
        noKey = false;
        console.log(world);
        if(world){
            switch (event.key){
                case 'w':
                    playMusic();
                    inGrass();
                    last_move = 'w';
                    current_move = 'w';
                    isMovingUp = true;
                    break;

                case 'a':
                    playMusic();
                    inGrass();
                    last_move = 'a';
                    current_move = 'a';
                    isMovingLeft = true;
                    break;

                case 's':
                    playMusic();
                    inGrass();
                    main();
                    last_move = 's';
                    current_move = 's';
                    isMovingDown = true;
                    break;

                case 'd':
                    playMusic();
                    inGrass();
                    last_move = 'd';
                    current_move = 'd';
                    isMovingRight = true;
                    break;

                case 'e':
                    if(y_pos >= 230 && y_pos <= 310 && x_pos >= 40 && x_pos <= 160){
                        ctx.drawImage(key, 270, 40, 100, 45, 135, 250, key_width, key_height);
                        console.log("Interacting with Hoen")
                        hoenInteraction();
                    }
                    else if(y_pos >= 265 && y_pos <= 340 && x_pos >= 190 && x_pos <= 275){
                        ctx.drawImage(key, 270, 40, 100, 45, 280, 290, key_width, key_height);
                        console.log("Interacting with Oak")
                        oakInteraction();
                        
                    }
                    else{
                        console.log("Not in range of NPC's")
                    }
                    break;
                default:
                    current_move = '/';
                    break;

            }
        }
    });

    //call playMusic when trainer moves, call playMusic when battle starts, set inBattle true starting battle, set musicPlaying to false after battle, set inBattle false after battle
    function playMusic() {
        var audioPlayer = document.getElementById('audioPlayer');
        if(!musicPlaying || inBattle){
            if(inBattle){
                if(wildBattle){
                    audioPlayer.src = "sound/wild.mp3";
                }else{
                    if(trainersDef < 8){
                        audioPlayer.src = "sound/trainer.mp3";
                    }
                    else if(trainersDef == 8){
                        audioPlayer.src = "sound/champ.mp3";
                    }else{
                        audioPlayer.src = "sound/reg.mp3";
                    }
                }
            }else{
                audioPlayer.src = "sound/normal.mp3";
            }
            audioPlayer.loop = true;
            audioPlayer.volume = 0.05;

            audioPlayer.play();
            musicPlaying = true;
        }
    }

    function playEffect(type){
        var audioPlayer = document.getElementById('soundEffect');
        if(type == 'Physical'){
            audioPlayer.src = "sound/Physical.mp3";
        }else if(type == 'Special'){
            audioPlayer.src = "sound/Special.mp3";
        }else{
            audioPlayer.src = "sound/Status.mp3";
        }
        audioPlayer.volume = 0.2;

        audioPlayer.play();
    }

    

    function drawBackgroundOutside(){ //Outdoors area of the game
        ctx.fillStyle = "rgb(173, 235, 173)"; //soft green color
        ctx.fillRect(0, 0, width, height);
        //ctx.drawImage(Image, img start width, image start height, image end width, image end height, x position on canvas, y position on canvas, image width, image height) all in pixels
        
        // TOP LEFT GRASS FIELD
        // 18x6 box of grass
        for(let i=0; i<19; i++){
            ctx.drawImage(grass, 0, 0, 400, 400, 100 + (grass_width * i), 0, grass_width, grass_height);
            ctx.drawImage(grass, 0, 0, 400, 400, 100 + (grass_width * i), 25, grass_width, grass_height);
            ctx.drawImage(grass, 0, 0, 400, 400, 100 + (grass_width * i), 50, grass_width, grass_height);
            ctx.drawImage(grass, 0, 0, 400, 400, 100 + (grass_width * i), 75, grass_width, grass_height);
            ctx.drawImage(grass, 0, 0, 400, 400, 100 + (grass_width * i), 100, grass_width, grass_height);
            ctx.drawImage(grass, 0, 0, 400, 400, 100 + (grass_width * i), 125, grass_width, grass_height);    
        }
        //adding some character to the edges of the above grass box
        ctx.drawImage(grass, 0, 0, 400, 400, 100, 150, grass_width, grass_height);
        ctx.drawImage(grass, 0, 0, 400, 400, 100, 175, grass_width, grass_height);
        ctx.drawImage(grass, 0, 0, 400, 400, 125, 150, grass_width, grass_height);
        ctx.drawImage(grass, 0, 0, 400, 400, 125, 175, grass_width, grass_height);
        ctx.drawImage(grass, 0, 0, 400, 400, 150, 150, grass_width, grass_height);
        for(let i=1; i<7; i++){
            ctx.drawImage(grass, 0, 0, 400, 400, 250 + (grass_width * i), 150, grass_width, grass_height);
        }
        // TOP LEFT GRASS FIELD

        // Bottom LEFT GRASS PATCH

        for(let i=1; i<10; i++){
            ctx.drawImage(grass, 0, 0, 400, 400, 0 + (grass_width * i), 435, grass_width, grass_height);
            ctx.drawImage(grass, 0, 0, 400, 400, 0 + (grass_width * i), 460, grass_width, grass_height);
            ctx.drawImage(grass, 0, 0, 400, 400, 0 + (grass_width * i), 485, grass_width, grass_height);
            ctx.drawImage(grass, 0, 0, 400, 400, 0 + (grass_width * i), 510, grass_width, grass_height);
            ctx.drawImage(grass, 0, 0, 400, 400, 0 + (grass_width * i), 535, grass_width, grass_height);
            ctx.drawImage(grass, 0, 0, 400, 400, 0 + (grass_width * i), 560, grass_width, grass_height);
        }
        // Bottom LEFT GRASS PATCH

        // Path Lining Grass
        for(let i=1; i<14; i++){
            ctx.drawImage(grass, 0, 0, 400, 400, 500 + (grass_width * i), 275, grass_width, grass_height);
            ctx.drawImage(grass, 0, 0, 400, 400, 500 + (grass_width * i), 300, grass_width, grass_height);
            ctx.drawImage(grass, 0, 0, 400, 400, 500 + (grass_width * i), 325, grass_width, grass_height);
        }
        // Path Lining Grass

        // PATH
        ctx.fillStyle = "rgb(204, 153, 102)"; //light brown
        ctx.fillRect(25, 0, 75, 350);
        ctx.fillStyle = "rgb(204, 153, 102)";
        ctx.fillRect(25, 350, width, 75);
        // PATH


        // TOP RIGHT FOREST
        for(let i=1; i<13; i++){
            // width (1196 - 10 - 600)
            ctx.drawImage(tree, 0, 0, 200, 200, width-10-(i*50), 0, tree_width, tree_height);
            ctx.drawImage(tree, 0, 0, 200, 200, width-10-(i*50), 50, tree_width, tree_height);
            ctx.drawImage(tree, 0, 0, 200, 200, width-10-(i*50), 100, tree_width, tree_height);
        }
        for(let i=1; i<4; i++){
            ctx.drawImage(tree, 0, 0, 200, 200, width-10-(i*50), 150, tree_width, tree_height);
            ctx.drawImage(tree, 0, 0, 200, 200, width-10-(i*50), 200, tree_width, tree_height);
            ctx.drawImage(tree, 0, 0, 200, 200, width-10-(i*50), 250, tree_width, tree_height);
        }
        ctx.drawImage(tree, 0, 0, 200, 200, width-10-200, 150, tree_width, tree_height);
        ctx.drawImage(tree, 0, 0, 200, 200, width-10-250, 150, tree_width, tree_height);
        // TOP RIGHT FOREST

        // TREE'S BELOW PATH
        for(let i=1; i<16; i++){
            ctx.drawImage(tree, 0, 0, 200, 200, width-10-(i*50), 415, tree_width, tree_height);
            ctx.drawImage(tree, 0, 0, 200, 200, width-10-(i*50), 450, tree_width, tree_height);
        }
        ctx.drawImage(tree, 0, 0, 200, 200, width-10-200, 450, tree_width, tree_height);
        ctx.drawImage(tree, 0, 0, 200, 200, width-10-250, 450, tree_width, tree_height);
        // TREE'S BELOW PATH

        // GRASS BELOW PATH
        for(let i=0; i<31; i++){
            ctx.drawImage(grass, 0, 0, 400, 400, 410 + (grass_width * i), 535, grass_width, grass_height);
            ctx.drawImage(grass, 0, 0, 400, 400, 410 + (grass_width * i), 560, grass_width, grass_height);
            
        }
        // GRASS BELOW PATH
        
    };

    function drawNPCs() {
        oaksrcX=oakWidth*36+6;
        oaksrcY=oakHeight*9+14;
        ctx.drawImage(oak, oaksrcX, oaksrcY,oakWidth,oakHeight,250,315,oakWidth*1.65,oakHeight*1.65);
        //temp below
        //ctx.drawImage(oak, oaksrcX, oaksrcY,oakWidth,oakHeight,300,315,oakWidth*1.65,oakHeight*1.65);
        //temp above
        if (trainer_badges<1) {
            hoensrcX=hoenWidth*9+4;
            hoensrcY=hoenHeight-12;
            ctx.drawImage(hoen, hoensrcX, hoensrcY,hoenWidth,hoenHeight,105,275,hoenWidth*1.65,hoenHeight*1.65);
        } else if (trainer_badges <2) {
            badge2rivalsrcX=badge2rivalWidth*19-7;
            badge2rivalsrcY=badge2rivalHeight-12;
            ctx.drawImage(badge2rival, badge2rivalsrcX, badge2rivalsrcY, badge2rivalWidth,badge2rivalHeight,105,275,badge2rivalWidth*1.65,badge2rivalHeight*1.65);
        } else if (trainer_badges <3) {
            badge3rivalsrcX=badge3rivalWidth*5+7;
            badge3rivalsrcY=badge3rivalHeight*3-10;
            ctx.drawImage(badge3rival, badge3rivalsrcX, badge3rivalsrcY, badge3rivalWidth,badge3rivalHeight,105,275,badge3rivalWidth*1.65,badge3rivalHeight*1.65);
        } else if (trainer_badges<4) {
            badge4rivalsrcX=badge4rivalWidth*9-3;
            badge4rivalsrcY=badge4rivalHeight*6-5;
            ctx.drawImage(badge4rival, badge4rivalsrcX, badge4rivalsrcY, badge4rivalWidth,badge4rivalHeight,105,275,badge4rivalWidth*1.65,badge4rivalHeight*1.65);
        } else if (trainer_badges < 5) {
            badge5rivalsrcX=badge5rivalWidth*9+2;
            badge5rivalsrcY=badge5rivalHeight*8;
            ctx.drawImage(badge5rival, badge5rivalsrcX, badge5rivalsrcY, badge5rivalWidth,badge5rivalHeight,105,275,badge5rivalWidth*1.65,badge5rivalHeight*1.65);
        } else if (trainer_badges <6) {
            badge6rivalsrcX=badge6rivalWidth*9+4;
            badge6rivalsrcY=badge6rivalHeight*11+8;
            ctx.drawImage(badge6rival, badge6rivalsrcX, badge6rivalsrcY, badge6rivalWidth,badge6rivalHeight,105,275,badge6rivalWidth*1.65,badge6rivalHeight*1.65);
        } else if (trainer_badges < 7) {
            badge7rivalsrcX=badge7rivalWidth*27-3;
            badge7rivalsrcY=badge7rivalHeight*11+8;
            ctx.drawImage(badge7rival, badge7rivalsrcX, badge7rivalsrcY, badge7rivalWidth,badge7rivalHeight,105,275,badge7rivalWidth*1.65,badge7rivalHeight*1.65);
        } else  if (trainer_badges < 8) {
            badge8rivalsrcX=badge8rivalWidth*35-7;
            badge8rivalsrcY=badge8rivalHeight*11+8;
            ctx.drawImage(badge8rival, badge8rivalsrcX, badge8rivalsrcY, badge8rivalWidth,badge8rivalHeight,105,275,badge8rivalWidth*1.65,badge8rivalHeight*1.65);
        } else {
            championsrcX=championWidth*23;
            championsrcY=championHeight*6+3;
            ctx.drawImage(champion, championsrcX, championsrcY, championWidth,championHeight,105,275,championWidth*1.65,championHeight*1.65);   
        }
    };

     function drawInteractionButtons(){
        if(y_pos >= 230 && y_pos <= 310 && x_pos >= 40 && x_pos <= 160){
            ctx.drawImage(key, 270, 40, 100, 45, 135, 250, key_width, key_height);
        }
        else if(y_pos >= 265 && y_pos <= 340 && x_pos >= 190 && x_pos <= 275){
            ctx.drawImage(key, 270, 40, 100, 45, 280, 290, key_width, key_height);
        } else if (y_pos >= 0 && y_pos <= 50 && x_pos >= 0 && x_pos <= 50) {
            ctx.drawImage(ikey,135, 85, 45, 45,75, 25, ikey_width, ikey_height);
        }
    };

    // Oak Interaction functions:
    function oakInteraction(){
        popupMenu.classList.toggle("hidden");
    };

    function loadPokemonOptions(add) {
        let pokemonOptionsDiv = document.getElementById('pokemonOptions');
        pokemonOptionsDiv.innerHTML = ''; // Clear the div contents
        let bigdiv = document.getElementById('pokemonReleaseInterface');
        bigdiv.style.display = "block";
        userPokemonTeam.forEach((pokemon, index) => { 
            let pokemonButton = document.createElement('button');
            pokemonButton.textContent = `Release ${pokemon.name}`;
            pokemonButton.addEventListener('click', function() {
                releasePokemon(index, add);
            });
            pokemonOptionsDiv.appendChild(pokemonButton);
        });
    }
    
    function loadNewPokemonOptions() {
        let newPokemonOptionsDiv = document.getElementById('pokemonSelectOptions');
        newPokemonOptionsDiv.innerHTML = ''; // Clear the div contents
        let start = (currentPage - 1) * POKEMON_PER_PAGE;
        let end = Math.min(currentPage * POKEMON_PER_PAGE, 151);
        for (let i = start; i < end; i++) {
            let pokemonButton = document.createElement('button');
            pokemonButton.textContent = `Select Pokémon ${i + 1}`; 
            pokemonButton.addEventListener('click', function() {
                addNewPokemon(i + 1); 
            });
            newPokemonOptionsDiv.appendChild(pokemonButton);
        }
    }
    
    

    function loadPageButtons() {
        let pageButtonsDiv = document.getElementById('pageButtons');
        pageButtonsDiv.innerHTML = ''; // Clear the div first
    
        if (currentPage > 1) {
            let prevButton = document.createElement('button');
            prevButton.textContent = 'Previous';
            prevButton.addEventListener('click', function() {
                currentPage--;
                loadNewPokemonOptions();
                loadPageButtons();
            });
            pageButtonsDiv.appendChild(prevButton);
        }
    
        if (currentPage < Math.ceil(151 / POKEMON_PER_PAGE)) {
            let nextButton = document.createElement('button');
            nextButton.textContent = 'Next';
            nextButton.addEventListener('click', function() {
                currentPage++;
                loadNewPokemonOptions();
                loadPageButtons();
            });
            pageButtonsDiv.appendChild(nextButton);
        }
    }
    

    async function addNewPokemon(pokemonNumber) {
        let newPokemon = new Pokemon(pokemonNumber, 1);
        await newPokemon.init();
        userPokemonTeam.push(newPokemon);
        document.getElementById('newPokemonOptions').style.display = "none"; // Hide the parent div
        document.getElementById('pokemonOptions').innerHTML = '';
        loadPokemonOptions(true); // Refresh the Pokémon options
    }
    
    function releasePokemon(index, shouldAddNew) {
        userPokemonTeam.splice(index, 1);
        document.getElementById('pokemonOptions').innerHTML = '';
        loadPokemonOptions(shouldAddNew);
    
        if (shouldAddNew) {
            // Show options for new Pokémon
            let newPokemonOptionsDiv = document.getElementById('pokemonSelectOptions');
            let pokemonDiv = document.getElementById('newPokemonOptions')
            newPokemonOptionsDiv.innerHTML = '';
            pokemonDiv.style.display = "block";
            currentPage = 1;
            loadNewPokemonOptions();
    
            // Show page buttons
            loadPageButtons();
        } else {
            userPokemonTeam.push(enemyPokemonTeam[0]);
            let bigdiv = document.getElementById('pokemonReleaseInterface');
            bigdiv.style.display = "none"; // Hide the release interface after catching the Pokémon
        }
    }
    
    
    
    
    
    
    document.addEventListener("DOMContentLoaded", function() {
        obtainButton.addEventListener("click", function(){
            loadPokemonOptions(true);
            document.getElementById('goBack').addEventListener('click', function() {
                let bigdiv = document.getElementById('pokemonReleaseInterface');
                bigdiv.style.display = "none";
                popupMenu.classList.toggle("hidden"); 
            });
        });
    
        healButton.addEventListener("click", function(){
            dialog("Your pokemon have been healed!");
            userPokemonTeam.forEach(pokemon => {
                pokemon.HP = pokemon.maxHP;
            });
        });
    
        exitButton.addEventListener("click", function(){
            popupMenu.classList.toggle("hidden");
        });
        // End
      });
    

    // Hoen Interaction functions:
    function hoenInteraction(){
        popupMenu2.classList.toggle("hidden");
    };

    battleButton.addEventListener("click", function(){
        gsap.to('#overlap', {
            opacity: 1,
            repeat: 4,
            yoyo: true,
            duration: 0.2,
            onComplete() {
              gsap.to('#overlap', {
                opacity: 0,
                duration: 10,
              })
            }
          })
        setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
        world = false;
        playMusic();        
        setTimeout(() => fight(), 1000);
    });

    exitButton2.addEventListener("click", function(){
        popupMenu2.classList.toggle("hidden");
    });
    //end



    function inGrass() {
        //Double check Positional Math
        if(y_pos <= 125 && x_pos >= 75 && x_pos <= 575) {
            if (trainer_badges < 2) {
                console.log("Easy Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);

                    }
                }
            } else if (trainer_badges < 4) {
                console.log("Medium Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else if (trainer_badges < 6) {
                console.log("Hard Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else {
                console.log("Extreme Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            }
        } else if (y_pos >= 250 && y_pos <= 315 && x_pos >= 500 && x_pos <= 825) {
            if (trainer_badges < 2) {
                console.log("Easy Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else if (trainer_badges < 4) {
                console.log("Medium Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else if (trainer_badges < 6) {
                console.log("Hard Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else {
                console.log("Extreme Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            }
        } else if (y_pos >= 510 && y_pos <= 560 && x_pos >= 385 && x_pos <= 1185) {
            if (trainer_badges < 2) {
                console.log("Easy Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else if (trainer_badges < 4) {
                console.log("Medium Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else if (trainer_badges < 6) {
                console.log("Hard Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else {
                console.log("Extreme Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            }
        } else if (y_pos >= 400 && y_pos <= 560 && x_pos >= 5 && x_pos <= 225) {
            if (trainer_badges < 2) {
                console.log("Easy Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else if (trainer_badges < 4) {
                console.log("Medium Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else if (trainer_badges < 6) {
                console.log("Hard Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else {
                console.log("Extreme Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            }
        } else if (y_pos >= 140 && y_pos <= 165 && x_pos >= 75 && x_pos <= 125) {
            if (trainer_badges < 2) {
                console.log("Easy Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else if (trainer_badges < 4) {
                console.log("Medium Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else if (trainer_badges < 6) {
                console.log("Hard Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else {
                console.log("Extreme Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            }
        } else if (y_pos >= 125 && y_pos <= 140 && x_pos >=250 && x_pos <= 405) {
            if (trainer_badges < 2) {
                console.log("Easy Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps= 0;
                        console.log(encounterSteps);
                    }
                }
            } else if (trainer_badges < 4) {
                console.log("Medium Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else if (trainer_badges < 6) {
                console.log("Hard Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            } else {
                console.log("Extreme Grass");
                trainer_steps++;
                if (trainer_steps >=  encounterSteps) {
                    console.log("POKEMON FOUND!");
                    gsap.to('#overlap', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                          gsap.to('#overlap', {
                            opacity: 0,
                            duration: 10,
                          })
                        }
                      })
                    setTimeout(() => popupBattle.classList.toggle("hidden"), 1000);
                    world = false;
                    playMusic();
                    
                    setTimeout(() => fight(), 1000);
                    if (encounterReset == false) {
                        console.log(encounterSteps);
                        encounterSteps = Math.floor(Math.random() * 100);
                        trainer_steps = 0;
                        console.log(encounterSteps);
                    }
                }
            }
        }
    }


    document.addEventListener('keyup', function(event){
        noKey = true;
        switch (event.key) {
            case 'w':
              isMovingUp = false;
              break;
            case 'a':
              isMovingLeft = false;
              break;
            case 's':
              isMovingDown = false;
              break;
            case 'd':
              isMovingRight = false;
              break;
          }
    });

    function redraw(){
        ctx.clearRect(0,0, width, height);
        
        if(isMovingUp){
            if(y_pos - step <= 0){ //top of canvas (expands downwards)
                y_pos -= 0;
            }
            //TREE BARRIERS (down -> up)
            else if(y_pos <= 155 && x_pos >= 560){
                y_pos -= 0;
            }
            else if(y_pos <= 210 && x_pos >= 900){
                y_pos -= 0;
            }
            else if(y_pos <= 310 && x_pos >= 1010){
                y_pos -= 0;
            }
            else if(y_pos >= 410 && y_pos <= 510 && x_pos >= 410){
                y_pos -= 0;
            }
            //TREE BARRIERS (down -> up)
            //NPC BARRIERS
            else if(y_pos >= 280 && y_pos <= 330 && x_pos >= 220 && x_pos <= 260){ //oak
                y_pos -= 0;
            }
            else if(y_pos >= 260 && y_pos <= 290 && x_pos >= 80 && x_pos <= 110){ //hoan
                y_pos -= 0;
            }
            //NPC BARRIERS
            else{
                y_pos -= step;
            }
        } else if(isMovingLeft){
            if(x_pos - step <= 0){ //left of canvas
                x_pos -= 0;
            }
            //NPC BARRIERS
            else if(y_pos >= 280 && y_pos <= 315 && x_pos >= 250 && x_pos <= 270){ //oak
                x_pos += 0;
            }
            else if(y_pos >= 240 && y_pos <= 280 && x_pos >= 105 && x_pos <= 125){ //hoan
                x_pos += 0;
            }
            //NPC BARRIERS
            else{
                x_pos -= step;
            }
        } else if(isMovingDown){
            if(y_pos + step >= (height - trainer_height)){ //bottom of canvas including the height since the pos is the top left of the image
                y_pos += 0;
            }
            //TREE BARRIERS (up -> down)
            else if(y_pos >= 385 && y_pos <= 460 && x_pos >= 410){
                y_pos += 0;
            }
            //TREE BARRIERS
            //NPC BARRIERS
            else if(y_pos >= 270 && y_pos <= 310 && x_pos >= 220 && x_pos <= 260){ //oak
                y_pos -= 0;
            }
            else if(y_pos >= 240 && y_pos <= 270 && x_pos >= 80 && x_pos <= 110){ //hoan
                y_pos -= 0;
            }
            //NPC BARRIERS
            else{
                y_pos += step;
            }
        } else if(isMovingRight){
            if(x_pos + step >= (width - trainer_width)){ //right of canvas
                x_pos += 0;
            }
            //TREE BARRIERS (left -> right)
            else if(y_pos <= 150 && x_pos >= 550){ //part of top right forest
                x_pos += 0;
            }
            else if(y_pos <= 200 && x_pos >= 900){ //part of top right forest
                x_pos += 0;
            }
            else if(y_pos <= 300 && x_pos >= 1000){ //part of top right forest
                x_pos += 0;
            }

            else if(y_pos >= 400 && y_pos <= 500 && x_pos >= 400){
                x_pos += 0;
            }
            //TREE BARRIERS (left -> right)
            // NPC BARRIERS (left -> right)
            else if(y_pos >= 280 && y_pos <= 315 && x_pos >= 210 && x_pos <= 220){ //oak
                x_pos += 0;
            }
            else if(y_pos >= 240 && y_pos <= 280 && x_pos >= 65 && x_pos <= 75){ //hoan
                x_pos += 0;
            }
            //NPC BARRIERS (left -> right)

            else{ //Moving Is fine (:
                x_pos += step;
            }
        }else{
            x_pos += 0;
            y_pos += 0;
        }

        if(noKey == true){ //Standing still images (facing different directions)
            if(last_move == 's' || last_move == ''){
                drawBackgroundOutside();
                drawNPCs();
                drawInteractionButtons();
                ctx.drawImage(trainer, 0, 0, 75, 75, x_pos, y_pos, trainer_width, trainer_height);
            }
            else if(last_move == 'd'){
                drawBackgroundOutside();
                drawNPCs();
                drawInteractionButtons();
                ctx.drawImage(trainer, 0, 64*2, 75, 75, x_pos, y_pos, trainer_width, trainer_height);
            }
            else if(last_move == 'w'){
                drawBackgroundOutside();
                drawNPCs();
                drawInteractionButtons();
                ctx.drawImage(trainer, 0, 64*3, 75, 75, x_pos, y_pos, trainer_width, trainer_height);
            }
            else if(last_move == 'a'){
                drawBackgroundOutside();
                drawNPCs();
                drawInteractionButtons();
                ctx.drawImage(trainer, 0, 64, 75, 75, x_pos, y_pos, trainer_width, trainer_height);
            }
            
        } // This else "works" but if you hold a wrong key it will have the character walk in place? needs a fix
        else{
            if (current_move == '/') {
                if (last_move == 's' && current_move == '/'){
                    drawBackgroundOutside();
                    drawNPCs();
                    drawInteractionButtons();
                    ctx.drawImage(trainer, 0, 0, 75, 75, x_pos, y_pos, trainer_width, trainer_height);
                }
                else if(last_move == 'd' && current_move == '/'){
                    drawBackgroundOutside();
                    drawNPCs();
                    drawInteractionButtons();
                    ctx.drawImage(trainer, 0, 64*2, 75, 75, x_pos, y_pos, trainer_width, trainer_height);
                }
                else if(last_move == 'w' && current_move == '/'){
                    drawBackgroundOutside();
                    drawNPCs();
                    drawInteractionButtons();
                    ctx.drawImage(trainer, 0, 64*3, 75, 75, x_pos, y_pos, trainer_width, trainer_height);
                }
                else if(last_move == 'a' && current_move == '/'){
                    drawBackgroundOutside();
                    drawNPCs();
                    drawInteractionButtons();
                    ctx.drawImage(trainer, 0, 64, 75, 75, x_pos, y_pos, trainer_width, trainer_height);
                } else {
                    drawBackgroundOutside();
                    drawNPCs();
                    drawInteractionButtons();
                    ctx.drawImage(trainer, 0, 0, 75, 75, x_pos, y_pos, trainer_width, trainer_height);
                }
            }
            else if (last_move == 's'){
                drawBackgroundOutside();
                drawNPCs();
                drawInteractionButtons();
                ctx.drawImage(trainer, types[s_index] * 64, 0, 75, 75, x_pos, y_pos, trainer_width, trainer_height);

                s_count++;
                if(s_count >= draw_delay){
                    s_count = 0;
                    s_index++;
                    if(s_index >= types.length){
                        s_index = 0;
                    }
                }
            }
            else if(last_move == 'd'){        
                drawBackgroundOutside();
                drawNPCs();
                drawInteractionButtons();
                ctx.drawImage(trainer, types[d_index] * 64, 64*2, 75, 75, x_pos, y_pos, trainer_width, trainer_height);

                d_count++;
                if(d_count >= draw_delay){
                    d_count = 0;
                    d_index++;
                    if(d_index >= types.length){
                        d_index = 0;
                    }
                }
            }
            else if(last_move == 'w'){
                drawBackgroundOutside();
                drawNPCs();
                drawInteractionButtons();
                ctx.drawImage(trainer, types[w_index] * 64, 64*3, 75, 75, x_pos, y_pos, trainer_width, trainer_height);
                w_count++;
                if(w_count >= draw_delay){
                    w_count = 0;
                    w_index++;
                    if(w_index >= types.length){
                        w_index = 0;
                    }
                }

            }
            else if(last_move == 'a'){
                drawBackgroundOutside();
                drawNPCs();
                drawInteractionButtons();
                ctx.drawImage(trainer, types[a_index] * 64, 64, 75, 75, x_pos, y_pos, trainer_width, trainer_height);

                a_count++;
                if(a_count >= draw_delay){
                    a_count = 0;
                    a_index++;
                    if(a_index >= types.length){
                        a_index = 0;
                    }
                }
            }
        }
        requestAnimationFrame(redraw); //Callback function call
    }
    redraw(); //Function call
//});

const menu = document.getElementById("menu");
const team = document.getElementById("team");
const user = document.getElementById("user");
const evolveDiv = document.getElementById("evolveDiv");
const infoElement = document.getElementById("info");
const options = Array.from(document.querySelectorAll('.option'));
const tabs = Array.from(document.querySelectorAll('.tab'));

window.onload = function() {
  const menuEventListener = function(e) {
    // battle activated
    if(e.key == 'f'){
        inBattle = true;
        //wildBattle true/false
        playMusic();
        fight();
    }
    
    if (e.key == 'i') {
      // console.log("yo");
      if (menu.style.display != "none") {
        menu.style.display = "none";
        world = true;
      } else if(team.style.display == "none" && user.style.display == "none" && evolveDiv.style.display == "none"){
        menu.style.display = "flex";
        world = false;
        let currentIndex = 0;

        options[currentIndex].focus();
        options[currentIndex].querySelector('.arrow').style.animation = "arrowBlink 1s infinite steps(1)";
        options[currentIndex + 1].querySelector('.arrow').style.animation = "none";
        options[currentIndex + 2].querySelector('.arrow').style.animation = "none";
        const keydownEventListener = function(event) {
          const key = event.key;
          if(key === 'Escape'){
            document.removeEventListener('keydown', keydownEventListener);
          }
          if ((key === 'ArrowDown' || key === 's') && currentIndex < options.length - 1) {
            event.preventDefault();
            options[currentIndex].blur();
            options[currentIndex].querySelector('.arrow').style.animation = "none";
            currentIndex++;
            options[currentIndex].focus();
            options[currentIndex].querySelector('.arrow').style.animation = "arrowBlink 1s infinite steps(1)";
          } else if ((key === 'ArrowUp' || key === 'w') && currentIndex > 0) {
            event.preventDefault();
            options[currentIndex].blur();
            options[currentIndex].querySelector('.arrow').style.animation = "none";
            currentIndex--;
            options[currentIndex].focus();
            options[currentIndex].querySelector('.arrow').style.animation = "arrowBlink 1s infinite steps(1)";
          } else if (key === 'Enter') {
            event.preventDefault();
            switch (currentIndex) {
              case 0:
                console.log("view team");
                menu.style.display = "none";
                viewTeam();
                document.removeEventListener('keydown', keydownEventListener);
                break;
              case 1:
                console.log("user stats");
                menu.style.display = "none";
                viewStats();
                document.removeEventListener('keydown', keydownEventListener);
                break;
              case 2:
                console.log("quit");
                menu.style.display = "none";
                world = true;
                document.removeEventListener('keydown', keydownEventListener);
                break;
            }
          }
        };
        document.addEventListener('keydown', keydownEventListener);
      }
    }
    if (e.key == "Escape") {
      if (menu.style.display != "none") {
        menu.style.display = "none";
        world = true;
      }
      if(team.style.display != "none"){
        team.style.display = "none";
        world = true;
      }
    }
  };

  document.addEventListener('keydown', menuEventListener);
};

function viewStats(){
    user.style.display = "flex";
    let rightTexts = ["Red", pokemonDef, pokemonCaught, trainersDef];
    const rightDivs = document.querySelectorAll('.stat .right');
    rightDivs.forEach((rightDiv, index) => {
        rightDiv.textContent = rightTexts[index];
    });
    const badgeDivs = document.querySelectorAll('.badge');
    function updateBadge(){
      let trainersDefeated = Number(trainer_badges); // Convert to a number for comparison
      badgeDivs.forEach((badgeDiv, index) => {
        if (index < trainersDefeated) {
          badgeDiv.style.filter = 'none'; // Remove the grayscale filter
        } else {
          badgeDiv.style.filter = 'grayscale(100%)'; // Apply the grayscale filter
        }
      });
    }
    const keydownEventListener = function(event) {
      const key = event.key;
      if(key == "Escape"){
          document.getElementById("user").style.display = "none";
          world = true;
          document.removeEventListener('keydown', keydownEventListener);
      }
    }
    document.addEventListener('keydown', keydownEventListener);
    updateBadge();
}

function performEvolution(pokemon1, pokemon2) {
  const pokemon1Div = document.getElementById('pokemon1');
  const pokemon2Div = document.getElementById('pokemon2');
  let fileName1 = pokemon1.number.toString().padStart(3, "0") + pokemon1.name + ".png";
    let fileName2 = pokemon2.number.toString().padStart(3, "0") + pokemon2.name + ".png";
    pokemon1Div.style.backgroundImage = "url('sprite/" + fileName1 + "')";
    pokemon2Div.style.backgroundImage = "url('sprite/" + fileName2 + "')";
  pokemon2Div.style.filter = "brightness(0) invert(1)";
  pokemon1Div.style.filter = "brightness(0) invert(1)";
  pokemon2Div.classList.add('scale-down');
  evolveDiv.style.display = 'flex'; // Show evolveDiv

  let cycle = 0;
  const totalCycles = 20;
  let intervalTime = 300; // Start interval time

  const animate = () => {
    if (cycle === totalCycles) {
      clearInterval(intervalId);
      pokemon2Div.style.filter = 'brightness(1)'; // Make the final image full color
      pokemon2Div.classList.add('scale-up');
      return;
    }

    if (cycle % 2 === 0) {
      pokemon1Div.classList.add('scale-up');
      pokemon1Div.classList.remove('scale-down');
      pokemon2Div.classList.add('scale-down');
      pokemon2Div.classList.remove('scale-up');
    } else {
      pokemon2Div.classList.add('scale-up');
      pokemon2Div.classList.remove('scale-down');
      pokemon1Div.classList.add('scale-down');
      pokemon1Div.classList.remove('scale-up');
    }

    cycle++;
    intervalTime -= 10; // Decrease the interval time each cycle
    clearInterval(intervalId);
    intervalId = setInterval(animate, intervalTime); // Update the interval with the new time
  };

  let intervalId = setInterval(animate, intervalTime);

  let msg = "Congrats! Your " + pokemon1.name + " evolved into a " + pokemon2.name + "!"
  setTimeout(() => dialog(msg), 5000);

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === 'Escape') {
      evolveDiv.style.display = 'none'; // Hide evolveDiv
      world = true;
      clearInterval(intervalId); // Stop animation
    }
  });
}

  document.addEventListener('keydown', function(event) {
    const dialogBox = document.getElementById('dialogBox');
    if (event.key === 'Enter' || event.key === 'Escape') {
      dialogBox.innerHTML = ''; // Clear dialog text
    }
  });

  document.getElementById('dialogBox').addEventListener('click', function() {
    this.innerHTML = ''; // Clear dialog text
  });
  
  
  function dialog(text) {
    const dialogBox = document.getElementById('dialogBox');
    dialogBox.innerHTML += text + "<br>"; // Appends text with a line break
    dialogBox.scrollTop = dialogBox.scrollHeight; // Auto-scroll to bottom
  }
  
  

function viewTeam() {
    team.style.display = "flex";
    let tabElements = document.querySelectorAll("#team .tab");
    
    tabs.forEach(tab => {
        tab.innerHTML = '';
      });

    tabs.forEach((tab, index) => {
        const arrowElement = document.createElement("div");
        arrowElement.classList.add("arrowTeam");
        tab.appendChild(arrowElement);
    
        if (index === 0) {
          arrowElement.style.animation = "arrowBlink 1s infinite steps(1)";
        }
    });

    for (let i = 0; i < 3; i++) {
        let tab = tabElements[i];
        let tabInfo = userPokemonTeam[i];
        //tab.innerHTML = '';
        if(userPokemonTeam[i]){
            let titleElement = document.createElement("div");
            titleElement.textContent = tabInfo.name + " lv." + tabInfo.level;
            titleElement.style.fontSize = 20 + "px";
            titleElement.style.marginLeft = "10%";
        
            let imageElement = document.createElement("div");
            let fileName = tabInfo.number.toString().padStart(3, "0") + tabInfo.name + ".png";
            imageElement.innerHTML = `<img src="sprite/${fileName}" alt="Image" style="width: 30px; height: 30px;">`;
            imageElement.style.marginTop = "-10%";
            imageElement.style.marginLeft = "80%";
        
  
            tab.appendChild(titleElement);
            tab.appendChild(imageElement);
        }
    }
    
    const updateInfo = function(tabInfo) {
        infoElement.innerHTML = '';
      
        //character sprite
        let imageElement = document.createElement("div");
        let fileName = tabInfo.number.toString().padStart(3, "0") + tabInfo.name + ".png";
        imageElement.innerHTML = `<img src="sprite/${fileName}" alt="Image" style="width: 150px; height: 150px;">`;
        imageElement.style.marginTop = "5%";
        imageElement.style.marginLeft = "3%";
      
        //Name
        let titleElement = document.createElement("div");
        titleElement.textContent = tabInfo.name;
        titleElement.style.color = "white";
        titleElement.style.fontFamily = "PixelFont";
        titleElement.style.fontSize = "32px";
        titleElement.style.position = "absolute";
        titleElement.style.top = "10%";
        titleElement.style.left = "55%";
      
        //Type1
        let typeElement = document.createElement("div");
        typeElement.style.width = "38px";
        typeElement.style.height = "20px";
        typeElement.style.backgroundImage = 'url("images/typeIcon.png")';
        typeElement.style.backgroundRepeat = "no-repeat";
        let typePos = getTypeImg(tabInfo.type1);
        typeElement.style.backgroundPosition = typePos[0] + "px " + typePos[1] + "px";
        typeElement.style.backgroundSize = "150px 150px";
        typeElement.style.position = "absolute";
        typeElement.style.left = "80%";
        typeElement.style.top = "12.25%";

        //Type2
        let typeElement2 = document.createElement("div");
        if(tabInfo.type2){
            typeElement2.style.width = "38px";
            typeElement2.style.height = "20px";
            typeElement2.style.backgroundImage = 'url("images/typeIcon.png")';
            typeElement2.style.backgroundRepeat = "no-repeat";
            let typePos = getTypeImg(tabInfo.type2);
            typeElement2.style.backgroundPosition = typePos[0] + "px " + typePos[1] + "px";
            typeElement2.style.backgroundSize = "150px 150px";
            typeElement2.style.position = "absolute";
            typeElement2.style.left = "85%";
            typeElement2.style.top = "12.25%";
        }
      
        //Level
        let subTitle = document.createElement("div");
        subTitle.textContent = "lv. " + tabInfo.level;
        subTitle.style.color = "white";
        subTitle.style.fontFamily = "PixelFont";
        subTitle.style.fontSize = "18px";
        subTitle.style.position = "absolute";
        subTitle.style.top = "12.25%";
        subTitle.style.left = "70%";
      
        //Stats
        const textContainer = document.createElement("div");
        textContainer.style.color = "white";
        textContainer.style.fontFamily = "PixelFont";
        textContainer.style.fontSize = "20px";
        textContainer.style.position = "absolute";
        textContainer.style.top = "15%";
        textContainer.style.left = "55%";
      
        const textList = document.createElement("ul");
        textList.id = "textList";
      
        const textItems = ["HP: " + tabInfo.HP + "/" + tabInfo.maxHP, "Atk: " + tabInfo.attack, "Def: " + tabInfo.defense, "Sp. Atk: " + tabInfo.spAttack, "Sp. Def: " + tabInfo.spDefense, "Spd: " + tabInfo.speed];
      
        textItems.forEach(text => {
          const listItem = document.createElement("li");
          listItem.textContent = text;
          textList.appendChild(listItem);
        });
        textContainer.appendChild(textList);
        
        //assist
        let assistElement = document.createElement("div");
        assistElement.textContent = "Assist: " + tabInfo.assist.name;
        assistElement.style.color = "white";
        assistElement.style.fontFamily = "PixelFont";
        assistElement.style.fontSize = "20px";
        assistElement.style.position = "absolute";
        assistElement.style.top = "20%";
        assistElement.style.left = "71%";

        //description
        let assistDesc = document.createElement("div");
        assistDesc.textContent = tabInfo.assist.effect;
        assistDesc.style.color = "white";
        assistDesc.style.textAlign = "center";
        assistDesc.style.width = "250px";
        assistDesc.style.fontFamily = "PixelFont";
        assistDesc.style.fontSize = "20px";
        assistDesc.style.position = "absolute";
        assistDesc.style.top = "30%";
        assistDesc.style.left = "65%";
        
        //move1
        let move1 = document.createElement("div");
        move1.style.backgroundColor = "lightGray";
        move1.style.width = "170px";
        move1.style.height = "40px";
        move1.style.border = "3px solid #8795a1";
        move1.style.borderRadius = "5px";
        move1.style.position = "absolute";
        move1.style.top = "55%";
        move1.style.left = "40%";
        move1.style.display = "flex";
        move1.style.justifyContent = "center";
        move1.style.alignItems = "center";
        if(tabInfo.moves[0]){
            move1.textContent = tabInfo.moves[0].name;
        }
        move1.style.fontFamily = "PixelFont";
        move1.style.fontSize = "20px";
        move1.style.textAlign = "center";

        //move2
        let move2 = document.createElement("div");
        move2.style.backgroundColor = "lightGray";
        move2.style.width = "170px";
        move2.style.height = "40px";
        move2.style.border = "3px solid #8795a1";
        move2.style.borderRadius = "5px";
        move2.style.position = "absolute";
        move2.style.top = "55%";
        move2.style.left = "68%";
        move2.style.display = "flex";
        move2.style.justifyContent = "center";
        move2.style.alignItems = "center";
        if(tabInfo.moves[1]){
            move2.textContent = tabInfo.moves[1].name;
        }
        move2.style.fontFamily = "PixelFont";
        move2.style.fontSize = "20px";
        move2.style.textAlign = "center";

        //move3
        let move3 = document.createElement("div");
        move3.style.backgroundColor = "lightGray";
        move3.style.width = "170px";
        move3.style.height = "40px";
        move3.style.border = "3px solid #8795a1";
        move3.style.borderRadius = "5px";
        move3.style.position = "absolute";
        move3.style.top = "70%";
        move3.style.left = "40%";
        move3.style.display = "flex";
        move3.style.justifyContent = "center";
        move3.style.alignItems = "center";
        if(tabInfo.moves[2]){
            move3.textContent = tabInfo.moves[2].name;
        }
        move3.style.fontFamily = "PixelFont";
        move3.style.fontSize = "20px";
        move3.style.textAlign = "center";

        //move4
        let move4 = document.createElement("div");
        move4.style.backgroundColor = "lightGray";
        move4.style.width = "170px";
        move4.style.height = "40px";
        move4.style.border = "3px solid #8795a1";
        move4.style.borderRadius = "5px";
        move4.style.position = "absolute";
        move4.style.top = "70%";
        move4.style.left = "68%";
        move4.style.display = "flex";
        move4.style.justifyContent = "center";
        move4.style.alignItems = "center";
        if(tabInfo.moves[3]){
            move4.textContent = tabInfo.moves[3].name;
        }
        move4.style.fontFamily = "PixelFont";
        move4.style.fontSize = "20px";
        move4.style.textAlign = "center";
      
        infoElement.appendChild(imageElement);
        infoElement.appendChild(typeElement);
        if(typeElement2){
            infoElement.appendChild(typeElement2);
        }
        infoElement.appendChild(titleElement);
        infoElement.appendChild(subTitle);
        infoElement.appendChild(textContainer);
        infoElement.appendChild(assistElement);
        infoElement.appendChild(assistDesc);
        infoElement.appendChild(move1);
        infoElement.appendChild(move2);
        infoElement.appendChild(move3);
        infoElement.appendChild(move4);
      }
      
    let currentIndex = 0;
    
    updateInfo(userPokemonTeam[currentIndex]);
    tabs[currentIndex].focus();
    tabs[currentIndex].querySelector('.arrowTeam').style.animation = "arrowBlink 1s infinite steps(1)";
    tabs[currentIndex + 1].querySelector('.arrowTeam').style.animation = "none";
    tabs[currentIndex + 2].querySelector('.arrowTeam').style.animation = "none";
  
    const keydownEventListener = function(event) {
      const key = event.key;
      if(key === 'Escape'){
        document.removeEventListener('keydown', keydownEventListener);
      }
      if ((key === 'ArrowDown' || key === 's') && currentIndex < tabs.length - 1) {
        if(currentIndex < (userPokemonTeam.length - 1)){
            console.log(20);
            event.preventDefault();
            tabs[currentIndex].blur();
            tabs[currentIndex].querySelector('.arrowTeam').style.animation = "none";
            currentIndex++;
            updateInfo(userPokemonTeam[currentIndex]);
            tabs[currentIndex].focus();
            tabs[currentIndex].querySelector('.arrowTeam').style.animation = "arrowBlink 1s infinite steps(1)";
        }
      } else if ((key === 'ArrowUp' || key === 'w') && currentIndex > 0) {
        event.preventDefault();
        tabs[currentIndex].blur();
        tabs[currentIndex].querySelector('.arrowTeam').style.animation = "none";
        currentIndex--;
        updateInfo(userPokemonTeam[currentIndex]);
        tabs[currentIndex].focus();
        tabs[currentIndex].querySelector('.arrowTeam').style.animation = "arrowBlink 1s infinite steps(1)";
      } else if (key === 'Enter') {
        event.preventDefault();
        document.getElementById("bar").style.display = "none";
        document.getElementById("info").style.display = "none";
        viewMoves(currentIndex);
        document.removeEventListener('keydown', keydownEventListener);
      }
    };
  
    document.addEventListener('keydown', keydownEventListener);
}

function getTypeImg(type) {
    type = type.toLowerCase();
  
    switch (type) {
      case "normal":
        return [0, 0];
      case "fighting":
        return [-37, 0];
      case "flying":
        return [-75, 0];
      case "poison":
        return [-112, 0];
      case "ground":
        return [0, -22];
      case "rock":
        return [-37, -22];
      case "bug":
        return [-75, -22];
      case "ghost":
        return [-112, -22];
      case "fire":
        return [-75, -43];
      case "water":
        return [-112, -43];
      case "grass":
        return [0, -65];
      case "electric":
        return [-37, -65];
      case "psychic":
        return [-75, -65];
      case "ice":
        return [-112, -65];
      case "dragon":
        return [0, -86];
      case "dark":
        return [-37, -86];
    }
  }
  
  

function viewMoves(index){
    const moveset = document.getElementById("moveset");
    moveset.style.display = "flex";
    const keydownEventListener = function(event) {
        const key = event.key;
        if(key == "Escape"){
            document.getElementById("bar").style.display = "block";
            document.getElementById("info").style.display = "block";
            document.removeEventListener('keydown', keydownEventListener);
            document.getElementById("moveset").style.display = "none";
            viewTeam();
        }
    }
    const updateMove = function(tabInfo){
        moveset.innerHTML = '';

        //move 1 icon
        let move1 = document.createElement("div");
        move1.style.backgroundColor = "lightGray";
        move1.style.width = "170px";
        move1.style.height = "40px";
        move1.style.border = "3px solid #8795a1";
        move1.style.borderRadius = "5px";
        move1.style.position = "absolute";
        move1.style.top = "15%";
        move1.style.left = "15%";
        move1.style.display = "flex";
        move1.style.justifyContent = "center";
        move1.style.alignItems = "center";
        if(tabInfo.moves[0]){
            move1.textContent = tabInfo.moves[0].name;
        }
        move1.style.fontFamily = "PixelFont";
        move1.style.fontSize = "20px";
        move1.style.textAlign = "center";

        //move 1 type icon
        let typeElement = document.createElement("div");
        typeElement.style.width = "38px";
        typeElement.style.height = "20px";
        typeElement.style.backgroundImage = 'url("images/typeIcon.png")';
        typeElement.style.backgroundRepeat = "no-repeat";
        let typePos = getTypeImg(tabInfo.moves[0].type);
        typeElement.style.backgroundPosition = typePos[0] + "px " + typePos[1] + "px";
        typeElement.style.backgroundSize = "150px 150px";
        typeElement.style.position = "absolute";
        typeElement.style.left = "22.5%";
        typeElement.style.top = "25%";

        //move 1 description
        let moveDesc = document.createElement("div");
        moveDesc.innerHTML = "Power: " + tabInfo.moves[0].power  + "    Accuracy: " + tabInfo.moves[0].accuracy + "<br> Desc: " + tabInfo.moves[0].effect;
        moveDesc.style.width = "250px";
        moveDesc.style.color = "white";
        moveDesc.style.fontFamily = "PixelFont";
        moveDesc.style.fontSize = "18px";
        moveDesc.style.position = "absolute";
        moveDesc.style.textAlign = "center";
        moveDesc.style.top = "30%"; //30, 65
        moveDesc.style.left = "11%"; //11, 56

        //move 2 icon
        let move2 = document.createElement("div");
        move2.style.backgroundColor = "lightGray";
        move2.style.width = "170px";
        move2.style.height = "40px";
        move2.style.border = "3px solid #8795a1";
        move2.style.borderRadius = "5px";
        move2.style.position = "absolute";
        move2.style.top = "15%";
        move2.style.left = "60%";
        move2.style.display = "flex";
        move2.style.justifyContent = "center";
        move2.style.alignItems = "center";
        if(tabInfo.moves[1]){
            move2.textContent = tabInfo.moves[1].name;
        }
        move2.style.fontFamily = "PixelFont";
        move2.style.fontSize = "20px";
        move2.style.textAlign = "center";

        //move 2 type icon
        let typeElement2 = document.createElement("div");
        typeElement2.style.width = "38px";
        typeElement2.style.height = "20px";
        typeElement2.style.backgroundImage = 'url("images/typeIcon.png")';
        typeElement2.style.backgroundRepeat = "no-repeat";
        let typePos2 = getTypeImg(tabInfo.moves[1].type);
        typeElement2.style.backgroundPosition = typePos2[0] + "px " + typePos2[1] + "px";
        typeElement2.style.backgroundSize = "150px 150px";
        typeElement2.style.position = "absolute";
        typeElement2.style.left = "67.5%";
        typeElement2.style.top = "25%";

        //move 2 description
        let moveDesc2 = document.createElement("div");
        moveDesc2.innerHTML = "Power: " + tabInfo.moves[1].power  + "    Accuracy: " + tabInfo.moves[1].accuracy + "<br> Desc: " + tabInfo.moves[1].effect;
        moveDesc2.style.color = "white";
        moveDesc2.style.width = "250px";
        moveDesc2.style.fontFamily = "PixelFont";
        moveDesc2.style.fontSize = "18px";
        moveDesc2.style.position = "absolute";
        moveDesc2.style.textAlign = "center";
        moveDesc2.style.top = "30%"; //30, 65
        moveDesc2.style.left = "56%"; //16, 61.5

        //move 3 icon
        let move3 = document.createElement("div");
        move3.style.backgroundColor = "lightGray";
        move3.style.width = "170px";
        move3.style.height = "40px";
        move3.style.border = "3px solid #8795a1";
        move3.style.borderRadius = "5px";
        move3.style.position = "absolute";
        move3.style.top = "50%";
        move3.style.left = "15%";
        move3.style.display = "flex";
        move3.style.justifyContent = "center";
        move3.style.alignItems = "center";
        if(tabInfo.moves[2]){
            move3.textContent = tabInfo.moves[2].name;
        }
        move3.style.fontFamily = "PixelFont";
        move3.style.fontSize = "20px";
        move3.style.textAlign = "center";

        //move 3 type icon
        let typeElement3 = document.createElement("div");
        if(tabInfo.moves[2]){
            typeElement3.style.width = "38px";
            typeElement3.style.height = "20px";
            typeElement3.style.backgroundImage = 'url("images/typeIcon.png")';
            typeElement3.style.backgroundRepeat = "no-repeat";
            let typePos3 = getTypeImg(tabInfo.moves[2].type);
            typeElement3.style.backgroundPosition = typePos3[0] + "px " + typePos3[1] + "px";
            typeElement3.style.backgroundSize = "150px 150px";
            typeElement3.style.position = "absolute";
            typeElement3.style.left = "22.5%";
            typeElement3.style.top = "60%";
        }

        //move 3 description
        let moveDesc3 = document.createElement("div");
        if(tabInfo.moves[2]){
            moveDesc3.innerHTML = "Power: " + tabInfo.moves[2].power  + "    Accuracy: " + tabInfo.moves[2].accuracy + "<br> Desc: " + tabInfo.moves[2].effect;
            moveDesc3.style.color = "white";
            moveDesc3.style.fontFamily = "PixelFont";
            moveDesc3.style.fontSize = "18px";
            moveDesc3.style.width = "250px";
            moveDesc3.style.position = "absolute";
            moveDesc3.style.textAlign = "center";
            moveDesc3.style.top = "65%"; //30, 65
            moveDesc3.style.left = "11%"; //16, 61.5
        }

        //move 4 icon
        let move4 = document.createElement("div");
        move4.style.backgroundColor = "lightGray";
        move4.style.width = "170px";
        move4.style.height = "40px";
        move4.style.border = "3px solid #8795a1";
        move4.style.borderRadius = "5px";
        move4.style.position = "absolute";
        move4.style.top = "50%";
        move4.style.left = "60%";
        move4.style.display = "flex";
        move4.style.justifyContent = "center";
        move4.style.alignItems = "center";
        if(tabInfo.moves[3]){
            move4.textContent = tabInfo.moves[3].name;
        }
        move4.style.fontFamily = "PixelFont";
        move4.style.fontSize = "20px";
        move4.style.textAlign = "center";

        //move 4 type icon
        let typeElement4 = document.createElement("div");
        if(tabInfo.moves[3]){
            typeElement4.style.width = "38px";
            typeElement4.style.height = "20px";
            typeElement4.style.backgroundImage = 'url("images/typeIcon.png")';
            typeElement4.style.backgroundRepeat = "no-repeat";
            let typePos4 = getTypeImg(tabInfo.moves[3].type);
            typeElement4.style.backgroundPosition = typePos4[0] + "px " + typePos4[1] + "px";
            typeElement4.style.backgroundSize = "150px 150px";
            typeElement4.style.position = "absolute";
            typeElement4.style.left = "67.5%";
            typeElement4.style.top = "60%";
        }

        //move 4 description
        let moveDesc4 = document.createElement("div");
        if(tabInfo.moves[3]){
            moveDesc4.innerHTML = "Power: " + tabInfo.moves[3].power  + "    Accuracy: " + tabInfo.moves[3].accuracy + "<br> Desc: " + tabInfo.moves[3].effect;
            moveDesc4.style.color = "white";
            moveDesc4.style.fontFamily = "PixelFont";
            moveDesc4.style.fontSize = "18px";
            moveDesc4.style.width = "250px";
            moveDesc4.style.position = "absolute";
            moveDesc4.style.textAlign = "center";
            moveDesc4.style.top = "65%"; //30, 65
            moveDesc4.style.left = "56%"; //16, 61.5
        }


        moveset.appendChild(move1);
        moveset.appendChild(typeElement);
        moveset.appendChild(moveDesc);
        moveset.appendChild(move2);
        moveset.appendChild(typeElement2);
        moveset.appendChild(moveDesc2);
        moveset.appendChild(move3);
        moveset.appendChild(typeElement3);
        moveset.appendChild(moveDesc3);
        moveset.appendChild(move4);
        moveset.appendChild(typeElement4);
        moveset.appendChild(moveDesc4);
    }
    document.addEventListener('keydown', keydownEventListener);
    updateMove(userPokemonTeam[index]);
}

function callPHPFunction(functionName, params) {
    return $.ajax({
        type: "POST",
        url: "support.php",
        data: {function: functionName, ...params},
        dataType: "json",
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("AJAX error: " + textStatus + ', ' + errorThrown);
        }
    });
}

class Pokemon {
    constructor(number, level) {
        this.number = number;
        this.level = level;
        this.moves = [];
    }

    async init() {
        let data = await callPHPFunction('getPokemon', {pokemonNumber: this.number});
        let pokemonData = data[0];
        this.name = pokemonData.Name;
        this.type1 = pokemonData.Type1;
        this.type2 = pokemonData.Type2 || "";
        this.total = pokemonData.Total;
        this.maxHP = parseInt(pokemonData.HP) + parseInt(pokemonData.Stage)*this.level;
        this.HP = parseInt(pokemonData.HP) + parseInt(pokemonData.Stage)*this.level;
        this.attack = parseInt(pokemonData.Attack) + parseInt(pokemonData.Stage)*this.level;
        this.defense = parseInt(pokemonData.Defense) + parseInt(pokemonData.Stage)*this.level;
        this.spAttack = parseInt(pokemonData.Sp_Attack) + parseInt(pokemonData.Stage)*this.level;
        this.spDefense = parseInt(pokemonData.Sp_Defense) + parseInt(pokemonData.Stage)*this.level;
        this.speed = parseInt(pokemonData.Speed) + parseInt(pokemonData.Stage)*this.level;
        this.legendary = pokemonData.Legendary;
        this.stage = pokemonData.Stage;
        this.maxStage = pokemonData.Max_Stage;
        this.status = "none";  // I assume you'll handle status effects somewhere else

        // Fetch the moveset and assist move
        await this.getMoveset();
        await this.getAssist();
    }

    async getMoveset() {
        let fix = await callPHPFunction('getMoveset', { type: this.type1, stage: this.stage });
        if (fix && fix.length > 0) {
            let response = fix[0];
            this.assist = response.Assist;
            let moveNames = [response.Move1, response.Move2, response.Move3];

            // If stage 2, add the bonus move
            if (!this.type2 && this.stage != 1) {
                moveNames.push(response.Bonus);
            }else{
                if(this.stage != 1){
                    let temp = await callPHPFunction('getMoveset', { type: this.type2, stage: this.stage });
                    let curr = temp[0];
                        if (fix && fix.length > 0) {
                            moveNames.push(curr.Bonus);
                        }
                }
            }

            for (let i = 0; i < moveNames.length; i++) {
                if(moveNames[i]) {
                    let moveData = await callPHPFunction('getMove', {moveName: moveNames[i]});
                    let move = {
                        name: moveData[0].Name, 
                        type: moveData[0].Type, 
                        category: moveData[0].Category, 
                        power: moveData[0].Power, 
                        accuracy: moveData[0].Accuracy,
                        effect: moveData[0].Effect
                    };
                    this.moves.push(move);
                }
            }
        } else {
            // handle the error, e.g. log it or show an error message to the user
            console.error('No moveset received from the server.');
        }
    }

    async getAssist() {
        let response = await callPHPFunction('getMove', { moveName: this.assist });
        if (response.length > 0) {
            let moveData = response[0];
            this.assist = {
                name: moveData.Name,
                type: moveData.Type,
                category: moveData.Category,
                power: moveData.Power,
                accuracy: moveData.Accuracy,
                effect: moveData.Effect
            };
        } else {
            this.assist = null;
        }
    }
    
}

// Puts them into an array
var userPokemonTeam = [];

// Puts them into an array
var enemyPokemonTeam = [];

async function populateUser() {
    let bulbasaur = new Pokemon(1, 1);
    let charmander = new Pokemon(5, 10);
    let squirtle = new Pokemon(9, 20);
    await bulbasaur.init();
    await charmander.init();
    await squirtle.init();
    userPokemonTeam = [bulbasaur, charmander, squirtle];
}

async function generateEnemyTeam() {
    enemyPokemonTeam = []; //Reset the enemy team
    
    let level = trainersDef >= 8 ? 15 : (Math.floor(trainersDef / 2) + 1) * 5;
    if(wildBattle){
        let randomPokedexNumber = Math.floor(Math.random() * 151) + 1;
        let pokemon = new Pokemon(randomPokedexNumber, level);
        await pokemon.init();
        enemyPokemonTeam.push(pokemon);
    }else{
        if (trainersDef < 9) {
            //if the trainer has not yet defeated the champion, generate a team based on the gym leaders
            //numbers are custom teams
            let gymLeaderTeams = [[74, 95, 141], [121, 54, 117], [26, 101, 82], [45, 114, 71], [110, 89, 49], [65, 97, 122], [59, 78, 38], [112, 51, 34]];
            let gymLeaderTeam = gymLeaderTeams[trainersDef];
            for (let i = 0; i < gymLeaderTeam.length; i++) {
                let pokemon = new Pokemon(gymLeaderTeam[i], level);
                await pokemon.init();
                enemyPokemonTeam.push(pokemon);
            }
        } else {
            //if the trainer has defeated the champion, generate a random team
            for (let i = 0; i < 3; i++) {
                let randomPokedexNumber = Math.floor(Math.random() * 151) + 1;
                let pokemon = new Pokemon(randomPokedexNumber, level);
                await pokemon.init();
                enemyPokemonTeam.push(pokemon);
            }
        }
    }
}


async function main() {
    await populateUser();
    await generateEnemyTeam();
    console.log(userPokemonTeam);
    console.log(enemyPokemonTeam);
}





// An object for a normal type that contains objects with values of it's effectiveness against other types
var normalTypeChart = {"Normal": 1, "Fighting": 1, "Flying": 1, "Poison": 1, "Ground": 1, "Rock": 0.5, "Bug": 1, "Ghost": 0, "Fire": 1, "Water": 1, "Grass": 1, "Electric": 1, "Psychic": 1, "Ice": 1, "Dragon": 1};

// An object for a fire type that contains objects with values of it's effectiveness against other types
var fireTypeChart = {"Normal": 1, "Fighting": 1, "Flying": 1, "Poison": 1, "Ground": 1, "Rock": 0.5, "Bug": 2, "Ghost": 1, "Fire": 0.5, "Water": 0.5, "Grass": 2, "Electric": 1, "Psychic": 1, "Ice": 2, "Dragon": 0.5};

// An object for a water type that contains objects with values of it's effectiveness against other types
var waterTypeChart = {"Normal": 1, "Fighting": 1, "Flying": 1, "Poison": 1, "Ground": 2, "Rock": 2, "Bug": 1, "Ghost": 1, "Fire": 2, "Water": 0.5, "Grass": 0.5, "Electric": 1, "Psychic": 1, "Ice": 1, "Dragon": 0.5};

// An object for a electric type that contains objects with values of it's effectiveness against other types
var electricTypeChart = {"Normal": 1, "Fighting": 1, "Flying": 0.5, "Poison": 1, "Ground": 2, "Rock": 1, "Bug": 1, "Ghost": 1, "Fire": 1, "Water": 2, "Grass": 0.5, "Electric": 0.5, "Psychic": 1, "Ice": 1, "Dragon": 0.5};

// An object for a grass type that contains objects with values of it's effectiveness against other types
var grassTypeChart = {"Normal": 1, "Fighting": 1, "Flying": 0.5, "Poison": 0.5, "Ground": 2, "Rock": 2, "Bug": 0.5, "Ghost": 1, "Fire": 0.5, "Water": 2, "Grass": 0.5, "Electric": 1, "Psychic": 1, "Ice": 1, "Dragon": 0.5};

// An object for a ice type that contains objects with values of it's effectiveness against other types
var iceTypeChart = {"Normal": 1, "Fighting": 1, "Flying": 2, "Poison": 1, "Ground": 1, "Rock": 2, "Bug": 1, "Ghost": 1, "Fire": 2, "Water": 1, "Grass": 1, "Electric": 1, "Psychic": 1, "Ice": 0.5, "Dragon": 2};

// An object for a fighting type that contains objects with values of it's effectiveness against other types
var fightingTypeChart = {"Normal": 2, "Fighting": 1, "Flying": 0.5, "Poison": 0.5, "Ground": 1, "Rock": 2, "Bug": 0.5, "Ghost": 0, "Fire": 1, "Water": 1, "Grass": 1, "Electric": 1, "Psychic": 0.5, "Ice": 1, "Dragon": 1};

// An object for a poison type that contains objects with values of it's effectiveness against other types
var poisonTypeChart = {"Normal": 1, "Fighting": 1, "Flying": 1, "Poison": 0.5, "Ground": 0.5, "Rock": 0.5, "Bug": 2, "Ghost": 0.5, "Fire": 1, "Water": 1, "Grass": 2, "Electric": 1, "Psychic": 1, "Ice": 1, "Dragon": 1};

// An object for a ground type that contains objects with values of it's effectiveness against other types
var groundTypeChart = {"Normal": 1, "Fighting": 1, "Flying": 0, "Poison": 2, "Ground": 1, "Rock": 2, "Bug": 0.5, "Ghost": 1, "Fire": 2, "Water": 1, "Grass": 0.5, "Electric": 2, "Psychic": 1, "Ice": 1, "Dragon": 1};

// An object for a flying type that contains objects with values of it's effectiveness against other types
var flyingTypeChart = {"Normal": 1, "Fighting": 2, "Flying": 1, "Poison": 1, "Ground": 1, "Rock": 0.5, "Bug": 2, "Ghost": 1, "Fire": 1, "Water": 1, "Grass": 2, "Electric": 0.5, "Psychic": 1, "Ice": 2, "Dragon": 1};

// An object for a pyschic type that contains objects with values of it's effectiveness against other types
var psychicTypeChart = {"Normal": 1, "Fighting": 2, "Flying": 1, "Poison": 2, "Ground": 1, "Rock": 1, "Bug": 1, "Ghost": 1, "Fire": 1, "Water": 1, "Grass": 1, "Electric": 1, "Psychic": 0.5, "Ice": 1, "Dragon": 1};

// An object for a bug type that contains objects with values of it's effectiveness against other types
var bugTypeChart = {"Normal": 1, "Fighting": 0.5, "Flying": 0.5, "Poison": 0.5, "Ground": 1, "Rock": 1, "Bug": 1, "Ghost": 0.5, "Fire": 0.5, "Water": 1, "Grass": 2, "Electric": 1, "Psychic": 2, "Ice": 1, "Dragon": 1};

// An object for a rock type that contains objects with values of it's effectiveness against other types
var rockTypeChart = {"Normal": 1, "Fighting": 0.5, "Flying": 2, "Poison": 1, "Ground": 0.5, "Rock": 1, "Bug": 2, "Ghost": 1, "Fire": 2, "Water": 1, "Grass": 1, "Electric": 1, "Psychic": 1, "Ice": 2, "Dragon": 1};

// An object for a ghost type that contains objects with values of it's effectiveness against other types
var ghostTypeChart = {"Normal": 0, "Fighting": 1, "Flying": 1, "Poison": 1, "Ground": 1, "Rock": 1, "Bug": 1, "Ghost": 2, "Fire": 1, "Water": 1, "Grass": 1, "Electric": 1, "Psychic": 0, "Ice": 1, "Dragon": 1};

// An object for a dragon type that contains objects with values of it's effectiveness against other types
var dragonTypeChart = {"Normal": 1, "Fighting": 1, "Flying": 1, "Poison": 1, "Ground": 1, "Rock": 1, "Bug": 1, "Ghost": 1, "Fire": 1, "Water": 1, "Grass": 1, "Electric": 1, "Psychic": 1, "Ice": 1, "Dragon": 2};

var currentUserPokemon;			 // Store the current user's Pokémon
var currentEnemyPokemon;                  // Store the current enemy's pokemon
var aliveUserPokemonArray = [];                          // An array containing information of the user's alive pokemon that aren't in use (used later)
var aliveEnemyPokemonArray = [];                         // An array containing information of the enemy's pokemon that are not in use (used later)
var roar = false;                                        // A bool used to determine if roar was used on the user
var userInitTurn = 1;                                    // Keeps track of how many times the user has been afflicted with badly poisoned
var enemyInitTurn = 1;                                   // Keeps track of how many times the enemy has been afflicted with badly poisoned
var enemySwitched = false;			         // A bool that represents if the enemy switched last turn. thus skipping them
var userSwitched = false;				 // A bool that represents if the user switched last turn. thus skipping them
var userHyperBeam = false;                               // A bool used to see if the user used hyper beam last turn
var userHyperBeamCooldown = false;                       // A bool used to see if user is in a cool down for the hyper beam
var enemyHyperBeam = false;                              // A bool used to see if the enemy used hyperbeam last round.
var enemyHyperBeamCooldown = false;                      // A bool used to see if the enemy is in a cool down for hyper beam
var enemyFireSpin = false;                               // A bool used to see if an enemy is in a firespin
var userFireSpin = false;                                // A bool used to see if the user is in a firespin
var userFireSpinInitTurn = 1;                            // Keeps track of how many times the user has been afflicted with fire spin
var enemyFireSpinInitTurn = 1;                           // Keeps track of how many times the enemy has been afflicted with fire spin
var userLeechSeed = false;                               // Keeps track if the user has a leech seed
var enemyLeechSeed = false;                              // Keeps track if the enemy has a leech seed
var wildBattle = true;                                   // If a battle is in the wild or not
var inBattle = false;
var userExitBattle = false;                              // Determines if the user exit the battle using teleport
var enemyExitBattle = false;                             // Determines if the enemy exited the battle using teleport
var enemyFocusEnergy = false;                            // If the enemy used focus energy
var userFocusEnergy = false;                             // If the user used focus energy
var userSkyAttack = false;                               // If the user is currently using sky attack
var userSkyAttackHit = false;                            // If the user is going use sky attack this round
var enemySkyAttack = false;                              // If the enemy is currently using sky attack
var enemySkyAttackHit = false;                           // If the enemy is going to use sky atttack this round
var userSolarBeam = false;                               // If the user is currently using solar beam
var userSolarBeamHit = false;                            // If the user is going to use solar beam this orund
var enemySolarBeam = false;                              // If the enemy is currently using solar beam
var enemySolarBeamHit = false;                           // If the enemy is going to use solar beam this round
var userFly = false;                                     // If the user is currently using fly
var userFlyHit = false;                                  // If the user is going to attack using fly this round
var enemyFly = false;                                    // If the enemy is currently using fly
var enemyFlyHit = false;                                 // If the enemy is going to attack using fly this round
var userDig = false;                                     // If the user is currently using dig
var userDigHit = false;                                  // If the user is going to attack using dig this round
var enemyDig = false;                                    // If the enemy is currently using dig
var enemyDigHit = false;                                 // If the enemy is going to attack using dig this round
var assistFlag = false;                                  // If the user is using an assist move
var assistPokemonName = ""                               // The name of the pokemon doing the assist

 
window.addEventListener('beforeunload', function() {
    // Clear the console
    //console.clear();
  });
  // Calls fight
  //console.log("Begin Fight!\n");
  //inBattle = true;
  //playMusic();
  //fight();
  
  async function fight() {
      var enemyAlive = true;					// A bool representing if the enemy has conscious pokemon left in their team
      var userAlive = true;                                       // A bool representing if the user has conscious pokemon left in their team
      var firstTurn = 0;                                          // Used to see who gets the first turn
      world = false;
      await generateEnemyTeam();
      // Choose a pokemon to start out with
      //choosePokemon();
      // Enemy chooses a pokemon
      //getEnemyPokemon();
      displayCurrentStats();
      // While both the user and enemy have conscious pokemon
      setTimeout(() => {while ((enemyAlive === true) && (userAlive === true) && (userExitBattle === false) && (enemyExitBattle === false)) {
          // If both starting pokemon have the same starting speed, randomly generate a 1 or 2
          if (currentUserPokemon.speed == currentEnemyPokemon.speed) {
              firstTurn = Math.floor(Math.random() * 2) + 1;
          }
          // If the user has the first turn
          if ((firstTurn === 1) || (currentUserPokemon.speed > currentEnemyPokemon.speed)) {
          dialog("You get the first move of this turn!\n");
          // Chance to cure status effect if any
          if (currentUserPokemon.status !== "none") {
          cure = Math.floor(Math.random() * 5) + 1;
          if (cure === 4) {
              currentUserPokemon.status = "none";
                  userInitTurn = 1;
              dialog("Your " + currentUserPokemon.name + " has gotten rid of it's status effects!\n");
          }
          }
          // Checks for any status effects
          if (currentUserPokemon.status === "Paralyzed") {
          var movement = Math.floor(Math.random() * 4) + 1;
          // If paralyzed, skips your turn by setting userSwitched to true
              if (movement === 1) {
              userSwitched = true;
              dialog("Your " + currentUserPokemon.name + " is paralyzed. It can't move!");
          }
          }
          // If asleep, sets your userSwitched to true to skip your turn
          else if (currentUserPokemon.status === "Sleep") {
          userSwitched = true;
          dialog("Your " + currentUserPokemon.name + " is fast asleep!\n");
          }
          // If frozen, sets your userSwitched to true to skip your turn
          else if (currentUserPokemon.status === "Frozen") {
          userSwitched = true;
          dialog("Your " + currentUserPokemon.name + " is frozen solid and can't move!\n");
          }
          // If badly poisoned, deducts health based on how long you had it
          else if (currentUserPokemon.status === "Badly Poisoned") {
          var health = currentUserPokemon.maxHP;
          if (userInitTurn === 1) {
                  health = health * (1/16);
          }
          else if (userInitTurn === 2) {
              health = health * (2/16);
          }
          else if (userInitTurn === 3) {
              health = health * (3/16);
          }
          else if (userInitTurn >= 4) {
              health = health * (4/16);
          }
          userInitTurn += 1;
          if (currentUserPokemon.HP - health < 0) {
              currentUserPokemon.HP = 0;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP - health;
          }
              for (var i = 0; i < userPokemonTeam.length; i++) {
                  // Updates health to reflect the new value in data that will be exported back
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                  userPokemonTeam[i].HP = currentUserPokemon.HP
              }
              }
          dialog("Your " + currentUserPokemon.name + " is hurt by poison!\n");		
          }
          // If burned, deducts health
          else if (currentUserPokemon.status === "Burn") {
          var health = currentUserPokemon.maxHP * (1/16);
          if (currentUserPokemon.HP - health < 0) {
              currentUserPokemon.HP = 0;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP - health;
          }
              for (var i = 0; i < userPokemonTeam.length; i++) {
                  // Updates health to reflect the new value in data that will be exported back
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                  userPokemonTeam[i].HP = currentUserPokemon.HP
              }
          }
          dialog("Your " + currentUserPokemon.name + " is hurt by it's burn!\n");		
          }
          // If poisoned, deducts health
          else if (currentUserPokemon.status === "Poisoned") {
          var health = currentUserPokemon.maxHP * (1/8);
          if (currentUserPokemon.HP - health < 0) {
              currentUserPokemon.HP = 0;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP - health;
          }
              for (var i = 0; i < userPokemonTeam.length; i++) {
                  // Updates health to reflect the new value in data that will be exported back
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                  userPokemonTeam[i].HP = currentUserPokemon.HP
              }
              }
          dialog("Your " + currentUserPokemon.name + " is hurt by poison!\n");		
          }
          // If the currentUserPokemon has a leech seed on it
          if (userLeechSeed === true) {
              var health = currentUserPokemon.maxHP * (1/8);
          if (currentUserPokemon.HP - health < 0) {
              currentUserPokemon.HP = 0;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP - health;
          }
          if (currentEnemyPokemon.HP + health > currentEnemyPokemon.maxHP) {
              currentEnemyPokemon.HP = currentEnemyPokemon.maxHP;
          }
          else {
              currentEnemyPokemon.HP = currentEnemyPokemon.HP + health;
          }
              for (var i = 0; i < userPokemonTeam.length; i++) {
                  // Updates health to reflect the new value in data that will be exported back
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                  userPokemonTeam[i].HP = currentUserPokemon.HP
              }
              }
          dialog("The enemy's " + currentEnemyPokemon.name + " is absorbing health with Leech Seed!\n");
          }
              // If the user's current Pokemon fainted
              if (currentUserPokemon.HP <= 0) {
          // If all of the user's pokemon are unconscious, ends the battle
              if (aliveUserPokemonArray.length === 0) { 	
                      userAlive = false;
                  break;
              }
          // Allows the user to switch out their unconscious pokemon (skips next turn)
              else {
                  dialog("Your " + currentUserPokemon.name + " has fainted!");
                  switchPokemon();
              userSwitched = true;
              }
              }
          // If the user used hyperbeam last round, they can't move this turn
          if (userHyperBeam === true) {
          dialog("Your " + currentUserPokemon.name + " is recharging and can't move!\n");
          userHyperBeamCooldown = true;
          }
          // If the user used skyAttack last round, they will attack this turn
          if (userSkyAttack === true) {
          userSkyAttackHit = true;
          }
          // If the user used solar beam last round, they will attack this turn
          if (userSolarBeam === true) {
          userSolarBeamHit = true;
          }
          // If the user used fly last round, they will attack this turn
          if (userFly === true) {
          userFlyHit = true;
          }
          // If the user used dig last round, they will attack this turn
          if (userDig === true) {
          userDigHit = true;
          }
          // If the user didn't switch out their pokemon, or isn't in a situation where they can't attack
              if ((userSwitched === false) && (userHyperBeam === false) && (userFireSpin === false) && (userSkyAttack === false) && (userSolarBeam === false) && (userFly === false) && (userDig === false)) {
                  getUserChoice();
          }
          // If the user is stuck in Fire Spin, they can't move. Once they've been in it more than four times, they leave
          if ((userFireSpin === true) && (userFireSpinInitTurn < 4)) {
          var health = currentUserPokemon.maxHP * (1/16);
          if (currentUserPokemon.HP - health < 0) {
              currentUserPokemon.HP = 0;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP - health;
          }
              for (var i = 0; i < userPokemonTeam.length; i++) {
                  // Updates health to reflect the new value in data that will be exported back
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                  userPokemonTeam[i].HP = currentUserPokemon.HP
              }
              }
          dialog("Your " + currentUserPokemon.name + " is trapped in the vortex!\n");
          userFireSpinInitTurn += 1;		
          }
          // If they've been in it four times, they can leave
          else if ((userFireSpin === true) && (userFireSpinInitTurn >= 4)) {
          userFireSpinInitTurn = 1;
          dialog("Your " + currentEnemyPokemon.name + " escaped the vortex!\n");
          userFireSpin = false;
          }
          if ((userHyperBeam === true) && (userHyperBeamCooldown === true)) {  
          userHyperBeamCooldown = false;	
          userHyperBeam = false;	
          }
          // If sky attack was used last round, does a sky attack
          if ((userSkyAttack === true) && (userSkyAttackHit === true)) { 
              calculateUserActionDamage("Sky Attack", "Flying", "Physical", 140, 90);  
          userSkyAttack = false;
          userSkyAttackHit = false;
          }
          // If solar beam was used last round
          if ((userSolarBeam === true) && (userSolarBeamHit === true)) { 
              calculateUserActionDamage("Solar Beam", "Grass", "Special", 120, 100);  
          userSolarBeam = false;
          userSolarBeamHit = false;
          }
          // If fly was used last round
          if ((userFly === true) && (userFlyHit === true)) { 
              calculateUserActionDamage("Fly", "Flying", "Physical", 90, 95);  
          userFly = false; 
          userFlyHit = false;
          }
          // If dig was used last round
          if ((userDig === true) && (userDigHit === true)) { 
              calculateUserActionDamage("Dig", "Ground", "Physical", 80, 100);  
          userDig = false;
          userDigHit = false;
          }
          // If the user used flee, end the battle
          if (userExitBattle === true) {
          break;
          }
          // If a turn was skipped, set to false
          userSwitched = false;	    
          displayCurrentStats();
          // If the enemy's current pokemon has no health
              if (currentEnemyPokemon.HP <= 0) {
          pokemonDef++;
          // If all of the enemy's other pokemon have no health
              if (aliveEnemyPokemonArray.length === 0) {
                      enemyAlive = false;
                  break;
              }
          // Allows the enemy to switch to another pokemon (skips next turn)
                  else {
                  dialog("The enemy's " + currentEnemyPokemon.name + " has fainted!");
                  switchEnemyPokemon();
              enemySwitched = true;	
              }
              }
              // If the user's current Pokemon fainted
              if (currentUserPokemon.HP <= 0) {
          // If all of the user's pokemon are unconscious
              if (aliveUserPokemonArray.length === 0) { 	
                      userAlive = false;
                  break;
              }
          // Allows the user to switch out their unconscious pokemon (skips next turn)
              else {
                  dialog("Your " + currentUserPokemon.name + " has fainted!");
                  switchPokemon();
              userSwitched = true;
              }
              }
          // Chance to cure status effect if any
          if (currentEnemyPokemon.status !== "none") {
          cure = Math.floor(Math.random() * 5) + 1;
          if (cure === 4) {
              currentEnemyPokemon.status = "none";
              enemyInitTurn = 1;
              dialog("The enemy's " + currentEnemyPokemon.name + " has gotten rid of it's status effects!\n");
          }
          }
          // Checks for any status effects
          // If they are paralyzed, their turn gets skipped
          if (currentEnemyPokemon.status === "Paralyzed") {
              movement = Math.floor(Math.random() * 4) + 1;
              if (movement === 1) {
              enemySwitched === true;
              dialog("The enemy's " + currentEnemyPokemon.name + " is paralyzed. It can't move!");
          }
          }
          // If they are asleep, their turn gets skipped
          else if (currentEnemyPokemon.status === "Sleep") {
          enemySwitched = true;
          dialog("The enemy's " + currentEnemyPokemon.name + " is fast asleep!\n");
          }
          // If they are frozen, their turn gets skipped
          else if (currentEnemyPokemon.status === "Frozen") {
          enemySwitched = true;
          dialog("The enemy's " + currentEnemyPokemon.name + " is frozen solid and can't move!\n");
          }
          // If they are badly poisoned, damage is deducted depending on how many times they've had it
          else if (currentEnemyPokemon.status === "Badly Poisoned") {
          var health = currentEnemyPokemon.maxHP;
          if (enemyInitTurn === 1) {
                  health = health * (1/16);
          }
          else if (enemyInitTurn === 2) {
              health = health * (2/16);
          }
          else if (enemyInitTurn === 3) {
              health = health * (3/16);
          }
          else if (enemyInitTurn >= 4) {
              health = health * (4/16);
          }
          enemyInitTurn += 1;
          if (currentEnemyPokemon.HP - health < 0) {
              currentEnemyPokemon.HP = 0;
          }
          else {
              currentEnemyPokemon.HP = currentEnemyPokemon.HP - health;
          }
          dialog("The enemy's " + currentEnemyPokemon.name + " is hurt by poison!\n");		
          }
          // If they are burned, damage is deducted
          else if (currentEnemyPokemon.status === "Burn") {
          var health = currentEnemyPokemon.maxHP * (1/16);
          if (currentEnemyPokemon.HP - health < 0) {
              currentEnemyPokemon.HP = 0;
          }
          else {
              currentEnemyPokemon.HP = currentEnemyPokemon.HP - health;
          }
          dialog("The enemy's " + currentEnemyPokemon.name + " is hurt by it's burn!\n");		
          }
          // If they are poisoned, damage is deducted
          else if (currentEnemyPokemon.status === "Poisoned") {
          var health = currentEnemyPokemon.maxHP * (1/8);
          if (currentEnemyPokemon.HP - health < 0) {
              currentEnemyPokemon.HP = 0;
          }
          else {
              currentEnemyPokemon.HP = currentEnemyPokemon.HP - health;
          }
          dialog("The enemy's " + currentEnemyPokemon.name + " is hurt by poison!\n");		
          }
         if (enemyLeechSeed === true) {
          var health = currentEnemyPokemon.maxHP * (1/8);
          if (currentEnemyPokemon.HP - health < 0) {
              currentEnemyPokemon.HP = 0;
          }
          else {
              currentEnemyPokemon.HP = currentEnemyPokemon.HP - health;
          }
          if (currentUserPokemon.HP + health > currentUserPokemon.maxHP) {
              currentUserPokemon.HP = currentUserPokemon.maxHP;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP + health;
          }
              for (var i = 0; i < userPokemonTeam.length; i++) {
                  // Updates health to reflect the new value in data that will be exported back
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                  userPokemonTeam[i].HP = currentUserPokemon.HP
              }
              }
          dialog("Your " + currentUserPokemon.name + " is absorbing health with Leech Seed!\n");
          }
          if (currentEnemyPokemon.HP <= 0) {
          pokemonDef++;
          // If all of the enemy's other pokemon have no health
              if (aliveEnemyPokemonArray.length === 0) {
                      enemyAlive = false;
                  break;
              }
          // Allows the enemy to switch to another pokemon (skips next turn)
                  else {
                  dialog("The enemy's " + currentEnemyPokemon.name + " has fainted!");
                  switchEnemyPokemon();
              enemySwitched = true;	
              }
              }
          // If they used hyperbeam last round, they can't move
          if (enemyHyperBeam === true) {
          dialog("The enemy's " + currentEnemyPokemon.name + " is recharging and can't move!\n");
          enemyHyperBeamCooldown = true;
          }
          // If they used sky attack last round, they'll hit this round
          if (enemySkyAttack === true) {
          enemySkyAttackHit = true;
          }
          // If they used solar beam last round, they'll hit this round
          if (enemySolarBeam === true) {
          enemySolarBeamHit = true;
          }
          // If they used fly last round, they'll hit this round
          if (enemyFly === true) {
          enemyFlyHit = true;
          }
          // If they used dig last round, they'll hit this round
          if (enemyDig === true) {
          enemyDigHit = true;
          }
          // If the enemy still has conscious pokemon and they didn't switch pokemon, they make their move
              if ((enemyAlive !== false) && (enemySwitched === false) && (enemyHyperBeam === false) && (enemyFireSpin === false) && (enemySkyAttack === false) && (enemySolarBeam === false) && (enemyFly === false) && (enemyDig === false)) {
                  performEnemyAction();
              }
          // If they are in fire spin
          if ((enemyFireSpin === true) && (enemyFireSpinInitTurn < 4)) {
          var health = currentEnemyPokemon.maxHP * (1/16);
          if (currentEnemyPokemon.HP - health < 0) {
              currentEnemyPokemon.HP = 0;
          }
          else {
              currentEnemyPokemon.HP = currentEnemyPokemon.HP - health;
          }
          dialog("The enemy's " + currentEnemyPokemon.name + " is trapped in the vortex!\n");
          enemyFireSpinInitTurn += 1; 	
          }
          else if ((enemyFireSpin === true) && (enemyFireSpinInitTurn >= 4)) {
          enemyFireSpinInitTurn = 1;
          dialog("The enemy's " + currentEnemyPokemon.name + " escaped from the vortex!\n");
          enemyFireSpin = false;
          }
          if ((enemyHyperBeam === true) && (enemyHyperBeamCooldown === true)) {  
          enemyHyperBeamCooldown = false;	
          enemyHyperBeam = false;	
          }
              if ((enemySkyAttack === true) && (enemySkyAttackHit === true))  { 
              calculateEnemyActionDamage("Sky Attack", "Flying", "Physical", 140, 90);  
          enemySkyAttack = false
          enemySkyAttackHit = false;
          }
          if ((enemySolarBeam === true) && (enemySolarBeamHit === true)) { 
              calculateEnemyActionDamage("Solar Beam", "Grass", "Special", 120, 100);  
          enemySolarBeam = false
          enemySolarBeamHit = false;
          }
          if ((enemyFly === true) && (enemyFlyHit === true)) { 
              calculateEnemyActionDamage("Fly", "Flying", "Physical", 90, 95);  
          enemyFly = false
          enemyFlyHit = false;
          }
          if ((enemyDig === true) && (enemyDigHit === true)) { 
              calculateEnemyActionDamage("Dig", "Ground", "Physical", 80, 100);  
          enemyDig = false
          enemyDigHit = false;
          }
          // If the enemy used teleport
          if (enemyExitBattle === true) {
          break;
          }	
          enemySwitched = false;
          displayCurrentStats();
          // If the user's current Pokemon fainted
              if (currentUserPokemon.HP <= 0) {
          // If all of the user's pokemon are unconscious
              if (aliveUserPokemonArray.length === 0) { 	
                      userAlive = false;
                  break;
              }
          // Allows the user to switch out their unconscious pokemon (skips next turn)
              else {
                  dialog("Your " + currentUserPokemon.name + " has fainted!");
                  switchPokemon();
              userSwitched = true;
              }
              }
              if (currentEnemyPokemon.HP <= 0) {
          pokemonDef++;
          // If all of the enemy's other pokemon have no health
              if (aliveEnemyPokemonArray.length === 0) {
                      enemyAlive = false;
                  break;
              }
          // Allows the enemy to switch to another pokemon (skips next turn)
                  else {
                  dialog("The enemy's " + currentEnemyPokemon.name + " has fainted!");
                  switchEnemyPokemon();
              enemySwitched = true;	
              }
              }
          }
          // if the enemy has the first turn
          else if ((firstTurn === 2) || (currentUserPokemon.speed < currentEnemyPokemon.speed)) {
          dialog("The enemy gets the first move of this turn!\n");
          // Chance to cure status effects
          if (currentEnemyPokemon.status !== "none") {
          cure = Math.floor(Math.random() * 5) + 1;
          if (cure === 4) {
              currentEnemyPokemon.status = "none";
              enemyInitTurn = 1;
              dialog("The enemy's " + currentEnemyPokemon.name + " has gotten rid of it's status effects!\n");
          }
          }
          // Checks for any status effects
          if (currentEnemyPokemon.status === "Paralyzed") {
              movement = Math.floor(Math.random() * 4) + 1;
              if (movement === 1) {
              enemySwitched === true;
              dialog("The enemy's " + currentEnemyPokemon.name + " is paralyzed. It can't move!");
          }
          }
          else if (currentEnemyPokemon.status === "Sleep") {
          enemySwitched = true;
          dialog("The enemy's " + currentEnemyPokemon.name + " is fast asleep!\n");
          }
          else if (currentEnemyPokemon.status === "Frozen") {
          enemySwitched = true;
          dialog("The enemy's " + currentEnemyPokemon.name + " is frozen solid and can't move!\n");
          }
          else if (currentEnemyPokemon.status === "Badly Poisoned") {
          var health = currentEnemyPokemon.maxHP;
          if (enemyInitTurn === 1) {
                  health = health * (1/16);
          }
          else if (enemyInitTurn === 2) {
              health = health * (2/16);
          }
          else if (enemyInitTurn === 3) {
              health = health * (3/16);
          }
          else if (enemyInitTurn >= 4) {
              health = health * (4/16);
          }
          enemyInitTurn += 1;
          if (currentEnemyPokemon.HP - health < 0) {
              currentEnemyPokemon.HP = 0;
          }
          else {
              currentEnemyPokemon.HP = currentEnemyPokemon.HP - health;
          }
          dialog("The enemy's " + currentEnemyPokemon.name + " is hurt by poison!\n");		
          }
          else if (currentEnemyPokemon.status === "Burn") {
          var health = currentEnemyPokemon.maxHP * (1/16);
          if (currentEnemyPokemon.HP - health < 0) {
              currentEnemyPokemon.HP = 0;
          }
          else {
              currentEnemyPokemon.HP = currentEnemyPokemon.HP - health;
          }
          dialog("The enemy's " + currentEnemyPokemon.name + " is hurt by it's burn!\n");		
          }
          else if (currentEnemyPokemon.status === "Poisoned") {
          var health = currentEnemyPokemon.maxHP * (1/8);
          if (currentEnemyPokemon.HP - health < 0) {
              currentEnemyPokemon.HP = 0;
          }
          else {
              currentEnemyPokemon.HP = currentEnemyPokemon.HP - health;
          }
          dialog("The enemy's " + currentEnemyPokemon.name + " is hurt by poison!\n");		
          }
         if (enemyLeechSeed === true) {
          var health = currentEnemyPokemon.maxHP * (1/8);
          if (currentEnemyPokemon.HP - health < 0) {
              currentEnemyPokemon.HP = 0;
          }
          else {
              currentEnemyPokemon.HP = currentEnemyPokemon.HP - health;
          }
          if (currentUserPokemon.HP + health > currentUserPokemon.maxHP) {
              currentUserPokemon.HP = currentUserPokemon.maxHP;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP + health;
          }
              for (var i = 0; i < userPokemonTeam.length; i++) {
                  // Updates health to reflect the new value in data that will be exported back
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                  userPokemonTeam[i].HP = currentUserPokemon.HP
              }
              }
          dialog("Your " + currentUserPokemon.name + " is absorbing health with Leech Seed!\n");
          }
          if (currentEnemyPokemon.HP <= 0) {
          pokemonDef++;
          // If all of the enemy's other pokemon have no health
              if (aliveEnemyPokemonArray.length === 0) {
                      enemyAlive = false;
                  break;
              }
          // Allows the enemy to switch to another pokemon (skips next turn)
                  else {
                  dialog("The enemy's " + currentEnemyPokemon.name + " has fainted!");
                  switchEnemyPokemon();
              enemySwitched = true;	
              }
              }
          if (enemyHyperBeam === true) {
                  dialog("The enemy's " + currentEnemyPokemon.name + " is recharging and can't move!\n");
          enemyHyperBeamCooldown = true;
          }
          // If they used sky attack last round, they'll hit this round
          if (enemySkyAttack === true) {
          enemySkyAttackHit = true;
          }
          // If they used solar beam last round, they'll hit this round
          if (enemySolarBeam === true) {
          enemySolarBeamHit = true;
          }
          // If they used fly last round, they'll hit this round
          if (enemyFly === true) {
          enemyFlyHit = true;
          }
          // If they used dig last round, they'll hit this round
          if (enemyDig === true) {
          enemyDigHit = true;
          }
          // If the enemy still has pokemon conscious and they didn't switch pokemon
              if ((enemyAlive !== false) && (enemySwitched === false) && (enemyHyperBeam === false) && (enemyFireSpin === false) && (enemySkyAttack === false) && (enemySolarBeam === false) && (enemyFly === false) && (enemyDig === false)) {
                  performEnemyAction();
              }
          if ((enemyFireSpin === true) && (enemyFireSpinInitTurn < 4)) {
          var health = currentEnemyPokemon.maxHP * (1/16);
          if (currentEnemyPokemon.HP - health < 0) {
              currentEnemyPokemon.HP = 0;
          }
          else {
              currentEnemyPokemon.HP = currentEnemyPokemon.HP - health;
          }
          dialog("The enemy's " + currentEnemyPokemon.name + " is trapped in the vortex!\n");
          enemyFireSpinInitTurn += 1;	
          }
          else if ((enemyFireSpin === true) && (enemyFireSpinInitTurn >= 4)) {
          enemyFireSpinInitTurn = 1;
          dialog("The enemy's " + currentEnemyPokemon.name + " escaped from the vortex!\n");
          enemyFireSpin = false;
          }
          if ((enemyHyperBeam === true) && (enemyHyperBeamCooldown === true)) {  
          enemyHyperBeamCooldown = false;	
          enemyHyperBeam = false;	
          }
              if ((enemySkyAttack === true) && (enemySkyAttackHit === true))  { 
              calculateEnemyActionDamage("Sky Attack", "Flying", "Physical", 140, 90);  
          enemySkyAttack = false
          enemySkyAttackHit = false;
          }
          if ((enemySolarBeam === true) && (enemySolarBeamHit === true)) { 
              calculateEnemyActionDamage("Solar Beam", "Grass", "Special", 120, 100);  
          enemySolarBeam = false
          enemySolarBeamHit = false;
          }
          if ((enemyFly === true) && (enemyFlyHit === true)) { 
              calculateEnemyActionDamage("Fly", "Flying", "Physical", 90, 95);  
          enemyFly = false
          enemyFlyHit = false;
          }
          if ((enemyDig === true) && (enemyDigHit === true)) { 
              calculateEnemyActionDamage("Dig", "Ground", "Physical", 80, 100);  
          enemyDig = false
          enemyDigHit = false;
          }
          // If the enemy used teleport
          if (enemyExitBattle === true) {
          break;
          }	
          enemySwitched = false;
          displayCurrentStats();
          // If the user's current Pokemon fainted
              if (currentUserPokemon.HP <= 0) {
          // If all of the user's pokemon are unconscious
              if (aliveUserPokemonArray.length === 0) { 	
                      userAlive = false;
                  break;
              }
          // Allows the user to switch out their unconscious pokemon (skips next turn)
              else {
                  dialog("Your " + currentUserPokemon.name + " has fainted!");
                  switchPokemon();
              userSwitched = true;
              }
              }
              if (currentEnemyPokemon.HP <= 0) {
          pokemonDef++;
          // If all of the enemy's other pokemon have no health
              if (aliveEnemyPokemonArray.length === 0) {
                      enemyAlive = false;
                  break;
              }
          // Allows the enemy to switch to another pokemon (skips next turn)
                  else {
                  dialog("The enemy's " + currentEnemyPokemon.name + " has fainted!");
                  switchEnemyPokemon();
              enemySwitched = true;	
              }
              }
          if (currentUserPokemon.status !== "none") {
          cure = Math.floor(Math.random() * 5) + 1;
          if (cure === 4) {
              currentUserPokemon.status = "none";
              userInitTurn = 1;
              dialog("Your " + currentUserPokemon.name + " has gotten rid of it's status effects!\n");
          }
          }
          // Checks for any status effects
          if (currentUserPokemon.status === "Paralyzed") {
              movement = Math.floor(Math.random() * 4) + 1;
              if (movement === 1) {
              userSwitched === true;
              dialog("Your " + currentUserPokemon.name + " is paralyzed. It can't move!");
          }
          }
          else if (currentUserPokemon.status === "Sleep") {
          userSwitched = true;
          dialog("Your " + currentUserPokemon.name + " is fast asleep!\n");
          }
          else if (currentUserPokemon.status === "Frozen") {
          userSwitched = true;
          dialog("Your " + currentUserPokemon.name + " is frozen solid and can't move!\n");
          }
          else if (currentUserPokemon.status === "Badly Poisoned") {
          var health = currentUserPokemon.maxHP;
          if (userInitTurn === 1) {
                  health = health * (1/16);
          }
          else if (userInitTurn === 2) {
              health = health * (2/16);
          }
          else if (userInitTurn === 3) {
              health = health * (3/16);
          }
          else if (userInitTurn >= 4) {
              health = health * (4/16);
          }
          userInitTurn += 1;
          if (currentUserPokemon.HP - health < 0) {
              currentUserPokemon.HP = 0;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP - health;
          }
              for (var i = 0; i < userPokemonTeam.length; i++) {
                  // Updates health to reflect the new value in data that will be exported back
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                  userPokemonTeam[i].HP = currentUserPokemon.HP
              }
              }
          dialog("Your " + currentUserPokemon.name + " is hurt by poison!\n");		
          }
          else if (currentUserPokemon.status === "Burn") {
          var health = currentUserPokemon.maxHP * (1/16);
          if (currentUserPokemon.HP - health < 0) {
              currentUserPokemon.HP = 0;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP - health;
          }
              for (var i = 0; i < userPokemonTeam.length; i++) {
                  // Updates health to reflect the new value in data that will be exported back
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                  userPokemonTeam[i].HP = currentUserPokemon.HP
              }
              }
          dialog("Your " + currentUserPokemon.name + " is hurt by it's burn!\n");		
          }
          else if (currentUserPokemon.status === "Poisoned") {
          var health = currentUserPokemon.maxHP * (1/8);
          if (currentUserPokemon.HP - health < 0) {
              currentUserPokemon.HP = 0;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP - health;
          }
              for (var i = 0; i < userPokemonTeam.length; i++) {
                  // Updates health to reflect the new value in data that will be exported back
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                  userPokemonTeam[i].HP = currentUserPokemon.HP
              }
              }
          dialog("Your " + currentUserPokemon.name + " is hurt by poison!\n");		
          }
         if (userLeechSeed === true) {
          var health = currentUserPokemon.maxHP * (1/8);
          if (currentUserPokemon.HP - health < 0) {
              currentUserPokemon.HP = 0;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP - health;
          }
          if (currentEnemyPokemon.HP + health > currentEnemyPokemon.maxHP) {
              currentEnemyPokemon.HP = currentEnemyPokemon.maxHP;
          }
          else {
              currentEnemyPokemon.HP = currentEnemyPokemon.HP + health;
          }
              for (var i = 0; i < userPokemonTeam.length; i++) {
                  // Updates health to reflect the new value in data that will be exported back
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                  userPokemonTeam[i].HP = currentUserPokemon.HP
              }
              }
          dialog("The enemy's " + currentEnemyPokemon.name + " is absorbing health with Leech Seed!\n");
          }
          if (currentUserPokemon.HP <= 0) {
          // If all of the user's other pokemon have no health
              if (aliveUserPokemonArray.length === 0) {
                      enemyAlive = false;
                  break;
              }
          // Allows the user to switch to another pokemon (skips next turn)
                  else {
                  dialog("Your " + currentUserPokemon.name + " has fainted!");
                  switchUserPokemon();
              userSwitched = true;	
              }
              }
          // If the user used hyperbeam last round, they can't move this turn
          if (userHyperBeam === true) {
          dialog("Your " + currentUserPokemon.name + " is recharging and can't move!\n");
          userHyperBeamCooldown = true;
          }
          // If the user used skyAttack last round, they will attack this turn
          if (userSkyAttack === true) {
          userSkyAttackHit = true;
          }
              // If the user used solar beam last round, they will attack this turn
          if (userSolarBeam === true) {
          userSolarBeamHit = true;
          }
          // If the user used fly last round, they will attack this turn
          if (userFly === true) {
          userFlyHit = true;
          }
          // If the user used dig last round, they will attack this turn
          if (userDig === true) {
          userDigHit = true;
          }
          // If the user didn't switch out their pokemon, their turn continues, else it gets skipped
              if ((userSwitched === false) && (userHyperBeam === false) && (userFireSpin === false) && (userSkyAttack === false) && (userSolarBeam === false) && (userFly === false) && (userDig === false)) {
                  getUserChoice();
          }
          userHyperBeam = false;
          if ((userFireSpin === true) && (userFireSpinInitTurn < 4)) {
          var health = currentUserPokemon.maxHP * (1/16);
          if (currentUserPokemon.HP - health < 0) {
              currentUserPokemon.HP = 0;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP - health;
          }
              for (var i = 0; i < userPokemonTeam.length; i++) {
                  // Updates health to reflect the new value in data that will be exported back
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                  userPokemonTeam[i].HP = currentUserPokemon.HP
              }
              }
          dialog("Your " + currentUserPokemon.name + " is trapped in the vortex!\n");
          userFireSpinInitTurn += 1;		
          }
          else if ((userFireSpin === true) && (userFireSpinInitTurn >= 4)) {
          userFireSpinInitTurn = 1;
          dialog("Your " + currentUserPokemon.name + " escaped the vortex!\n");
          userFireSpin = false;
          }
          if ((userHyperBeam === true) && (userHyperBeamCooldown === true)) {  
          userHyperBeamCooldown = false;	
          userHyperBeam = false;	
          }
          // If sky attack was used last round, does a sky attack
          if ((userSkyAttack === true) && (userSkyAttackHit === true)) { 
              calculateUserActionDamage("Sky Attack", "Flying", "Physical", 140, 90);  
          userSkyAttack = false;
          userSkyAttackHit = false;
          }
          // If solar beam was used last round
          if ((userSolarBeam === true) && (userSolarBeamHit === true)) { 
              calculateUserActionDamage("Solar Beam", "Grass", "Special", 120, 100);  
          userSolarBeam = false;
          userSolarBeamHit = false;
          }
          // If fly was used last round
          if ((userFly === true) && (userFlyHit === true)) { 
              calculateUserActionDamage("Fly", "Flying", "Physical", 90, 95);  
          userFly = false; 
          userFlyHit = false;
          }
          // If dig was used last round
          if ((userDig === true) && (userDigHit === true)) { 
              calculateUserActionDamage("Dig", "Ground", "Physical", 80, 100);  
          userDig = false;
          userDigHit = false;
          }
          // If the user used flee
          if (userExitBattle === true) {
          break;
          }	
          displayCurrentStats();
          userSwitched = false;
          // If the enemy's current pokemon has no health
              if (currentEnemyPokemon.HP <= 0) {
          pokemonDef++;
          // If all of the enemy's other pokemon have no health
              if (aliveEnemyPokemonArray.length === 0) {
                      enemyAlive = false;
                  break;
              }
          // Allows the user the enemy to switch pokemons (skips their next turn)
                  else {
                  dialog("The enemy's " + currentEnemyPokemon.name + " has fainted!");
                  switchEnemyPokemon();
              enemySwitched = true;	
              }
              }
              if (currentUserPokemon.HP <= 0) {
          // If all of the user's other pokemon have no health
              if (aliveUserPokemonArray.length === 0) {
                      enemyAlive = false;
                  break;
              }
          // Allows the user to switch to another pokemon (skips next turn)
                  else {
                  dialog("Your " + currentUserPokemon.name + " has fainted!");
                  switchUserPokemon();
              userSwitched = true;	
              }
              }
          }
      }}, '1000');
      //printBattleResult(userAlive, userExitBattle, enemyExitBattle, currentUserPokemon, currentEnemyPokemon);
  }
  
  // Displays the current stats for the user's and enemy's current pokemon
  function displayCurrentStats() {
      dialog("Your Current Pokemon: " + currentUserPokemon.name + ", HP: " + currentUserPokemon.HP);
      dialog("Enemy's Current Pokemon: " + currentEnemyPokemon.name + ", HP: " + currentEnemyPokemon.HP);
  }
  
  // Choose a pokemon to deploy at the beginning of a match
  function choosePokemon() {
      dialog("Which of your pokemon do you wish to use?");
      // Loops thorugh the array and displays each pokemon
      for (let i = 0; i < userPokemonTeam.length; i++) {
          console.log(`${i+1}: ${userPokemonTeam[i].name}, HP: ${userPokemonTeam[i].HP} \n`); 
      }
      // Depending on user's selection, the ones not chosen are added to the aliveUserPokemonArray
      var selection = prompt("Choose a pokemon");
      if (selection === '1') {
      // creates a copy of userPokemonTeam[0] and assigns it to currentUserPokemon
          currentUserPokemon = Object.assign({}, userPokemonTeam[0]);
      // Creates a copy of the object and adds it to aliveUserPokemon
      aliveUserPokemonArray.push(Object.assign({}, userPokemonTeam[1]));
      aliveUserPokemonArray.push(Object.assign({}, userPokemonTeam[2]));
      }    
      else if (selection === '2') {
      // creates a copy of userPokemonTeam[0] and assigns it to currentUserPokemon
          currentUserPokemon = Object.assign({}, userPokemonTeam[1]);
      // Creates a copy of the object and adds it to aliveUserPokemon
      aliveUserPokemonArray.push(Object.assign({}, userPokemonTeam[0]));
      aliveUserPokemonArray.push(Object.assign({}, userPokemonTeam[2]));
      }
      else if (selection === '3') {
      // creates a copy of userPokemonTeam[0] and assigns it to currentUserPokemon
          currentUserPokemon = Object.assign({}, userPokemonTeam[2]);
      // Creates a copy of the object and adds it to aliveUserPokemon
      aliveUserPokemonArray.push(Object.assign({}, userPokemonTeam[0]));
      aliveUserPokemonArray.push(Object.assign({}, userPokemonTeam[1]));
      }
      dialog("You choose " + currentUserPokemon.name + "!\n");
  }
  
  // Randomly deploys an enemy pokemon at the beginning of a match
  function getEnemyPokemon() {
      if (enemyPokemonTeam.length === 1) {
      currentEnemyPokemon = enemyPokemonTeam[0];
      dialog("You've been attacked by a wild " + currentEnemyPokemon.name + "!\n");
      }
      else {
          // Get a random number from 0 to 2
          enemyChoice = Math.floor(Math.random() * 3);
          currentEnemyPokemon = enemyPokemonTeam[enemyChoice];
          // Populates aliveEnemyPokemonArray with pokemon from enemyPokemonTeam that is not currentEnemyPokemon
          for (let i = 0; i < enemyPokemonTeam.length; i++) {
              if (enemyPokemonTeam[i] !== currentEnemyPokemon) {
                  aliveEnemyPokemonArray.push(enemyPokemonTeam[i]);
              }
          }
          dialog("Enemy chose " + currentEnemyPokemon.name + "!\n");
      }
  }
  
  // Gets the user choice for their move
  function getUserChoice() {
      console.log("Enter your choice:\n");
      console.log("1. Attack\n");
      console.log("2. Switch Pokemon\n");
      console.log("3. Assist\n");
      if (wildBattle === true) {
      console.log("4. Flee\n");
      }
      var choice = parseInt(prompt("Enter your choice:"));
      performUserAction(choice);
  }
  
  // Performs the actual moves the user chose
  function performUserAction(userChoice) {
      if (userChoice === 1) {
          var count = 1;
          console.log("Enter your choice:\n");
          for (var i = 0; i < currentUserPokemon.moves.length; i++) {
              console.log((i+1) + ". " + currentUserPokemon.moves[i].name);
              count = count + 1;
      }
      var choice = parseInt(prompt("Enter your choice:"));
          if (choice <= currentUserPokemon.moves.length) {
              var moveIndex = choice - 1;
          // Gathers the info on the move chosen and calls a function that calculates the damage
          var moveName = currentUserPokemon.moves[moveIndex].name;
          var moveType = currentUserPokemon.moves[moveIndex].type;
          var moveCategory = currentUserPokemon.moves[moveIndex].category;
          var moveAccuracy = currentUserPokemon.moves[moveIndex].accuracy;
          if (moveCategory !== "Status") {
              var movePower = currentUserPokemon.moves[moveIndex].power;
                  calculateUserActionDamage(moveName, moveType, moveCategory, movePower, moveAccuracy);
          }
          else {
              calculateUserStatusAttack(moveName, moveType, moveCategory, moveAccuracy);
          }
          }
      }
      // If the user wishes to switch pokemon
      else if (userChoice === 2) {
      // If all there other pokemon are fainted
          if (aliveUserPokemonArray.length === 0) {
          dialog("All your other pokemon have fainted!\n");
              getUserChoice();
          return;
      }
      else { 
          switchPokemon();
          }
      }
      else if (userChoice === 3) {
          if (aliveUserPokemonArray.length === 0) {
          dialog("All your other pokemon have fainted!\n");
              getUserChoice();
          return;
      }
      else {
          assist();
      }
      }
      else if ((userChoice === 4) && (wildBattle === true)) {
      userExitBattle = true;
      }
  }
  
  // Gets the damage done by a user attack
  function calculateUserActionDamage(name, type, category, power, accuracy) {
      var attack = 0;
      var defense = 0;
      var randomNum = Math.floor(Math.random() * 100);
      // Checks if the current pokemon has lowered acccuracy
      if (currentUserPokemon.status === "Lower Accuracy") {
      accuracy = accuracy / 2;
      }
      // If the move is swift, guaranteed hit
      if (name === "Swift") {
      accuracy = 101;
      }
      if ((name == "Dream Eater") && (currentEnemyPokemon.status != "Sleep")) {
          accuracy = -1;
      }
      if ((randomNum > accuracy) || (enemyFly === true) || (enemyDig == true)) {
      dialog("Your " + currentUserPokemon.name + " used " + name + " and it missed!\n");
      }
      else if ((name === "Sky Attack") && (userSkyAttack === false)) {
      dialog("Your " + currentUserPokemon.name + " is glowing with anticipation!\n");
      userSkyAttack = true;
      }
      else if ((name === "Solar Beam") && (userSolarBeam === false)) {
      dialog("Your " + currentUserPokemon.name + " absorbed light!\n");
      userSolarBeam = true;
      }
      else if ((name === "Fly") && (userFly === false)) {
      dialog("Your " + currentUserPokemon.name + " flew up high!\n");
      userFly = true;
      }
      else if ((name === "Dig") && (userDig === false)) {
      dialog("Your " + currentUserPokemon.name + " burrowed underground!\n");
      userDig = true;
      }
      else {
          var attack = 1;
          var defense = 1;
          var criticalHitFactor = 1;
          var sameAttackTypeBonus = 1;
      // If they used focus energy, higher chance of a crit
          if (userFocusEnergy === true) {
              // A 1/100 chance of landing a critical hit
              var criticalHitChance = Math.floor(Math.random() * 100);
              if (criticalHitChance === 3) {
                  criticalHitFactor = 2;
              } 
      }
      else {
              // A 1/256 chance of landing a critical hit
              var criticalHitChance = Math.floor(Math.random() * 256);
              if (criticalHitChance === 3) {
                  criticalHitFactor = 2;
              }
      }
          // Gets the STAB
          if (type === currentUserPokemon.type1) {
          sameAttackTypeBonus = 2;
          }
          // Gets the type effectiveness here
          var typeEffectiveness = getTypeEffectiveness(type, currentEnemyPokemon.type1, currentEnemyPokemon.type2);
          var level = currentUserPokemon.level;
          // If the attack being used is a special
          if (category != "Special") {
              attack = currentUserPokemon.attack;
              defense = currentEnemyPokemon.defense;
          }
          else {
              attack = currentUserPokemon.spAttack;
              defense = currentEnemyPokemon.spDefense	
          }
      var baseDamage = (((level * 2 / 5 + 2) * power * attack / defense) / 50) + 2;
          var modifier = (criticalHitFactor * sameAttackTypeBonus * typeEffectiveness);
          var random = Math.floor(Math.random() * (100 - 85 + 1)) + 85;
          var finalDamage = ((baseDamage * modifier) * random / 100) + 2;	
      // If dragon rage was used
      if (name === "Dragon Rage") {
          finalDamage = 40;
      }
      // Takes into account multiple hit moves
      else if ((name === "Fury Swipes") || (name === "Pin Missile")) {
          random = Math.floor(Math.random() * 4) + 2;
          finalDamage = finalDamage * random;
      }
      else if ((name === "Twineedle") || (name === "Double Kick")) {
          random = Math.floor(Math.random() * 2) + 1;
          finalDamage = finalDamage * random;
      }
      // Level Based Attacks
      else if (name === "Night Shade") {
          finalDamage = currentEnemyPokemon.level;
      }
      else if (name === "Psywave") {
          random = 1 + Math.random() * 0.5; 
          finalDamage = currentEnemyPokemon.level * random;
      }
       //Checks for status effects
      random = Math.floor(Math.random() * 2) + 1;
      if ((currentUserPokemon.status === "Confused") && (random === 1)) {
          dialog("Your " + currentUserPokemon.name + " is confused! It hurt itself in its confusion!\n");
          currentUserPokemon.HP = currentUserPokemon.HP - finalDamage 
      }
      else {
              dialog("Your " + currentUserPokemon.name + " used " + name + "!\n");
              if (typeEffectiveness === 0.5) {
                  dialog("It's not very effective...\n");
              }
              else if (typeEffectiveness >= 2) {
                  dialog("It's super effective!\n");
              }
              else if (typeEffectiveness === 0) {
              console/log("It doesn't affect " + currentEnemyPokemon.name + "!\n");
              }
              currentEnemyPokemon.HP = currentEnemyPokemon.HP - finalDamage;
          if (currentEnemyPokemon.HP < 0) {
              currentEnemyPokemon.HP = 0;
          }
      }
      // Checks if a move causes burn 
      if ((name === "Ember") || (name === "Flamethrower") || (name === "Fire Blast")) {
          if (currentEnemyPokemon.status === "none") {
              random = Math.floor(Math.random() * 10) + 1;
              if ((random === 1) && ((name === "Ember") || (name === "Flamethrower"))) {
              dialog("The enemy's " + currentEnemyPokemon.name + " was burned!\n");
              currentEnemyPokemon.status = "Burn";  
          }
          else if (((random === 1) || (random === 2) || (random === 3)) && (name === "Fire Blast")) {
              dialog("The enemy's " + currentEnemyPokemon.name + " was burned!\n");
              currentEnemyPokemon.status = "Burn";  
          }
          }
      }
      // Checks the chance of paralysis
      else if ((name === "Body Slam") || (name === "Lick") || (name === "Thunderbolt") || (name == "Thundershock") || (name === "Thunderpunch")) {
          if (currentEnemyPokemon.status === "none") {
              random = Math.floor(Math.random() * 10) + 1;
          if ((random === 1) && ((name === "Thunderbolt") || (name == "Thundershock") || (name === "Thunderpunch"))) {
              dialog("The enemy's " + currentEnemyPokemon.name + " was paralyzed! It may be unable to move!\n");
              currentEnemyPokemon.status = "Paralyzed";
          }
          if (((random === 1) || (random === 2) || (random === 3)) && ((name === "Body Slam") || (name == "Lick"))) {
              dialog("The enemy's " + currentEnemyPokemon.name + " was paralyzed! It may be unable to move!\n");
              currentEnemyPokemon.status = "Paralyzed";
          }
          }
      }
      // Checks the chance of poisoning
          else if ((name === "Twineedle") || (name === "Poison Sting") || (name === "Sludge") || (name === "Sludge Bomb")) {
              if (currentEnemyPokemon.status === "none") {
              random = Math.floor(Math.random() * 10) + 1;
              if (((random === 2) || (random === 1)) && ((name === "Twineedle") || (name === "Poison Sting"))) {
                  dialog("The enemy's " + currentEnemyPokemon.name + " was poisoned!\n");
                     currentEnemyPokemon.status = "Poisoned";    
              }
              else if (((random === 2) || (random === 3) || (random === 1)) && (name === "Sludge")) {
                  dialog("The enemy's " + currentEnemyPokemon.name + " was poisoned!\n");
              currentEnemyPokemon.status = "Poisoned";    
              }	
              else if (((random === 2) || (random === 3) || (random === 1) || (random == 7)) && (name === "Sludge Bomb")) {
                  dialog("The enemy's " + currentEnemyPokemon.name + " was poisoned!\n");
              currentEnemyPokemon.status = "Poisoned";    
              }		
          }
          }
      // Chekcs the chance of freezing
      else if ((name === "Ice Punch") || (name === "Ice Beam") || (name === "Blizzard")) {
          if (currentEnemyPokemon.status === "none") {
              random = Math.floor(Math.random() * 10) + 1;
          if ((random === 1) && ((name === "Ice Punch") || (name === "Ice Beam") || (name === "Blizzard"))) {
              dialog("The enemy's " + currentEnemyPokemon.name + " was frozen solid!\n");
              currentEnemyPokemon.status = "Frozen";
          }
          }
      }
      // Gain health back after attack
      else if ((name === "Mega Drain") || (name === "Leech Life") || (name === "Absorb")) {
          var health = finalDamage * 0.5
          if (currentUserPokemon.HP + health > currentUserPokemon.maxHP) {
          currentUserPokemon.HP = currentUserPokemon.maxHP;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP + health;
              }
          dialog ("Your " + currentUserPokemon.name + " drained health from the enemy's " + currentEnemyPokemon.name + "!\n");
      }
      // Get the recoil damage
      else if ((name === "Double Edge") || (name === "Submission")) {
          var recoil = finalDamage * (0.25);
          if (currentUserPokemon.HP - recoil < 0) {
          currentUserPokemon.HP = 0;
          }
          else {
              currentUserPokemon.HP = currentUserPokemon.HP - recoil;
          }
          dialog("Your " + currentUserPokemon.name + " took recoil damage!\n");
      }
      else if (name === "Shadow Ball") {
          random = Math.floor(Math.random() * 10) + 1;
          if (random === 1) {
          for (var i = 0; i < enemyPokemonTeam.length; i++) {
              // Checks to make sure that the debuff occured only once
                  if (enemyPokemonTeam[i].name === currentEnemyPokemon.name) {
                  if (currentEnemyPokemon.stage === 3) {
                      if (currentEnemyPokemon.spDefense > (enemyPokemonTeam[i].spDefense * 0.5)) {
                          currentEnemyPokemon.spDefense *= 0.5;
                      }
                  }
                  else if (currentEnemyPokemon.stage === 2) {
                      if (currentEnemyPokemon.spDefense > (enemyPokemonTeam[i].spDefense * 0.67)) {
                          currentEnemyPokemon.spDefense *= 0.67;
                      }
                  }
              }
          }
          dialog("The enemy's " + currentEnemyPokemon.name + "'s special defense fell!\n"); 
          }
      }
      else if (name === "Psychic") {
          random = Math.floor(Math.random() * 100) + 1;
          if (random <= 33) {
          for (var i = 0; i < enemyPokemonTeam.length; i++) {
              // Checks to make sure that the debuff occured only once
                  if (enemyPokemonTeam[i].name === currentEnemyPokemon.name) {
                  if (currentEnemyPokemon.stage === 3) {
                      if (currentEnemyPokemon.spDefense > (enemyPokemonTeam[i].spDefense * 0.5)) {
                          currentEnemyPokemon.spDefense *= 0.5;
                      }
                      if (currentEnemyPokemon.spAttack > (enemyPokemonTeam[i].spAttack * 0.5)) {
                          currentEnemyPokemon.spAttack *= 0.5;
                      }
                  }
                  else if (currentEnemyPokemon.stage === 2) {
                      if (currentEnemyPokemon.spDefense > (enemyPokemonTeam[i].spDefense * 0.67)) {
                          currentEnemyPokemon.spDefense *= 0.67;
                      }
                      if (currentEnemyPokemon.spAttack > (enemyPokemonTeam[i].spAttack * 0.67)) {
                          currentEnemyPokemon.spAttack *= 0.67;
                      }
                  }
              }
          }
          dialog("The enemy's " + currentEnemyPokemon.name + "'s special defense and special attack fell!\n"); 
          }
      }
      else if (name === "Bite") {
          random = Math.floor(Math.random() * 10) + 1;
          if (random === 1) {
          dialog("The enemy's " + currentEnemyPokemon.name + " flinched and couldn't move!\n");
          enemySwitched = true;
          }
      }
      else if (name === "Hyper Beam") {
          userHyperBeam = true;
      }
      else if (name === "Fire Spin") {
          enemyFireSpin = true;
          enemyFireSpinInitTurn = 1;
      }
      else if (name === "Aurora Beam") {
          random = Math.floor(Math.random() * 10) + 1;
          if (random === 1) {
          for (var i = 0; i < enemyPokemonTeam.length; i++) {
              // Checks to make sure that the debuff occured only once
                  if (enemyPokemonTeam[i].name === currentEnemyPokemon.name) {
                  if (currentEnemyPokemon.stage === 3) {
                      if (currentEnemyPokemon.attack > (enemyPokemonTeam[i].attack * 0.5)) {
                          currentEnemyPokemon.attack *= 0.5;
                      }
                  }
                  else if (currentEnemyPokemon.stage === 2) {
                      if (currentEnemyPokemon.attack > (enemyPokemonTeam[i].attack * 0.67)) {
                          currentEnemyPokemon.attack *= 0.67;
                      }
                  }
              }
          }
          dialog("The enemy's " + currentEnemyPokemon.name + " attack fell!\n");
          }
      }
      }
  }
  
  // Gets the the type effectiveness based on the types of the currentUserPokemon and the currentEnemyPokemon
  function getTypeEffectiveness(attackType, defenseType1, defenseType2) {
      var effectiveness = 1;
      // Check type effectiveness against the defending Pokémon's types
      effectiveness *= getTypeEffectivenessForType(attackType, defenseType1);
      if (defenseType2 !== "") {
          effectiveness *= getTypeEffectivenessForType(attackType, defenseType2);
      }
      return effectiveness;
  }
  
  // Grabs the values from the object of objects at the top
  function getTypeEffectivenessForType(attackType, defenseType) {
      var effectiveness = 1;
      if (attackType === "Normal") {
          effectiveness = normalTypeChart[defenseType];
      } 
      else if (attackType === "Fire") {
          effectiveness = fireTypeChart[defenseType];
      } 
      else if (attackType === "Water") {
          effectiveness = waterTypeChart[defenseType];
      }
      else if (attackType === "Electric") {
          effectiveness = electricTypeChart[defenseType];
      }
      else if (attackType === "Grass") {
          effectiveness = grassTypeChart[defenseType];
      }
      else if (attackType === "Ice") {
          effectiveness = iceTypeChart[defenseType];
      }
      else if (attackType === "Fighting") {
          effectiveness = fightingTypeChart[defenseType];
      }
      else if (attackType === "Poison") {
          effectiveness = poisonTypeChart[defenseType];
      }
      else if (attackType === "Ground") {
          effectiveness = groundTypeChart[defenseType];
      }
      else if (attackType === "Flying") {
          effectiveness = flyingTypeChart[defenseType];
      }
      else if (attackType === "Psychic") {
          effectiveness = psychicTypeChart[defenseType];
      }
      else if (attackType === "Bug") {
          effectiveness = bugTypeChart[defenseType];
      }
      else if (attackType === "Rock") {
          effectiveness = rockTypeChart[defenseType];
      }
      else if (attackType === "Ghost") {
          effectiveness = ghostTypeChart[defenseType];
      }
      else if (attackType === "Dragon") {
          effectiveness = dragonTypeChart[defenseType];
      }
      return effectiveness;
  }
  
  function calculateUserStatusAttack(moveName, moveType, moveCategory, moveAccuracy) {
      var randomNum = Math.floor(Math.random() * 100);
      if ((randomNum > moveAccuracy) || (enemySkyAttack === true) || (enemySolarBeam === true) || (enemyFly === true) || (enemyDig == true)) {
          if (assistFlag === true) {
          dialog("Your " + assistPokemonName + " used " + moveName + " and it missed!\n");
      }
      else {
              dialog("Your " + currentUserPokemon.name + " used " + moveName + " and it missed!\n");
      }
      }
      else {
      // Increases user's defense
          if ((moveName === "Withdraw") || (moveName === "Reflect") || (moveName === "Defense Curl") || (moveName === "Barrier") || (moveName === "Harden")) {
          if (assistFlag === true) {
          dialog("Your " + assistPokemonName + " used " + moveName + " and increased your defense!\n");
          }
          else {
                  dialog("Your " + currentUserPokemon.name + " used " + moveName + " and increased it's defense!\n");
          }
          for (var i = 0; i < userPokemonTeam.length; i++) {
          // Checks to make sure that the buff occured only once
              if (userPokemonTeam[i].name === currentUserPokemon.name) {
              if (currentUserPokemon.stage === 1) {
                  if (currentUserPokemon.defense < (userPokemonTeam[i].defense * 1.67)) {
                      currentUserPokemon.defense *= 1.67;
                  }
              }
              else if (currentUserPokemon.stage === 2) {
                  if (currentUserPokemon.defense < (userPokemonTeam[i].defense * 1.33)) {
                      currentUserPokemon.defense *= 1.33;
                  }
              }
          }
          }
      }
      // Lowers opponent's attack
      else if (moveName === "Growl") {
          if (assistFlag === true) {
          dialog("Your " + assistPokemonName + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + " attack fell!\n");
          }
          else {
                  dialog("Your " + currentUserPokemon.name + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + " attack fell!\n");
          }
          for (var i = 0; i < enemyPokemonTeam.length; i++) {
          // Checks to make sure that the debuff occured only once
              if (enemyPokemonTeam[i].name === currentEnemyPokemon.name) {
              if (currentEnemyPokemon.stage === 3) {
                  if (currentEnemyPokemon.attack > (enemyPokemonTeam[i].attack * 0.5)) {
                      currentEnemyPokemon.attack *= 0.5;
                  }
              }
              else if (currentEnemyPokemon.stage === 2) {
                  if (currentEnemyPokemon.attack > (enemyPokemonTeam[i].attack * 0.67)) {
                      currentEnemyPokemon.attack *= 0.67;
                  }
              }
          }
          }
      }
      // Lowers opponent's defense
      else if ((moveName === "Tail Whip") || (moveName === "Leer") || (moveName === "Screech")) {
          if (assistFlag === true) {
          dialog("Your " + assistPokemonName + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + " defense fell!\n");
          }
          else {
                  dialog("Your " + currentUserPokemon.name + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + " defense fell!\n");
          }
          for (var i = 0; i < enemyPokemonTeam.length; i++) {
          // Checks to make sure that the debuff occured only once
              if (enemyPokemonTeam[i].name === currentEnemyPokemon.name) {
              if (currentEnemyPokemon.stage === 3) {
                  if (currentEnemyPokemon.defense > (enemyPokemonTeam[i].defense * 0.5)) {
                      currentEnemyPokemon.defense *= 0.5;
                  }
              }
              else if (currentEnemyPokemon.stage === 2) {
                  if (currentEnemyPokemon.defense > (enemyPokemonTeam[i].defense * 0.67)) {
                      currentEnemyPokemon.defense *= 0.67;
                  }
              }
          }
          }
      }
      // Paralyzes enemy pokemon
      else if ((moveName === "Thunder Wave") || (moveName === "Stun Spore")) {
          // Checks to make sure the enemy does not already have status ailments
          if (currentEnemyPokemon.status === "none") {
              if (assistFlag === true) {
              dialog("Your " + assistPokemonName + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + " was paralyzed! It may be unable to move!\n");
              }
              else {
                      dialog("Your " + currentUserPokemon.name + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + " was paralyzed! It may be unable to move!\n");
              }
              currentEnemyPokemon.status = "Paralyzed";
          }
          else {
              if (assistFlag === true) {
              dialog("Your " + assistPokemonName + " used " + moveName + "! But it failed!\n");
              }
              else {
                      dialog("Your " + currentUserPokemon.name + " used " + moveName + "! But it failed!\n");
              }
          }
          }
      // Confuses enemy pokemon
      else if (moveName === "Confuse Ray") {
          if (currentEnemyPokemon.status === "none") {
              if (assistFlag === true) {
              dialog("Your " + assistPokemonName + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + " became confused!\n");
              }
              else {
                      dialog("Your " + currentUserPokemon.name + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + " became confused!\n");
              }
          currentEnemyPokemon.status = "Confused";
          }
          else {
              if (assistFlag === true) {
              dialog("Your " + assistPokemonName + " used " + moveName + "! But it failed!\n");
              }
              else {
                      dialog("Your " + currentUserPokemon.name + " used " + moveName + "! But it failed!\n");
              }
          }
      }
      // Plants a leech seed on the opponent
      else if (moveName === "Leech Seed") {
          if (currentEnemyPokemon.type1 !== "Grass") {
              if (assistFlag === true) {
              dialog("Your " + assistPokemonName + " used " + moveName + "! A seed was planted on the enemy's " + currentEnemyPokemon.name + "!\n");
              }
              else {
                      dialog("Your " + currentUserPokemon.name + " used " + moveName + "! A seed was planted on the enemy's " + currentEnemyPokemon.name + "!\n");
              }
          enemyLeechSeed = true;
          }
          else {
              if (assistFlag === true) {
              dialog("Your " + assistPokemonName + " used " + moveName + "! But it failed!\n");
              }
              else {
                      dialog("Your " + currentUserPokemon.name + " used " + moveName + "! But it failed!\n");
              }
          }
      }
      // Lowers the enemy's accuracy
      else if ((moveName === "Sand Attack") || (moveName === "Smokescreen") || (moveName === "Double Team")) {
          if (currentEnemyPokemon.status === "none") {
              if (assistFlag === true) {
              dialog("Your " + assistPokemonName + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + "'s accuracy fell!\n");
              }
              else {
                      dialog("Your " + currentUserPokemon.name + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + "'s accuracy fell!\n");
              }
          currentEnemyPokemon.status = "Lower Accuracy";
          }
          else {
              if (assistFlag === true) {
              dialog("Your " + assistPokemonName + " used " + moveName + "! But it failed!\n");
              }
              else {
                      dialog("Your " + currentUserPokemon.name + " used " + moveName + "! But it failed!\n");
              }
          }
      }   
      // Resets the status effects and buffs/debuffs of the pokemon battling
      else if (moveName === "Haze") {
          if (assistFlag === true) {
          dialog("Your " + assistPokemonName + " used " + moveName + "! All stat changes were eliminated!\n");
          }
          else {
                  dialog("Your " + currentUserPokemon.name + " used " + moveName + "! All stat changes were eliminated!\n");
          }
          currentUserPokemon.status = "none";
          userFocusEnergy = false;
          currentEnemyPokemon.status = "none";
          enemyFocusEnergy = false;    
          }
      // Forces the enemy pokemon to switch out
      else if (moveName === "Roar") { 
          if (assistFlag === true) {
          dialog("Your " + assistPokemonName + " used " + moveName + "!\n");
          }
          else {
                  dialog("Your " + currentUserPokemon.name + " used " + moveName + "!\n");
          }
          swapPokemon = currentEnemyPokemon;
          switchEnemyPokemon();
          if (swapPokemon.HP > 0) {
              aliveEnemyPokemonArray.push(swapPokemon);
          }
          enemySwitched = true;
          }
      // Badly poisons the enemy
      else if (moveName === "Toxic") {
          if (currentEnemyPokemon.status === "none") {
              if (assistFlag === true) {
              dialog("Your " + assistPokemonName + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + " was badly poisoned!\n");
              }
              else {
                      dialog("Your " + currentUserPokemon.name + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + " was badly poisoned!\n");
              }
          currentEnemyPokemon.status = "Badly Poisoned";
          }
          else {
              if (assistFlag === true) {
              dialog("Your " + assistPokemonName + " used " + moveName + "! But it failed!\n");
              }
              else {
                      dialog("Your " + currentUserPokemon.name + " used " + moveName + "! But it failed!\n");
              }
          }
      }
      // Makes the enemy fall asleep
      else if (moveName === "Hypnosis") {
          if (currentEnemyPokemon.status === "none") {
              if (assistFlag === true) {
              dialog("Your " + assistPokemonName + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + " fell asleep!\n");
              }
              else {
                      dialog("Your " + currentUserPokemon.name + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + " fell asleep!\n");
              }
          currentEnemyPokemon.status = "Sleep";
          }
          else {
              if (assistFlag === true) {
              dialog("Your " + assistPokemonName + " used " + moveName + "! But it failed!\n");
              }
              else {
                      dialog("Your " + currentUserPokemon.name + " used " + moveName + "! But it failed!\n");
              }
          }  
      }
      // Increases user's speed
          else if (moveName === "Agility") {
          if (assistFlag === true) {
          dialog("Your " + assistPokemonName + " used " + moveName + "Your " + currentUserPokemon.name + "'s speed sharply rose!\n");
          }
          else {
                  dialog("Your " + currentUserPokemon.name + " used " + moveName + "! Your " + currentUserPokemon.name + "'s speed sharply rose!\n");
          }
          for (var i = 0; i < userPokemonTeam.length; i++) {
          // Checks to make sure that the buff occured only once
              if (userPokemonTeam[i].name === currentUserPokemon.name) {
              if (currentUserPokemon.stage === 1) {
                  if (currentUserPokemon.speed < (userPokemonTeam[i].speed * 1.67)) {
                      currentUserPokemon.speed *= 1.67;
                  }
              }
              else if (currentUserPokemon.stage === 2) {
                  if (currentUserPokemon.speed < (userPokemonTeam[i].speed * 1.33)) {
                      currentUserPokemon.speed *= 1.33;
                  }
              }
          }
          }
      }
      // Increases the user's chance of a critical
      else if (moveName === "Focus Energy") {
          userFocusEnergy = true;
          if (assistFlag === true) {
          dialog("Your " + assistPokemonName + " used " + moveName + "Your " + currentUserPokemon.name + " is getting pumped up\n");
          }
          else {
                  dialog("Your " + currentUserPokemon.name + " is getting pumped up\n");
          }
      }
      // Allows the user to leave if it's a wild battle, or switch pokemon in a trainer battle
      else if (moveName === "Teleport") {
          if (assistFlag === true) {
          dialog("Your " + assistPokemonName + " used used teleport\n");
          }
          else {
                  dialog("Your " + currentUserPokemon.name + " used teleport\n");
          }
          if (wildBattle === true) {
          userExitBattle = true;
          }
          else {
                  roar = true; 
              switchPokemon();
              userSwitched = true;
          }
      }
      }
  }
  
  // Allows the user to switch to a pokemon in their team that's conscious
  function switchPokemon() {
      dialog("Select a Pokemon to switch to:");
      var count = 0;
      for (let i = 0; i < aliveUserPokemonArray.length; i++) {
          dialog(`${i + 1}. ${aliveUserPokemonArray[i].name}, HP: ${aliveUserPokemonArray[i].HP}`);
      count = count + 1;
      }
      count = count + 1;
      // Only gives this option if the user is switching their pokemon as a move, and not if their current pokemon has fainted
      if ((currentUserPokemon.HP > 0) && (roar === false)) { 
          dialog(count + ". Back\n")
      }
      roar = false;
      var switchChoice = parseInt(prompt("Enter your choice:"));
      if (switchChoice !== count) {
          // Remove the switched Pokémon from the array
          var switchedPokemon = aliveUserPokemonArray.splice(switchChoice - 1, 1)[0];
          // Add the previous currentUserPokemon to the end of the array if it hasn't fainted
          if (currentUserPokemon.HP > 0) {
              aliveUserPokemonArray.push(currentUserPokemon);
          }
          // Set the switched Pokémon as the new currentUserPokemon
          currentUserPokemon = switchedPokemon;
          dialog("You switched to " + currentUserPokemon.name + "!\n");
      userLeechSeed = false;
      userFocusEnergy = false;
      userInitTurn = 1;
      userFireSpinInitTurn = 1;
      userHyperBeam = false;
      userFireSpin = false;
      }
      // If they wish to go back (can only happen if they wanted to switch as a move, and not if their current pokemon has fainted)
      else if ((switchChoice === count) && (currentUserPokemon.HP > 0)) {
          getUserChoice();
      return;
      }
  }
  
  // Allow user to use an assist move
  function assist() {
      dialog("Select a Pokemon to assist you:");
      var count = 0;
      for (let i = 0; i < aliveUserPokemonArray.length; i++) {
          dialog(`${i + 1}. ${aliveUserPokemonArray[i].name}, HP: ${aliveUserPokemonArray[i].HP}`);
      count = count + 1;
      }
      count = count + 1;
      dialog(count + ". Back\n")
      var assistChoice = parseInt(prompt("Enter your choice:"));
      if (assistChoice !== count) {
      assistChoice = assistChoice - 1;
      dialog("You have received an assist from " + aliveUserPokemonArray[assistChoice].name + "!\n");
      assistPokemon = aliveUserPokemonArray[assistChoice];
      // Gets the stats of the assist move
      assistFlag = true;
      assistPokemonName = assistPokemon.name;
      assistMoveName = assistPokemon.assist.name;
      assistMoveType = assistPokemon.assist.type;
      assistMoveCategory = assistPokemon.assist.category;
      assistMoveAccuracy = assistPokemon.assist.accuracy;
      // Does the attack and displays the assist pokemon as the one doing it
      calculateUserStatusAttack(assistMoveName, assistMoveType, assistMoveCategory, assistMoveAccuracy);
      // Reverts back to the non assist pokemon
      assistFlag = false;
      assistPokemonName = "";
      }
      // If they wish to go back
      else if (assistChoice === count) {
          getUserChoice();
      return;
      }
  }
  
  // Switches the enemy's current pokemon once it has no health
  function switchEnemyPokemon() {
      currentEnemyPokemon = aliveEnemyPokemonArray.pop();
      dialog("Enemy has switched to " + currentEnemyPokemon.name + "!\n");
      enemyLeechSeed = false; 
      enemyFocusEnergy = false;
      enemyInitTurn = 1;
      enemyFireSpinInitTurn = 1;
      enemyHyperBeam = false;
      enemyFireSpin = false;
  }
  
  // Performs the enemy action
  function performEnemyAction() {
      var finaDamage = 0;
      var random = 0;
      var enemyMoveIndex = Math.floor(Math.random() * currentEnemyPokemon.moves.length);
      var enemyMove = currentEnemyPokemon.moves[enemyMoveIndex];
      var enemyMoveName = enemyMove.name;
      var enemyMoveType = enemyMove.type;
      var enemyMoveCategory = enemyMove.category;
      var enemyMoveAccuracy = enemyMove.accuracy;
      if (enemyMoveCategory !== "Status") {
      var enemyMovePower = enemyMove.power;
          calculateEnemyActionDamage(enemyMoveName, enemyMoveType, enemyMoveCategory, enemyMovePower, enemyMoveAccuracy);
      }
      else {
          calculateEnemyStatusAttack(enemyMoveName, enemyMoveType, enemyMoveCategory, enemyMoveAccuracy);
      }
  }
  
  // Calculates the damage done by the enemy
  function calculateEnemyActionDamage(name, type, category, power, accuracy) {
      var randomNum = Math.floor(Math.random() * 100);
      // Checks if the current pokemon has lowered acccuracy
      if (currentEnemyPokemon.status === "Lower Accuracy") {
      accuracy = accuracy / 2;
      }
      if (name === "Swift") {
      accuracy = 101;
      }
      if ((name == "Dream Eater") && (currentEnemyPokemon.status != "Sleep")) {
          accuracy = -1;
      }
      if ((randomNum > accuracy) || (userFly === true) || (userDig === true)) {
      dialog("The enemy's " + currentEnemyPokemon.name + " used " + name + " and it missed!\n");
      }
      else if ((name === "Sky Attack") && (enemySkyAttack === false)) {
      dialog("The enemy's " + currentEnemyPokemon.name + " is glowing with anticipation!\n");
      enemySkyAttack = true;
      }
      else if ((name === "Solar Beam") && (enemySolarBeam === false)) {
      dialog("The enemy's " + currentEnemyPokemon.name + " absorbed light!\n");
      enemySolarBeam = true;
      }
      else if ((name === "Fly") && (enemyFly === false)) {
      dialog("The enemy's " + currentEnemyPokemon.name + " flew up high!\n");
      enemyFly = true;
      }
      else if ((name === "Dig") && (enemyDig === false)) {
      dialog("The enemy's " + currentEnemyPokemon.name + " burrowed underground!\n");
      enemyDig = true;
      }
      else {
          var attack = 1;
          var defense = 1;
          var criticalHitFactor = 1;
          var sameAttackTypeBonus = 1;
          if (enemyFocusEnergy === true) {
              // A 1/100 chance of landing a critical hit
              var criticalHitChance = Math.floor(Math.random() * 100);
              if (criticalHitChance === 3) {
                  criticalHitFactor = 2;
              } 
      }
      else {
              // A 1/256 chance of landing a critical hit
              var criticalHitChance = Math.floor(Math.random() * 256);
              if (criticalHitChance === 3) {
                  criticalHitFactor = 2;
              }
      }
          // Gets the STAB
          if (type === currentEnemyPokemon.type1) {
          sameAttackTypeBonus = 2;
          }
          // Gets the type effectiveness here
          var typeEffectiveness = getTypeEffectiveness(type, currentUserPokemon.type1, currentUserPokemon.type2);
          var level = currentEnemyPokemon.level;
          if (category != "Special") {
              attack = currentEnemyPokemon.attack;
              defense = currentUserPokemon.defense;
          }
          else {
              attack = currentEnemyPokemon.spAttack;
          defense = currentUserPokemon.spDefense;
          }
          var baseDamage = (((level * 2 / 5 + 2) * power * attack / defense) / 50) + 2;
          var modifier = (criticalHitFactor * sameAttackTypeBonus * typeEffectiveness);
          var random = Math.floor(Math.random() * (100 - 85 + 1)) + 85;
          var finalDamage = ((baseDamage * modifier) * random / 100) + 2;
          if (name === "Dragon Rage") {
          finalDamage = 40;
      }
          // Takes into account multiple hit moves
      else if ((name === "Fury Swipes") || (name === "Pin Missile")) {
          random = Math.floor(Math.random() * 4) + 2;
          finalDamage = finalDamage * random;
      }
      else if ((name === "Twineedle") || (name === "Double Kick")) {
          random = Math.floor(Math.random() * 2) + 1;
          finalDamage = finalDamage * random;
      }
      // Level based attacks
      else if (name === "Night Shade") {
          finalDamage = currentUserPokemon.level;
      }
      else if (name === "Psywave") {
          random = 1 + Math.random() * 0.5; 
          finalDamage = currentUserPokemon.level * random;
      }
       //Checks for status effects
      random = Math.floor(Math.random() * 2) + 1;
      if ((currentEnemyPokemon.status === "Confused") && (random === 1)) {
          dialog("The enemy's " + currentUserPokemon.name + " is confused! It hurt itself in its confusion!\n");
          currentEnemyPokemon.HP = currentEnemyPokemon.HP - finalDamage
          return finalDamage; 
      }
      else {
              dialog("The enemy's " + currentEnemyPokemon.name + " used " + name + "!\n");
              if (typeEffectiveness === 0.5) {
                  dialog("It's not very effective...\n");
              }
              else if (typeEffectiveness >= 2) {
                  dialog("It's super effective!\n");
              }
              else if (typeEffectiveness === 0) {
              dialog("It doesn't affect " + currentUserPokemon.name + "!\n");
              }
              currentUserPokemon.HP = currentUserPokemon.HP - finalDamage;
          if (currentUserPokemon.HP < 0) {
              currentUserPokemon.HP = 0;
          }
          for (var i = 0; i < userPokemonTeam.length; i++) {
              // Updates with the new health
                  if (userPokemonTeam[i].name === currentUserPokemon.name) {
              userPokemonTeam[i].HP = currentUserPokemon.HP
          }
          }
          // Checks if a move causes burn 
              if ((name === "Ember") || (name === "Flamethrower") || (name === "Fire Blast")) {
                  if (currentUserPokemon.status === "none") {
                  random = Math.floor(Math.random() * 10) + 1;
                  if ((random === 1) && ((name === "Ember") || (name === "Flamethrower"))) {
                  dialog("Your " + currentUserPokemon.name + " was burned!\n");
                  currentUserPokemon.status = "Burn";  
                  }
                  else if (((random === 1) || (random === 2) || (random === 3)) && (name === "Fire Blast")) {
                  dialog("Your " + currentUserPokemon.name + " was burned!\n");
                  currentUserPokemon.status = "Burn";  
                  }
              }
              }
              // Checks the chance of paralysis
              else if ((name === "Body Slam") || (name === "Lick") || (name === "Thunderbolt") || (name == "Thundershock") || (name === "Thunderpunch")) {
                  if (currentUserPokemon.status === "none") {
                  random = Math.floor(Math.random() * 10) + 1;
                  if ((random === 1) && ((name === "Thunderbolt") || (name == "Thundershock") || (name === "Thunderpunch"))) {
                  dialog("Your " + currentUserPokemon.name + " was paralyzed! It may be unable to move!\n");
                  currentUserPokemon.status = "Paralyzed";
                  }
                  else if (((random === 1) || (random === 2) || (random === 3)) && ((name === "Body Slam") || (name == "Lick"))) {
                  dialog("Your " + currentUserPokemon.name + " was paralyzed! It may be unable to move!\n");
                  currentUserPokemon.status = "Paralyzed";
                  }
              }
              }
              // Checks to see if pokemon was poisoned
              else if ((name === "Twineedle") || (name === "Poison Sting") || (name === "Sludge") || (name === "Sludge Bomb")) {
                  if (currentUserPokemon.status === "none") {
                  random = Math.floor(Math.random() * 10) + 1;
                  if (((random === 2) || (random === 1)) && ((name === "Twineedle") || (name === "Poison Sting"))) {
                      dialog("Your " + currentUserPokemon.name + " was poisoned!\n");
                         currentUserPokemon.status = "Poisoned";    
                  }
                  else if (((random === 2) || (random === 3) || (random === 1)) && (name === "Sludge")) {
                      dialog("Your " + currentUserPokemon.name + " was poisoned!\n");
                  currentUserPokemon.status = "Poisoned";    
                  }	
                  else if (((random === 2) || (random === 3) || (random === 1) || (random == 7)) && (name === "Sludge Bomb")) {
                      dialog("Your " + currentUserPokemon.name + " was poisoned!\n");
                  currentUserPokemon.status = "Poisoned";    
                  }		
              }
              }
              // Chekcs the chance of freezing
              else if ((name === "Ice Punch") || (name === "Ice Beam") || (name === "Blizzard")) {
                  if (currentUserPokemon.status === "none") {
                  random = Math.floor(Math.random() * 10) + 1;
                  if ((random === 1) && ((name === "Ice Punch") || (name === "Ice Beam") || (name === "Blizzard"))) {
                      dialog("Your " + currentUserPokemon.name + " was frozen solid!\n");
                  currentUserPokemon.status = "Frozen";
                  } 
              }
              }
              // If the move drains health
              else if ((name === "Mega Drain") || (name === "Leech Life") || (name === "Absorb")) {
                  var health = finalDamage * 0.5
              if (currentEnemyPokemon.HP + health > currentEnemyPokemon.maxHP) {
                  currentEnemyPokemon.HP = currentEnemyPokemon.maxHP;
              }
              else {
                  currentEnemyPokemon.HP = currentEnemyPokemon.HP + health;
              }
              dialog ("The enemy's " + currentEnemyPokemon.name + " drained health from your " + currentUserPokemon.name + "!\n");
              }
              // if the move has recoil
              else if ((name === "Double Edge") || (name === "Submission")) {
                  var recoil = finalDamage * (0.25);
              if (currentEnemyPokemon.HP - recoil < 0) {
                  currentEnemyPokemon.HP = 0;
              }
              else {
                  currentEnemyPokemon.HP = currentEnemyPokemon.HP - recoil;
              }
              dialog("The enemy's " + currentEnemyPokemon.name + " took recoil damage!\n");
              }
              else if (name === "Shadow Ball") {
                  random = Math.floor(Math.random() * 10) + 1;
              if (random === 1) {
                  for (var i = 0; i < userPokemonTeam.length; i++) {
                      // Checks to make sure that the debuff occured only once
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                      if (currentUserPokemon.stage === 3) {
                          if (currentUserPokemon.spDefense > (userPokemonTeam[i].spDefense * 0.5)) {
                              currentUserPokemon.spDefense *= 0.5;
                          }
                      }
                      else if (currentUserPokemon.stage === 2) {
                          if (currentUserPokemon.spDefense > (userPokemonTeam[i].spDefense * 0.67)) {
                              currentUserPokemon.spDefense *= 0.67;
                          }
                      }
                  }
                  }
                  dialog("Your " + currentUserPokemon.name + "'s special defense fell!\n"); 
              }
              }
              else if (name === "Psychic") {
                  random = Math.floor(Math.random() * 100) + 1;
              if (random <= 33) {
                  for (var i = 0; i < userPokemonTeam.length; i++) {
                      // Checks to make sure that the debuff occured only once
                      if (userPokemonTeam[i].name === currentUserPokemon.name) {
                      if (currentUserPokemon.stage === 3) {
                          if (currentUserPokemon.spDefense > (userPokemonTeam[i].spDefense * 0.5)) {
                              currentUserPokemon.spDefense *= 0.5;
                          }
                          if (currentUserPokemon.spAttack > (userPokemonTeam[i].spAttack * 0.5)) {
                              currentUserPokemon.spAttack *= 0.5;
                          }
                      }
                      else if (currentUserPokemon.stage === 2) {
                          if (currentUserPokemon.spDefense > (userPokemonTeam[i].spDefense * 0.67)) {
                              currentUserPokemon.spDefense *= 0.67;
                          }
                          if (currentUserPokemon.spAttack > (userPokemonTeam[i].spAttack * 0.67)) {
                              currentUserPokemon.spAttack *= 0.67;
                          }
                      }
                  }
                  }
                  dialog("Your " + currentUserPokemon.name + "'s special defense and special attack fell!\n"); 
              }
              }
              else if (name === "Bite") {
                  random = Math.floor(Math.random() * 10) + 1;
                  if (random === 1) {
                      dialog("Your " + currentUserPokemon.name  + " flinched and couldn't move!\n");
                  userSwitched = true;
              }
              }
              else if (name === "Hyper Beam") {
              enemyHyperBeam = true;
              }
              else if (name === "Fire Spin") {
                  userFireSpin = true;
                  userFireSpinInitTurn = 1;
              }
              else if (name === "Aurora Beam") {
                  random = Math.floor(Math.random() * 10) + 1;
                  if (random === 1) {
                  for (var i = 0; i < userPokemonTeam.length; i++) {
                      // Checks to make sure that the debuff occured only once
                          if (userPokemonTeam[i].name === currentUserPokemon.name) {
                          if (currentUserPokemon.stage === 3) {
                              if (currentUserPokemon.attack > (userPokemonTeam[i].attack * 0.5)) {
                                  currentUserPokemon.attack *= 0.5;
                              }
                          }
                          else if (currentUserPokemon.stage === 2) {
                              if (currentUserPokemon.attack > (userPokemonTeam[i].attack * 0.67)) {
                                  currentUserPokemon.attack *= 0.67;
                              } 
                          }
                      }
                  } 
                  dialog("The enemy's " + currentEnemyPokemon.name + " attack fell!\n");
              }
              }
          }
      }
  }
  
  function calculateEnemyStatusAttack(moveName, moveType, moveCategory, moveAccuracy) {
      var randomNum = Math.floor(Math.random() * 100);
      if ((randomNum > moveAccuracy) || (userSkyAttack === true) || (userSolarBeam === true) || (userFly === true) || (userDig === true)) {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + " and it missed!\n");
      }
      else {
      // Increases enemy's defense
          if ((moveName === "Withdraw") || (moveName === "Reflect") || (moveName === "Defense Curl") || (moveName === "Barrier") || (moveName === "Harden")) {
              dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + " and increased it's defense!\n");
          for (var i = 0; i < enemyPokemonTeam.length; i++) {
          // Checks to make sure that the buff occured only once
              if (enemyPokemonTeam[i].name === currentEnemyPokemon.name) {
              if (currentEnemyPokemon.stage === 1) {
                  if (currentEnemyPokemon.defense < (enemyPokemonTeam[i].defense * 1.67)) {
                      currentEnemyPokemon.defense *= 1.67;
                  }
              }
              else if (currentEnemyPokemon.stage === 2) {
                  if (currentEnemyPokemon.defense < (enemyPokemonTeam[i].defense * 1.33)) {
                      currentEnemyPokemon.defense *= 1.33;
                  }
              }
          }
          }
      }
      // Lowers user's attack
      else if (moveName === "Growl") {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! Your " + currentUserPokemon.name + " attack fell!\n");
          for (var i = 0; i < userPokemonTeam.length; i++) {
          // Checks to make sure that the debuff occured only once
              if (userPokemonTeam[i].name === currentUserPokemon.name) {
              if (currentUserPokemon.stage === 3) {
                  if (currentUserPokemon.attack > (userPokemonTeam[i].attack * 0.5)) {
                      currentUserPokemon.attack *= 0.5;
                  }
              }
              else if (currentUserPokemon.stage === 2) {
                  if (currentUserPokemon.attack > (userPokemonTeam[i].attack * 0.67)) {
                      currentUserPokemon.attack *= 0.67;
                  }
              }
          }
          }
      }
      // Lowers user's defense
      else if ((moveName === "Tail Whip") || (moveName === "Leer") || (moveName === "Screech")) {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! Your " + currentUserPokemon.name + " defense fell!\n");
          for (var i = 0; i < userPokemonTeam.length; i++) {
          // Checks to make sure that the debuff occured only once
              if (userPokemonTeam[i].name === currentUserPokemon.name) {
              if (currentUserPokemon.stage === 3) {
                  if (currentUserPokemon.defense > (userPokemonTeam[i].defense * 0.5)) {
                      currentUserPokemon.defense *= 0.5;
                  }
              }
              else if (currentUserPokemon.stage === 2) {
                  if (currentUserPokemon.defense > (userPokemonTeam[i].defense * 0.67)) {
                      currentUserPokemon.defense *= 0.67;
                  }
              }
          }
          }
      }
      // Paralyzes user pokemon
      else if ((moveName === "Thunder Wave") || (moveName === "Stun Spore")) {
          // Checks to make sure the enemy does not already have status ailments
          if (currentUserPokemon.status === "none") {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! Your " + currentUserPokemon.name + " was paralyzed! It may be unable to move!\n");
              currentUserPokemon.status = "Paralyzed";
          }
          else {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! But it failed!\n");
          }
          }
      // Confuses user pokemon
      else if (moveName === "Confuse Ray") {
          if (currentUserPokemon.status === "none") {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! Your " + currentUserPokemon.name + " became confused!\n");
          currentUserPokemon.status = "Confused";
          }
      }
      // Plants a leech seed on the user
      else if (moveName === "Leech Seed") {
          if (currentUserPokemon.type1 !== "Grass") {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! A seed was planted on your " + currentUserPokemon.name + "!\n");
          userLeechSeed = true;
          }
          else {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! But it failed!\n");
          }
      }
      // Lowers the user's accuracy
      else if ((moveName === "Sand Attack") || (moveName === "Smokescreen") || (moveName === "Double Team")) {
          if (currentUserPokemon.status === "none") {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! Your " + currentUserPokemon.name + "'s accuracy fell!\n");
          currentUserPokemon.status = "Lower Accuracy";
          }
          else {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! But it failed!\n");
          } 
      }
      // Resets the status effects and buffs/debuffs of the pokemon battling
      else if (moveName === "Haze") {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! All status effects removed!\n");
          currentUserPokemon.status = "none";
          userFocusEnergy = false;
          currentEnemyPokemon.status = "none";
          enemyFocusEnergy = false;
      }
      // Forces the user pokemon to switch out
      else if (moveName === "Roar") { 
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "!\n");
          roar = true; 
          switchPokemon();
          userSwitched = true;
          } 
      else if (moveName === "Toxic") {
          if (currentUserPokemon.status === "none") {
              dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! Your " + currentUserPokemon.name + " was badly poisoned!\n");
          currentUserPokemon.status = "Badly Poisoned";
          }
          else {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! But it failed!\n");
          }  
      }
      else if (moveName === "Hypnosis") {
          if (currentUserPokemon.status === "none") {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! Your " + currentUserPokemon.name + " fell asleep!\n");
          currentUserPokemon.status = "Sleep";
          }
          else {
          dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! But it failed!\n");
          }  
      }
      // Increases enemy's agility
          else if (moveName === "Agility") {
              dialog("The enemy's " + currentEnemyPokemon.name + " used " + moveName + "! The enemy's " + currentEnemyPokemon.name + "'s speed sharply rose!\n");
          for (var i = 0; i < enemyPokemonTeam.length; i++) {
          // Checks to make sure that the buff occured only once
              if (enemyPokemonTeam[i].name === currentEnemyPokemon.name) {
              if (currentEnemyPokemon.stage === 1) {
                  if (currentEnemyPokemon.speed < (enemyPokemonTeam[i].speed * 1.67)) {
                      currentEnemyPokemon.speed *= 1.67;
                  }
              }
              else if (currentEnemyPokemon.stage === 2) {
                  if (currentEnemyPokemon.speed < (enemyPokemonTeam[i].speed * 1.33)) {
                      currentEnemyPokemon.speed *= 1.33;
                  }
              }
          }
          }
      }
      // Increases the user's chance of a critical
      else if (moveName === "Focus Energy") {
          enemyFocusEnergy = true;
          dialog("The enemy's " + currentEnemyPokemon.name + " is getting pumped up\n");
      }
      else if (moveName === "Teleport") {
          dialog("The enemy's " + currentEnemyPokemon.name + " used teleport\n");
          if (wildBattle === true) {
          enemyExitBattle = true;
          }
          else {
               swapPokemon = currentEnemyPokemon;
              switchEnemyPokemon();
              if (swapPokemon.HP > 0) {
                  aliveEnemyPokemonArray.push(swapPokemon);
              }
              enemySwitched = true;
          }
      }
      }
  }
  
  // Prints a closing statment depending on who won
  function printBattleResult(userAlive, userExitBattle, enemyExitBattle, currentUserPokemon, currentEnemyPokemon) {
      if (userAlive === false) {
          dialog("Your " + currentUserPokemon.name + " has fainted!");
      dialog("All of your pokemon have fainted!");
      } 
      else if (userExitBattle === true) {
      dialog("Your team has fled!");
      }
      else if (enemyExitBattle === true) {
      dialog("The enemy's team has fled using teleport!");
      }
      else {
          dialog("The enemy's " + currentEnemyPokemon.name + " has fainted!");
      dialog("All of the enemy's pokemon have fainted!");
      if(!wildBattle){
        trainersDef++;
      }
      if (trainer_badges < 8) {
          trainer_badges++;    
      }
      }
      // If the user wins the fight without anyone running away, levels up
      if ((userAlive !== false) && (userExitBattle !== true) && (enemyExitBattle !== true)) {
          for (var i = 0; i < userPokemonTeam.length; i++) {
          // If the pokemon isn't at the max level
          if (userPokemonTeam[i].level <= 20) {
          // if the pokemon is at a stage threshold, evolve
          if ((userPokemonTeam[i].level + 1 === 8) || (userPokemonTeam[i].level + 1 === 15)) {
              userPokemonTeam[i].level++;
              userPokemonTeam[i].stage++;
              let temp = userPokemonTeam[i];
              userPokemonTeam[i] = evolve(userPokemonTeam[i]);
              performEvolution(temp, userPokemonTeam[i]);
          }
          else {
              userPokemonTeam[i].hp *= 1.05;
              userPokemonTeam[i].attack *= 1.05;
              userPokemonTeam[i].defense *= 1.05;
              userPokemonTeam[i].spAttack *= 1.05;
              userPokemonTeam[i].spDefense *= 1.05;
              userPokemonTeam[i].speed *= 1.05;
          }
          }
      }
      }
      // If it was a fight in the wild and you won the fight with no one fleeing
      if ((wildBattle === true) && (userAlive !== false) && (userExitBattle !== true) && (enemyExitBattle !== true)) {
        let userResponse = confirm("Do you want to catch this Pokemon?");

        if(userResponse == true){
            loadPokemonOptions(false);
            document.getElementById('goBack').addEventListener('click', function() {
                let bigdiv = document.getElementById('pokemonReleaseInterface');
                bigdiv.style.display = "none";
                popupMenu.classList.toggle("hidden"); 
            });
            dialog("Congrats! You have caught a " + enemyPokemonTeam[0].name + "!");
        }
      }
      // Places global variables used in a fight back to default
      aliveUserPokemonArray = [];                      
      aliveEnemyPokemonArray = [];                      
      roar = false;                                     
      userInitTurn = 1;                                   
      enemyInitTurn = 1;                                  
      enemySwitched = false;			        
      userSwitched = false;				
      userHyperBeam = false;                               
      userHyperBeamCooldown = false;                      
      enemyHyperBeam = false;                             
      enemyHyperBeamCooldown = false;                      
      enemyFireSpin = false;                             
      userFireSpin = false;                            
      userFireSpinInitTurn = 1;                            
      enemyFireSpinInitTurn = 1;                          
      userLeechSeed = false;                            
      enemyLeechSeed = false;                            
      wildBattle = true;                                  
      userExitBattle = false;                             
      enemyExitBattle = false;                            
      enemyFocusEnergy = false;                            
      userFocusEnergy = false;                           
      userSkyAttack = false;                             
      userSkyAttackHit = false;                           
      enemySkyAttack = false;                              
      enemySkyAttackHit = false;                          
      userSolarBeam = false;                               
      userSolarBeamHit = false;                           
      enemySolarBeam = false;                              
      enemySolarBeamHit = false;                         
      userFly = false;                                  
      userFlyHit = false;                                
      enemyFly = false;                                    
      enemyFlyHit = false;                                 
      userDig = false;                                     
      userDigHit = false;                                 
      enemyDig = false;                                   
      enemyDigHit = false;                                
      assistFlag = false;                                
      assistPokemonName = ""   
      inBattle = false;
      musicPlaying = false;  
      world = true;
      let audioPlayer = document.getElementById('audioPlayer'); 
      audioPlayer.pause();                        
  }
  
  // If a pokemon is evolving
  async function evolve(evolvingPokemon) {
      // If the pokemon is Eevee, randomly generates a 1, 2, or 3
      if (evolvingPokemon.name === "Eevee") {
      var evolveNumber = Math.floor(Math.random() * 3) + 1;
          let evolvedPokemon = new Pokemon(evolvingPokemon.number + evolveNumber, evolvingPokemon.level);
          await evolvedPokemon.init();
          return evolvedPokemon; 	
      }
      else {
          let evolvedPokemon = new Pokemon(evolvingPokemon.number + 1, evolvingPokemon.level);
          await evolvedPokemon.init();
          return evolvedPokemon;
      } 
  }