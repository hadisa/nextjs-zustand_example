import { User } from "@/type/type";
import create from "zustand";

type UserStore = {
  users: User[];
  addUser: (user: User) => void;
  removeUser: (identityId: string) => void;
  updateUser: (updatedUser: User) => void;
};

const useUserStore = create<UserStore>((set) => ({
  users: [],
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),
  removeUser: (identityId) =>
    set((state) => ({
      users: state.users.filter((user) => user.identityId !== identityId),
    })),
  updateUser: (updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.identityId === updatedUser.identityId ? updatedUser : user
      ),
    })),
}));

export default useUserStore;
