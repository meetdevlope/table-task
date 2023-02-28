import * as React from 'react';
import {render} from "react-dom";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import {OpenWithOutlined,KeyboardArrowDownOutlined,KeyboardArrowUpOutlined} from "@mui/icons-material";
import {Box, Collapse, Fade, Grid, Paper, Switch, Typography} from "@mui/material";
import {HtmlTooltip} from "../mono/cusTomtoolTips";
import PlottlyChartForm from "../mono/plottyChartForm";
function PlottyChart(props:any) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [boxOpen, setBoxOpen] = React.useState(false);
    const [plotChart1Col, setPlotChart1Col] = React.useState(4);
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        let openValue = !open

        if(openValue){
            setPlotChart1Col(7)
            setOpen(openValue)
        }else{
            setPlotChart1Col(4)
            setOpen(openValue)
        }
    }

    return (
        // <Grid item xs={12} md={plotChart1Col}  style={{
        //     transition:
        //         theme.transitions.create("all", {
        //         easing: theme.transitions.easing.sharp,
        //         duration: theme.transitions.duration.leavingScreen,
        //     })
        // }}>

            <div className={''} >
                <div style={{'width':'100%',paddingTop: '3px',paddingRight: '3px'}} className={'d-flex justify-content-end'}>
                    <HtmlTooltip top={10} title="Move Panel" placement="right-start">
                    <OpenWithOutlined fontSize="small" style={{'color':'#D7D5E5'}} />
                    </HtmlTooltip>
                </div>
                <Grid container spacing={2}>
                <Grid item xs={6} sm container style={{paddingTop:0,marginTop:0}}>
                    <Grid sx={{ml:2}} item xs container direction="column" spacing={2} style={{paddingTop:0,marginTop:0}}>
                        <Grid item xs  style={{paddingLeft:0,paddingTop:0}}>
                            <div style={{display:'flex',justifyContent:"flex-start",alignItems:"center"}}

                                  >
                                <p className={'chart-title mb-0 mr-2'}>Plottly Chart</p>

                                <p className={`chart-switch-label mb-0`}
                                style={{color:'#00000082'}}>3D View</p>

                                <Switch

                                    size="small"
                                    style={{'color':'#181789'}}
                                />
                                <p className={`chart-switch-label mb-0`}>Top View</p>
                            </div>
                        </Grid>
                        <Grid item px={0} style={{paddingLeft:0,paddingRight:'15px'}}>
                            <Paper style={{'height':'200px',width:'100%','maxWidth':'250px',backgroundColor:'#EEEEEE '}}></Paper>

                        </Grid>


                    </Grid>

                </Grid>
                    <Grid item xs={6} >
                        <Collapse orientation="horizontal" in={props.checked} collapsedSize={'0%'}>
                            <PlottlyChartForm/>
                        </Collapse>
                    </Grid>
                </Grid>


                {/*<div className={'floating-button-div'} >*/}
                {/*    {open?*/}
                {/*    <button onClick={handleChange}  className={'floating-button'}>*/}
                {/*        <KeyboardArrowUpOutlined style={{fontSize:'14px'}}/> <span > CLOSE</span>*/}
                {/*    </button>:*/}
                {/*        <button onClick={handleChange}  className={'floating-button'}>*/}
                {/*            <KeyboardArrowDownOutlined style={{fontSize:'14px'}}/> <span > OPEN</span>*/}
                {/*        </button>}*/}
                {/*</div>*/}

            </div>




        // </Grid>
    )
}

export default PlottyChart;
