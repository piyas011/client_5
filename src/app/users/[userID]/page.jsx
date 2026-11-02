import Link from "next/link";

const UserDetailsPage = async ({ params }) => {
  const { userID } = await params;

  const res = await fetch(`http://localhost:5000/users/${userID}`);
  const user = await res.json();

  return (
    <div className="p-5">
      <div className="p-2">
        <Link className="p-2 border rounded-[10px]" href="/users">
          Back
        </Link>
      </div>
      <div>
        User Details Page : {userID}
        <p>User name : {user.name}</p>
        <p>User Email : {user.email}</p>
        <p>User Number : {user.phone}</p>
      </div>
    </div>
  );
};

export default UserDetailsPage;
