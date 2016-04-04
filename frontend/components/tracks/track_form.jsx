var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var SessionStore = require('../../stores/session.js');
var TrackIndex = require('./index.jsx');

var Link = require('react-router').Link;

var TrackForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      title: '',
      file_url: 'django.wav',
      image_url: '',
      description: '',
  	};
  },

  render: function () {
    return(
        <div className='modal-wrapper'>
        <TrackIndex />
        <div className='modal-dimmer' />
        <main className='track-form-main group'>
          <h2 className='track-form-header'>Upload to Cloudcast</h2>
          <input className="track-submit-button" type="submit" value="Choose a file to upload" />
          <form className='track-info-main'
            onSubmit={this.handleSubmit}>
            <div className='image-upload'>
              <input className="image-upload-button" type="button" value="📷     Upload an image" />
            </div>

            <div className='track-info-box'>
              <label>
                Title * <br />
                <input
                  className="track-title-input"
                  onChange={this.updateTitle}
                  type="text"
                  placeholder='Name your track'
                  defaultValue={this.state.title}
                />
              </label> <br />
              <label>
                Tags <br />
                <input
                  className="track-tags-input"
                  onChange={this.updateTags}
                  type="text"
                  placeholder='Add tags to help people find your podcast'
                  defaultValue={this.state.tags}
                />
              </label>
              <label>
                Description <br />
                <textarea
                  className="track-description-input"
                  onChange={this.updateDescription}
                  type="text"
                  placeholder='Describe your podcast'
                  defaultValue={this.state.description}
                />
              </label>
            <br />
            </div>

            <div className='track-form-footer'>
              <span className='footer-text'> * Required field </span>
              <span className='track-form-buttons'>
                <Link to={'/'} className='track-cancel-button'>Cancel</Link>
                <input className="track-save-button" type="submit" value="Save" />
              </span>
            </div>
          </form>
        </main>
      </div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var router = this.context.router;

    ApiUtil.createTrack(this.state, function() {
      router.push('/#');
    });
  },

  updateTitle: function(e) {
    this.setState({ title: e.currentTarget.value });
  },

  updateDescription: function(e) {
    this.setState({ description: e.currentTarget.value });
  },

  updateTags: function(e) {
    this.setState({ tag: e.currentTarget.value });
  }
});

module.exports = TrackForm;
