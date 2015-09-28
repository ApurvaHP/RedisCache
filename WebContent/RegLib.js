function checkStatus()
        {
            if(navigator.onLine)
                alert("Browser Status : Online "); 
            else
                alert("Browser Status : Offline ");
        }

  function checkPassword()
          {
                var regex=/^(?=.*[a-z]{2})(?=.*[A-Z]{3})(?=.*[#$@!%&*?]{2})([A-Za-z0-9\d#$@!%&*?]{7,24})/;
                var regex1= /^(?=.*[a-z]{2})(?=.*[A-Z]{3})(?=.*[#$@!%&*?]{3,5})([A-Za-z0-9\d#$@!%&*?]{8,24})/;
                var regex2 = /^(?=.*[a-z]{2})(?=.*[A-Z]{3})(?=.*[#$@!%&*?]{6,19})([A-Za-z0-9\d#$@!%&*?]{11,24})/;
                var pass = document.getElementById("pwd").value;
                // alert(pass)
                if (!regex.test(pass)) {
                     alert("password dosent match the given condition of minimum 3 upper case, 2 lower case and 2 special chars");
                } else 
                {
                    document.getElementById('prglabel').innerHTML = "Normal";
                    document.getElementById("pro").value=30;
                }
                if (!regex1.test(pass)) {
                } 
                else {
                        document.getElementById('prglabel').innerHTML = "Medium";
                        document.getElementById("pro").value=65;
            }
            if (!regex2.test(pass)) {
            } else {
                 document.getElementById('prglabel').innerHTML = "Strong";
                document.getElementById("pro").value=100;
            }
        }

   function matchPassword() {

        if( document.getElementById("pwd").value == document.getElementById("confirm_pwd").value )
       {
         alert("Passwords match");
        }
        else
        {
          alert("Passwords do not match");
        }
   }

      function Person(fname, lname, email, pwd, url, date, dateTime, ssn, phone, credit)
        {
            this.fname = fname;
            this.lname = lname;
            this.email = email;
            this.pwd = pwd;
            this.url = url;
            this.date = date;
            this.dateTime = dateTime;
            this.ssn = ssn;
            this.phone = phone;
            this.credit = credit;
        
            
            this.toJSONString = function (person)
            {
                return JSON.stringify(person);
            }
            
            this.readFromJSONString = function (localJSON)
            {
                return JSON.parse(localJSON);
            }
            
            this.isPhoneNumberFormatValid = function (phone)
            {
                var reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
                return reg.test(phone);
            }
            
            this.isValidEmail = function (email)
            {
                var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                return reg.test(email);
            }
        }
        
        function validateEmail()
        {
            var person = new Person();
            var email = document.getElementById('email');
            if(person.isValidEmail(email.value))
            {
            }
            else
            {
                alert("Incorrect Email ID");
            }
        }
        
        function validatePhone()
        {
            var person = new Person();
            var phone = document.getElementById('phone');
            if(person.isPhoneNumberFormatValid(phone.value))
            {
            }
            else
            {
                alert("Please check the pattern");
            }
        }


         function save()
        {           
            var first = document.getElementById('first');
            var last = document.getElementById('last');
            var email = document.getElementById('email');
            var pwd = document.getElementById('pwd');
            var url = document.getElementById('url');
            var dateTime = document.getElementById('datetime');
            var date = document.getElementById('date');
            var ssn = document.getElementById('ssn');
            var phone = document.getElementById('phone');
            var credit = document.getElementById('credit');             
            var person = new Person(first.value, last.value, email.value, pwd.value, url.value, date.value, dateTime.value, ssn.value, phone.value, credit.value );
            var jsonp = person.toJSONString(person);
            saveToLocalStorage(jsonp);
            saveToSessionStorage(jsonp); 

        }
        
        function saveToLocalStorage(jsonp)
        {
            if (Modernizr.localstorage) 
            {
                localStorage.setItem("LocalStorage" , jsonp);
            }
            else
            {
                alert("Storage is not supported");
            }
        }
        
        function saveToSessionStorage(jsonp)
        {
            sessionStorage.setItem("SessionStorage", jsonp);
        }
        
        function readFromLocalStorage()
        {
            var localJSON = localStorage.getItem('LocalStorage');
            var person = new Person();
            var localStr = person.readFromJSONString(localJSON);
            document.write("Local Storage : <br/> First Name : " + localStr.fname + "<br/>Last Name : " + localStr.lname + "<br/>Email : " + localStr.email +
                     "<br/>Password : " + localStr.pwd + "<br/>URL : " + localStr.url + "<br/>Date : " + localStr.date + "<br/>Date Time : " + localStr.dateTime + "<br/>SSN : " + localStr.ssn + "<br/>Phone : " + localStr.phone +
                     "<br/>Credit Card : " + localStr.credit);
        }
            
        function readFromSessionStorage()
        {
            var sessionJSON = sessionStorage.getItem('SessionStorage');
            var person = new Person();
            var sessionStr = person.readFromJSONString(sessionJSON);
            document.write("Session Storage : <br/> First Name : " + sessionStr.fname + "<br/>Last Name : " + sessionStr.lname + "<br/>Email : " + sessionStr.email +
                     "<br/>Password : " + sessionStr.pwd + "<br/>URL : " + sessionStr.url + "<br/>Date : " + localStr.date + "<br/>Date Time : " + sessionStr.dateTime + "<br/>SSN : " + sessionStr.ssn + "<br/>Phone : " + sessionStr.phone +
                     "<br/>Credit Card : " + sessionStr.credit);
        }


 function checkforStorage()
        {       
            if (Modernizr.localstorage && Modernizr.sessionstorage) 
            {
                alert("Your browser supports both local and session storage");  
                var fname = document.getElementById('first');
                var lname = document.getElementById('last');
                var email = document.getElementById('email');
                var pwd = document.getElementById('pwd');
                var confirm_pwd = document.getElementById('confirm_pwd');
                var url = document.getElementById('url');
                var date = document.getElementById('date');
                var localDate = document.getElementById('localDate');
                var ssn = document.getElementById('ssn');
                var phone = document.getElementById('phone');
                var c1 = document.getElementById('c1');
                var c2 = document.getElementById('c2');
                var c3 = document.getElementById('c3');
                var credit = c1+c2+c3;
                
                localStorage.setItem('firstName',fname.value);                
                localStorage.setItem('lastName',lname.value);
                localStorage.setItem('email',email.value);
                localStorage.setItem('pwd',pwd.value);
                localStorage.setItem('confirm_pwd',confirm_pwd.value);
                localStorage.setItem('date',date.value);                
                localStorage.setItem('localDate',localDate.value);
                localStorage.setItem('ssn',ssn.value);
                localStorage.setItem('phone',phone.value);
                localStorage.setItem('credit',credit.value);
                //alert("Local Storage supported by the browser"); 

                sessionStorage.setItem('firstName',fname.value);                
                sessionStorage.setItem('lastName',lname.value);
                sessionStorage.setItem('email',email.value);
                sessionStorage.setItem('pwd',pwd.value);
                sessionStorage.setItem('confirm_pwd',confirm_pwd.value);
                sessionStorage.setItem('date',date.value);                
                sessionStorage.setItem('localDate',localDate.value);
                sessionStorage.setItem('ssn',ssn.value);
                sessionStorage.setItem('phone',phone.value);
                sessionStorage.setItem('credit',credit.value);             
            }
            else
            {
                alert("Storage is not supported");
            }
           
        }

        function getLocalStorage()
        {
          var localhtml = "";

          for (var i = 0; i < localStorage.length; i++) 
          {
          localhtml += "<li>" + localStorage.key(i) + " : " + localStorage.getItem(localStorage.key(i)) + "</li>";
          }
      //document.getElementById("localStorageData").innerHTML = localhtml;
        document.write("Local Storage" + localhtml);

        }

        function getSessionStorage()
        {
            var sessionhtml = "";

          for (var j = 0; j < sessionStorage.length; j++) 
          {
                sessionhtml += "<li>" + sessionStorage.key(j) + " : " + sessionStorage.getItem(sessionStorage.key(j)) + "</li>";
            }
       //document.getElementById("sessionStorageData").innerHTML = sessionhtml;
       document.write("session Storage" + sessionhtml);

        }

   

  
