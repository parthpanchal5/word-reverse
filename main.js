function strReverse(str){
  document.getElementById("word-form").addEventListener("submit", function(e){
    e.preventDefault();
    let str = '';
    str = document.querySelector('#text').value;
    let output = document.querySelector('#output');

    // input
    if(str == ''){
      swal({
        type: 'error',
        title: 'Empty',
        text: 'Please enter text',
      });    
    } 
    // final output
    else{
      document.querySelector('#output').innerHTML = '';
      str = str.split('').reverse().join('');
      document.querySelector('#output').innerHTML += str;
    }          
  });
}

function copyText(){
  var copyText = document.getElementById("output");
  copyText.select();
  document.execCommand("copy");
  swal({
    type: 'success',
    title: 'Text Copied',
  });  
  document.querySelector('#output').innerHTML = '';
  document.getElementById("word-form").reset();
}