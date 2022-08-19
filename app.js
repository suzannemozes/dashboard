
class Sidebar extends React.Component {
  render() {
      return (
          <div className="sidebar">
                  <li>Dashboard</li>
                  <br></br>
                  <li>Widget</li>
                  <br></br>
                  <li>Reviews</li>
                  <br></br>
                  <li>Customers</li>
                  <br></br>
                  <li>Online Analysis</li>
                  <br></br>
                  <li>Settings</li>
          </div>
      )
  }
}

class Reviews extends React.Component {
  render() {
      return (
          <div className="reviews">
              Reviews
              <h3>1,281</h3>
          </div>
      )
  }
}

class AvgRating extends React.Component {
  render() {
      return (
          <div className="avgrating">
              Average Rating
              <h3>4.6</h3>
          </div>
      )
  }
}

class SentAn extends React.Component {
  render() {
      return (
          <div className="sentan">
              Sentiment Analysis
             
                  <h3>960</h3>
                  <h3>122</h3>
                  <h3>321</h3>
        
          </div>
      )
  }
}

class WebVisitors extends React.Component {
  render() {
      return (
          <div className="webVisitors">
              <h3>Website Visitors</h3>
              <p>821</p>
              <div className="subweb"></div>
          </div>
      )
  }
}

class Stats extends React.Component {
  render() {
      return (
          <div className="stats">
              <Reviews />
              <AvgRating />
              <SentAn />
          </div>
      )
  }
}

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Stats />
                <WebVisitors />
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Sidebar />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.querySelector('.main')
)