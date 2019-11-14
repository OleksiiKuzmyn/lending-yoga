function form(){
    let message ={
        loading: 'Loading...',
        success: 'Thank you, we will contact you shortly',
        failure: 'Something went wrong'
    
    }
    
    let forms = document.querySelectorAll('.main-form');

        forms.forEach(function(form){

            let input = form.getElementsByTagName('input'),
            statusMessage = document.createElement('div');
        
        statusMessage.classList.add('status');
        
        form.addEventListener('submit',function(e){
        
            e.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form);
        
            function postData(data){
                return new Promise(function(resolve, reject){
                    let request = new XMLHttpRequest();
                    request.open('POST', '/server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset = utf-8');
        
                    request.onreadystatechange = function(){
        
                        if (request.readyState<4){
                            resolve();
                        }
                        else if(request.status === 4){
                            if( request.status == 200 && request.status < 3) resolve();
                            else reject();    
                        }
                    }
                    let obj = {};
                    formData.forEach((value, key) => {
                        obj[key]=value;
                    });
                    let json = JSON.stringify(obj);
                    request.send(json);
                })
            }
        
            function clearInput(){
                for(let i = 0; i < input.length; i++){
                    input[i].value = '';
                }
            }
        
            postData(formData)
                .then(()=>statusMessage.innerHTML = message.loading)
                .then(()=>statusMessage.innerHTML = message.success)
                .catch(()=>statusMessage.innerHTML = message.failure)
                .then(clearInput)
        
            });


        });

   
}

module.exports = form;