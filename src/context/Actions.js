export  const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
})

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
})

export const Logout = () => ({
    type: "LOGOUT",
  });
  
  export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START",
  });
  
  export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
  });
  
  export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
  });
  //new

  export const UPDATE_NUMBER_OF_PIECES = "UPDATE_NUMBER_OF_PIECES";

export const updateNumberOfPieces = number => ({
  type: UPDATE_NUMBER_OF_PIECES,
  payload: number
});
