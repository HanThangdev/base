import { Message } from "@type/Store/auth";
import BroadcastChannel from "broadcast-channel";


const logoutChannel: BroadcastChannel<Message> = new BroadcastChannel("logout");

export const logoutAllTabsEventListener = () => {
  logoutChannel.onmessage = () => {
    window.location.reload();
    logoutChannel.close();
  };
};
