function mostrarPersonagem() {
 
    
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
    



