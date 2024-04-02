import { useContext, useEffect, useState } from "react";
import { http } from "./http";
import { useAuth0 } from "@auth0/auth0-react";
import { SocketContext } from "./contexts";
import { socket } from "./socket";


/**
 * Automatically attaches Auth0 user access token to outgoing requests
 * @example 
 * const { request } = useHttpAuthClient()
 * request('/api/path/to/authorized/resource')
 *  .then(data => {console.log(data)})
 */
export const useHttpAuthClient = () => {
    const { getAccessTokenSilently } = useAuth0();

    const handler = async (url, options) => {
        const accessToken = await getAccessTokenSilently();
        return http.request(accessToken)(url, options)
    };

    const request = {
        get: (url, options) => handler(url, { ...options, method: 'GET' }),
        post: (url, options) => handler(url, { ...options, method: 'POST' }),
        delete: (url, options) => handler(url, { ...options, method: 'DELETE' }),
        put: (url, options) => handler(url, { ...options, method: 'PUT' }),
    }

    return {
        request
    }
}

export const useLoadingAPI = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    return [
        loading,
        setLoading,
        error,
        setError
    ]
}

export const useSocketAPI = () => {
    const [connected, setConnected] = useState(socket.connected);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleSocketError = (err) => setError(err.message);
        const handleSocketConnection = () => setConnected(true);
        const handleSocketDisconnection = () => setConnected(false);

        socket.on('connect', handleSocketConnection);
        socket.on('reconnect', handleSocketConnection);
        socket.on('disconnect', handleSocketDisconnection);
        socket.on('error', handleSocketError);
        socket.on('reconnect_error', handleSocketError);
        socket.on('reconnect_failed', handleSocketError);

        return () => {
            socket.off('connect', handleSocketConnection);
            socket.off('reconnect', handleSocketConnection);
            socket.off('disconnect', handleSocketDisconnection);
            socket.off('error', handleSocketError);
            socket.off('reconnect_error', handleSocketError);
            socket.off('reconnect_failed', handleSocketError);
        }

    }, []);

    return {
        connected,
        error,
        socket,
    }
}

export const useSocketContext = () => useContext(SocketContext);
