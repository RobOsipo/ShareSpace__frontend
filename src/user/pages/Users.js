import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const TEMPUSERS = [
    {
      id: "u1",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pjxg0Tpg4MuGlrPzQEvRlgHaE8%26pid%3DApi&f=1",
      name: "Rob",
      places: 3,
    },
  ];
  return <UsersList items={TEMPUSERS} />;
};

export default Users;
