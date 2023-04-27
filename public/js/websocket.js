const ws = new WebSocket('ws://localhost:3000');
    const container = document.getElementById('chat-container'); //CHAT CONTAINER ELEMENT
    const form = document.getElementById('message-form'); //MESSAGE FORM ELEMENT


      form.addEventListener('submit', (event) => { //LISTEN FOR MESSAGE POST & SEND TO WEBSOCKET//  
        event.preventDefault();
        const message = form.message.value;
        ws.send(message);
        const container = document.getElementById('chat-container'); //CREATE CONTENT FOR WEBSOCKET//
        const messageEl = document.createElement('p');
        messageEl.textContent = message;
        container.appendChild(messageEl)//ADD P TO ELEMENT FOR WEBSOCKET//
      })

    