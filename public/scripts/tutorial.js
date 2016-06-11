var App = React.createClass({
  render: function() {
    return(
      <div className="app-box">
        <h1>This is My React App.</h1>
        <Profile />
        <Hobbies />
      </div>
    );
  }
})

var Profile = React.createClass({
  render: function() {
    return(
      <div className="profile-info">
        <h2>This is the Profile Component</h2>
        <h3>Mary</h3>
        <h4>hi :)</h4>
      </div>
    );
  }
})

var Hobbies = React.createClass({
  render: function() {
    return(
      <div className="hobbies-info">
        <h2>This is the Hobbies Component</h2>
        <h3>I have 3 hobbies</h3>
        <h4>Check them out</h4>
        <ul>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
        </ul>
      </div>
    );
  }
})
ReactDOM.render(
  <App />, document.getElementById('content')
);
