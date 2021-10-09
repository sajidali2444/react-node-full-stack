import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {Route, Switch, Link} from 'react-router-dom'
import Home from './Home'
import About from './about'
import Contact from './contact'
import Register from './register'
import Comments from './Comments'
import Post from './posts'

const theme = createTheme()
function App() {
  return (
    <div style={{display: 'flex', height: '100vh', alignItems: 'stretch'}}>
      <div style={{width: 200, backgroundColor: '#f2f2f2'}}>
        <ul>
          <li>
            <Link to="/">Post</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">Signup</Link>
          </li>
        </ul>
      </div>
      <div id="content-area">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/register" exact component={Register} />
          {/*route param/query param/query pamameter/route data/query data */}
          <Route path="/comments/:postId/:name" exact component={Comments} />
        </Switch>
      </div>
    </div>
  )
  {
    /*<ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={4}>
            {posts.map(post => (
              <Post key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
            </ThemeProvider>*/
  }
}

export default App
