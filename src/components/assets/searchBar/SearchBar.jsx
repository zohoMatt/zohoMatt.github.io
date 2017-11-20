/**
 * Created by Zoho on 16/9/6.
 */
import PropTypes from 'prop-types';

/**
 * @description
 * Searching bar for any circumstances, with an event dispatcher while input.
 *
 * @param placeHolder       {string}        The `placeholder` attribute.
 * @param onInputHandler    {function}      Trigger event.
 */
const SearchBar = ({ placeHolder, onInputHandler }) => (
  <div className="search-bar">
    <input
      placeholder={placeHolder}
      type="text"
      className="search-input"
      onInput={onInputHandler}
    />
    <div className="search-btn fa fa-search" />
  </div>
);

SearchBar.propTypes = {
  placeHolder: PropTypes.string,
  onInputHandler: PropTypes.func,
};

export default SearchBar;

