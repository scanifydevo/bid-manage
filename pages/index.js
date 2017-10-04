import Link from 'next/link'
import Head from 'next/head'
import { hello } from '~/core'
import classNames from 'classnames'
import {Grid, Image, Tab, Container, Segment, Item, Button, Input} from 'semantic-ui-react'

const panes = [
  { menuItem: 'OPEN BIDS', 
    render: () => 
      <Tab.Pane>
        <pre style={{ height: 800, overflowY: 'scroll', overflowX: 'hidden', whiteSpace: 'pre-wrap'}}>
          {bidData.map((data, index) =>
            <Segment inverted={data.read == 'false'} color={data.read == 'false' ? 'grey':''}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Image centered src='static/default.jpeg' size='tiny' />
                    <p className='username'>{data.username}</p>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Grid.Row>
                      <span className='price'><b>{data.minprice}</b></span>
                      <span className='date'>{data.time}</span>                    
                    </Grid.Row>
                    <Grid.Row>
                      <p className='bidText'>{data.text}</p>
                    </Grid.Row>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          )}
        </pre>
      </Tab.Pane> 
  },
  { 
    menuItem: 'CLOSED BIDS', 
    render: () => 
      <Tab.Pane>
        <pre style={{ height: 800, overflowY: 'scroll', overflowX: 'hidden', whiteSpace: 'pre-wrap'}}>
          {bidData.map((data, index) =>
            <Segment>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Image centered src='static/default.jpeg' size='small' />
                    <p className='username'>Username</p>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Grid.Row>
                      <span className='price'><b>{data.minprice}</b></span>
                      <span className='date'>{data.time}</span>
                    </Grid.Row>
                    <Grid.Row>
                      <p className='bidText'>{data.text}</p>
                    </Grid.Row>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment> 
          )}
        </pre>
      </Tab.Pane>
  } ,
]

const bidData = [
  {
    'avatar': '',
    'username': 'Username',
    'minprice': 'Price/min',
    'time': 'Last message sent at',
    'text': 'Message Preview Text...',
    'read': 'true'
  },
  {
    'avatar': '',
    'username': 'Username',
    'minprice': 'Price/min',
    'time': 'Last message sent at',
    'text': 'Message Preview Text...',
    'read': 'false'
  },
  {
    'avatar': '',
    'username': 'Username',
    'minprice': 'Price/min',
    'time': 'Last message sent at',
    'text': 'Message Preview Text...',
    'read': 'true'
  },
  {
    'avatar': '',
    'username': 'Username',
    'minprice': 'Price/min',
    'time': 'Last message sent at',
    'text': 'Message Preview Text...',
    'read': 'true'
  },
  {
    'avatar': '',
    'username': 'Username',
    'minprice': 'Price/min',
    'time': 'Last message sent at',
    'text': 'Message Preview Text...',
    'read': 'true'
  },
  {
    'avatar': '',
    'username': 'Username',
    'minprice': 'Price/min',
    'time': 'Last message sent at',
    'text': 'Message Preview Text...',
    'read': 'true'
  }
]

const chatData = [
  {
    'avatar': '',
    'username': '',
    'role': 'Sender',
    'time': 'Sent At Timestamp',
    'text': 'Message Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    'avatar': '',
    'username': '',
    'role': 'Recipient',
    'time': 'Sent At Timestamp',
    'text': 'Message Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    'avatar': '',
    'username': '',
    'role': 'Sender',
    'time': 'Sent At Timestamp',
    'text': 'Message Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    'avatar': '',
    'username': '',
    'role': 'Recipient',
    'time': 'Sent At Timestamp',
    'text': 'Message Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    'avatar': '',
    'username': '',
    'role': 'Recipient',
    'time': 'Sent At Timestamp',
    'text': 'Message Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    'avatar': '',
    'username': '',
    'role': 'Sender',
    'time': 'Sent At Timestamp',
    'text': 'Message Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  }
]

export default () =>
  <div>
    <Head>
      <title>My mockup page</title>
      <link href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="static/style.css"/>
    </Head>
    <Container fluid>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Segment>        
              <Tab panes={panes}/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment.Group>
              <Segment>
                <pre style={{ height: 755, overflowY: 'scroll', overflowX: 'hidden', whiteSpace: 'pre-wrap'}}>
                  {chatData.map((data, index) => 
                    data.role == 'Sender'?
                    <Segment className='segment-sender'>                
                      <Image src='static/default.jpeg' size='mini' inline />
                      <span className='role'><b>Sender</b><span className='date'>{data.time}</span></span>
                      <Segment>
                        <div className="text">{data.text}</div>
                      </Segment>
                    </Segment>
                    :
                    <div className='segment-recipient'>
                      <Segment>                  
                        <span className='time'>{data.time}</span>
                        <div className='recipient'>
                          <span><b className='role'>Recipient</b></span>
                          <Image src='static/default.jpeg' size='mini' inline />
                        </div>            
                        <Segment>
                          <div className="text">{data.text}</div>
                        </Segment>
                      </Segment>
                    </div>
                  )}
                </pre>
              </Segment>
              <Segment>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <div className='username'>
                        <p className='bid-price'><b>Current Bid Price</b></p>
                        <Button content='ACCEPT' />
                        <Button content='DECLINE' />
                      </div>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <div className='group'>
                        <Input placeholder='Enter Text' className='enter-text' size='huge' />
                        <Button content='SEND' size='huge' />
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>