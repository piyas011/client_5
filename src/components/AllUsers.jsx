import Link from "next/link";
import { use } from "react";

const AllUsers = ({ usersPromise }) => {
  const users = use(usersPromise());

  //
  return (
    <div className="p-5">
      <div className="p-2 border rounded-[10px] mb-5 w-fit">
        <Link href="/">Go Back</Link>
      </div>
      <p>TOTAL USER : {users.length}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 mt-4">
        {users.map((user, index) => (
          <div className="p-2 border rounded-[10px]" key={index}>
            <div>
              <p>User Name : {user?.name}</p>
              <p>User Email : {user?.email}</p>
              <p>User Mobile : {user?.number}</p>
            </div>
            <div className="flex justify-between items-center ">
              <Link href={`users/${user._id}`}>
                <button className="p-2 border rounded-[10px]">
                  View Details
                </button>
              </Link>
              <button className="p-2 border rounded-[10px]">Edit</button>
              <button className="p-2 border rounded-[10px] bg-red-300">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
