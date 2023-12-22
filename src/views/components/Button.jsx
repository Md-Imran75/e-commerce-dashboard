import React from 'react'

const Button = ({children , disabled}) => {
    return (
        <div>
            <button disabled={disabled} className='bg-secondary-500 w-full hover:shadow-lg text-white-100 rounded-md px-7 py-2 mb-3'>
               {children}
            </button>
        </div>
    )
}

export default Button
