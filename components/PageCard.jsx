import React from 'react';
import 'whatwg-fetch'
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
const styles = {
 card :{
  height: 250,
  width: 250,
  display: 'flex',
  flexWrap: 'wrap',
  margin:'auto'
}
};


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const PageCard = ({singlePage, dispatch}) => {

  if(singlePage.PageDescription!=undefined){
    console.log(singlePage.PageDescription)
    return (
        <Card style = {styles.card}>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
            />
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              
            >
              <img src={'data:image/png;base64,'+singlePage.PageDescription.bIcon} />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
      </Card>
  )
  }
  else
    return null;
};
function mapStateToProps(state) {
  //console.log('state',state)
  return {
    singlePage: state.get('page')
  }
}

//export default connect(mapStateToProps)(CallTable)
export default connect(mapStateToProps)(PageCard);