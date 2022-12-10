import BaseLayout from '../components/base_layout';
import { Post, LikeState } from '../components/post';

export default function Home() {
  const defaultPostProps = {
    id: -1,
    title: "Post Title",
    text: "Post Text",
    link: "Link",
    linkText: null,
    authorInfo: {
      authorName: "Author Name",
      authorId: -1
    },
    buttonsInfo: {
      postId: -1,
      likes: 30,
      dislikes: 2,
      likeState: LikeState.Liked
    }
  };

  return (
    <BaseLayout activeIndex={-1}> 
      <Post {...defaultPostProps}></Post>
    </BaseLayout>
  )
}
