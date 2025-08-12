# 🚀 Next.js 15 with Zustand - Beginner's Guide to State Management

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/hadisa/nextjs-zustand-example?style=social)](https://github.com/hadisa/nextjs-zustand-example/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/hadisa/nextjs-zustand-example?style=social)](https://github.com/hadisa/nextjs-zustand-example/network/members)

A beginner-friendly example of a Next.js 15 application that demonstrates Zustand state management in the simplest way possible. Perfect for developers new to state management or looking to understand Zustand quickly with a clean, well-documented example.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🎯 Why This Example?

This project is specifically designed for beginners to learn Zustand in the context of a Next.js application. It provides:

- 🧩 Simple, well-commented code
- 📖 Step-by-step explanations
- 🔍 Common use cases
- 🛠️ Easy to extend and modify

## ✨ Features

- ⚡ Next.js 15 with App Router
- 🐻 Zustand for state management
- 🎨 Tailwind CSS for styling
- 🔥 TypeScript support
- 🚀 Optimized for production
- 📱 Responsive design
- 🔄 Server-side rendering (SSR) ready
- 🔍 SEO optimized

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later (LTS recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hadisa/nextjs-zustand-example.git
   cd nextjs-zustand-example
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Project Structure

```
.
├── app/                  # App router directory
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
├── store/                # Zustand stores
│   └── useStore.ts       # Example store
├── public/               # Static files
├── styles/               # Global styles
└── types/                # TypeScript types
```

## 🐻 Understanding Zustand - A Simple Counter Example

This example demonstrates the core concepts of Zustand in a simple counter application. The store manages a single piece of state (`count`) and provides three actions to interact with it.

```typescript
// store/useStore.ts
import { create } from 'zustand';

interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

Project Link: [https://github.com/hadisa/nextjs-zustand-example](https://github.com/hadisa/nextjs-zustand-example)

## 🙌 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://docs.pmnd.rs/zustand)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## ⭐ Support

If you find this project helpful, please consider giving it a ⭐ on [GitHub](https://github.com/hadisa/nextjs-zustand-example).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/hadisa">Hadisa Norozi</a>
</p>
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
