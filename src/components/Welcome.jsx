import styled from "styled-components";

const Welcome = ({handleChange, error, validCheck}) => {

    return(
        <Wrapper>
            <Content>
                <img src='./ai_logo.svg' />
                <p>Hey,</p>
                <h2>Enter Your Name</h2>
                <input type='text' onChange={handleChange}/>
                <p>{error}</p>
                <button onClick={validCheck}>Let's talk with AI</button>
            </Content>
        </Wrapper>
    )
}

export default Welcome;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    h2{
        font-weight: 400;
    }
    input {
        padding 10px;
        border-radius: 20px;
        font-size: 20px;
        border: 1px solid #8FC964;
        width: 100%;
    }
    input:focus {
        outline: none ;
        border: 1px solid #8FC964;
        box-shadow: none;
      }
    button {
        width: 100%;
        height: 40px;
        border-radius: 20px;
        border: none;
        font-size: 18px;
        background: #8FC964;
        color: #3F0A3F;
        cursor: pointer;
    }
    img {
        width: 150px;
        margin-bottom: 40px;
    }
`