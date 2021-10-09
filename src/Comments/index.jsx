import * as React from 'react'
// get understanding of props types
//import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import {useParams} from 'react-router-dom'

function Comments(props) {
  console.log('user params=>', useParams())
  let {postId, name} = useParams()
  console.log(props.match)
  //let {postId} = params
  //let query = window.location.pathname
  //console.log('query => ', query.split('/')[2])

  //console.log('props => ', postId)
  //const foo = params.get('bar')

  const [comments, setComments] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  const getCommentsByPostId = async postId => {
    setIsLoading(true)
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    )
    const result = await response.json()
    if (result !== undefined) {
      setComments(result)
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    console.log('Use Effect method')
    getCommentsByPostId(postId)
  }, [postId])
  console.log(comments)

  return (
    <Grid item>
      <CardActionArea component="a" href="#">
        <Card>
          <CardContent>
            <Typography component="h2" variant="h5">
              {'post title here'}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {'post conent here'}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
      <div>
        {isLoading ? <h1>Loading comments</h1> : ''}
        {comments.length > 0 ? (
          <Paper elevation={0} sx={{p: 2, bgcolor: 'grey.200'}}>
            {comments.map(item => (
              <>
                <Typography variant="h6" gutterBottom>
                  {item.name}: {item.email}
                </Typography>
                <small>{item.body}</small>
              </>
            ))}
          </Paper>
        ) : (
          ''
        )}
      </div>
    </Grid>
  )
}

export default Comments
