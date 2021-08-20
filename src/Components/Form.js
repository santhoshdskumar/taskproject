import React from "react";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

const Input = props => (
  <div className="form">
    <div className="form-group">
    <input
      className="input form-control"
      placeholder="Type your location..."
      onChange={props.onChange}
      required
    />
      <button type="submit" className="btn" onClick={props.onClick}>
      <FontAwesomeIcon className="icon" size="lg" icon={faSearch} fixedWidth />
    </button>
    </div>

  </div>
);

export default Input;