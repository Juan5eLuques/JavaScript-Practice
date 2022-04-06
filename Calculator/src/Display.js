class Display {
    constructor(displayTopButton, displayBottomButton){
        this.displayBottomButton=displayBottomButton;
        this.displayTopButton=displayTopButton;
        this.calculator=new Calculator();
        this.typeOperator=undefined;
        this.newValue='';
        this.currentValue='';
        this.signos = {
            add: '+',
            division: '%',
            prod: 'x',
            substraction: '-', 
        }
    }

    deleteNumber(){
        this.newValue=this.newValue.toString().slice(0,-1);
        this.printNumbers();
    }

    clearDisplay(){
        this.currentValue='';
        this.newValue='';
        this.typeOperator=undefined;
        this.printNumbers();
    }


    addNumberToDisplay(number){

        this.newValue= this.newValue.toString() + number.toString();
        this.printNumbers();
        
    }

    printNumbers() {
        this.displayBottomButton.textContent = this.newValue;
        this.displayTopButton.textContent = `${this.currentValue} ${this.signos[this.typeOperator] || ''}`;
    }



    calculate(){
        
        const currentValue = parseInt(this.currentValue);
        const newValue = parseInt(this.newValue);
        
        if (isNaN(newValue) || isNaN(currentValue)) return
        this.newValue = this.calculator[this.typeOperator](currentValue,newValue);
    }

    eventCalculator(type){

        if (this.currentValue==this.newValue && this.typeOperator=='substraction'){
            this.currentValue=0;
            this.newValue='';
            this.printNumbers();
            this.typeOperator=type;
        }

        if ((this.currentValue==0 || this.newValue==0) && this.typeOperator=='prod'){
            this.currentValue=0;
            this.newValue='';
            this.printNumbers();
            this.typeOperator=type;
        }
        
        else {
        this.typeOperator !== 'equal' && this.calculate();
        this.typeOperator=type;
        this.currentValue= this.newValue || this.currentValue;
        this.newValue='';
        this.printNumbers();
        }
    }
}
