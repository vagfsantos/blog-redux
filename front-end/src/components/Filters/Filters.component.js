import React, { Component } from "react";
import PropTypes from "prop-types";
import { ORDER_BY, FILTER_TYPES } from "./Filters.enum";

const { DESC, ASC } = ORDER_BY;
const { DATE, VOTES } = FILTER_TYPES;

class Filters extends Component {
  static propTypes = {
    filterPostsBy: PropTypes.func.isRequired
  };

  static defaultProps = {
    filterPostsBy: () => {}
  };

  state = {
    [DATE]: DESC,
    [VOTES]: DESC
  };

  handleToggle(event, prop) {
    event.preventDefault();

    this.setState(
      {
        [prop]: this.state[prop] === DESC ? ASC : DESC
      },
      () => {
        this.props.filterPostsBy(prop, this.state[prop]);
      }
    );
  }

  render() {
    const dateIcon =
      this.state[DATE] === DESC ? "fa-sort-amount-up" : "fa-sort-amount-down";
    const voteIcon =
      this.state[VOTES] === DESC
        ? "fa-sort-numeric-up"
        : "fa-sort-numeric-down";

    return (
      <div>
        <div className="is-pulled-right">
          Filter
          <a onClick={event => this.handleToggle(event, VOTES)}>
            <span className="icon is-large">
              <i className={`fas fa-lg ${voteIcon}`} />
            </span>
            by vote
          </a>
          <a onClick={event => this.handleToggle(event, DATE)}>
            <span className="icon is-large">
              <i className={`fas fa-lg ${dateIcon}`} />
            </span>
            by date
          </a>
        </div>
        <div className="is-clearfix" />
      </div>
    );
  }
}

export default Filters;
