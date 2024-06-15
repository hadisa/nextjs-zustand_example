"use client";
import { useStore } from "@/lib/stateProvider";

const Show: React.FC = () => {
  const {
    authUserId,
    setAuthUserId,
    currentChannelName,
    setCurrentChannelName,
  } = useStore();

  return (
    <div className="flex flex-col gap-4">
      <p>Auth User ID: {authUserId}</p>
      <button
        className="border bg-green-200 p-3"
        onClick={() => setAuthUserId("newId")}
      >
        Set Auth User ID
      </button>
      <p>Current Channel Name: {currentChannelName}</p>
      <button
        className="border bg-green-200 p-3"
        onClick={() => setCurrentChannelName("newName")}
      >
        Set Channel Name
      </button>
    </div>
  );
};

export default Show;
