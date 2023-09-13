
let a = 0
let b = 0
let tempResult = 0
let finalResult = 0
let expression = []

function calc(sign){
    if(sign == "+"){
        tempResult = parseFloat(a) + parseFloat(b)
    } else if (sign == "-"){
        tempResult = parseFloat(a) - parseFloat(b)
    } else if (sign == "x"){
        tempResult = parseFloat(a) * parseFloat(b)
    } else if (sign == "/"){
        tempResult = parseFloat(a) / parseFloat(b)
    }
}

function operation(sign) {
    signContext = result.value.split("")
    if (signContext[signContext.length-1] != " "){
        if (finalResult != 0){
            result.value = finalResult
            finalResult = 0
        }
        result.value = result.value + " " + sign + " "
    } else if (sign == "-"){
        result.value = result.value + sign
    } else if (result.value == 0) {
        result.value = result.value + " " + sign + " "
    }
}

function equal(){
    expression = result.value.split(" ")
    a = expression[0]
    for(let k = 0; k < (expression.length / 2) - 0.5; k++){
        b = expression[(k + 1) * 2]
        calc(expression[(k * 2) + 1])
        a = tempResult
        console.log("tempResult", tempResult)
        console.log("a = ", a)
        console.log("b = ", b)
        console.log(expression)
    }
    finalResult = tempResult
    result.value = result.value + " = " + finalResult
}

function clearAll() {
    result.value = "0"
    a = 0
    b = 0
    tempResult = 0
    finalResult = 0
    expression = []
}

function clr() {
    expression = result.value.split("")
    if (finalResult != 0){
        result.value = finalResult
        finalResult = 0
    } else if(result.value.length > 1){
        if (expression[expression.length-1] == ' '){
            expression = expression.slice(0, expression.length-3)                
        }else{
            expression = expression.slice(0, expression.length-1)
        }
        result.value = expression.join("")
    } else {
        result.value = 0
    }

}

function number(num) {
    if (result.value == "0"){
        result.value = num
    } else if (finalResult != 0){
        result.value = finalResult.toString() + num
        finalResult = 0
        a = 0
        b = 0 
        tempResult = 0
    } else {
        result.value = result.value + num
    } 
}

function dot() {
    if (finalResult != 0){
        result.value = finalResult + "."
        finalResult = 0
        a = 0
        b = 0 
        tempResult = 0
    } else {
        result.value = result.value + "."
    }
}
