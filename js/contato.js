document
.getElementById("formContato")
.addEventListener("submit", function(e){
    
    e.preventDefault();

    alert("Solicitação enviada com sucesso!!");

    this.resizeTo();
    
});