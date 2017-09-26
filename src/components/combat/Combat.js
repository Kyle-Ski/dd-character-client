import React from 'react';
import { Grid } from 'semantic-ui-react'

import Spinner from '../Spinner'

const Inventory = (props) => {
  if (props.character) {
    return (
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <h1>Test</h1>
          </Grid.Column>
          <Grid.Column>
            <h1>Test</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <h1>Test</h1>
          </Grid.Column>
          <Grid.Column>
            <h1>Test</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
  return <Spinner />
}

export default Inventory;
