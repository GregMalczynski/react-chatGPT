import styled from "styled-components";
import { useEffect, useState } from "react";

const Translate = ({...args}) => {

    const {showResult, setInputValue, inputValue, result, backToMenu, name, header} = args;

    console.log('length' + result.length)
    return(
        <Wrapper>
            <Header>
                <h1>{header.title}</h1>
                <h3 style={{fontWeight: '400'}}>{header.description}</h3>
            </Header>
            <Conversation>
            {result.slice().reverse().map((item, index) => {
                return <div key={index}>
                        <Section><Log><img src="./cloud-1.svg" /><p>{name}: </p></Log><Text><p>{item?.input}</p></Text></Section>
                        <Section><Log><img src="./cloud-2.svg" /><p style={{color: '#F9CBB4'}}>AI: </p></Log><Text><p style={{color: '#F9CBB4'}}>{item?.response}</p></Text></Section>
                        <br />
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
    max-width: 850px;
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
      }
    ::-webkit-scrollbar-track {
        background: #3F0A3F; 
      }
    ::-webkit-scrollbar-thumb {
        background: #8FC964; 
        border-radius: 5px;
      }
`
const Section = styled.div`
    display: flex;
    flex-direction: row;
`
const Log = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    img{
        width: 22px;
    }
    
    p{
        width: 80px;
    }
`
const Text = styled.div`
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
        cursor: pointer;
        transition: 0.2s;
    }
    button:hover {
        background: #F9CBB4;
    }
`
const ButtonBack = styled(ButtonAsk)`

button{
    border: 1px solid #8FC964;
    background: none;
    color: #8FC964;
    font-size: 18px;
    align-text: center;
}
button:hover {
    background: none;
    color: #F9CBB4;
}
`