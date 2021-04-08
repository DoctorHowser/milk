import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'

export default function DrawerList({ toggleDrawer }) {

    // let loginLinkData = {
    //     path: '/login',
    //     text: 'Login / Register',
    // };

    // if (user.id != null) {
    //     loginLinkData.path = '/user';
    //     loginLinkData.text = 'Home';
    // }
    {/* <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link>
      <div>
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>

        {user.id && (
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
                <ListItem button>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={"text"} />
                </ListItem>

                <Divider />
                <ListItem button >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={"text"} />
                </ListItem>
            </List>

        </div>
    );
}