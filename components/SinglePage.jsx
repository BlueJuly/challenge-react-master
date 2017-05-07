import React from 'react';
import 'whatwg-fetch'
import { connect } from 'react-redux'
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
const styles = {
  root: {
    //display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 450,
    overflowY: 'auto',
    margin:'auto'
  },
  circularProgress:{
    display: 'flex',
    flexWrap: 'wrap',
    margin:'auto'
 },
 paper :{
  height: 150,
  width: 150,
  margin: 20,
  textAlign: 'center',
  margin:'auto',
  //display: 'inline-block',
},
card :{
  height: 250,
  width: 250
  // margin: 20,
  // textAlign: 'center',
  // margin:'auto',
  //display: 'inline-block',
}
};


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = ({singlePage, dispatch}) => {

  // componentDidMount() {
  //   store.dispatch(initPagesAction());
  // }
  //console.log('dispatch', dispatch);
  var pagesData = [];
  var tiles = singlePage.TileDescriptions;
  tiles && tiles.forEach(function(tile) {
    pagesData.push({
      img: 'data:image/png;base64,' + tile.sImage64,
      title: tile.Text
    });
  });
  if(!tiles){
    return <div>
              <CircularProgress size={80} thickness={5} style={styles.circularProgress} />
           </div>
  }
  return (
    <div style={styles.root}>
      <GridList cols={4} cellHeight={180} style={styles.gridList}>
        <Subheader>December</Subheader>
        {pagesData.map((tile) => (
      <GridTile
      key={tile.img}
      title={tile.title}
      //subtitle={<span>by <b>{tile.author}</b></span>}
      actionIcon={<FloatingActionButton mini={true} secondary={true}><ContentRemove /></FloatingActionButton>}
      >
        <img src={tile.img} />
        </GridTile>
    ))}
      </GridList>
    </div>
  )
};
function mapStateToProps(state) {
  //console.log('state',state)
  return {
    singlePage: state.get('page')
  }
}

//export default connect(mapStateToProps)(CallTable)
export default connect(mapStateToProps)(GridListExampleSimple);