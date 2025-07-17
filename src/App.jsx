import React from "react";

export default function App() {
  const [unreadMessages, setUnreadMessages] = React.useState([]);

  const [messages, setMessages] = React.useState(["a", "b"]);
  /**
   * Challenge:
   * - If there are no unread messages, display "You're all caught up!"
   * - If there's exactly 1 unread message, it should read "You have
   *   1 unread message" (singular)
   * - If there are > 1 unread messages, display "You have <n> unread
   *   messages" (plural) **/

  return (
    <>
      {messages.lenght === 0 ? (
        <p>"You're all cought up"</p>
      ) : messages.lenght === 1 ? (
        <p>You have 1 unread message</p>
      ) : (
        <p>You have {messages.length} unread messages</p>
      )}
    </>
  );

  // return (
  //   <div>
  //     {unreadMessages.length > 0 && (
  //       <h1>You have {unreadMessages.length} unread messages!</h1>
  //     )}
  //   </div>
  // );
}
