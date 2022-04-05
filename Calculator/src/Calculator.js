class Calculator {
    add(number1,number2){
        return number1+number2;
    }

    substraction(number1,number2){
        if (number1===number2)return 0;
        return number1-number2;
    }

    division(number1,number2){
        return number1/number2;
    }

    prod(number1,number2){
        return number1*number2;
    }

}