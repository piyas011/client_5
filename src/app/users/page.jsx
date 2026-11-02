import AllUser from "@/components/AllUser";
import Link from "next/link";
import React, { Suspense } from "react";

const userPromise = async () => {
  const res = await fetch("http://localhost:5000/users");
  return res.json();
};

const AllUsersPage = async () => {
  return (
    <div>
      <Link className=" border px-3 rounded-[10px]" href="/">
        Back
      </Link>
      <h2>All Users Page</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <AllUser userPromise={userPromise} />
      </Suspense>
    </div>
  );
};

export default AllUsersPage;
