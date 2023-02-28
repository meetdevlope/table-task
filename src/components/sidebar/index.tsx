import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
function Sidebar() {


  return (
      <div>
        <div className={'header'} style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{display:'flex',justifyContent:'start'}}>
                <div style={{width:'3rem'}}>
                    <button className={'header-button'}>
                        <MenuIcon style={{color:'white'}}></MenuIcon>
                    </button>
                </div>
                <div style={{ fontSize:'18px' }} >
                    <span className={'header-title'}>Client Logo
                    <span className={'header-line'}></span>
                        Application 1</span>
                </div>
            </div>
            <div >
                  <div style={{height:'100%'}} className={'assistance-logo'}>
                    <AssistantOutlinedIcon style={{color:'#9594CE'}}></AssistantOutlinedIcon>
                  </div>
              </div>
        </div>
          <div style={{width:'100%', boxShadow:'0px 3px 6px #0000001F'}}>
            <div className={'sidebar-icons-container'}>
                <ul style={{}} className={'sidebar-menu-ul'}>
                    <li>
                        <HomeOutlinedIcon className={'menu-icon'}></HomeOutlinedIcon>
                    </li>
                    <li>
                        <hr style={{'margin':'0.7rem'}}/>
                    </li>
                    <li className={''}>

                        <ViewQuiltOutlinedIcon className={'menu-icon active'}></ViewQuiltOutlinedIcon>

                    </li>
                    <li>
                        <BrandingWatermarkOutlinedIcon className={'menu-icon'}></BrandingWatermarkOutlinedIcon>
                    </li>
                </ul>
            </div>
          </div>
      </div>

  );
}
export default Sidebar;
