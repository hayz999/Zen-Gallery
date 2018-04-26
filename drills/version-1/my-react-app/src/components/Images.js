import React, {Component} from 'react'
import {
  Card,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'

class Images extends Component {
  render() {
    const photos = this.props.photos.map(photo => {
      return (
        <Card className='newStyle'
              key={photo.id} >
          <div>
            <CardMedia>
              <a target='_blank' href={photo.url}><img src={photo.src.small} alt=''/></a>
            </CardMedia>
            <CardTitle title="Artist Name: "/>
            <CardText>
              {photo.photographer}
            </CardText>
          </div>
        </Card>
      )
    })

    return (
      <div id='image-container'>
        {photos}
      </div>
    )
  }
}

export default Images
