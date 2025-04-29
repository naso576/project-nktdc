import {create} from 'zustand';
import {persist} from 'zustand/middleware';
interface LoginState {
    isLoggedIn: boolean;
    username: string | null;
    login: (username: string) => void;
    logout: () => void;
}

const useLoginStore = create<LoginState>()(
    persist(
        (set) => ({
            isLoggedIn: false,
            username: null,
            login: (username: string) =>
                set({ isLoggedIn: true, username }),
            logout: () =>
                set({ isLoggedIn: false, username: null }),
        }),
        {
            name: 'login-storage', // name of the storage key
        }
    )
);

export default useLoginStore;
    