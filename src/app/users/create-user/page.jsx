import CreateUser from "@/components/CreateUser";
import Link from "next/link";
import React from "react";

const CreateNewUserPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-5">Create New User </h1>
      <div>
        <Link className="border p-2 rounded-[10px]" href="/">
          Go Back
        </Link>
      </div>
      <CreateUser />
    </div>
  );
};

export default CreateNewUserPage;
