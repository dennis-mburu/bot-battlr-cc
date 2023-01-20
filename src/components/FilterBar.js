import React from 'react'

function FilterBar() {
  return (
    <div>
        <label>Filter By: </label>
        {/* <select>
            <option>Assault</option>
            <option>Defender</option>
            <option>Support</option>
            <option>Medic</option>
            <option>Witch</option>
            <option>Captain</option>
        </select> */}

        <label><input type="checkbox" /> Assault </label>
        <label><input type="checkbox" /> Defender </label>
        <label><input type="checkbox" /> Support </label>
        <label><input type="checkbox" /> Medic </label>
        <label><input type="checkbox" /> Witch </label>
        <label><input type="checkbox" /> Captain </label>
    </div>
  )
}

export default FilterBar