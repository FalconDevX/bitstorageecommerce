import { create } from "zustand";
import { loginUser, registerUser, refreshUserToken } from "./auth.api";

interface User {
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  register: (username: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refresh: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  accessToken: null,

  register: async (username, email, password) => {
    await registerUser(username, email, password);
  },

  login: async (email, password) => {
    const res = await loginUser(email, password);
    const { access, user } = res.data;
    set({ accessToken: access, user });
  },

  logout: () => {
    set({ user: null, accessToken: null });
  },

  refresh: async () => {
    try {
      const res = await refreshUserToken();
      const { access, user } = res.data;
      set({ accessToken: access, user });
    } catch {
      set({ user: null, accessToken: null });
    }
  },
}));
