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

  if ( index === 0){
      var data = [...this.state.lundi];
      data.push(item);
      this.setState({lundi:[...data]});
  }

  if ( index === 1){
    var data = [...this.state.mardi];
    data.push(item);
    this.setState({mardi:[...data]});
  }

  if ( index === 2){
    var data = [...this.state.mercredi];
    data.push(item);
    this.setState({mercredi:[...data]});
  }

  if ( index === 3){
    var data = [...this.state.jeudi];
    data.push(item);
    this.setState({jeudi:[...data]});
  }

  if ( index === 4){
    var data = [...this.state.vendredi];
    data.push(item);
    this.setState({vendredi:[...data]});
  }
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
                listItem={this.state.lundi}
                 onDrop={(item) => this.handleDrop(0,item)}></Jour>
            </div>
            <div className="col-md-2">
              <Jour
                jour="Mardi"
                listItem={this.state.mardi}
               onDrop={(item) => this.handleDrop(1, item)}></Jour>
            </div>
            <div className="col-md-2">
              <Jour
                jour="Mercredi"
                listItem={this.state.mercredi}
               onDrop={(item) => this.handleDrop(2, item)}></Jour>
            </div>
            <div className="col-md-2">
              <Jour
                jour="Jeudi"
                listItem={this.state.jeudi}
               onDrop={(item) => this.handleDrop(3, item)}></Jour>
            </div>
            <div className="col-md-2">
              <Jour
                jour="Vendredi"
                listItem={this.state.vendredi}
               onDrop={(item) => this.handleDrop(4, item)}></Jour>
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
