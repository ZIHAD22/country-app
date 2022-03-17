import React from 'react';

const Country = ({country:{name:{official} , flags:{png}}}) => {
    return (
        <div
      style={{
        backgroundColor: '#ddd8d8',
        padding: '20px',
        margin: '15px',
        borderRadius: '20px',
      }}
    >
      <h2>Name: {official} </h2>
      <img width="150px" src={png} alt={`$Flag of ${official}`} />
    </div>
    );
};

export default Country;