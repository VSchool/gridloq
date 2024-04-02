import { useEffect, useState } from "react";
import { useSocketContext } from "../hooks"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const Socket = withAuthenticationRequired(() => {
    const { connected, error, socket } = useSocketContext();
    const { user } = useAuth0();
    const connectionStatus = error ? 'error' : connected ? 'Connected' : "Disconnected";
    const actionLabel = connected ? 'Disconnect from socket' : 'Connect to socket';
    const [messages, setMessages] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);

    const [message, setMessage] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setMessage(value);
    }

    const handleSend = e => {
        e.preventDefault();
        socket.emit('publish_message', { message, user });
        setMessage('');
    }

    const toggleConnectionStatus = () => {
        if (connected) socket.disconnect();
        else socket.connect();
    }

    useEffect(() => {
        const handleMessagePublished = (payload) => setMessages(prev => [...prev, payload.message]);
        const handleConnect = () => socket.emit('user_join', { user });
        const handleUserJoined = (payload) => setOnlineUsers(payload.users);
        const handleUserLeft = (payload) => setOnlineUsers(prev => prev.filter(u => u.sub !== payload.user.sub))

        socket.on('connect', handleConnect);
        socket.on('message_published', handleMessagePublished);
        socket.on('user_joined', handleUserJoined);
        socket.on('user_left', handleUserLeft);

        return () => {
            socket.off('message_published', handleMessagePublished)
            socket.off('connect', handleConnect)
            socket.off('user_joined', handleUserJoined);
            socket.off('user_left', handleUserLeft);
        }
    }, [])

    return (
        <div>
            <h1>Socket Demo</h1>
            <p>Socket status: {connectionStatus}</p>
            {error && <p>{error}</p>}
            <button onClick={toggleConnectionStatus}>{actionLabel}</button>
            {connected && (
                <div>

                    <h3>Chat Room</h3>
                    <h5>Online Users:</h5>
                    <ul>
                        {onlineUsers.map(u => (
                            <li key={u.sub}>
                                <p>{u.name}</p>
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={handleSend}>
                        <input type="text" value={message} onChange={handleChange} placeholder='Message' name='message' required />
                        <button>Send</button>
                    </form>
                    <ul>
                        {messages.map(msg => (
                            <li key={msg.id}>
                                <p>{msg.sender.name} says:</p>
                                <p>{msg.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
});