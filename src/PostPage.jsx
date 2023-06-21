import React, { useState } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';

const PostPage = () => {

  const [posts, setPosts] = useState([
    {
        id: 1,
        title: "My First Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
      },
      {
        id: 2,
        title: "My 2nd Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
      },
      {
        id: 3,
        title: "My 3rd Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
      },
      {
        id: 4,
        title: "My Fourth Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
      }
  ]);

  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id); {/*can also use post.id == id with a non strict equals*/}
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id)
    setPosts(postsList)
    navigate('/');
  };

  

    return (
      <main className='PostPage'>  
        <article className='post'>
          {post && 
            <>
              <h2>{post.title}</h2>
              <p className='postDate'>{post.datetime}</p>
              <p className='postBody'>{post.body}</p>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </>
          }
          {!post && 
            <>
              <h2>Post Not Found</h2>
              <p>Well, that's disappointing.</p>
              <p>
                <Link to="/">Visit Our Homepage</Link>
              </p>
            </>
          }
        </article>
      </main>
    )
};

export default PostPage;