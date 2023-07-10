import { useState, useEffect } from "react";
import "./App.css";

const withApiData = (WrappedComponent) => {
  return () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.log("Error fetching data desde API:", error);
        }
      };

      fetchData();
    }, []);

    return <WrappedComponent data={data} />;
  };
};

const PostList = ({ data }) => {
  return (
    <div>
      <h2>Lista de Posts</h2>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

const PostsWithApiData = withApiData(PostList);

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PostsWithApiData />
    </>
  );
}
