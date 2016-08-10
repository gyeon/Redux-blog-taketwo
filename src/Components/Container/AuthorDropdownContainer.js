import { connect } from 'react-redux';
import AuthorDropdown from '../Presentational/AuthorDropdown.js';
import Author from '../Presentational/Author.js';

const mapStateToProps = (state, ownProps) {
  return {
    authorsList: state.getState().authors.map(author => {
      return <Author name={author.name} id={author.id} key={author.id} />
      //this is what you do to the state to filter it and set it to key of authorsList
    })
  }
}

//review ownProps?
const mapDispatchToProps = (dispatch, ownProps) {

}

const AuthorDropdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps //props that are actions
)(AuthorDropdown) //props that are data

export default AuthorDropwdownContainer;
