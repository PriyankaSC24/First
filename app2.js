function Split(){
    let amount=document.getElementById('amount');
    let persons=document.getElementById('persons');
    let result=(amount.value/persons.value).toFixed(2);
   document.getElementById('result').innerText="The Splitted amount:"+result;
}