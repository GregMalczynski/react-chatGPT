import styled from "styled-components"

const Translate = ({showResult, setInputValue, inputValue, result, backToMenu, name, header}) => {

    console.log(result)

    return(
        <Wrapper>
            <Header>
                <h1>{header.title}</h1>
                <p>{header.description}</p>
            </Header>
            <Conversation>
            {result.map((item, index) => {
                return <div key={index}>
                        <p>{name}: {item?.input}</p>
                        <p>Bot: {item?.response}</p>
                </div> 
            })}
            </Conversation>
            <Bottom>
                <textarea cols={80} rows={2} placeholder='...'  value={inputValue} onChange={(e) => setInputValue(e.target.value)}></textarea>
                <ButtonAsk>
                    <button onClick={showResult}>Ask AI</button>
                </ButtonAsk>
                <ButtonBack>
                    <button onClick={backToMenu}>Back to the Menu</button>
                </ButtonBack>
            </Bottom>
        </Wrapper>
    )
}
  
export default Translate;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`
const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`
const Conversation = styled.div`
    height: 70vh;
    min-width: 320px;
    max-width: 800px;
    display: flex;
    flex-direction: column;

`
const Bottom = styled.div`
    height: 30vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    textarea{
        resize: none;
        border: none;
        font-size: 18px;
        background: #2b052b;
        border-radius: 20px;
        padding: 12px;
    }
    textarea:focus {
        outline: none ;
        border: none;
        box-shadow: none;
      }
`
const ButtonAsk = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        width: 50%;
        height: 40px;
        border-radius: 20px;
        background: #8FC964;
        color: #3F0A3F;
        font-size: 20px;
        align-text: center;
        border: none;
    }
`
const ButtonBack = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
button{
    width: 50%;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #8FC964;
    color: #8FC964;
    font-size: 18px;
    align-text: center;
}
`