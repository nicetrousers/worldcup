function groupA()
{
    // var A1;
    var A2;

    function getWinnerA()
    {
       for (var i = 0; i < 4; i++)
        {
        	if (document.getElementsByName('AW')[i].checked)
        	{
        		var A1 = (document.getElementsByName('AW')[i].value);
                //(document.getElementById('winnerA').innerHTML) = "Check 1";
                break;
        	}
        } 
    };
        alert(A1);

    /*
    function getRunnerUpA()
    {
        for (var i = 0; i < 4; i++)
        {
            if (document.getElementsByName('ARU')[i].checked)
            {
                // document.getElementById('runnerUpA').innerHTML = (document.getElementsByName('ARU')[i].value);
                (document.getElementById('runnerUpA').innerHTML) = "Check 2";
                break;
            }
        }
    };
    */ 

};
