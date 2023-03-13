import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Main from "./components/Main";
import Welcome from './components/Welcome';

const App = () => {

  const validParms = {
    minLength: 3,
    maxLength: 12,
  }

  const [ name, setName ] = useState('');
  const [ error, setError ] = useState('');
  const [ isValid, setIsValid ] = useState(false)
  const [ nextPage, setNextPage ] = useState(false)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  useEffect(() => {
    if ( !name || name == '' ) {
      setError('Cant be empty')
    } else {
      if ( name.length < validParms.minLength || name.length > validParms.maxLength ) {
        setError('wrong length')
        setIsValid(false)
      } else {
        setError('')
        setIsValid(true)
      }
    }
  }, [name])

  const validCheck = () => {
    if ( isValid ) {
      setNextPage(true)
    } 
    return
  }

  console.log(name)

return(
    <div>
      { nextPage ? 
      <Main name={name}/> :
      <Welcome handleChange={handleChange} error={error} validCheck={validCheck}/>
    }
    </div>
  )
}

export default App;