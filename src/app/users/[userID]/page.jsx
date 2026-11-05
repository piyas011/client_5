import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const UserDetails = async ({ params }) => {
  const { userID } = await params;

  const res = await fetch(`http://localhost:5000/users/${userID}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error(`Failed to load user: ${res.status}`);
  }

  const user = await res.json();
  if (!user) {
    notFound();
  }

  const { name, email, phone, number } = user;

  return (
    <div>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>Phone Number : {phone ?? number}</p>
    </div>
  );
};

const UserDetailsPage = ({ params }) => {
  return (
    <div className="p-5">
      <div className="border p-2 rounded-[10px] w-fit">
        <Link href="/users">Go Back</Link>
      </div>
      <h1>User Details Page</h1>
      <Suspense fallback={<p>Loading user details...</p>}>
        <UserDetails params={params} />
      </Suspense>
    </div>
  );
};

export default UserDetailsPage;
