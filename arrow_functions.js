const BufeedHero_agility =(Hero) =>{
    if(Hero.agiity <10){
        Hero.agility += 3
        return Hero
    }
    else{
        
        throw console.error('heroi ainda não pode ser buffado');
    }
    
}   
const caique = {
    nome: 'caique',
    strong: 15,
    agiity : 11,
}
BufeedHero_agility(caique);



