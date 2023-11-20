import React from 'react';

const cities = ['Roma', 'Parigi', 'New York'];

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