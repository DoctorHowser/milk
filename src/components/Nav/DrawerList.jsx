import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { Person, Opacity, ChildCare } from '@material-ui/icons'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

export default function DrawerList({ toggleDrawer }) {

  const dispatch = useDispatch();
  const {userData} = useSelector(store => store.user)
  const history = useHistory()

  const views = [
    
    { path: '/user', text: 'My Profile', icon: <Person />, loggedIn: true },
    { path: '/login', text: 'Login/Register', icon: <Person />, loggedIn: false },
    { path: '/offers', text: 'Current Offers', icon: <Opacity />, loggedIn: true },
    { path: '/requests', text: 'Requests', icon: <ChildCare />, loggedIn: true },
    // { path: '/logout', text: 'Logout', icon: <Person />, loggedIn: true },

    // {path: '/user', text: 'My Profile', icon : Person},
    // {path: '/user', text: 'My Profile', icon : Person}
  ]

  {/* <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link>
      <div>
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>

        {userData.id && (
          <>
            <Link className="navLink" to="/info">
              Info Page
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div> */}

  return (
    <div
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {views.map(view => {


          return (
            !!userData.id == view.loggedIn && (
              <>
                <ListItem button onClick={() => history.push(view.path)}>
                  <ListItemIcon>{view.icon}</ListItemIcon>
                  <ListItemText primary={view.text} />
                </ListItem>

                <Divider />
              </>
            )
          )


        })}
        {userData.id && (
        <ListItem button onClick={() => {
          dispatch({ type: 'LOGOUT' });
          history.push('/home');
          }}>
            <ListItemIcon><Person /></ListItemIcon>
                  <ListItemText primary={`Log Out`} />
            </ListItem>
        )}
      </List>

    </div>
  );
}