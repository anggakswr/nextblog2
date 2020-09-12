import Link from "next/link";
import Nav from "../components/nav";

export default function Home({ posts }) {
  return (
    <>
      <Nav />
      <h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  // fetch api
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
