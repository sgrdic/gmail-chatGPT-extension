console.log('content captainov log')

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
  }
  else
  {console.log('nismo u poruci...')}
})