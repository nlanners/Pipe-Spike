document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
    document.getElementById('requestSubmit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();

        req.open('GET', 'flip3.engr.oregonstate.edu:65535', true);
        req.addEventListener('load', function(){
            if(req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                document.getElementById('response').textContent = response.message;
            } else {
                console.log('Error in network request: ' + req.statusText);
            }
        });
        req.send(null);
        event.preventDefault();
    })
}