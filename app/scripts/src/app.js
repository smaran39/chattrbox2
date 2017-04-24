import socket from './ws-client';
import {
    UserStore
} from './storage';
import {
    ChatForm,
    ChatList,
    promptForUsername
} from './dom';

const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';
const LIST_SELECTOR = '[data-chat="message-list"]';

let userStore = new UserStore('x-chattrbox/u'); /* 'x-chattrbox/u' is the 'key' for the sessionStorage here. It is given as one fixed because only one user will use the browser tab. If it's a real-time app then key must be unique! */
let username = userStore.get();
if (!username) {
    username = promptForUsername();
    userStore.set(username);
}

class ChatApp {
    constructor() {
        this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
        this.chatList = new ChatList(LIST_SELECTOR, username);

        socket.init('ws://localhost:3001');
        /*socket.registerOpenHandler(() => {
            let message = new ChatMessage({
                message: 'pow!'
            });
            socket.sendMessage(message.serialize());
        });*/
        socket.registerOpenHandler(() => {
            this.chatForm.init((text) => {
                let message = new ChatMessage({
                    message: text
                });
                socket.sendMessage(message.serialize());
            });
            this.chatList.init();
        });
        socket.registerMessageHandler((data) => {
            console.log(data);
            let message = new ChatMessage(data);
            this.chatList.drawMessage(message.serialize());
        });
    }
}
class ChatMessage {
    constructor({
        message: m,
        user: u = username,
        timestamp: t = (new Date()).getTime()
    }) {
        this.message = m;
        this.user = u;
        this.timestamp = t;
    }
    serialize() {
        return {
            user: this.user,
            message: this.message,
            timestamp: this.timestamp
        };
    }
}

export default ChatApp;
