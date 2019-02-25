import React from 'react'
import { Icon, Image, Item, Button, Label } from 'semantic-ui-react'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const ItemExampleExtraContent = () => (
  <Item.Group divided>
    <Item>
      <Item.Content>
        <Item.Header as='a'>Article 1</Item.Header>
        <Item.Extra>
        <Icon color='grey' name='comment' /> 121 comments  
        <Button floated='right' as='a' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />
        Like
      </Button>
      <Label basic color='red' pointing='left'>
        2,048
      </Label>
    </Button>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Content>
        <Item.Header as='a'>test long text:ABN Amro: Τι "βλέπει" για τις εκλογές στην Ευρώπη - Πιθανή η αυτοδυναμία της Νέας Δημοκρατίας</Item.Header>
        <Item.Extra>
        <Icon color='grey' name='comment' /> 121 comments  
        <Button floated='right' as='a' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />
        Like
      </Button>
      <Label basic color='red' pointing='left'>
        2,048
      </Label>
    </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
    
    <Item>
      <Item.Content>
        <Item.Header as='a'>Article 3</Item.Header>
        <Item.Extra>
        <Icon color='grey' name='comment' /> 121 comments  
        <Button floated='right' as='a' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />
        Like
      </Button>
      <Label basic color='red' pointing='left'>
        2,048
      </Label>
    </Button>
        </Item.Extra>
      </Item.Content>
    </Item>


  </Item.Group>
)

export default ItemExampleExtraContent
