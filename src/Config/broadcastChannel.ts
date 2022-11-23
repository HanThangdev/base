import BroadcastChannel from "broadcast-channel";
import {  Message } from '@type/Store/auth';


export const logoutChannel: BroadcastChannel<Message> = new BroadcastChannel("logout");

export const logoutAllTabsEventListener = () => {
  logoutChannel.onmessage = () => {
    window.location.reload();
    logoutChannel.close();
  };
};