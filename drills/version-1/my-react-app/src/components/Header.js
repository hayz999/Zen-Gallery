import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import About from "./About"

const style = {
  margin: 12
}

class Header extends Component {
  render() {
    return (
      <div id="search-bar">
        <img src='./pexels-photo-301614.jpeg'
             className='hero-img'
             alt='hero-img'/>
        <h1>Zen Gallery</h1>
        <FlatButton label="About"
                    onClick={this.props.toggleHidden}/>
        <About removeHidden={this.props.removeHidden}/>
        <h4>"{this.props.quoteData.body}"</h4>
        <h5>-{this.props.quoteData.author}</h5>

        <TextField hintText="Search"
                   floatingLabelText="Image Search"
                   name="searchQuery"
                   value={this.props.searchQuery}
                   onChange={this.props.handleChange}/><br/>
        <RaisedButton label="Search"
                      primary={true}
                      style={style}
                      onClick={this.props.handleSubmit}/>
      </div>
    )
  }
}

export default Header
