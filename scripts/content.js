const apiKey = "<<your key>>"
const baseUrl = "https://api.openai.com/v1/chat/completions"

window.addEventListener('hashchange', e => {
  console.log('URL hash changed', e)
  console.log(e.newURL);

  // ovdje console log samo za slucaj da smo u poruci
  if (e.newURL.startsWith('https://mail.google.com/mail/u/0/#inbox/')) 
  {
    // onda procitaj poruku
    const messageDiv = document.getElementsByClassName("ii");
    let messageText = "";
    for (let i = 0; i < messageDiv.length; i++) {
        messageText = messageText + messageDiv[i].innerText ;
      
    }
    console.log("Message Text: " + messageText);
    const responseFunction = response => response.json()
    fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        messages: [
          {
            content: "Please generate a response to the following email : " + messageText, // TODO: limit message text
            role: "user"
          }
        ],
        model: "gpt-3.5-turbo",
        temperature: 1,
        max_tokens: 1000

      })
    }).then(responseFunction)
      .then(jsonResponse=>{
        console.log(jsonResponse)
      })
      .catch(error=> {
        console.log(error)
      })


  }
  else
  {console.log('nismo u poruci...')}
})