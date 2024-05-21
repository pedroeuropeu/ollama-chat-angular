import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Message } from 'src/app/demo/api/message';
import { User } from 'src/app/demo/api/user';
import { ChatService } from '../service/chat.service';
import {Answer} from "../../../../api/answer";
import {Messages} from "primeng/messages";

@Component({
    selector: 'chat-box',
    templateUrl: './chat-box.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatBoxComponent implements OnInit {

    defaultUserId: number = 123;
    loggedUserId: number = 456;
    message!: Message;
    textContent: string = '';
    emojis = [
        '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😇', '😉', '😊', '🙂', '🙃', '😋', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '🤪', '😜', '😝', '😛',
        '🤑', '😎', '🤓', '🧐', '🤠', '🥳', '🤗', '🤡', '😏', '😶', '😐', '😑', '😒', '🙄', '🤨', '🤔', '🤫', '🤭', '🤥', '😳', '😞', '😟', '😠', '😡', '🤬', '😔',
        '😟', '😠', '😡', '🤬', '😔', '😕', '🙁', '😬', '🥺', '😣', '😖', '😫', '😩', '🥱', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '🤤'
    ];

    @Input() user!: User;
    private messageComplet: string = "";
    allMessages: Message[] = [];

    constructor(private chatService: ChatService) {
    }

    ngOnInit(): void {
    }

    sendMessage() {
        if (this.textContent == '' || this.textContent === ' ') {
            return;
        }
        else {
            let message = {
                text: this.textContent,
                ownerId: this.loggedUserId,
                createdAt: new Date().getTime(),
            }
            debugger
            this.allMessages.push(message)

            // this.chatService.sendMessage(message)
            this.textContent = '';
            this.chatService.generateResponse(message.text).then(data => {
                debugger
                var answersJsonList = data as Answer[];
                 answersJsonList.forEach(a => {
                    this.messageComplet += a.response
                })
                let messageObj = {
                    text: this.messageComplet,
                    ownerId: this.defaultUserId,
                    createdAt: new Date().getTime(),
                }
                this.allMessages.push(messageObj)
                this.allMessages.sort((a, b) => b.createdAt + a.createdAt);
            });;
        }
    }

    onEmojiSelect(emoji: string) {
        this.textContent += emoji;
    }

    parseDate(timestamp: number) {
        return new Date(timestamp).toTimeString().split(':').slice(0, 2).join(':');
    }
}
