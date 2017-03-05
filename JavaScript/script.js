function validateForm() 
{
    if (document.myForm.fname.value == "") 
	{
        alert("First name must be filled out");
		document.myForm.fname.focus() ;
        return false;
    }
    if (document.myForm.lname.value == "") 
	{
        alert("Last name must be filled out");
		document.myForm.lname.focus() ;
        return false;
    }
    if (document.myForm.EMail.value == "") 
	{
        alert("Email must be filled out");
		document.myForm.EMail.focus() ;
        return false;
    }
    if (document.myForm.comment.value == "") 
	{
        alert("Message must be filled out");
		document.myForm.comment.focus() ;
        return false;
    }
	return(true);
}