import styled from "styled-components";

export const CardItem = styled.div`
  width: 25%;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid transparent;
  cursor: pointer;

  :hover {
    border: 1px solid #000;
  }
`;

export const CardThumb = styled.div`
  img {
    width: 100%;
  }
`;

export const CardTitle = styled.p`
  position: relative;
  padding: 0 20px;
  height: 45px;
`;

export const CardPrice = styled.div`
  padding: 10px 0;
`;

export const CardPriceValue = styled.div``;

export const CardBtn = styled.div`
  background-color: ${(props) => (props.outlined ? "#fff" : "#1b1a20")};
  color: ${(props) => (props.outlined ? "#1b1a20" : "#fff")};
  padding: 15px 0;
  margin-top: 10px;
  cursor: pointer;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
  border: ${(props) => (props.outlined ? "2px solid #000" : "none")};

  :hover {
    background-color: #eabf00;
  }
`;
