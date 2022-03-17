import io from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
  updateMessageToRead,
} from "./store/conversations";

const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("connected to server");

  socket.on("add-online-user", (id) => {
    store.dispatch(addOnlineUser(id));
  });

  socket.on("remove-offline-user", (id) => {
    store.dispatch(removeOfflineUser(id));
  });
  socket.on("new-message", (data) => {
    const activeConversation = store.getState().activeConversation;
    store.dispatch(
      setNewMessage(data.message, data.sender, activeConversation)
    );
  });
  socket.on("read-message", (convoId) => {
    store.dispatch(updateMessageToRead(convoId));
  });
});

export default socket;
