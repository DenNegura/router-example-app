import {useParams} from "react-router";
import {useEffect, useState} from "react";

function PostPage() {
    const {id} = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/posts/" + id)
            .then((res) => res.json())
            .then(setPost)
    }, [])
    return (
        <div>
            {post ?
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div> :
                <h1>Loading...</h1>
            }
        </div>
    )
}

export {PostPage}