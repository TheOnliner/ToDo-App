function registration()
	{
		var name= document.getElementById("t1").value;			
		var cpwd= document.getElementById("t2").value;

        //User ID & Password code

		if(name!='admin')
		{
			alert('Please enter a valid Username');
		}
		else if(cpwd!='12345')
		{
			alert('Enter a valid Password');
		}
		else if(name=='admin' && cpwd=='12345')
		{		                            
               alert('Thank You for Signing In. Now, You will be Redirected to the Main page.');
			   // Redirecting to Main page. 
			   window.location = "main_page.html"; 
		}
	}
	function clearFunc()
	{
		document.getElementById("t1").value="";
		document.getElementById("t2").value="";
	}
	