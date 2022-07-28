import { useEffect, useState } from "react";
import { useWeb3 } from "./useWeb3";
import Styled from "styled-components";

export const Election = () => {
  const { candidates, vote } = useWeb3();
  const [list, setList] = useState<any>([]);

  const retrieveCandidates = async () => {
    const response: any = await candidates();
    setList(response);
  };

  const displayCandidates = () => {
    return list.map((candidate: any, index: number) => {
      return (
        <Div key={index} onClick={() => vote(index + 1)}>
          <Text>{candidate.name}</Text>
          <Text>{candidate.votes}</Text>
        </Div>
      );
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      retrieveCandidates();
    }, 1000 * 5); // in milliseconds
    return () => clearInterval(intervalId);
  }, [list]);

  return (
    <Wrapper>
      <Title onClick={() => console.log(list)}>Election 2022</Title>
      {displayCandidates()}
    </Wrapper>
  );
};

const Wrapper = Styled.div`
  background-color: orange;
  padding: 1%;
`;

const Title = Styled.h1`
  text-align: center;
`;

const Div = Styled.div`
  color: red;
  border: 1px solid black;
  padding: 1%;
  margin: 0 auto;
  width: 15%;
  margin-top: 30px;
  cursor: pointer;
  transition: 0.4s;
  background-color: white;
  &:hover {
    transition: 0.4s;
  }
`;

const Text = Styled.p`
  text-aign: center;
`;
