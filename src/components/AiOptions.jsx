import { aiOptionsData } from "../data/aiOptionsData";
import styled from "styled-components";

const AiOptions = ({selectOption}) => {

    return(
        <Wrapper>
            {aiOptionsData.map((item, index) =>
                <Content key={index} onClick={() => selectOption(item.option, item.name, item.description)}><h3>{item.name}</h3><Description><div>{item.description}</div></Description></Content>
            )}
  
        </Wrapper>
    )
}
  
export default AiOptions;

const Wrapper = styled.div`
    max-width: 580px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background: none;
    gap: 20px;

    @media (max-width: 756px) {
        margin-left: 15px;
        width: 100%;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`
const Content = styled.div`
    width: 280px;
    height: 110px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    h3{
        margin-top: 12px;
        font-size: 20px;
        font-weight: 400;
    }
`
const Description = styled.div`
    display: flex;
    div{
        width: 280px;
        height: 55px;
        display: flex;
        padding: 10px;
        justify-content: center;
        align-items: center;
        background: #F9CBB4;
        color: #3F0A3F;
        font-weight: 400;
        transform: translateY(54px);
        transition: 0.3s ease-in;
    }
    div:hover {
        transform: translateY(12px);
    }
`