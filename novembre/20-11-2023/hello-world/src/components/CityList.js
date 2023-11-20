import React from 'react';

const cities = ['Roma', 'Napoli', 'Milano', 'Firenze'];

const CityList = () => {
    return (
        <div className="HelloWorld" >
            <p>Città italiane</p>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>{city}</li>
                ))}
            </ul>
        </div>
    );
}

export default CityList;