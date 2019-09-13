import React from "react";
import { connect } from "react-redux";
import { deleteArticle } from "./actions/index";

function mapDispatchToProps(dispatch) {
  return {
    deleteArticle: id => dispatch(deleteArticle(id))
  };
}
class ConnectedList extends React.Component {
  constructor(props) {
    super(props);
    
  }
  delete=(event)=>{
    console.log(event.target.id)
    this.props.deleteArticle(event.target.id);
  }
  render() {
    return <div>{<ul className="list-group list-group-flush">
    {this.props.articles.map((el,i) => (
      <li className="list-group-item" key={el.id}>
        {el.title}
        <button
          type="button"
          className="btn btn-danger"
          id={i}
          onClick={this.delete}
        >
          DELETE
        </button>
      </li>
    ))}
  </ul>}</div>;
  }
}
const mapStateToProps = state => {
  console.log(state.articles);
  return { articles: state.articles };
};
const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

export default List;
