import { Link } from 'react-router-dom';

const PostsPage = () => {
  const first = 1;
  const second = 2;
  const three = 3;

  return (
    <div>
      <h2>Post Page</h2>
      <ul>
        <li>
          <Link to={`${first}`}>Post-1</Link>
        </li>{' '}
        {/*используем только название поста для поддомета, так кка в Layout уже прописали путь*/}
        <li>
          <Link to={`${second}`}>Post-2</Link>
        </li>
        <li>
          <Link to={`${three}`}>Post-3</Link>
        </li>
      </ul>
    </div>
  );
};

export default PostsPage;
