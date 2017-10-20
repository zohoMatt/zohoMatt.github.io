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
        <input placeholder={placeHolder} type="text"
               class="search-input"
               onInput={onInputHandler}/>
        <div class="search-btn fa fa-search"></div>
    </div>
);

SearchBar.propTypes = {
    placeHolder: PropTypes.string,
    onInputHandler: PropTypes.func
};

export default SearchBar;


