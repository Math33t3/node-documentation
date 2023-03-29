function submitForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    var queryString = "?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
    console.log(queryString);

    window.location.assign("/login" + queryString);
    /*window.location.assign("/loginCorrect")
    http://localhost:8080/?username=mathias&password=berthelsen
    */
  }
