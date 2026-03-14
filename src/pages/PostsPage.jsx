import {useEffect, useState} from "react";
import {Link} from "react-router";

function PostsPage() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data.posts))
    }, [])

    return (
        <div>
            <h1>Posts</h1>

            {posts.map((post) => (
                <div key={post.id}>
                    <Link to={"/posts/" + post.id}><h3>{post.title}</h3></Link>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export {PostsPage}