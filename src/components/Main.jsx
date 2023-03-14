import styled from "styled-components";
import { useState } from "react";
import { apiKey } from "../data/apiKey";
import AiOptions from "./AiOptions";
import Translate from "./Translate";

const Main = ({name}) => {

    const VITE_APP_API_URL = apiKey;

    const [ option, setOption ] = useState({})
    const [ inputValue, setInputValue ] = useState('')
    const [ result, setResult ] = useState([])
    const [ header, setHeader ] = useState({})
    const [ isLeftSide, setIsLeftSide ] = useState(true)

    const selectOption = (option, name, description) => {
        setHeader({title: name, description: description})
        setOption(option)
        setIsLeftSide(false)
    }

    const showResult = async () => {
        let object = {...option, prompt: inputValue}

        await fetch(
            `https://api.openai.com/v1/completions`,
            {
                body: JSON.stringify(object),
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${VITE_APP_API_URL}`,
                },
                    }
        ).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    setResult([...result, {input: inputValue, response: data.choices[0].text}]);
                    setInputValue('')
                });
            }
        });
    }

    const backToMenu = () => {
        setOption({})
        setIsLeftSide(true)
    }

    return(
        <Wrapper >
            <LeftSide isLeftSide={isLeftSide}>
                <Logo>
                    <img src="./ai_logo.svg" />
                </Logo>
                <Header>
                    <h3>Hey {name},</h3>
                    <p>Welcome in</p>
                    <h1>OpenAI</h1>
                    <p>Lets choice conversation subject with AI</p>
                </Header>
            </LeftSide>
            <RightSide imgUrl='./introducing-chatgpt-and-whisper-apis.avif'>
            {Object.values(option).length === 0 ?
                <AiOptions selectOption={selectOption} /> :
                <Translate 
                    showResult={showResult} 
                    setInputValue={setInputValue} 
                    inputValue={inputValue} 
                    result={result} 
                    backToMenu={backToMenu} 
                    name={name}
                    setIsLeftSide={setIsLeftSide}
                    header={header}
                />
            }
            </RightSide>
        </Wrapper>
    )
}
  
export default Main;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 756px) {
        flex-direction: column;
    }
`
const LeftSide = styled.div`
    width: 50%;
    height: 100vh;
    margin-left: 50px;
    display: ${(props) => props.isLeftSide ? 'flex' : 'none'};
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 20px;

    @media (max-width: 1100px) {
        margin-left: 15px;
        justify-content: center;
        align-items: center;
        height: 100vh;
        flex-direction: column;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 15px;
        flex-direction: column;
        height: 100vh;
    }
`
const Logo = styled.div`
    img{
        width: 150px;
        animation: rotation 10s infinite linear;
        background: none;
    }
    @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
`
const Header = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        font-size: 94px;
        font-weight: 900;
    }
    h3{
        font-size: 36px;
        font-weight: 400;
    }
    p{
        font-size: 20px;
        font-weight: 400;
    }
`
const RightSide = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => `url(${props.imgUrl})`};
    background-repeat: repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 756px) {
        width: 100%;
        height: 120vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`