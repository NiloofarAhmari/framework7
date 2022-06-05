import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react';
import classes from "./styles.module.css";

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar sliding={false} className={classes.center}>
      {/* <NavLeft>
      
      </NavLeft> */}
      {/* <NavTitle sliding>My App</NavTitle> */}
      {/* <NavRight> */}
        {/* <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" /> */}
    
      {/* </NavRight> */}
      <NavTitle >فروشگاه اینترنتی</NavTitle>
    </Navbar>
    {/* Toolbar */}
    <Toolbar bottom>
      <Link>Left Link</Link>
      <Link>Right Link</Link>
    </Toolbar>
    {/* Page content */}
    <Block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </Block>
    <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem link="/about/" title="درباره ما"/>
      <ListItem link="/form/" title="فرم"/>
      <ListItem link="/test/" title="تست"/>
    </List>

    <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised popupOpen="#my-popup">Popup</Button>
        </Col>
        <Col width="50">
          <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Panels</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised panelOpen="left">Left Panel</Button>
        </Col>
        <Col width="50">
          <Button fill raised panelOpen="right">Right Panel</Button>
        </Col>
      </Row>
    </Block>

    <List>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List>
  </Page>
);
export default HomePage;