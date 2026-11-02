import Link from "next/link";
import React, { use } from "react";

const AllUser = ({ userPromise }) => {
  const users = use(userPromise());
  return (
    <div>
      <h1>Total User : {users.length}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {users.map((user) => (
          <div className="p-2 border rounded-[10px] m-2" key={user._id}>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Number : {user.phone}</p>
            <div className="border p-2 mt-2 rounded-[10px] flex justify-center items-center gap-4">
              <Link
                className="border p-2 rounded-[10px]"
                href={`/users/${user._id}`}
              >
                View Details
              </Link>
              <button className="border p-2 rounded-[10px]">Delete</button>
              <button className="border p-2 rounded-[10px]">Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUser;
