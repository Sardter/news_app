
import Link from "next/link";
import {AuthorProps, AuthorInfo} from "./authorInfo"
import Card from "./card_layout";
import styles from "../styles/Post.module.css"
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { IconContext } from "react-icons";

interface PostProps {
    id: number;
    title: string;
    authorInfo: AuthorProps;
    text: string;
    link: string | null;
    linkText: string | null;
    buttonsInfo: PostButtonProps;
}

function Post({title, authorInfo, text, link, linkText, buttonsInfo}: PostProps) {
    const linkElement = () => {
        if (link !== null) {
            return <Link href={link}>{linkText !== null ? linkText : link}</Link>
        }
        return null;
    }

    return (
        <Card nonBodyChildren={null}>
            <h5 className={"card-title" + styles.post_title}><Link href={"#"}>{title}</Link></h5>
            <h6 className="card-subtitle mb-2 text-muted"><AuthorInfo {...authorInfo}></AuthorInfo></h6>
            <p className="card-text">{text}</p>
            {linkElement()}
            <PostButtons {...buttonsInfo}></PostButtons>
        </Card>
    );
}

enum LikeState {
    Default,
    Liked,
    Disliked
};

interface PostButtonProps {
    postId: number;
    likes: number;
    dislikes: number;
    likeState: LikeState;
}

function PostButtons({postId, likes, dislikes, likeState}: PostButtonProps) {
    const upColor = () => {
        return likeState === LikeState.Liked ? "white" : "grey";
    }

    const downColor = () => {
        return likeState === LikeState.Disliked ? "white" : "grey";
    }

    const likesIndicatorStyle = {
        paddingLeft: "10px",
        paddingRight: "10px"
    };

    return (
        <div>
            <IconContext.Provider value={{ color: upColor() , size: "1.5em"}}>
                <FaAngleUp/>
            </IconContext.Provider>
            <span style={likesIndicatorStyle}>
                {likes}
            </span>
            <IconContext.Provider value={{ color: downColor() , size: "1.5em"}}>
                <FaAngleDown/>
            </IconContext.Provider>
            <span style={likesIndicatorStyle}>
                {dislikes}
            </span>
        </div>
    );
}

export {
    Post, PostButtons, LikeState
}