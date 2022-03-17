import React, { useMemo } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  const findLastMessageIndex = (messages) => {
    for (let i = messages.length - 1; i >= 0; i--) {
      const message = messages[i];
      if (message.readStatus === true && message.senderId === userId) {
        return i;
      }
    }
    return -1;
  };

  const lastReadMessageIndex = useMemo(() => {
    return findLastMessageIndex(messages);
  }, [messages]);

  return (
    <Box>
      {messages.map((message, index) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
            lastRead={index === lastReadMessageIndex}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
