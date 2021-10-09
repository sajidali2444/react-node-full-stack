import React from 'react'
import Grid from '@mui/material/Grid'
import Post from './posts'

const Home = () => {
  const [posts, setPosts] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  const fetchPosts = async () => {
    setIsLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await response.json()
    if (result !== undefined) {
      setPosts(result.slice(0, 10))
      setIsLoading(false)
    }
  }
  React.useEffect(() => {
    fetchPosts()
  }, [])
  return posts.map(post => <Post key={post.title} post={post} />)
}
export default Home
