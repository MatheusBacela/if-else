nomesdosestudantes=[];

function submit()
    {
    var name1=document.getElementById("nomeestudante1").value;
    var name2=document.getElementById("nomeestudante2").value;
    var name3=document.getElementById("nomeestudante3").value;
    var name4=document.getElementById("nomeestudante4").value;

    nomesdosestudantes.push(name1);
    nomesdosestudantes.push(name2);
    nomesdosestudantes.push(name3);
    nomesdosestudantes.push(name4);

    console.log(nomesdosestudantes);

    document.getElementById("displayname").innerHTML=nomesdosestudantes;
    document.getElementById("butaosubmet").style.display="none";
    document.getElementById("sortingbutton").style.display="inline-block";
    }

function sorting()
{
    nomesdosestudantes.sort();
    document.getElementById("displayname").innerHTML=nomesdosestudantes;
}