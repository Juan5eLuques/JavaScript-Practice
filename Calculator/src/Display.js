class Display {
    constructor(displayTopButton, displayBottomButton){
        this.displayBottomButton=displayBottomButton;
        this.displayTopButton=displayTopButton;
        this.calculator=new Calculator();
        this.typeOperator=undefined;
        this.newValue='';
        this.currentValue=0;
        this.firstTime=true;
        this.signos = {
            add: '+',
            division: '%',
            prod: 'x',
            substraction: '-', 
        }
    }

    deleteNumber(){
        if (this.firstTime) this.currentValue=this.currentValue.toString().slice(0,-1);
        this.newValue=this.newValue.toString().slice(0,-1);
        this.printNumbers();
    }

    clearDisplay(){
        this.currentValue=0;
        this.typeOperator=undefined;
        this.newValue='';
        this.firstTime=true;
        this.printNumbers();
    }
    
    syntaxError(){
        this.currentValue='SyntaxError'
        this.printNumbers(this.firstTime);
        setTimeout(()=>this.clearDisplay(),3000);
    }

    addNumberToDisplay(number){
        if (this.firstTime) {
            this.currentValue=((this.currentValue*10))+ parseInt(number);
            this.printNumbers(this.firstTime);
            return;
        }
        this.newValue= this.newValue.toString() + number.toString();
        this.printNumbers();
    }

    printNumbers(firstTime) {
        if (!firstTime) this.displayBottomButton.textContent = this.newValue;
        this.displayTopButton.textContent = `${this.currentValue} ${this.signos[this.typeOperator] || ''}`;
    }



    calculate(){
        
        const currentValue = parseInt(this.currentValue);
        const newValue = parseInt(this.newValue);
        
        if (isNaN(newValue) || isNaN(currentValue)) return
        this.newValue = this.calculator[this.typeOperator](currentValue,newValue);
    }

    eventCalculator(type){

        if (this.firstTime)this.firstTime=false;

        this.typeOperator !== 'equal' && this.calculate();
        this.typeOperator=type;
        this.currentValue= this.newValue.toString() || this.currentValue;
        this.newValue='';
            if (isNaN(this.currentValue)){
                this.syntaxError();
                return;
                }
        this.printNumbers();
    }


}
