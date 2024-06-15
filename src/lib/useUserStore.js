import create from "zustand";

const useUserStore = create((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
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
