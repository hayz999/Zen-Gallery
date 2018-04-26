import React, {Component} from 'react'
import {BottomNavigation} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'

class Footer extends Component {

  render() {
    return (
      <div>
        <Paper>
          <BottomNavigation>
            <h6>&copy; HZulkoski LLC</h6>
          </BottomNavigation>
        </Paper>
      </div>

    )
  }
}

export default Footer
