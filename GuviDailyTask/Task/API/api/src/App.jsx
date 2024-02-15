import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import PostForm from './PostForm';

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  const getPosts = async () => {
    const response = await axios.get(" https://jsonplaceholder.typicode.com/users");
    setPosts(response.data);
  };

  const handleCreate = async (post) => {
    console.log("&&&&&&&&&&&& ", currentPost);
    if (currentPost) {
      await axios.put(` https://jsonplaceholder.typicode.com/users/${post.id}`, post);
    } else {
      await axios.post(" https://jsonplaceholder.typicode.com/users", post);
    }
    setCurrentPost(null);
    getPosts();
  };

  const handleCancel = () => {
    console.log("Cancelling, currentPost before reset:", currentPost);
    setCurrentPost(null);
    console.log("CurrentPost after reset attempt:", currentPost);
  }

  const handleEdit = (post) => {
    setCurrentPost(post);
  }

  const handleDelete = async (id) => {
    await axios.delete(` https://jsonplaceholder.typicode.com/users/${id}`);
    getPosts();
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <PostForm post={currentPost} handleSubmit={handleCreate} handleCancel={handleCancel} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.username}</td>
              <td>{post.email}</td>
              <td>
                <button onClick={() => { handleEdit(post) }}>Edit</button>
                <button onClick={() => { handleDelete(post.id) }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default App
