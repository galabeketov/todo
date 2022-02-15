import styled from "styled-components";

const TodoWrapper = styled.div`
  z-index: 999;
  .todo {
    margin: 0 auto;
    width: 100%;
    /* background-color: white; */
  }
  h1 {
    font-size: 60px;
    font-weight: 900;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      font-size: 20px;
      list-style-type: none;
      margin: 0;
      padding: 0;
      background-color: white;
    }
  }
  .throw {
    text-decoration: line-through !important;
  }
`;

export default TodoWrapper;
