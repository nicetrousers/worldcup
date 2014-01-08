function groupA()
{

    var A1 = "";
    var A2 = "";

    function getWinnerA()
    {
       for (var i = 0; i < 4; i++)
        {
        	if (document.getElementsByName('AW')[i].checked)
        	{
        		A1 = (document.getElementsByName('AW')[i].value);
    			break;
        	}
        } 
    };


    function getRunnerUpA()
    {
        for (var i = 0; i < 4; i++)
        {
            if (document.getElementsByName('ARU')[i].checked)
            {
                A2 = (document.getElementsByName('ARU')[i].value);
                break;
            }
        }
    }; 

    // alert("done2");


    function returnGroupA(A1, A2)
    {
        alert(A1 + ", " + A2);
    };

 };