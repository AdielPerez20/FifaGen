var arrTeam = ["Arsenal","Man United","Real madrid","Barcelona",
"chelsea","Bayern Munich","Man City","Juvantus","Brazil","Belgium"]
var arrPlayers = ["Adiel","Naor","Avi","Idan","Dan","Gilad","Agusto"]
var counter=7;
function myFunctionTeam() {
     var x = (Math.floor((Math.random() * 10)));
     alert(arrTeam[x]);
  }
  function myFunctionFriend() {
    var first = (Math.floor((Math.random() * counter)));
    var second = (Math.floor((Math.random() * counter)));
    
    if(first === second){
        var first = (Math.floor((Math.random() * counter)));
        var second = (Math.floor((Math.random() * counter)));
    }
    console.log(arrPlayers);
    alert("The first Team is: " +arrPlayers[first] + " and " + arrPlayers[second]);
    
    arrPlayers[first]=null;
    arrPlayers[second]=null;
    counter=counter-2;
    var arrPlayers1 = [];
    for(var i=0; i<arrPlayers.length;i++){
        if(arrPlayers[i]===null){
            i++;
        }
        else{
            arrPlayers1[i]==arrPlayers[i];
        }
    }
        
    console.log(second);
    console.log(first);
    console.log(arrPlayers);
    
    
  }