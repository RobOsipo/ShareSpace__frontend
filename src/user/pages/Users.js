import React, { useEffect, useState } from "react";
import UsersList from "../components/UsersList";
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

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

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const sendReq = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/users");
        const data = await response.json();

        if(!response.ok) {
          throw new Error(data.message)
        }

        setLoadedUsers(data.users);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    sendReq();
  }, []);


  const errorHandler = () => {
    setError(null)
  }

  return <>
  <ErrorModal error={error} onClear={errorHandler} />
  {isLoading && <div className="center">
    <LoadingSpinner />
  </div>}
  {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
  </>;
};

export default Users;
