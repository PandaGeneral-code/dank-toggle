import styled from "styled-components";

// import nope from "../../images/drakeNope.jpg";
// import yep from "../../images/drakeYep.jpg";

export const Slider = styled.span`
  background: ${(props) =>
    props.toggled
      ? `url(${"https://media.giphy.com/media/l1ug5sWBCJOOGzN84/giphy.gif"})`
      : `url(${"https://media.giphy.com/media/WQr2xpuQU0YeUhTlXt/giphy.gif"})`};
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 10px;
  display: inline-block;
  height: 20px;
  left: ${(props) => (props.toggled ? "28px" : "0")};
  position: absolute;
  transition: all 0.25s ease-in-out;
  width: 20px;
`;

export const ToggleLabel = styled.label`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 20px;
  justify-content: center;
  position: relative;
  transition: all 0.25s ease-in-out;
  width: 50px;

  input {
    height: 0;
    margin: 0;
    padding: 0;
    width: 0;
  }
`;

const Wrapper = styled.div``;

export default Wrapper;
