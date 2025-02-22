import React from 'react'

function App() {
  let [ password, setPassword ] = React.useState("")
  let [ passwordLength, setPasswordLength ] = React.useState(8)

  const handleLengthIncrese = (e) => {
    e.preventDefault()

    setPasswordLength(passwordLength + 1)
  }

  const handleLengthDecrease = (e) => {
    e.preventDefault()

    if (passwordLength === 8) return;

    setPasswordLength(passwordLength - 1)
  }

  const handlePasswordGenerate = React.useCallback(() => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass = ""

    for (let i=0; i<passwordLength; i++) {
      pass = pass + chars[Math.floor(Math.random() * chars.length)]
    }

    setPassword(pass)
  }, [passwordLength])

  React.useEffect(() => {
    handlePasswordGenerate()
  }, [passwordLength])

  return (
    <div className='h-screen w-screen flex items-center justify-center flex-col gap-y-5'>
      <input type="text" className='h-10 w-96 outline-none border border-slate-800 rounded-lg px-5 text-center' value={password} readOnly/>

      <div className='flex items-center justify-center gap-x-2'>
        <button className='h-10 px-5 text-xl font-bold bg-slate-700 text-slate-200 rounded-lg outline-none' onClick={handleLengthIncrese}>+</button>
        <input type="text" className='h-10 px-5 text-center outline-none border border-slate-800 rounded-lg' value={passwordLength} readOnly/>
        <button className='h-10 px-5 text-xl font-bold bg-slate-700 text-slate-200 rounded-lg outline-none' onClick={handleLengthDecrease}>-</button>
      </div>
    </div>
  )
}

export default App
