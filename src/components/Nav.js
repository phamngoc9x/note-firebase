import React, { Component } from 'react'
import { connect } from 'react-redux';

class Nav extends Component {
  handleAdd = (event) => {
    event.preventDefault();
    this.props.changeEditStatus();
    this.props.changeAddStatus();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Note app</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick = {(event) => this.handleAdd(event) } href="/">Thêm ghi chú</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({type:"CHANGE_EDIT_STATUS"})
    },
    changeAddStatus: () => {
      dispatch({type:"CHANGE_ADD_STATUS"})
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
