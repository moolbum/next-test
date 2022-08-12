import styled from 'styled-components';

const itemList = Array.from({ length: 10 });

const Io = () => {
  return (
    <IoContainer>
      {itemList.map((_, idx) => {
        return <Wrap key={idx} />;
      })}
    </IoContainer>
  );
};

export default Io;

const IoContainer = styled.main`
  text-align: center;
`;

const Wrap = styled.div`
  margin: 20rem auto;
  width: 20rem;
  height: 20rem;
  background: tomato;
  border-radius: 2rem;

  p {
    font-size: 1.6rem;
  }
`;
