import React from "react";
import { useState } from "react";

type UserType = {
  name: string;
  email: any;
  phone: number;
};

function LoginCheck() {
  const [user, setUser] = useState<UserType | null>({} as UserType);

  const handleLogin = () => {
    setUser({
      name: "Miguel",
      email: "kkk@gmail.com",
      phone: 984516545,
    });
  };

  const handleLogout = () => {
    setUser({} as UserType);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
      </div>
    </div>
  );
}

export default LoginCheck;
