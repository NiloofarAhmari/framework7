import React from 'react';
import {
  Page,
  Navbar,
  NavRight,
  Link,
  Icon,
  Badge,
  Toolbar,
  List,
  ListItem,
} from 'framework7-react';

export default () => (
  
    
  <Page>
    <Navbar sliding title="Badge">
      <NavRight>
        <Link iconOnly>
          <Icon ios="f7:person_circle_fill" aurora="f7:person_circle_fill" md="material:person">
            <Badge color="red">5</Badge>
          </Icon>
        </Link>
      </NavRight>
    </Navbar>
    <Toolbar tabbar labels bottom>
      <Link tabLink="#tab-1" tabLinkActive>
        <Icon ios="f7:envelope_fill" aurora="f7:envelope_fill" md="material:email">
          <Badge color="green">5</Badge>
        </Icon>
        <span className="tabbar-label">Inbox</span>
      </Link>
      <Link tabLink="#tab-2">
        <Icon ios="f7:calendar_fill" aurora="f7:calendar_fill" md="material:today">
          <Badge color="red">7</Badge>
        </Icon>
        <span className="tabbar-label">Calendar</span>
      </Link>
      <Link tabLink="#tab-3">
        <Icon
          ios="f7:cloud_upload_fill"
          aurora="f7:cloud_upload_fill"
          md="material:file_upload"
        >
          <Badge color="red">1</Badge>
        </Icon>
        <span className="tabbar-label">Upload</span>
      </Link>
    </Toolbar>

    <List>
      <ListItem title="Foo Bar" badge="0" />
      <ListItem title="Ivan Petrov" badge="CEO" badgeColor="blue" />
      <ListItem title="John Doe" badge="5" badgeColor="green" />
      <ListItem title="Jane Doe" badge="NEW" badgeColor="orange" />
    </List>
  </Page>
    
  
);