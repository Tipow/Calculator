function getNumber(number){
    document.getElementById('result').value +=number;
}

function clearResult(){
    document.getElementById('result').value = '';
}

function clearNumber(){
    var result = document.getElementById('result'). value;
    if(result.length > 0){
        result = result.slice(0,-1)
        document. getElementById('result'). value = result;
    }
}

function getOperator(operator){
    var result = document.getElementById('result'). value;
    var lastChar = result[result.length -1];
    if(lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/' && lastChar !== '.' )
    document.getElementById('result'). value += operator;
}

function calculate(){
    var result = document.getElementById('result'). value;
    var lastChar = result[result.length -1];
    if(lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/' && lastChar !== '.' )
    document.getElementById('result'). value = eval (result);        
}

function getDot(dot){
    var result = document.getElementById('result'). value;
    var lastChar = result[result.length -1];
    if(lastChar !== '.' && lastChar === '-' && !result.includes('.')){
    document.getElementById('result'). value += dot; 
    }       
}
