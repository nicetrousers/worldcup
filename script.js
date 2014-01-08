
function getWinner()
{
    for (var i = 0; i < 4; i++)
    {
    	if (document.getElementsByName('A1')[i].checked)
    	{
    		var winnerGroupA = document.getElementsByName('A1')[i].value);
				break;
    	}
    } 

    /* for (var y = 0; y < 4; y++)
    {
    	if (document.getElementsByName('A2')[y].checked)
    	{
    		var runnerUpGroupA = document.getElementsByName('A2')[y].value);
    		break;
    	}
    } */

};

alert("done");


