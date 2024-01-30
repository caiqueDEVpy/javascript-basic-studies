class Heroi{
    constructor(strong,agility,magic){
        this._strong=strong;
        this._agility=agility;
        this._magic=magic;
    }

    buff(){
        const Buff= 15;
        this._strong +=15;
        this._agility +=15;
        this._magic +=15;
        this._buffed = true;

    }
    consultProps(){
        if(this._buffed){
            console.log(this._strong,this._agility,this._magic)
        }
    }


}