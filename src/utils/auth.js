import localStorage from 'local-storage';

export const getToken = () => localStorage.get('token') || null;
