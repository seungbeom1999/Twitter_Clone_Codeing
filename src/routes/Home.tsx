import { auth } from "../Firebase";
import { Wrapper } from "../component/AuthComponents";
import PostTweetForm from "../component/PostTweetForm";

function Home() {
  const logOut = () => {
    auth.signOut();
  };
  return (
    <>
      <Wrapper>
        <PostTweetForm />
      </Wrapper>
      <h1>
        <button onClick={logOut}>Log Out</button>
      </h1>
    </>
  );
}

export default Home;
