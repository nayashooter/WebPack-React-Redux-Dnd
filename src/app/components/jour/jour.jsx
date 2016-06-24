'use strict';
import React from 'react';
import ItemTypes from '../ItemTypes';
import { DropTarget  } from 'react-dnd';

class Jour extends React.Component {

  render(){
    const { connectDropTarget, isOver,canDrop,listItem} = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#CCCCCC';
    if (isActive) {
      backgroundColor = '#008000';
    } else if (canDrop) {
      backgroundColor = '#90F090';
    }

    return connectDropTarget(
      <div style={{backgroundColor}} className="colJour">
        <div className="headerJour">{this.props.jour}</div>
        {listItem.length === 0 ?
          'Release to drop' :
          ''
        }

        {
          listItem.map(
            (item,idx) => {
              return(
                <div className="itemJour" key={idx}>{item.name}</div>
              );
            }
          )
        }
        </div>
    );
  }
}

const categorieTarget = {
  drop(props,monitor,component) {
    props.onDrop(monitor.getItem());
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

export default DropTarget(ItemTypes.CATEGORIE, categorieTarget, collect)(Jour);
