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


const tilesData = [
  // {
  //   img: 'data:image/png;base64,'+'',
  //   title: 'Breakfast',
  //   author: 'jill111',
  // },
  // {
  //   img: 'images/grid-list/burger-827309_640.jpg',
  //   title: 'Tasty burger',
  //   author: 'pashminu',
  // },
  // {
  //   img: 'images/grid-list/camera-813814_640.jpg',
  //   title: 'Camera',
  //   author: 'Danson67',
  // },
  // {
  //   img: 'images/grid-list/morning-819362_640.jpg',
  //   title: 'Morning',
  //   author: 'fancycrave1',
  // },
  // {
  //   img: 'images/grid-list/hats-829509_640.jpg',
  //   title: 'Hats',
  //   author: 'Hans',
  // },
  // {
  //   img: 'images/grid-list/honey-823614_640.jpg',
  //   title: 'Honey',
  //   author: 'fancycravel',
  // },
  // {
  //   img: 'images/grid-list/vegetables-790022_640.jpg',
  //   title: 'Vegetables',
  //   author: 'jill111',
  // },
  // {
  //   img: 'images/grid-list/water-plant-821293_640.jpg',
  //   title: 'Water plant',
  //   author: 'BkrmadtyaKarki',
  // },
];

fetch('https://server-qa.mozzazcare.com/rpc.ashx', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"jsonrpc":"2.0","method":"GetPagesAndTiles","params":{"Pages":[{"Type":"Lunch and Dinner","PageId":176,"CustomerId":58263,"SandboxId":58204}],"CustomerId":58204,"apiVersion":"1.14","appIdentifier":"MCA","applicationVersion":"2.5","buildNo":"0.0.0","requestType":"app","source":"Mozzaz Care","CID":58204,"Auth":"31f0a022-22b8-446a-816c-55e232fdcbb4"},"id":"28"})
})
.then(function(response) {
    return response.json()
  })
.then(function(json) {
    console.log('parsed json', json.result)
    var singlePage = json.result[0];
    var tiles = singlePage.TileDescriptions;
    console.log('tiles'+tiles)
    tiles.forEach(function (tile) {
      tilesData.push({
        img:'data:image/png;base64,'+ tile.sImage64,
        title:tile.text
      });
    });
    return tilesData;
  })
.catch(function(ex) {
    console.log('parsing failed', ex)
})
/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cols={4}
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
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
  var tiles = state.get('pages').get(0).get('result').get(0).get('TileDescriptions');
  console.log( tiles)
  //.result[0].TileDescriptions;

  tiles.forEach(function (tile) {
      tilesData.push({
        img:'data:image/png;base64,'+ tile.get('sImage64'),
        title:tile.get('Text'),
        //author:tile.get('Text')
      });
    });
  console.log( tilesData)
  return {
    tilesData
  }
}

//export default connect(mapStateToProps)(CallTable)
export default connect (mapStateToProps)(GridListExampleSimple);