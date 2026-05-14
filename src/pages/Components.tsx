import Layout from "@/components/app/layout";
import React, { useEffect, useState } from "react";
import { Video, Phone } from "lucide-react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

type User = {
  id: number;
  name: string;
  avatar: string;
};

type Message = {
  text: string;
  sender: "me" | "them";
};

const users: User[] = [
  { id: 1, name: "Alex", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 2, name: "Emma", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 3, name: "John", avatar: "https://i.pravatar.cc/150?img=8" },
  { id: 4, name: "Sophia", avatar: "https://i.pravatar.cc/150?img=10" },
  { id: 5, name: "ell", avatar: "https://i.pravatar.cc/150?img=10" },
  { id: 6, name: "Shriya", avatar: "https://i.pravatar.cc/150?img=10" },
  { id: 7, name: "Jeewan", avatar: "https://i.pravatar.cc/150?img=10" },
  { id: 8, name: "Jina", avatar: "https://i.pravatar.cc/150?img=10" },
  { id: 9, name: "sina", avatar: "https://i.pravatar.cc/150?img=10" },
  { id: 10, name: "mina", avatar: "https://i.pravatar.cc/150?img=10" },
  { id: 11, name: "tina", avatar: "https://i.pravatar.cc/150?img=10" },





];

const autoReplies = [
  "Okay 👍",
  "Sounds good!",
  "😂😂",
  "I’ll get back to you",
  "Sure!",
];

const Components: React.FC = () => {
  const [activeUser, setActiveUser] = useState<User>(users[0]);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hey 👋", sender: "them" },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, sender: "me" }]);
    setInput("");

    // Auto reply after 1 sec
    setTimeout(() => {
      const reply =
        autoReplies[Math.floor(Math.random() * autoReplies.length)];
      setMessages((prev) => [...prev, { text: reply, sender: "them" }]);
    }, 1000);
  };

  useEffect(() => {
    setMessages([{ text: "Hey 👋", sender: "them" }]);
  }, [activeUser]);

  return (
    <MainLayout>
      <div style={styles.container}>
        {/* Chat List */}
        <div style={styles.sidebar}>
          {users.map((user) => (
            <div
              key={user.id}
              style={{
                ...styles.userItem,
                background:
                  activeUser.id === user.id ? "#eef2ff" : "transparent",
              }}
              onClick={() => setActiveUser(user)}
            >
              <img src={user.avatar} style={styles.avatar} />
              <span>{user.name}</span>
            </div>
          ))}
        </div>

        {/* Chat Window */}
        <div style={styles.chatWindow}>
          {/* Header */}
          <div style={styles.header}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={activeUser.avatar} style={styles.avatar} />
              <strong>{activeUser.name}</strong>
            </div>

            <div style={styles.callIcons}>
              <Phone size={20} />
              <Video size={22} />
            </div>
          </div>

          {/* Messages */}
          <div style={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  alignSelf:
                    msg.sender === "me" ? "flex-end" : "flex-start",
                  background:
                    msg.sender === "me" ? "#2563eb" : "#e5e7eb",
                  color: msg.sender === "me" ? "#fff" : "#000",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={styles.inputArea}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              style={styles.input}
            />
            <button onClick={sendMessage} style={styles.sendBtn}>
              Send
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    height: "650px",
    border: "1px solid #ddd",
  },
  sidebar: {
    width: "260px",
    borderRight: "1px solid #ddd",
    padding: "10px",
  },
  userItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px",
    cursor: "pointer",
    borderRadius: "6px",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  chatWindow: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  callIcons: {
    display: "flex",
    gap: "12px",
    cursor: "pointer",
  },
  messages: {
    flex: 1,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    overflowY: "auto",
  },
  message: {
    maxWidth: "60%",
    padding: "8px 12px",
    borderRadius: "14px",
    fontSize: "14px",
  },
  inputArea: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "8px",
  },
  sendBtn: {
    marginLeft: "8px",
    padding: "8px 14px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default Components;
