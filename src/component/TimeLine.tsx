import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../Firebase";
import Tweet from "./Tweet";
import { Unsubscribe } from "firebase/auth";

export interface ITweet {
  id: string;
  photo: string;
  tweets: string;
  userId: string;
  userName: string;
  createdAt: number;
}

export default function TimeLine() {
  const [tweets, setTweets] = useState<ITweet[]>([]);

  useEffect(() => {
    let unSubscribe: Unsubscribe | null = null;
    const fetchTweets = async () => {
      const tweetsQuery = query(
        collection(db, "tweets"),
        orderBy("createdAt", "desc"),
        limit(25)
      );
      // const spanshot = await getDocs(tweetsQuery);
      // const tweets = spanshot.docs.map((doc) => {
      //   const { tweets, createdAt, userId, userName, photo } = doc.data();
      //   return {
      //     tweets,
      //     createdAt,
      //     userId,
      //     userName,
      //     photo,
      //     id: doc.id,
      //   };
      // });
      unSubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          const { tweets, createdAt, userId, userName, photo } = doc.data();
          return {
            tweets,
            createdAt,
            userId,
            userName,
            photo,
            id: doc.id,
          };
        });
        setTweets(tweets);
      });
    };
    fetchTweets();
    return () => {
      unSubscribe && unSubscribe();
    };
  }, []);

  return (
    <Wrapper>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
