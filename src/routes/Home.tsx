import styled from "styled-components";
import PostTweetForm from "../component/PostTweetForm";
import TimeLine from "../component/TimeLine";

function Home() {
  return (
    <>
      <Wrapper>
        <PostTweetForm />
        <TimeLine />
      </Wrapper>
    </>
  );
}

export default Home;

export const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  grid-template-rows: 1fr 5fr;
`;
