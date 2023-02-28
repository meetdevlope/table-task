import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import {Drawer, withStyles} from "@mui/material";
import {Close } from "@mui/icons-material";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';


import Dashboard from "../Dashboard";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import {HtmlTooltip, HTMLToolTipBottomLeft} from "../mono/cusTomtoolTips";
import TableComp from '../Table';
// import { makeStyles } from '@material-ui/core/styles';
import { columnsData,bodyData } from '../Table/tableData';


const drawerWidth = 240;



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));




interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer - 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        // marginLeft: drawerWidth,
        // width: `calc(100% - ${drawerWidth}px)`,
        // transition: theme.transitions.create(['width', 'margin'], {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.enteringScreen,
        // }),
    }),
}));




type Anchor = 'top' | 'left' | 'bottom' | 'right';


function Layout() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    const handleDrawerClose = () => {
        setOpen(false);
    };



    const handleOpenChange=()=>{
    }

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>

            (event: React.KeyboardEvent | React.MouseEvent) => {

                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '350px' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <DrawerHeader style={{'minHeight':'48px',backgroundColor:'#181789',color:'white',display: 'flex',borderRadius:"0 0 0 15px",justifyContent: 'space-between'}}>
                <Typography variant='h6' style={{ marginLeft:'10px' }}>Application Menu</Typography>
                <IconButton onClick={handleDrawerClose}>
                     <Close style={{color:'white'}}/>
                </IconButton>
        </DrawerHeader>
            <Divider />
            <List style={{padding: '5px'}}>
                {['Dashboard', ].map((text, index) => (
                    <ListItem key={text} disablePadding style={{'color':'#93A0A7'}}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <HomeOutlinedIcon /> : <HomeOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List style={{padding: '5px'}}>
                {[{'text':'Application 1',selected:true}, {'text':'Application 2',selected:false}].map((text, index) => (
                    <ListItem key={text.text} disablePadding style={{'color':text.selected?'#00026D':'#93A0A7',background:text.selected?'#E7E7F3':'','borderRadius':'10px'}}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <ViewQuiltOutlinedIcon style={{'color':text.selected?'#00026D':'#93A0A7'}} /> : <BrandingWatermarkOutlinedIcon style={{'color':text.selected?'#00026D':'#93A0A7'}} />}
                            </ListItemIcon>
                            <ListItemText primary={text.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

  return (
      <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Drawer style={{boxShadow: '0px 3px 6px hsla(0, 0%, 0%, 0.12)'}}
              elevation={5}
              anchor={'left'}
              open={state['left']}
              onClose={toggleDrawer('left', false)}
          >
              {list('left')}
          </Drawer>
          <AppBar position="fixed" open={open} style={{borderRadius: '0 0 15px 15px',backgroundColor:'white', boxShadow:'0px 3px 6px #0000001F'}}>
              <Toolbar variant="dense" disableGutters={true} >
                  <IconButton

                      aria-label="open drawer"
                      onClick={toggleDrawer('left', true)}
                      // edge="start"
                      sx={{
                          marginRight: 5,

                      }}
                      style={{backgroundColor:'#181789',color:'white',display: 'block','height':'48px',borderRadius:"0 0 0 15px",width:'48px',padding:0}}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color={'primary'} noWrap component="div">
                      Client Logo<span style={{borderLeft:'1px solid #181789',margin: '0 15px'}}></span>Application 1
                  </Typography>
                  <Box sx={{ flexGrow: 0 }} style={{position: 'absolute',right: '11px',padding:'6px'}} className={'icon-hover'}>

                      <div>
                          <HTMLToolTipBottomLeft title="Feedback" placement="bottom-start">
                                <AssistantOutlinedIcon style={{color:'#9594CE'}} ></AssistantOutlinedIcon>
                          </HTMLToolTipBottomLeft>
                      </div>

                  </Box>
              </Toolbar>

          </AppBar>
          <Drawer variant="permanent"  style={{width: 'calc(48px + 1px)', boxShadow:'0px 3px 6px #0000001F' }} PaperProps={{
              // sx: { width: "90%" },
              style:{width: 'calc(48px + 1px)'}
          }}>
              <DrawerHeader  style={{'minHeight':'48px','padding':0}}>
                  <HtmlTooltip style={{}} top={20}
                               title="Menu" placement="right-start"
                  >
                  <IconButton onClick={toggleDrawer('left', true)} style={{backgroundColor:'#181789',color:'white','height':'48px',borderRadius:"0 0 0 15px",width:'100%'}}>
                      <MenuIcon />
                  </IconButton>
                  </HtmlTooltip>
              </DrawerHeader>
              {/*<Divider />*/}

              <ul style={{}} className={'sidebar-menu-ul'}>
                  <li>
                        <HtmlTooltip style={{}}
                            title="Home" placement="right-start"
                        >
                            <HomeOutlinedIcon fontSize="large" className={'menu-icon'}></HomeOutlinedIcon>
                        </HtmlTooltip>
                  </li>
                  <li>
                      <hr style={{'margin':'0.7rem'}}/>
                  </li>
                  <li className={''}>
                      <HtmlTooltip style={{}}
                                   title="Application 1" placement="right-start"
                      >
                      <ViewQuiltOutlinedIcon fontSize="large" className={'menu-icon active'}></ViewQuiltOutlinedIcon>
                      </HtmlTooltip>
                  </li>
                  <li>
                      <HtmlTooltip style={{}}
                                   title="Application 2" placement="right-start"
                      >
                      <BrandingWatermarkOutlinedIcon fontSize="large" className={'menu-icon'}></BrandingWatermarkOutlinedIcon>
                      </HtmlTooltip>
                  </li>
              </ul>
          </Drawer>

          <Box component="main" sx={{ flexGrow: 1,mt:'48px' }}>

            <div style={{overflow:'hidden',}}>
                  {/* <Dashboard/> */}
                  <TableComp
                      columns={columnsData}
                      data={bodyData}
                  />
            </div>

          </Box>
      </Box>

  );
}
export default Layout;
