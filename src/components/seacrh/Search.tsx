import { Search, X } from 'lucide-react'
import './Search.scss'
import { useState } from 'react'
export default function Seacrh() {
    const [data, setData] = useState('')
    console.log(data)
    return (
        <div className="search-body rounded-2xl mt-4 flex flex flex-row items-center justify-center">
            {!data ? <a href='#search' className='ml-1'> <Search /> </a> : null}
            <input 
                type='text' 
                value={data} 
                id='search'
                onChange={(e) => setData(e.target.value)}
                className='outline-none w-full ml-2 mr-1'    
             />
             {data ?
             <button onClick={() => setData('')}>
                <X className='mr-1' />
             </button>
             : null
             }
        </div>
    )
}
