

async function sendContact(ev) {
    ev.preventDefault();

    const senderDiscord = document
      .getElementById('dc').value;
    const senderSteamHex = document
      .getElementById('steam').value;
    const text1 = document
      .getElementById('text1').value;
    const text2 = document
      .getElementById('text2').value;

    const text3 = document
      .getElementById('text3').value;
    const text4 = document
      .getElementById('text4').value;

    const text5 = document
      .getElementById('text5').value;
    const text6 = document
      .getElementById('text6').value;
    const text7 = document
      .getElementById('text7').value;


    if(senderDiscord=="" || senderSteamHex == "" || senderSteamHex.length !=17|| text1 =="" || text2=="" || text3 =="" || text4=="" || text5 =="" || text6=="" || text7 ==""){
      alert("Wypełnij wszystkie pola! Sprawdź poprawność HEX!");
    }
    else{
      const webhookBody = {
        embeds: [{
          title: `Aplikacja ${senderDiscord}`,
          fields: [
            { name: 'Discord:', value: senderDiscord },
            { name: 'Skąd się o nas dowiedziałeś:', value: text1 },
            { name: 'Opisz swoje dotychczasowe doświadczenie w rp (gdzie grałeś/aś, przez jaki czas, czym się zajmowałeś/aś):', value: text2 },
            { name: 'Dlaczego chciałbyś grać u nas i rozgrywać roleplay w latach 80?:', value: text3 },
            { name: 'Co wniesiesz sobą do naszej społeczności? Dlaczego mielibyśmy Cię przyjąć do naszego grona?:', value: text4 },
            { name: 'Czym jest dla ciebie roleplay?:', value: text5 },
            { name: 'Zaplanuj kreatywną akcję roleplay:', value: text6 },
            { name: 'Przedstaw krótki "szkic" pierwszej postaci którą chciałbyś u nas odgrywać oraz podaj jej pozytywne i negatywne cechy:', value: text7 },
          ]
        }],
      };
      const newHex = {name: "Steam HEX: ", value: senderSteamHex};
      Object.defineProperty(webhookBody.embeds[0],"" ,{
          value: webhookBody.embeds[0].fields.splice(1,0,newHex),
          configurable:false,
          writable:false,
          enumerable: true
      })
      console.log(webhookBody.embeds[0].fields);
      const webhookUrl = 'https://discord.com/api/webhooks/1138535220258279536/P7UM5F-qd-I9_1mYCVCoJwQkvk2JLEtH9aBAvHUJzewdU73dcJMMskQzE1tS0pjeFdQA';
  
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
      });
  
      if (response.ok) {
        alert('I have received your message!');
      } else {
        alert('There was an error! Try again later!');
      }
    }
    //  76561198095696214




  }