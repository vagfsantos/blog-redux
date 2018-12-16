import React, { Component } from "react";
import PropTypes from "prop-types";

const DESC = "DESC";
const ASC = "ASC";

class Filters extends Component {
  static propTypes = {
    filterPostsBy: PropTypes.func.isRequired
  };

  static defaultProps = {
    filterPostsBy: () => {}
  };

  state = {
    date: DESC,
    votes: DESC
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
    const { date, votes } = this.state;

    const dateIcon =
      date === DESC ? "fa-sort-amount-up" : "fa-sort-amount-down";
    const voteIcon =
      votes === DESC ? "fa-sort-numeric-up" : "fa-sort-numeric-down";

    return (
      <div>
        <div className="is-pulled-right">
          <a onClick={event => this.handleToggle(event, "votes")}>
            <span className="icon is-large">
              <i className={`fas fa-lg ${voteIcon}`} />
            </span>
            by vote
          </a>
          <a onClick={event => this.handleToggle(event, "date")}>
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
