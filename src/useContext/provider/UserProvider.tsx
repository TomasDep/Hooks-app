import { UserContext } from "../context/UserContext";
import { useState } from "react";

const user = {
  id: 1,
  name: "John Doe",
  email: "jdoe@email.com",
};

export const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
