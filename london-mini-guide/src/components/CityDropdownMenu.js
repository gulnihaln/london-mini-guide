import React from 'react'

export default function CityDropdownMenu() {
    return (
      <div>
        <label for="cities">Choose a city</label>
        <select name="cities" id="cities">
          <option>Select a city</option>
          <option value="harrow">Harrow</option>
          <option value="stratforrd">Stratford</option>
          <option value="heathrow">Heathrow</option>
        </select>
      </div>
    );
}
