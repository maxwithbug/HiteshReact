import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_+'

    for (let i = 0; i < length; i++) {
      // Remove the +1 from Math.random calculation to avoid undefined
      pass += str[Math.floor(Math.random() * str.length)]
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  return (
    <div className="w-full h-screen flex items-center justify-center bg-yellow-400">
      <div className="max-w-md w-full p-6 rounded-lg">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            readOnly
            placeholder="Password"
            className="flex-1 p-2 rounded-md"
            value={password}
            ref={passwordRef}
          />
          <button 
            className="bg-indigo-300 px-4 py-2 rounded-md hover:bg-indigo-400"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer flex-1"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className="min-w-[100px]">Length: {length}</label>
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label>Numbers</label>
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;