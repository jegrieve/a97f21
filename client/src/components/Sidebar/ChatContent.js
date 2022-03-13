import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  messageNotification: {
    backgroundColor: "#3F92FF",
    color: "white",
    borderRadius: "50%",
    width: 21,
    height: 21,
    fontSize: 12,
    letterSpacing: -0.2, 
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  previewUnreadText: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
    letterSpacing: -0.17,
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser, unreadMessageCount } = conversation;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography 
          className={
            unreadMessageCount > 0 
              ? classes.previewUnreadText
              : classes.previewText
          }
        >
          {latestMessageText}
        </Typography>
      </Box>
      {unreadMessageCount > 0 && (
        <Box>
          <Typography className={classes.messageNotification}>
            {unreadMessageCount}
          </Typography>  
        </Box>
      )}
    </Box>
  );
};

export default ChatContent;
