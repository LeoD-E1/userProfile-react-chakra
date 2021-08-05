import React, { useState } from 'react';
import { UserContext } from './UserContext';

const UserState = props => {
  const profile = {
    user: {
      name: 'Leonardo',
      surname: "D'angeli",
      email: 'leoda.dev@gmail.com',
      role: 'Full-Stack MERN Developer',
    },
    preferences: {
      imgBackgroundUrl: 'https://fondosmil.com/fondo/17010.jpg',
      profileImg:
        'https://www.gobernaciondelmagdalena.gov.co/wp-content/uploads/2021/04/sin_foto.png',
    },
    account: true,
  };

  const [state, setState] = useState(profile);

  /*  const getData = async () => {
    const res = await fetch('/user.json');
    const data = await res.json();

    setState(data.profile);
  }; */

  const updateUser = user => {
    const newUser = {
      name: user.name,
      surname: user.surname,
      email: user.email,
      role: user.role,
    };
    setState({
      ...state,
      user: newUser,
    });
  };

  const updatePreferences = data => {
    const newPreferences = {
      imgBackgroundUrl: data.imgBackgroundUrl,
      profileImgUrl: data.profileImg,
    };
    setState({
      ...state,
      preferences: newPreferences,
    });
  };

  const deleteAccount = () => {
    window.confirm('¿Seguro que quiere borrar su cuenta?');
    //setState({ account: false });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        preferences: state.preferences,
        account: state.account,
        updateUser,
        updatePreferences,
        deleteAccount,
        //getData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
