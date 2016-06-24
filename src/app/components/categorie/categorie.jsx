'use strict';
import React from 'react';
//import { bindActionCreators,compose } from 'redux';
//import { connect }            from 'react-redux';
//import * as viewsActions      from '../../redux/actions';
import ItemTypes from '../ItemTypes';
import { DragSource } from 'react-dnd';


class Categorie extends React.Component {
  render(){
    const { connectDragSource, isDragging } = this.props;
   const { name } = this.props;
    const opacity = isDragging ? 0.3 : 1;

    return connectDragSource(
      <div style={{opacity }} className="blocTest">
        {name}
      </div>
    );
  };
}

const categorieSource = {
  beginDrag(props) {
    return {
      name:props.name
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

/*const mapStateToProps = (state) => {
  return {
    currentView:  state.views
  };
};

// "bindActionCreators" use-case is to pass dispatch to "store non aware children components" (but I feel like it is a good habbit to use it everytime)
const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        ...viewsActions
      },
      dispatch)
  };
};*/

//export default compose( DragSource(ItemTypes.CATEGORIE, categorieSource, collect), connect(mapStateToProps,mapDispatchToProps)) (Categorie);
export default  DragSource(ItemTypes.CATEGORIE, categorieSource, collect)(Categorie);
