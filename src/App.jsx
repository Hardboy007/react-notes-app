import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {
  
  const [title, settitle] = useState('')
  const [detail, setdetail] = useState('')
  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    
    const copyTask = [...task];
    copyTask.push({title,detail})
    settask(copyTask);
    settitle('');
    setdetail('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1);
    settask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-gray-950 text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex lg:w-1/2 items-start w-full p-10 gap-4 flex-col'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* input for heading  */}
        <input
          type="text"
          placeholder='Enter notes heading'
          className='px-5 py-2 outline-none w-full border-2 rounded'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />

        {/* detailed input */}
        <textarea
          type="text"
          placeholder='Write details'
          className='px-5 py-2 w-full h-20 border-2 rounded outline-none'
          value={detail}
          onChange={(e) => {
            setdetail(e.target.value)
          }}
        />

        <button className='bg-white w-full text-black px-5 py-2 rounded cursor-pointer outline-none active:bg-gray-500 active:text-white active:scale-95'>Add Notes</button>

      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Your Recent Notes</h1>
        <div className='flex flex-wrap items-start gap-5 mt-5 overflow-auto h-[90%] just'>
          {task.map(function(elem,idx){
            return <div key={idx} className="relative h-52 w-42 rounded-2xl text-black p-4 bg-[url('https://imgs.search.brave.com/qdPw4EAK5Z7WcnQpWMdRmxnTh4pNKx4tSsfZZXYRUaI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzAv/OTQxLzg2My9zbWFs/bC9jdXRlLXllbGxv/dy1ub3Rlcy1mcmVl/LXBuZy5wbmc')] bg-cover">
              <h2 className='absolute top-5 right-5 bg-red-400 p-1 rounded-full cursor-pointer active:scale-95' onClick={()=>{
                deleteNote(idx)
              }}><X size={16} strokeWidth={2.75} color='#ffffff'/></h2>
              <h3 className='leading-tight text-[17px] font-bold ml-5'>{elem.title}</h3>
              <p className='leading-tight text-gray-700 mt-2 font-normal ml-6'>{elem.detail}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App