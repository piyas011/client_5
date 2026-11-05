"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteUser = ({ user }) => {
  const router = useRouter();

  const handleDeleteUser = async (id) => {
    console.log(id);

    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });

    const afterDelete = await res.json();
    console.log("after delete =", afterDelete);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => handleDeleteUser(user._id)}
        className="p-2 border rounded-[10px] bg-red-300 cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteUser;
