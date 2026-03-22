import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router";
import {PostsFilter} from "../components/PostsFilter.jsx";

function PostsPage() {

    const [posts, setPosts] = useState([]);

    const [searchParams] = useSearchParams();

    const queryTitle = searchParams.get("post") || "";

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data.posts))
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            <PostsFilter/>

            {posts
                .filter(post => post.title
                    .toLowerCase()
                    .includes(queryTitle.toLowerCase()))
                .map((post) => (
                <div key={post.id}>
                    <Link to={"/posts/" + post.id}><h3>{post.title}</h3></Link>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default PostsPage;