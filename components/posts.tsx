import { Post } from "./post";

interface PostsProps {
    posts: typeof Post[];
}


export default function Posts({posts}: PostsProps) {
    return (
        <div>
            {posts.map(post => (<div /* key={post.call} */></div>))}
        </div>
    );
}