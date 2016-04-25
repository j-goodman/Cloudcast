var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var TrackStore = require('../../stores/track.js');

var CommentForm = React.createClass({

  getInitialState: function () {
    return {body: ""}
  },

  updateBody: function (e) {
    this.setState({body: e.currentTarget.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    document.getElementById("textarea").value = "";

    ApiUtil.createComment({ comment: {
      body: this.state.body,
      seconds: this.props.seconds,
      track_id: this.props.track.id}
    }, (function (id) {
      ApiUtil.fetchSingleTrack(this.props.track.id);
    }.bind(this))

  );

    this.setState({body: ""});
  },

  render: function () {
    return(
      <form className="comment-form-wrapper" onSubmit={this.handleSubmit}>
        <textarea className="comment-form-textarea" id="textarea" placeholder="Leave a comment" onChange={this.updateBody}></textarea>
        <input className="comment-submit-button" type="submit" value="Comment" />
      </form>
    );
  }

});

module.exports = CommentForm;
