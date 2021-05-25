import sizes from './sizes';

const drawerWidth = 400;

const styles = (theme) => ({
  root: {
    display: 'flex'
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: "64px",
    alignItems: 'center'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {
    margin: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space between',
    [sizes.down('xs')] : {
      fontWeight: 700
    },
  },
  button: {
  },
  link: {
    textDecoration: 'none',
    marginLeft: '10px'
  }
});

export default styles;
