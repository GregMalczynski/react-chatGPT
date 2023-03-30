import { useEffect, useState, useRef } from 'react';
import Main from "./components/Main";
import Welcome from './components/Welcome';

const App = () => {

  const validParms = {
    minLength: 4,
    maxLength: 12,
  }

  const firstRender = useRef(true);

  const [ name, setName ] = useState('');
  const [ error, setError ] = useState('');
  const [ isValid, setIsValid ] = useState(false);
  const [ nextPage, setNextPage ] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    setName(value);
  }

  useEffect(() => {
    if ( firstRender.current ) {
      setError('')
        if ( name.length > 0 ) {
          firstRender.current = false;
        }   
    } else {
      if ( !name || name === '' ) {
        setError('Input cannot be empty');
      } else {
        if ( name.length < validParms.minLength || name.length > validParms.maxLength ) {
          setError('Name length should be between (4-12) characters');
          setIsValid(false);
        } else {
          setError('');
          setIsValid(true);
        }
      }
    }
  }, [name])

  const validCheck = () => {
    if ( isValid ) {
      setNextPage(true);
    } 
    return;
  }

return(
    <div>
      { nextPage ? 
      <Main name={name}/> :
      <Welcome handleChange={handleChange} error={error} validCheck={validCheck} />
    }
    </div>
  )
}

export default App;