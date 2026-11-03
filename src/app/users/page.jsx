import AllUsers from "@/components/AllUsers";
import { Asar } from "next/font/google";
import { Suspense, use } from "react";

const AllUsersPage = () => {
  //////////////////////////////
  const usersPromise = async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  };
  //////////////////////////////

  return (
    <div>
      <h1 className="text-4xl text-center mt-5">All Users Page</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <AllUsers usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
};

export default AllUsersPage;
