import React, { Suspense } from "react";

const UserDetailsPage = async ({ params }) => {
  const { userID } = await params;
  return (
    <div>
      <h1>User Details Page</h1>

      <div>
        <Suspense fallback={<p>loading...</p>}>
          <p>userID : {userID}</p>
        </Suspense>
        <p>Name : {}</p>
      </div>
    </div>
  );
};

export default UserDetailsPage;
