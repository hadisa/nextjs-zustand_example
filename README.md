Next js 14.2.4 with tailwind configuration

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Zustand 

Zustand is a small, fast, and scalable bearbones state-management solution that is easy to integrate with Next.js. I'll walk you through creating a Zustand store to manage your data and then how to use it in a Next.js component.

```
import create from 'zustand';

const useUserStore = create((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (identityId) => set((state) => ({
    users: state.users.filter((user) => user.identityId !== identityId)
  })),
  updateUser: (updatedUser) => set((state) => ({
    users: state.users.map((user) =>
      user.identityId === updatedUser.identityId ? updatedUser : user
    )
  }))
}));

export default useUserStore;

```
How to call it 

```
  const { users, addUser, removeUser, updateUser } = useUserStore((state) => ({
    users: state.users,
    addUser: state.addUser,
    removeUser: state.removeUser,
    updateUser: state.updateUser,
  }));
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
