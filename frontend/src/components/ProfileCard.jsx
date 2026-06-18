import { FaUserCircle } from "react-icons/fa";

function ProfileCard() {

  const email =
    localStorage.getItem(
      "userEmail"
    );

  const role =
    localStorage.getItem(
      "role"
    );

  return (

    <div className="card p-4 mt-4">

      <h4>

        <FaUserCircle />
        {" "}
        Profile

      </h4>

      <hr />

      <p>

        <strong>Email:</strong>
        {" "}
        {email}

      </p>

      <p>

        <strong>Role:</strong>
        {" "}
        {role}

      </p>

    </div>

  );

}

export default ProfileCard;