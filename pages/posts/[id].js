export default function Post({ post }) {
  return <div>{post.title}</div>;
}

export async function getStaticProps({ params }) {
  // fetch api
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return { props: { post } };
}

export async function getStaticPaths() {
  // fetch api
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}
