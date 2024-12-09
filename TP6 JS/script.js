function tableau(){
    document.write("<table border=2px width=30%");
    for(let i=0; i<=5; i++){
        document.write("<tr> <td>*</td> <td>*</td> <td>*</td> </tr>")

    }
    document.write("</table>")
}

function cdc(){
    var chaine=prompt ("Donnez un mot")
    document.write (chaine.toUpperCase()+"<br>");
    document.write (chaine.toLowerCase()+"<br>");
    document.write ("La chiane contient" +chaine.length+ "caractere" + "<br>")
    document.write ("la premiere lettre est " +chaine.substr(0,1)+ "<br>");

}

function tableau2(){
    var X=prompt("Combien de ligne");
    document.write("<table border=2px width=30%>")
    for(let i=0; i<= X-1; i++){
        document.write("<tr><td>"+(i+1)+"</td> <td>*</td> <td>*</td> </td>")
    }
    document.write("</table>")
}

function connect(){
    var login=prompt ("Donnez votre Nom d'Utilisateur")
    var password=prompt("Entre votre Mot de passe")
    if (login=="admin" && password=="admin")
        {document.write("Bienvenue :"+login);}
    else (alert(document.write("Acces refuser")))
}

function connect2(){
    window.location.href="authen.html"
}

function login(){
    var login=document.getElementById("t1").value;
    var pass=document.getElementById("t2").value;
    if (login=="admin" && pass=="admin")
        {window.location.href="yes.html"}
    else {window.location.href="non.html"}
}

function connect3(){
    i=0;
    do{
    var login=prompt("Donnez votre nom d'utilsateur0");
    var password=prompt ("Entrez votre mot de passe");
    if (login=="admin" && password=="admin")
        {document.write("Bienvenu " +login);
        break;}
    else {alert ("Acces refuser");
        i+=1;}
    }
    while(i<3)
        if (i==3){alert("Délais dépassé")}
    
}





function ajouter(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    if (a==""||b==""){alert("Un Champs est Vide");}
    else if ((Number(b)<10 ||Number(b)>20)){alert("Äge invalide");}
    else{
        var table=document.getElementById("mytable");
        var newRow=table.insertRow(-1);
        var cell1=newRow.insertCell(0);
        var cell2=newRow.insertCell(1);

        cell1.innerHTML=document.getElementById("t1").value;
        cell2.innerHTML=document.getElementById("t2").value;
    }
}

function ajout(){
    (window.location.href="ajout.html")
}