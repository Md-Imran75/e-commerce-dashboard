import React from 'react'

const Search = ({setPerPage , setSearchValue , searchValue }) => {
    return (

        <div className="flex justify-between items-center">
            <select onChange={(e) => setPerPage(parseInt(e.target.value))} className="px-4 py-2 hover:border hover:border-primary-500 outline-none rounded-md text-black-500 bg-primary-100">
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="25">25</option>
            </select>
            <input onChange={(e) => setSearchValue(e.target.value)} className="px-4 py-2 focus:border focus:border-primary-500 outline-none rounded-md text-black-500 bg-primary-100" type="text" placeholder="search..." />
        </div>

    )
}

export default Search
