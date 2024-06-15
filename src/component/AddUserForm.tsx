// src/components/AddUserForm.tsx

import { User } from "@/type/type";
import { useState } from "react";



type AddUserFormProps = {
  addUser: (user: User) => void;
};

const AddUserForm: React.FC<AddUserFormProps> = ({ addUser }) => {
  const [newUser, setNewUser] = useState<User>({
    identityId: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    whatsapp: "",
    avatar: "",
    languageCode: "EN_AG",
    password: "",
    isSuperuser: false,
    channel: "",
    redirectUrl: "https://example.com/confirm",
  });

  const handleAddUser = () => {
    addUser(newUser);
    setNewUser({
      identityId: "",
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      whatsapp: "",
      avatar: "",
      languageCode: "EN_AG",
      password: "",
      isSuperuser: false,
      channel: "",
      redirectUrl: "https://example.com/confirm",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add User</h2>
      <div className="flex flex-col space-y-2">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Identity ID"
          value={newUser.identityId}
          onChange={(e) => setNewUser({ ...newUser, identityId: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="First Name"
          value={newUser.firstName}
          onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Last Name"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Phone"
          value={newUser.phone}
          onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="WhatsApp"
          value={newUser.whatsapp}
          onChange={(e) => setNewUser({ ...newUser, whatsapp: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Avatar"
          value={newUser.avatar}
          onChange={(e) => setNewUser({ ...newUser, avatar: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Channel"
          value={newUser.channel}
          onChange={(e) => setNewUser({ ...newUser, channel: e.target.value })}
        />
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
        onClick={handleAddUser}
      >
        Add User
      </button>
    </div>
  );
};

export default AddUserForm;
