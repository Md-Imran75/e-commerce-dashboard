import io from 'socket.io-client'
export const overrideStyleForButtonLoader = {
    display: 'flex',
    margin: '0 auto',
    height: '24px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 0'
};
export const socket = io('http://localhost:5000', {
    transports: ['websocket'],
})