var usernamep = "auprogramme"
var passwordp = "auprogramme123++"
var tableauTotakeidd = []
function connect() {
    const username = document.getElementById('idusername').value;
    const password = document.getElementById('idpassword').value;
    document.getElementById('idusername').value= '';
        document.getElementById('idpassword').value = ''
    if (username === usernamep && password === passwordp) {
        //console.log('kodlsjfnsb,')
        setTimeout(() => {
            alert("AU-PROGRAMME s'est bien connecté")
            var codesecret = "YESDATA2023"
            tableauTotakeidd.push(codesecret)
            const lastk = tableauTotakeidd.slice(-1).pop();
            localStorage.setItem("storageName", lastk);
            window.location.replace("admin.html")
        }, 3000)
    } else {
        alert("Mot de passe ou nom d'utilisateur incorrect !")
    }

}
