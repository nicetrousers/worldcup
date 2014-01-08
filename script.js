// javascript goes here

function submitForm() {
	var A1 = findSelection("A1") ;
	alert(A1);
}

alert($('input[name="A1"]:checked').val());

/* var groupAWinner = document.getElementsByName("A1");
// var roupARunnerUp = document.groupA.A2;

for (var i = 0, length = radios.length; i < length; i++) {
	if (radios[i].checked) {
		alert(radios[i].value);
	}
}

/*
if (document.groupAWinner.A1[0].checked){
	document.writeIn("Brazil won.")
}  */


/* for (i=0; i <groupAWinner.length; i++) {
        if (groupAWinner[i].checked) {
          alert(groupAWinner[i]Value)
          break
        }
      }

