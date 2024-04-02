import { SocketContext } from "../contexts"
import { useSocketAPI } from "../hooks"

export const SocketProvider = ({ children }) => {
    const socketAPI = useSocketAPI(); 
    return (
        <SocketContext.Provider value={socketAPI}>
            {children}
        </SocketContext.Provider>
    )
}