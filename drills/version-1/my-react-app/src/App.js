import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from "./components/Header"
import Images from "./components/Images"
import Footer from "./components/Footer"
import './App.css'


const photoAPI = 'https://api.pexels.com/v1/search?query='
const searchParams = '&per_page=24&page=1'

const quoteApi = 'https://favqs.com/api/qotd'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      searchQuery: '',
      quoteData: [],
      isHidden: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeHidden = this.removeHidden.bind(this)
    this.toggleHidden = this.toggleHidden.bind(this)
  };

  componentDidMount () {
    this.getNewPhotos()
    this.getQuotes()
  }

  getQuotes () {
    fetch(quoteApi)
    .then(response => response.json())
    .then(response => {
      this.setState({
        quoteData: response.quote
      })
    })
  }

  getNewPhotos () {
    fetch(photoAPI + this.state.searchQuery + searchParams, {
      headers: {
        Authorization: "563492ad6f91700001000001ee9b54441ecd4556b7d9a1c7824f2de8"
      }
    })
    .then(response => response.json())
    .then(response =>  {
      this.setState({
        data: response.photos
      })
    })
  }

  handleChange (event) {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      searchQuery: this.state.searchQuery
    })
    this.getNewPhotos()
  }

  removeHidden () {
    if(this.state.isHidden){
      return "hidden"
    } else {
      return ""
    }
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div>

        <MuiThemeProvider >
          <Header searchQuery={this.state.searchQuery}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  quoteData={this.state.quoteData}
                  toggleHidden={this.toggleHidden}
                  removeHidden={this.removeHidden} />
        </MuiThemeProvider>

        <MuiThemeProvider >
          <Images photos={this.state.data}/>
        </MuiThemeProvider>

        <MuiThemeProvider >
          <Footer />
        </MuiThemeProvider>

      </div>
    )
  }
}

export default App
