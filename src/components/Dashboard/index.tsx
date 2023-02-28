
import Box from "@mui/material/Box";
import FormTab from "../formGroup";
import {KeyboardArrowUpOutlined} from "@mui/icons-material";
import {KeyboardArrowDownOutlined} from "@mui/icons-material";
import PlottyChart from "../plottyChart";
import PlottyChartTwo from "../plottyChartTwo";
import * as React from "react";
import {Responsive, WidthProvider} from "react-grid-layout";
import { selector, useRecoilValue } from "recoil";
import { checkBox1State, checkBoxCountSelector } from "../../constants/helper";
import Collapse from '@mui/material/Collapse';
import { Grid } from "@mui/material";
const ResponsiveGridLayout = WidthProvider(Responsive);






function Dashboard(){
    const [checked, setChecked] = React.useState(false);
    const [width, setWidth] = React.useState('30%')
    var layout = { lg: [
        // { i: "a", x: 0, y: 0, w: 4, h: 2, maxW:4,static:true,maxH:3,minH:3 },
        { i: "b", x: 0, y: 1, w: 4, h: 1, minW:4 },
        { i: "c", x: 4, y: 1, w: 4, h: 1, minW:4},
        { i: "d", x: 0, y: 2, w: 4, h: 1, minW:4},
        { i: "e", x: 4, y: 2, w: 4, h: 1, minW:4}
    ]};
    const [cardWidth, setCardWidth] = React.useState(layout);


    function closeTab(){
        if(width=='0%'){
            setWidth('30%');
        }else{
            setWidth('0%');
        }
    }

    function changeWidth(){
        // cardWidth[0].w = layout[0].w*2;
        let value=!checked

        if(value){
            setCardWidth({
                lg:[{ i: "b", x: 0, y: 1, w: 8, h: 1, minW:8 },
                    { i: "c", x: 8, y: 1, w: 4, h: 1, minW:4},
                    { i: "d", x: 0, y: 2, w: 4, h: 1, minW:4},
                    { i: "e", x: 4, y: 2, w: 4, h: 1, minW:4}
                ]
            });
        }else{
            setCardWidth({
                lg:[
                    { i: "b", x: 0, y: 1, w: 4, h: 1, minW:4 },
                    { i: "c", x: 4, y: 1, w: 4, h: 1, minW:4},
                    { i: "d", x: 0, y: 2, w: 4, h: 1, minW:4},
                    { i: "e", x: 4, y: 2, w: 4, h: 1, minW:4}
                ]
            })
        }
        setChecked(value)
       console.log(JSON.stringify(cardWidth));

    }

    const showComponent = useRecoilValue(checkBoxCountSelector);
    var dsHeight=window.innerHeight-48;
    return (
        <div style={{ display:'flex',height:dsHeight }}>
            <div style={{ width:width, transition:'0.10s', position:'relative', height: '100%'}}>
                <Box key="a" style={{marginTop:'0px', }}>
                    <FormTab open={width != '0%'}/>
                    <div className={'floating-button-div'} >
                        <button  onClick={closeTab} className={'floating-button'} style={{ transition:'0.10s' }} >
                            {
                                width != '0%' ?
                                <KeyboardArrowUpOutlined style={{fontSize:'14px'}}/>
                                :
                                <KeyboardArrowDownOutlined style={{fontSize:'14px'}}/>
                            }
                            <span className={'h-100'} style={{'paddingTop':'2px'}}>
                                {
                                    width != '0%' ? 'CLOSE' : 'OPEN'
                                }
                            </span>
                        </button>
                    </div>
                </Box>
            </div>
            <div style={{ width: width != '0%'? '70%' : '100%', transition:'0.1s', marginLeft: '25px',overflow:'auto' }}>
                <ResponsiveGridLayout
                layouts={cardWidth}
                breakpoints={{ lg: 1200,  }}
                cols={{ lg: 12 }}
                rowHeight={280}
                width={1200}
                allowOverlap={false}
                onLayoutChange={(layout)=>{
                 console.log(layout)
                }}
                margin={[20,20]}
            >


                {
                    showComponent &&
                    <div className={'card'}  key="b" style={{ backgroundColor: "white", marginBottom:'15px',borderRadius:'10px'}}>
                        <PlottyChart checked={checked}/>
                        <div className={'floating-button-div'} >
                            <button onClick={changeWidth} className={'floating-button'}>
                                {
                                    checked  ?
                                        <KeyboardArrowUpOutlined style={{fontSize:'14px'}}/>
                                        :
                                        <KeyboardArrowDownOutlined style={{fontSize:'14px'}}/>
                                }
                                <span className={'h-100'} style={{'paddingTop':'2px'}}>
                                {
                                    checked  ? 'CLOSE' : 'OPEN'
                                }</span>
                            </button>
                        </div>
                    </div>
                }
                <div className={'card'} key="c" style={{ backgroundColor: "white",marginBottom:'15px',borderRadius:'10px' }}  >
                        <PlottyChartTwo name={'Plotty Chart 2'} width={300} />
                </div>
                <div className={'card'} key="d" style={{ backgroundColor: "white", marginBottom:'15px',borderRadius:'10px'}}>
                    <PlottyChartTwo name={'Plotty Chart 2'} width={300} />
                </div>
                <div className={'card'} key="e" style={{ backgroundColor: "white",marginBottom:'15px',borderRadius:'10px' }}>
                    <PlottyChartTwo name={'Connected Camera'} width={400} />
                </div>
                </ResponsiveGridLayout>
            </div>
        </div>

    )
}
export default Dashboard
function handleClick() {
    throw new Error("Function not implemented.");
}

