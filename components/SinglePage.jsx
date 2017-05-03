import React from 'react';
import 'whatwg-fetch'
import { connect } from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ContentRemove from 'material-ui/svg-icons/content/remove';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 450,
    overflowY: 'auto',
  },
};


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = (pagesData) => (
  <div style={styles.root}>
    <GridList
      cols={4}
      cellHeight={180}
      style={styles.gridList}
    >
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
);
function mapStateToProps(state) {
  return {
    pagesData:state.get('pages')
  }
}

//export default connect(mapStateToProps)(CallTable)
export default connect (mapStateToProps)(GridListExampleSimple);