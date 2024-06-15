"use client";
import useUserStore from "@/lib/useUserStore";
import { User } from "@/type/type";
import { useState } from "react";
import AddUserForm from "./AddUserForm";

const UserTable: React.FC = () => {
  const { users, addUser, removeUser, updateUser } = useUserStore((state) => ({
    users: state.users,
    addUser: state.addUser,
    removeUser: state.removeUser,
    updateUser: state.updateUser,
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Table</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            {[
              "Identity ID",
              "Email",
              "First Name",
              "Last Name",
              "Phone",
              "WhatsApp",
              "Avatar",
              "Language Code",
              "Is Superuser",
              "Channel",
              "Redirect URL",
              "Actions",
            ].map((heading) => (
              <th key={heading} className="py-2 px-4 border-b">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.identityId} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{user.identityId}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.firstName}</td>
              <td className="py-2 px-4 border-b">{user.lastName}</td>
              <td className="py-2 px-4 border-b">{user.phone}</td>
              <td className="py-2 px-4 border-b">{user.whatsapp}</td>
              <td className="py-2 px-4 border-b">{user.avatar}</td>
              <td className="py-2 px-4 border-b">{user.languageCode}</td>
              <td className="py-2 px-4 border-b">
                {user.isSuperuser ? "Yes" : "No"}
              </td>
              <td className="py-2 px-4 border-b">{user.channel}</td>
              <td className="py-2 px-4 border-b">{user.redirectUrl}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-red-500 text-white p-2 py-1 rounded hover:bg-red-600"
                  onClick={() => removeUser(user.identityId)}
                >
                  Remove
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                  onClick={() =>
                    updateUser({ ...user, firstName: "Updated First Name" })
                  }
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddUserForm addUser={addUser} />
    </div>
  );
};

export default UserTable;
