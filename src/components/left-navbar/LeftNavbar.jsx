import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import GermanLogo from '../../images/german_icon.png'
import EnglishLogo from '../../images/english_icon.png'
import SteelrockLogo from '../../images/steel_rock_jpg.jpg'

import { routes } from '../../config'
import { useLang } from '../../providers/language-provider/LanguageProvider'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin: 5px 0px;
  width: 100%;
`

const Language = styled.div`
  margin: 20px 0px;
  margin-left: 18px;
  font-size: 16px;
`

const LogoWrapper = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Languages = styled.div`
  margin-to: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLanguage = styled.img`
  height: 30px;
  margin: 30px;
  &:hover {
    cursor: pointer;
  }
`

const StyledLink = styled(NavLink)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLogo = styled.img`
  height: 38px;
`

const StyledLeftNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
`

const StyledMenuIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align--items: center;
`

export const LeftNavbar = () => {
  const { setLocale } = useLang()
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key='home'>
          <Link to='/'>
            <FormattedMessage id = "topNavbar.home" />
          </Link>
        </ListItem>
        <ListItem button key='real-state'>
          <Link to={routes.realState}>
            <FormattedMessage id = "topNavbar.realState" />
          </Link>
        </ListItem>
        <ListItem button key='renewable-energy'>
          <Link to={routes.renewableEnergy}>
            <FormattedMessage id = "topNavbar.renewableEnergy" />
          </Link>
        </ListItem>
      </List>
      <Divider />
      <Languages>
        <StyledLanguage
          onClick={() => setLocale('de-DE')}
          src={GermanLogo} 
        />
        <StyledLanguage 
          onClick={() => setLocale('en-EN')}
          src={EnglishLogo} 
        />
      </Languages>
    </div>
  );

  return (
    <StyledLeftNavbar>
      {['left'].map((anchor) => (
        <StyledMenuIcon key={anchor}>
          <LogoWrapper>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon />
            </Button>
          </LogoWrapper>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </StyledMenuIcon>
      ))}
      <StyledLink to='/'>
        <StyledLogo src={SteelrockLogo} />
      </StyledLink>
    </StyledLeftNavbar>
  );
}
