
// One Piece

function mostrarPersonagemOP() {
 
    
    var qtdPersonagem = 8;
    var personagem =  document.querySelector("#personagem") ;
    var nome = { "personagem" : [ 
        "Luffy", 
        "Zoro",
        "Sanji",
        "Nami",
        "Robin",
        "Ussop",
        "Brook",
        "Jimbei",
        "Yamato",
        "Frank",
        
       
       ]};
    
     
    
    var  imagem = { "personagem": [ "../Imgs/personagem/luffy-character.png",
        "../Imgs/personagem/zoro-character.jpg",
        "../Imgs/personagem/sanji-character.png",
        "../Imgs/personagem/nami-character.jpg",
        "../Imgs/personagem/robin-character.jpg",
        "../Imgs/personagem/ussop-character.png",
        "../Imgs/personagem/brook-character.png",
        "../Imgs/personagem/jimbei-character.jpg",
        "../Imgs/personagem/yamato-character.png",
        "../Imgs/personagem/frank-character.png",
        
      
    ]} ;
      
        
    for (var  cont = 0; cont < qtdPersonagem; cont++) {
        personagem.innerHTML += `
       <div class="card-personagem">
            <div class="card-imagem" >
                <img src='${imagem.personagem[cont]}' class="card-img"/>
            </div>
           <div class="card-body">
            <h2 class="card-titulo">${nome.personagem[cont]}</h2>
         </div>
         
          </div>`
    
    } 
    
    }
    


// Gurren Lagann

function mostrarPersonagemGL() {
 
    
    var qtdPersonagem = 8;
    var personagem =  document.querySelector("#personagem") ;
    var nome = { "personagem" : [ 
        "Simon", 
        "Kamina",
        "Yoko",
        "Nia",
        "Viral",
        "Adiane",
        "Kittan",
        "Anti-Espiral",
       
        
       
       ]};
    
     
    
    var  imagem = { "personagem": [ "../Imgs/personagem/simon.png",
        "../Imgs/personagem/kamina.jpg",
        "../Imgs/personagem/yoko.jpg",
        "../Imgs/personagem/nia.png",
        "../Imgs/personagem/viral.jpg",
        "../Imgs/personagem/adiane.png",
        "../Imgs/personagem/kittan.jpg",
        "../Imgs/personagem/anti.jpg",
      
        
      
    ]} ;
      
        
    for (var  cont = 0; cont < qtdPersonagem; cont++) {
        personagem.innerHTML += `
       <div class="card-personagem">
            <div class="card-imagem" >
                <img src='${imagem.personagem[cont]}' class="card-img"/>
            </div>
           <div class="card-body">
            <h2 class="card-titulo">${nome.personagem[cont]}</h2>
         </div>
         
          </div>`
    
    } 
    
    }


    // Escolher Anime

    function changeAnime() {
   
        var escolhaAnime = anime.value
    
        if(escolhaAnime == "op"){
            window.location.href = "./onePiece/homeOP.html";
    
        }else if(escolhaAnime == "gl"){
    
            window.location.href = "./gurrenLagann/homeGL.html";
    
    
        }
    
    
    
       
       
     
     
       }
    
      