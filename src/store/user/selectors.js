export function getUserState(state) {
  //Permet de donner aux composants l'accès au store
  return {
    user: {
      id: state.userReducer.id,
      fullname: state.userReducer.fullname,
      givenName: state.userReducer.givenName,
      familyName: state.userReducer.familyName,
      avatar: state.userReducer.avatar,
      email: state.userReducer.email
    }
  };
}
