var DATA = {
  myName: 'Meredith Dalenburg',
  imgURL: 'http://lorempixel.com/g/200/200',
  hobbyList: ['food & wine', 'working out', 'reading', 'swimming']
}

var App = React.createClass({
  render: function() {
    return(
      <div className="app-box">
        <h1>This is My React App.</h1>
        <Profile
          myName={this.props.profileData.myName}
          imgURL={this.props.profileData.imgURL} />
        <Hobbies
          hobbyList={this.props.profileData.hobbyList} />
      </div>
    );
  }
})

var Profile = React.createClass({
  render: function() {
    return(
      <div className="profile-info">
        <h2>My Profile</h2>
        <h3>My name is</h3>
        <h4>{this.props.myName}</h4>
        <img src={this.props.imgURL} alt="Sample Picture" />
      </div>
    );
  }
})

var Hobbies = React.createClass({
  render: function() {
    var hobbies = this.props.hobbyList.map(function(hobby, index){
      return (<li key={index}>{hobby}</li>);
    });
    return(
      <div className="hobbies-info">
        <h2>My Hobbies</h2>
        <h3>I have {this.props.hobbyList.length} hobbies</h3>
        <h4>Check them out:</h4>
        <ul>
          {hobbies}
        </ul>
      </div>
    );
  }
})
ReactDOM.render(
  <App profileData={DATA} />, document.getElementById('content')
);
