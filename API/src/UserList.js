import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      // jsonplaceholder returns the users array on res.data
      .then((res) => setListOfUser(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "ceneter" }}>list of users :</h1>
      <ul className="list">
        {listOfUser.map((el) => (
          <li key={el.id} style={{ marginBottom: "1rem" }}>
            <div>
              <strong>{el.name}</strong> ({el.username})
            </div>
            <div>{el.email}</div>
            <div>
              {/* address is an object: show street and city if present */}
              {el.address ? `${el.address.street}, ${el.address.city}` : ""}
            </div>
            <div>{el.phone}</div>
            <div>{el.website}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
