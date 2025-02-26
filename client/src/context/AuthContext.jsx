import React, { createContext } from "react";

export const AuthContextProvider = createContext({
  loginUser: () => {},
  islogged: Boolean,
  signupUser: () => {},
});

const AuthContext = ({ children }) => {
  const islogged = true;
  const loginUser = (data) => {
    console.log(data);
  };
  const signupUser = (data) => {
    console.log(data);
  };

  return (
    <AuthContextProvider.Provider value={{ loginUser, signupUser, islogged }}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
