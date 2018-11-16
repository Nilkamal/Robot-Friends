import React from 'react';

const SearchInput = ({onSearch}) => {
    return (
        <div>
            <input 
                type='search' 
                className='bg-light-blue pa3 w-30' 
                placeholder='Search Robots' 
                onChange={onSearch}
                />
        </div>
    )
}

export default SearchInput;