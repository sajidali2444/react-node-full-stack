import * as React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Paper from '@mui/material/Paper'
import {Button} from '@mui/material'
import {useHistory} from 'react-router-dom'

//import {useParams} from 'react-router-dom'

function Post({post}) {
  const {title, body, id} = post

  //useState use for save data in compoent or save compoent state
  //useState call rendering(repaint the component or again display update value) method on change of state/data

  const [counter, setCounter] = React.useState(0)
  let history = useHistory()
  const fetchCommentsByPostId = async postId => {
    history.push(`comments/${postId}/sajid`)
  }
  //useEffect execute on first mounting phase
  //useEffect execute on each updte of component state/data
  const useEffectCallback = () => {
    console.log('message => ')
    // fetchCommentsByPostId()
  }

  //useEffect call on mounting phase and on update phase
  // call on mounting and each update
  // React.useEffect(() => {
  //   console.log('On mount and on each update I will call myself - 1')
  // })

  // only will call on mounting phase
  React.useEffect(() => {
    console.log('On mount and on each update I will call myself - 2')
  }, [])

  // call on mounting and each dependency update
  React.useEffect(() => {
    console.log(
      'Will call on 1st mounting and will call on each dependecny change - 3',
    )
  }, [counter])

  return (
    <Grid item>
      <CardActionArea component="a" href="#">
        <Card>
          <CardContent>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {body}
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary"
              onClick={() => fetchCommentsByPostId(id)}
            >
              Comments
            </Typography>
            <Button onClick={() => setCounter(old => old + 1)}>
              Counter {counter}
            </Button>
          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{width: 160, display: {xs: 'none', sm: 'block'}}}
            image={image}
            alt={imageLabel}
          /> */}
        </Card>
      </CardActionArea>
    </Grid>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
}

export default Post
