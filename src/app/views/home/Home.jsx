'use strict';

import React                      from 'react';
import Jumbotron                  from '../../components/jumbotron/Jumbotron.jsx';
import classNames                 from 'classnames';
import { Link }                   from 'react-router';
import Categorie                  from '../../components/categorie/categorie.jsx';
import Jour                       from '../../components/jour/jour.jsx';
import { DragDropContext }        from 'react-dnd';
import HTML5Backend               from 'react-dnd-html5-backend';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      animated    : true,
      viewEnters  : false,
      lundi : [],
      mardi : [],
      mercredi : [],
      jeudi : [],
      vendredi : [],
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.props.actions.enterHome();
  }

  componentWillUnmount() {
    this.props.actions.leaveHome();
  }

  processViewAnimationClasses() {
    const homeViewClasses = classNames({
      'animatedViews'    : this.state.animated,
      'view-enter'       : this.state.viewEnters
    });
    return homeViewClasses;
  }

  handleDrop(index,item) {
    const { name } = item;
    this.props.actions.moveCategorie(item,index);
  }

  render() {
    return(
      <div
        key="homeView"
        className={this.processViewAnimationClasses()}>
        <Jumbotron>
          <h1>
            Test pour Drag and Drop
          </h1>
          <h2>
            Reacts JS + Boostrap + Redux
          </h2>

          <div className="row">
            <div className="col-md-2">
              <span>Catégorie</span>
            {
              this.props.currentView.listItem.map(
                (item,idx) => {
                  return (
                    <Categorie key={idx} name={item.name}/>
                  );
                }
              )
            }
            </div>
            <div className="col-md-2">
              <Jour
                jour="Lundi"
                listItem={this.props.currentView.planning.lundi}
                 onDrop={(item) => this.handleDrop("lundi",item)}></Jour>
            </div>
            <div className="col-md-2">
              <Jour
                jour="Mardi"
                listItem={this.props.currentView.planning.mardi}
               onDrop={(item) => this.handleDrop("mardi", item)}></Jour>
            </div>
            <div className="col-md-2">
              <Jour
                jour="Mercredi"
                listItem={this.props.currentView.planning.mercredi}
               onDrop={(item) => this.handleDrop("mercredi", item)}></Jour>
            </div>
            <div className="col-md-2">
              <Jour
                jour="Jeudi"
                listItem={this.props.currentView.planning.jeudi}
               onDrop={(item) => this.handleDrop("jeudi", item)}></Jour>
            </div>
            <div className="col-md-2">
              <Jour
                jour="Vendredi"
                listItem={this.props.currentView.planning.vendredi}
               onDrop={(item) => this.handleDrop("vendredi", item)}></Jour>
            </div>
          </div>

        </Jumbotron>
      </div>
    );
  }
}

Home.propTypes= {
  actions: React.PropTypes.object
};

export default DragDropContext(HTML5Backend)(Home);
