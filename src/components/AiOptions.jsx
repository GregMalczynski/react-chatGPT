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
    max-width: 700px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: none;
    gap: 20px;
`
const Content = styled.div`
    width: 340px;
    height: 140px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    h3{
        margin-top: 16px;
        font-size: 24px;
        font-weight: 400;
    }
`
const Description = styled.div`
    display: flex;
    div{
        width: 340px;
        height: 70px;
        display: flex;
        padding: 10px;
        justify-content: center;
        align-items: center;
        background: #8FC964;
        color: #3F0A3F;
        font-weight: 400;
        transform: translateY(65px);
        transition: 0.3s ease-in;
    }
    div:hover {
        transform: translateY(16px);
    }
`