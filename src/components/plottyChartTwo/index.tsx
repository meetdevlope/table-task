import * as React from 'react';
import {render} from "react-dom";
import {OpenWithOutlined,KeyboardArrowDownOutlined} from "@mui/icons-material";
import {Grid, Switch} from "@mui/material";
import {HtmlTooltip} from "../mono/cusTomtoolTips";
interface IMyProps {
    name: string,
    width:number
}
function PlottyChartTwo(props:IMyProps) {
    const [open, setOpen] = React.useState(false);
    const [plotChart1Col, setPlotChart1Col] = React.useState(4);
    const handleChange = () => {
        let openValue = !open
        setOpen(openValue)
        if(openValue){
            setPlotChart1Col(7)
        }else{
            setPlotChart1Col(4)
        }
    }

    return (
        // <Grid item xs={12} md={plotChart1Col}>

            <div  >
                <div style={{'width':'100%',paddingTop: '3px',paddingRight: '3px'}} className={'d-flex justify-content-end'}>
                    <HtmlTooltip title="Move Panel" placement="right-start">
                    <OpenWithOutlined fontSize="small" style={{'color':'#D7D5E5'}} />
                    </HtmlTooltip>
                </div>
                <div className={'px-3'}>
                    <div className={'row'}>

                        <div className={`col-md-12` }>
                            <div className={'d-flex'}>
                                <div className={'mr-2'}>
                                    <p className={'chart-title mb-0'}>{props.name}</p>
                                </div>


                            </div>
                            <div className={'plotty-chart-box '}>
                                <div style={{'height':'200px','width':`${props.width}px`,backgroundColor:'#EEEEEE '}}>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>


            </div>




        // </Grid>
    )
}

export default PlottyChartTwo;
