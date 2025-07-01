const whatsAppFloatComponent = (bottom, right, phoneNumber, title, opacity = 0.8) => {
    const hide = (element, annimationTime) => {
        element.style.display = 'none';
        element.style.transition = `all ${annimationTime}ms`;
    }

    const show = (element, annimationTime) => {
        element.style.display = 'block';
        element.style.transition = `all ${annimationTime}ms`;
    }

    const handleCloseForm = () => {
        hide(document.getElementById(`chat-popup${uniqueId}`), 500);
        document.getElementById(`interactive-message${uniqueId}`).innerHTML = '';
        document.getElementById(`button${uniqueId}`).disabled = false;
    }

    const handleTipingEffect = (element, text) => {
        let i = 0;
        const speed = 50;
        const typeWriter = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }

    const handleOpenForm = () => {
        show(document.getElementById(`chat-popup${uniqueId}`), 500);
        handleTipingEffect(document.getElementById(`interactive-message${uniqueId}`), 'Olá, em que posso ajudar?');
        document.getElementById(`button${uniqueId}`).disabled = true;
    }

    const handleKeyDown = (event) => {}

    const handleAutoResize = () => {
        console.log('handleAutoResize');
    }

    const handleSendMessage = () => {
        const message = document.getElementById(`text-area${uniqueId}`).value;
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
        document.getElementById(`text-area${uniqueId}`).value = '';
        handleCloseForm();
    }

    const uniqueId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    const image = document.createElement('img'); //whatsapp_logo
    image.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+V2hhdHNhcHAtY29sb3I8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPg0KDQo8L2RlZnM+DQogICAgPGcgaWQ9Ikljb25zIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IkNvbG9yLSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcwMC4wMDAwMDAsIC0zNjAuMDAwMDAwKSIgZmlsbD0iIzY3QzE1RSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNNzIzLjk5MzAzMywzNjAgQzcxMC43NjIyNTIsMzYwIDcwMCwzNzAuNzY1Mjg3IDcwMCwzODMuOTk5ODAxIEM3MDAsMzg5LjI0ODQ1MSA3MDEuNjkyNjYxLDM5NC4xMTYwMjUgNzA0LjU3MDAyNiwzOTguMDY2OTQ3IEw3MDEuNTc5NjA1LDQwNi45ODM3OTggTDcxMC44MDQ0NDksNDA0LjAzNTUzOSBDNzE0LjU5ODYwNSw0MDYuNTQ2OTc1IDcxOS4xMjY0MzQsNDA4IDcyNC4wMDY5NjcsNDA4IEM3MzcuMjM3NzQ4LDQwOCA3NDgsMzk3LjIzNDMxNSA3NDgsMzg0LjAwMDE5OSBDNzQ4LDM3MC43NjU2ODUgNzM3LjIzNzc0OCwzNjAuMDAwMzk4IDcyNC4wMDY5NjcsMzYwLjAwMDM5OCBMNzIzLjk5MzAzMywzNjAuMDAwMzk4IEw3MjMuOTkzMDMzLDM2MCBaIE03MTcuMjkyODUsMzcyLjE5MDgzNiBDNzE2LjgyNzQ4OCwzNzEuMDc2MjggNzE2LjQ3NDc4NCwzNzEuMDM0MDcxIDcxNS43Njk3NzQsMzcxLjAwNTQwMSBDNzE1LjUyOTcyOCwzNzAuOTkxNDY0IDcxNS4yNjIyMTQsMzcwLjk3NzUyNyA3MTQuOTY1NjQsMzcwLjk3NzUyNyBDNzE0LjA0ODQ1LDM3MC45Nzc1MjcgNzEzLjA4OTQ2MiwzNzEuMjQ1NTE0IDcxMi41MTEwNDMsMzcxLjgzODAzMyBDNzExLjgwNjAzMywzNzIuNTU3NTc3IDcxMC4wNTY4NDMsMzc0LjIzNjM4IDcxMC4wNTY4NDMsMzc3LjY3OTIwMiBDNzEwLjA1Njg0MywzODEuMTIyMDIzIDcxMi41Njc1NzEsMzg0LjQ1MTc1NiA3MTIuOTA1OTQ0LDM4NC45MTc2NDggQzcxMy4yNTg2NDgsMzg1LjM4Mjc0MyA3MTcuODAwODA4LDM5Mi41NTAzMSA3MjQuODUzMjk3LDM5NS40NzE0OTIgQzczMC4zNjgzNzksMzk3Ljc1NzE0OSA3MzIuMDA0OTEsMzk3LjU0NTMwNyA3MzMuMjYwMDc0LDM5Ny4yNzczMiBDNzM1LjA5MzY1OCwzOTYuODgyMzA4IDczNy4zOTMwMDIsMzk1LjUyNzIzOSA3MzcuOTcxNDIxLDM5My44OTEwNDMgQzczOC41NDk4NCwzOTIuMjU0MDUgNzM4LjU0OTg0LDM5MC44NTcxNzEgNzM4LjM4MDI1NSwzOTAuNTYwOTEyIEM3MzguMjExMDY4LDM5MC4yNjQ2NTIgNzM3Ljc0NTMwOCwzOTAuMDk1ODE2IDczNy4wNDAyOTgsMzg5Ljc0MjYxNSBDNzM2LjMzNTI4OCwzODkuMzg5ODExIDczMi45MDczNywzODcuNjk2NjczIDczMi4yNTg0OSwzODcuNDcwODk0IEM3MzEuNjIzNTQzLDM4Ny4yMzExNzkgNzMxLjAxNzI1OSwzODcuMzE1OTk1IDczMC41Mzc5NjMsMzg3Ljk5MzMzIEM3MjkuODYwODE5LDM4OC45Mzg2NTMgNzI5LjE5ODAwNiwzODkuODk4MzEgNzI4LjY2MTc4NSwzOTAuNDc2NDk0IEM3MjguMjM4NjE5LDM5MC45MjgwNTEgNzI3LjU0NzE0NCwzOTAuOTg0NTk1IDcyNi45NjkxMjMsMzkwLjc0NDQ4MSBDNzI2LjE5MzI1NCwzOTAuNDIwMzQ4IDcyNC4wMjEyOTgsMzg5LjY1Nzc5OCA3MjEuMzQwOTg1LDM4Ny4yNzMzODggQzcxOS4yNjczNTYsMzg1LjQyNTM1IDcxNy44NTY5MzgsMzgzLjEyNTc1NiA3MTcuNDQ4MTA0LDM4Mi40MzQ0ODQgQzcxNy4wMzg4NzEsMzgxLjcyOTI3NSA3MTcuNDA1OTA3LDM4MS4zMTk1MjkgNzE3LjcyOTk0OCwzODAuOTM4ODUyIEM3MTguMDgyNjUzLDM4MC41MDEyMzIgNzE4LjQyMTAyNiwzODAuMTkxMDM2IDcxOC43NzM3MywzNzkuNzgxNjg4IEM3MTkuMTI2NDM0LDM3OS4zNzI3MzggNzE5LjMyMzg4NCwzNzkuMTYwODk3IDcxOS41NDk1OTksMzc4LjY4MTA2OCBDNzE5Ljc4OTY0NSwzNzguMjE1NTc1IDcxOS42MjAwNiwzNzcuNzM1NzQ2IDcxOS40NTA4NzQsMzc3LjM4Mjk0MiBDNzE5LjI4MTY4NywzNzcuMDMwMTM5IDcxNy44NzEyNjksMzczLjU4NzMxNyA3MTcuMjkyODUsMzcyLjE5MDgzNiBaIiBpZD0iV2hhdHNhcHAiPg0KDQo8L3BhdGg+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=';
    image.alt = 'whatsapp icon';
    image.style.width = '45px';

    const div = document.createElement('div'); //whatsAppWidget
    div.id = `root${uniqueId}`;
    div.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    
    const button = document.createElement('button'); // open-button
    button.id = `button${uniqueId}`;
    button.style.position = 'fixed';
    button.style.bottom = `${bottom}px`;
    button.style.right = `${right}px`;
    button.style.backgroundColor = 'transparent';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.opacity = opacity;
    button.style.cursor = 'pointer';
    button.style.zIndex = '9999';
    button.addEventListener('click', handleOpenForm);

    const chat = document.createElement('div'); // myForm (.chat-popup)
    chat.id = `chat-popup${uniqueId}`;
    chat.style.display = 'none';
    chat.style.position = 'fixed';
    chat.style.bottom = '60px';
    chat.style.right = `${right}px`;
    chat.style.borderRadius = '10px';
    chat.style.zIndex = '9999';

    const form = document.createElement('form');
    form.id = `form${uniqueId}`;
    form.method = 'post';
    form.style.maxWidth = '300px';
    form.style.backgroundColor = '#E5DDD5';
    form.style.borderRadius = '10px';
    form.style.border = '1px solid #25d366';
    // form.style.paddingLeft = '5px';
    // form.style.paddingRight = '5px';
    // form.style.paddingBottom = '5px';

    const titleH6 = document.createElement('h6');
    titleH6.id = `title${uniqueId}`;
    titleH6.style.backgroundColor = '#25d366';
    titleH6.style.color = 'white';
    titleH6.style.fontSize = '0.8rem';
    titleH6.style.padding = '7px';
    titleH6.style.borderRadius = '10px 10px 0 0';
    titleH6.style.height = '30px';
    titleH6.style.display = 'flex';
    titleH6.style.justifyContent = 'space-between';
    titleH6.style.alignItems = 'center';
    titleH6.style.margin = '0';

    const text = document.createElement('span');
    text.id = `text${uniqueId}`;
    text.style.float = 'left';
    text.innerText = title;

    const close = document.createElement('span');
    close.id = `close${uniqueId}`;
    close.style.float = 'right';
    close.style.cursor = 'pointer';
    close.innerText = 'X';
    close.addEventListener('click', handleCloseForm);

    const fields = document.createElement('div'); // campos-chat
    div.id = `fields${uniqueId}`;
    div.style.padding = '0 10px 10px 10px';

    const chatContainer = document.createElement('div'); //balao-chat
    chatContainer.id = `chat-container${uniqueId}`;
    chatContainer.style.backgroundColor = '#fff';
    chatContainer.style.padding = '8px';
    chatContainer.style.fontSize = '16px';
    chatContainer.style.borderRadius = '0 0 10px 10px';
    chatContainer.style.marginBottom = '40px';
    chatContainer.style.marginTop = '10px';
    chatContainer.style.color = '#444';

    const interactiveText = document.createElement('span'); // msg-p-wp
    interactiveText.id = `interactive-text${uniqueId}`;
    interactiveText.style.display = 'none';
    interactiveText.innerText = '...';

    const interactiveMessage = document.createElement('span'); // msg-wp
    interactiveMessage.id = `interactive-message${uniqueId}`;

    const labelMsg = document.createElement('label'); // msg
    const b = document.createElement('b');

    labelMsg.appendChild(b);

    const containerTextArea = document.createElement('div'); // container-textarea
    containerTextArea.id = `container-textarea${uniqueId}`;
    containerTextArea.style.height = '60px';
    containerTextArea.style.display = 'flex';
    containerTextArea.style.alignItems = 'center';
    containerTextArea.style.marginBottom = '10px';
    containerTextArea.addEventListener('click', handleAutoResize);

    const textArea = document.createElement('textarea'); // msg-whatts
    textArea.id = `text-area${uniqueId}`;
    textArea.name = 'msg';
    textArea.placeholder = 'Digite sua mensagem...';
    textArea.style.width = '100%';
    textArea.style.padding = '15px';
    textArea.style.margin = '5px 0 22px 0';
    textArea.style.border = 'none';
    textArea.style.background = '#f1f1f1';
    textArea.style.resize = 'none';
    textArea.style.height = '100%';
    textArea.style.borderRadius = '10px 0 10px 10px';
    textArea.setAttribute('required', '');
    textArea.addEventListener('keydown', handleKeyDown);

    const buttonSubmit = document.createElement('img'); // .btn-send
    buttonSubmit.id = `button-submit${uniqueId}`;
    buttonSubmit.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNTM1LjVweCIgaGVpZ2h0PSI1MzUuNXB4IiB2aWV3Qm94PSIwIDAgNTM1LjUgNTM1LjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzNS41IDUzNS41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKCT4KPGc+Cgk8ZyBpZD0ic2VuZCI+CgkJPHBvbHlnb24gcG9pbnRzPSIwLDQ5Ny4yNSA1MzUuNSwyNjcuNzUgMCwzOC4yNSAwLDIxNi43NSAzODIuNSwyNjcuNzUgMCwzMTguNzUgCQkiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";
    buttonSubmit.style.width = '25px';
    buttonSubmit.style.backgroundColor = 'transparent';
    buttonSubmit.style.color = 'transparent';
    buttonSubmit.style.padding = '0';
    buttonSubmit.style.border = 'none';
    buttonSubmit.style.cursor = 'pointer';
    buttonSubmit.style.marginLeft = '5px';
    buttonSubmit.style.marginTop = '-15px';
    buttonSubmit.addEventListener('click', handleSendMessage);

    
    

    // titleH6.appendChild(text);
    // titleH6.appendChild(close);
    // chatContainer.appendChild(titleH6);

    // chatContainer.appendChild(interactiveText);
    // fields.appendChild(interactiveMessage);
    // fields.appendChild(chatContainer);

    // fields.appendChild(labelMsg);
    // fields.appendChild(containerTextArea);
    // form.appendChild(fields);
    // containerTextArea.appendChild(textArea);
    // containerTextArea.appendChild(buttonSubmit);

    // chat.appendChild(form);
    // button.appendChild(image);
    // div.appendChild(button);
    // div.appendChild(chat);

    containerTextArea.appendChild(textArea);
    containerTextArea.appendChild(buttonSubmit);

    chatContainer.appendChild(interactiveText);
    chatContainer.appendChild(interactiveMessage);

    fields.appendChild(chatContainer);    
    fields.appendChild(labelMsg);    
    fields.appendChild(containerTextArea);

    titleH6.appendChild(text);
    titleH6.appendChild(close);

    form.appendChild(titleH6);
    form.appendChild(fields);
    chat.appendChild(form);

    button.appendChild(image);
    div.appendChild(button);
    div.appendChild(chat);
    
    document.body.appendChild(div);
}