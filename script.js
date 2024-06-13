let value1=""
let currenttemp=""
let oper=""
let resultarea=document.getElementById("resultarea")

function number(num){
    resultarea.value=resultarea.value+=num
    value1+=num
}

function equalto(){
    value1=Number(value1)
    currenttemp=Number(currenttemp)
     if(oper=="+"){
        oper=""
        addition(currenttemp,value1)
    }
    else if(oper=="-"){
        subtratcion(currenttemp,value1)
    }
    else if(oper=="*"){
        muliplication(currenttemp,value1)
    }
    else{
        division(currenttemp,value1)
    }
}
function backspace(){
    result=resultarea.value.slice(0,-1)
    value1=result
    resultarea.value=result
}
function clearall(){
    resultarea.value=""
    value1=""
    currenttemp=""
    oper=""
}
function operator(operand){
    oper=operand
    resultarea.value+=oper
    currenttemp=value1
    value1=""
}
function addition(num1,num2){
    resultvalue=num1+num2
    resultarea.value=resultvalue
    value1=resultvalue.toString()
}
function subtratcion(num1,num2){
    resultvalue=num1-num2
    resultarea.value=resultvalue
    value1=resultvalue.toString()
    currenttemp=""
}
function muliplication(num1,num2){
    resultvalue=num1*num2
    resultarea.value=resultvalue
    value1=resultvalue.toString()
    currenttemp=""
}
function division(num1,num2){
    resultvalue=num1/num2
    resultarea.value=resultvalue
    value1=resultvalue.toString()
    currenttemp=""
}