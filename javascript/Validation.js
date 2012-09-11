function validate()
  	{
           var name=document.forms["Login"]["name"].value;
             if (name=null || name=="")
		{
  			alert("Name is Mandatory!!");
                        document.forms["Login"]["name"].focus();
			return false;
  		}
           var age=document.forms["Login"]["age"].value;
           if(age==null || age=="")
		{
  			alert("Age is Mandatory!!");
                        
			return false;
  		}

           var gender=document.forms["Login"]["gender"].value;
           if(gender=="Default")  
               {  
                  alert('Select your gender from the list');  
                  gender.focus();  
                  return false; 
               }
           var email=document.forms["Login"]["email"].value;
           var posOfAt=email.indexOf("@");
           var posOfDot=email.lastIndexOf(".");
           if (posOfAt<1 || posOfDot<posOfAt+2 || posOfDot+2>=email.length)
             {
                alert("Not a valid e-mail address");
                document.forms["Login"]["email"].focus();
                return false;
                   }
           var address=document.forms["Login"]["address"].value;
           if(address==null || address=="")
		{
  			alert("Address is Mandatory!!");
                        document.forms["Login"]["address"].focus();
			return false;
  		}
                
           var pincode=document.forms["Login"]["pincode"].value;
           if(pincode.length==0 || pincode=="")
		{
  			alert("pincode is Mandatory!!");
                        document.forms["Login"]["pincode"].focus();
			return false;
  		}
              if(pincode.length>6 || pincode.length<6)
                {
                alert("pincode should contain only 6 nos!!");
                        document.forms["Login"]["pincode"].focus();
			return false;
                 }

           var description=document.forms["Login"]["description"].value;
            if(description==null || description=="")
		{
  			alert("Desription about yourself is Mandatory!!");
                        document.forms["Login"]["description"].focus();
			return false;
  		}
  	  	return true;
  	}
