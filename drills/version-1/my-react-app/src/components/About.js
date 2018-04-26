import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

const style = {
  height: 'inherit',
  width: 'inherit',
  margin: 40,
  padding: 10,
  textAlign: 'center',
  display: 'inline-block',
}

class About extends Component {
  render() {
    return (
      <section className={this.props.removeHidden()}>
        <Paper style={style} zDepth={1}>
          <h3>About Zen Gallery</h3>
          <p>Life can be very stressful, and these days that is increasingly true.  It is often hard to take a step back or take a moment to relax.  Equally hard to accomplish is to take a moment to appreciate beauty in this life. Zen Gallery aims to provide quick access to a few seconds of relaxation.  It imports pictures from Pexel (a stock photo site) as well as a daily quote to provide inspriation. We are a very visual species that appreciates beauty.  Hopefully the beauty of the images here can bring you a little peace of mind. </p>
        </Paper>
      </section>
    )
  }
}

export default About
