function validate()
  	{
           var name=document.Login.name.value;
           var age=document.Login.age.value;
           var gender=document.Login.gender.value;
           var email=document.Login.email.value;
           var address=document.Login.address.value;
           var pincode=document.Login.pincode.value;
           var description=document.Login.description.value;
	  	if(name==null || name=="")
		{
  			alert("Name is Mandatory!!");
                        document.Login.name.focus();
			return false;
  		}

                if(age==null || age=="")
		{
  			alert("Age is Mandatory!!");
                        document.Login.age.focus();
			return false;
  		}
                   
                if(gender=="male" || gender=="female")
		{
  			alert("Gender cannot be other than male or female");
                        document.Login.gender.focus();
			return false;
  		}


                if(email==null || email=="")
		{
  			alert("Email is Mandatory!!");
                        document.Login.email.focus();
			return false;
  		}

                if(address==null || address=="")
		{
  			alert("Address is Mandatory!!");
                        document.Login.address.focus();
			return false;
  		}
                
                if(description==null || description=="")
		{
  			alert("Desription about yourself is Mandatory!!");
                        document.Login.descripion.focus();
			return false;
  		}
  	  	document.frm.action="Validate.jsp";
  		document.frm.submit();
  	}
 

