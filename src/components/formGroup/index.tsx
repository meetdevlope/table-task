import * as React from 'react';
import {render} from "react-dom";
import {
    OpenWithOutlined,
    KeyboardArrowDownOutlined,
    KeyboardArrowUpOutlined,
    ExpandMore,
    FileDownloadOutlined, FileUploadOutlined, BrowserUpdatedOutlined, UnfoldMoreOutlined, UnfoldLessOutlined
} from "@mui/icons-material";
import {
    Collapse,
    Grid,
    Slide,
    Switch,
    Box,
    Typography,

    InputLabel,
    FormControl,
    Select,
    MenuItem,
    SelectChangeEvent,
    Radio,
    FormControlLabel,
    RadioGroup,
    FormLabel, Checkbox, FormGroup, styled, Divider, TextField, InputAdornment
} from "@mui/material";
import CustomizedSlider from "../CustomSlider";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import InputSlider from "../CustomSlider";
import { atom, useRecoilState } from 'recoil';
import { checkBox1State, checkBox2State, checkBox3State, checkBox4State } from '../../constants/helper';
import {HTMLToolTipBottomLeft, HTMLToolTipBottomRight} from "../mono/cusTomtoolTips";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
// import Box from "@material-ui/core/Box";
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `none`,
    '&:not(:last-child)': {
        borderBottom: `0`,
    },
    // margin:'0 10px',
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary

        {...props}
    />
))(({ theme }) => ({


    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '0',
}));

function FormTab(props: { open: boolean; }) {
    const [age, setAge] = React.useState('');
    const handleAgeChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };


    const [expand, setExpand] = React.useState(true);
    const [section1Expand, setSection1Expand] = React.useState(true);
    const [section2Expand, setSection2Expand] = React.useState(true);
    const [section3Expand, setSection3Expand] = React.useState(true);
    const [section4Expand, setSection4Expand] = React.useState(true);
    const [checked, setChecked] = React.useState(true);
    const handleExpandCheck = ()=>{
        setExpand(!expand);
        setSection1Expand(expand)
        setSection2Expand(expand)
        setSection3Expand(expand)
        setSection4Expand(expand)
    }
    const handleCheck = (event: any, key: number) => {
        setChecked(!checked);
        console.log(!checked);

        switch (key) {
            case 1:
                setcheckBox1(!checked);
                break;

                case 2:
                setcheckBox2(!checked);
                break;

                case 3:
                setcheckBox3(!checked);
                break;

                case 4:
                setcheckBox4(!checked);
                break;
            default:
                break;
        }
    };

    var maxHeight=window.innerHeight-98
    console.log(window.innerHeight)
    const [checkBox1, setcheckBox1] = useRecoilState(checkBox1State);
    const [checkBox2, setcheckBox2] = useRecoilState(checkBox2State);
    const [checkBox3, setcheckBox3] = useRecoilState(checkBox3State);
    const [checkBox4, setcheckBox4] = useRecoilState(checkBox4State);

    return (



        <div className={` ${props.open?'':'border-0'}`}  style={{boxShadow: `${props.open?'0px 3px 6px #0000001F':'none'}`}}>
            <Grid  container className={`form-title-div ${props.open?'':'d-none'}`} direction="row">

                <Grid item xs={8}>
                    <Typography variant="h6" color="primary" className={'form-title'}>PLOTTLY CHART VALUES</Typography>
                </Grid>
                <Grid item xs={4}>
                <div  className={'form-icon-row'}>
                    <HTMLToolTipBottomRight title="Send To Device" placement="bottom-start">
                        <div className={'form-title-icon'}>
                            <BrowserUpdatedOutlined style={{fontSize:'18px'}} color="primary" />
                        </div>
                    </HTMLToolTipBottomRight>
                    <HTMLToolTipBottomRight title="Upload" placement="bottom-start">
                        <div className={'form-title-icon'}>
                            <FileUploadOutlined style={{fontSize:'18px'}} color="primary" />
                        </div>
                    </HTMLToolTipBottomRight>
                    <HTMLToolTipBottomRight title="Download" placement="bottom-start">
                        <div className={'form-title-icon'}>
                            <FileDownloadOutlined style={{fontSize:'18px'}} color="primary" />
                        </div>
                    </HTMLToolTipBottomRight>
                    <HTMLToolTipBottomRight title={`${expand?'Expand options':'Collapse options'}`} placement="bottom-start">
                        <div className={'form-title-icon'} onClick={handleExpandCheck}>
                            {
                                expand?<UnfoldMoreOutlined style={{fontSize:'18px'}} color="primary" />:<UnfoldLessOutlined style={{fontSize:'18px'}} color="primary" />
                            }

                        </div>
                    </HTMLToolTipBottomRight>

                </div>
                </Grid>
            </Grid>
            <div style={{ overflowY:'auto', height:maxHeight+"px"}}>
            <Accordion expanded={section1Expand} style={{  }} onChange={()=>{setSection1Expand(!section1Expand)}}>
                <AccordionSummary expandIcon={<ExpandMore />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header">
                    <Typography color="primary" style={{ fontSize:'14px', fontWeight: 'bold' }}>Section 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                        <Grid item md={6} sx={{pr:2}}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">Dropdown 1</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="DropDown 1"
                                    onChange={handleAgeChange}
                                    style={{textAlign: 'start'}}
                                >
                                    <MenuItem  value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid item md={6} sx={{pr:2}}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">Dropdown 2</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"

                                    label="DropDown 3"
                                    onChange={handleAgeChange}
                                    style={{textAlign: 'start'}}
                                >
                                    <MenuItem  value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid item md={12} sx={{mt:2}}>
                            <Grid container alignItems="center" justifyContent="flex-start">
                                <Grid item   style={{display: 'flex',
                                    alignItems: 'center'}}>
                                    <Typography color={'primary'} style={{ fontSize:'14px', fontWeight: 'bold', marginLeft:'0px', textAlign:'left',marginRight:'15px' }} component={'p'} id="demo-row-radio-buttons-group-label">Radio Option</Typography>




                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >

                                            <FormControlLabel style={{marginBottom:0}} value="female" control={<Radio size="small"/>} label={<Typography style={{fontSize:12}}>Value 1</Typography>} />
                                            <FormControlLabel style={{marginBottom:0}} value="male" control={<Radio size="small"/>} label={<Typography style={{fontSize:12}}>Value 1</Typography>} />

                                        </RadioGroup>

                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
                <Divider sx={{mx:1}}/>
            <Accordion expanded={section2Expand} style={{  }} onChange={()=>{setSection2Expand(!section2Expand)}} >
                <AccordionSummary expandIcon={<ExpandMore />}
                                  aria-controls="panel2a-content"
                                  id="panel2a-header">
                    <Typography color="primary" style={{ fontSize:'14px', fontWeight: 'bold' }}>Section 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                        <Grid item md={6} sx={{pr:2}}>
                            <InputSlider defaultNumber={1} step={1} max={50} min={1} ></InputSlider>
                        </Grid>
                        <Grid item md={6} >
                            <InputSlider defaultNumber={2} step={0.001} max={0.100} min={0.001}></InputSlider>
                        </Grid>
                        <Grid item md={12} sx={{mt:2}}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">Dropdown 3</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={'10'}
                                    label="DropDown 3"
                                    onChange={handleAgeChange}
                                    style={{textAlign: 'start'}}
                                >
                                    <MenuItem  value={10}>0.13</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
                <Divider sx={{mx:1}}/>
            <Accordion expanded={section3Expand} style={{  }} onChange={()=>{setSection3Expand(!section3Expand)}} >
                <AccordionSummary expandIcon={<ExpandMore />}
                                  aria-controls="panel3a-content"
                                  id="panel3a-header">
                    <Typography color="primary" style={{ fontSize:'14px', fontWeight: 'bold' }}>Section 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                        <Grid item md={12} sx={{mt:2}}>
                            <TextField
                                label="Dropdown 4"
                                id="outlined-start-adornment"
                                sx={{  }}
                                value={'150'}
                                fullWidth
                                size="small"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">Unit</InputAdornment>,
                                }}
                            />

                        </Grid>
                    </Grid>
                </AccordionDetails>

            </Accordion>
                <Divider sx={{mx:1}}/>
            <Accordion expanded={section4Expand} style={{  }} onChange={()=>{setSection4Expand(!section4Expand)}} >
                <AccordionSummary expandIcon={<ExpandMore />}
                                  aria-controls="panel4a-content"
                                  id="panel4a-header">
                    <Typography color="primary" style={{ fontSize:'14px', fontWeight: 'bold' }}>Section 4</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                        <Grid item md={6} >
                            <FormGroup>
                                <FormControlLabel  control={<Checkbox defaultChecked onChange={e => handleCheck(e,1)} />} label={<Typography style={{fontSize:'12px'}}>Show Component 1</Typography>} />
                                <FormControlLabel control={<Checkbox defaultChecked onChange={e => handleCheck(e,2)} />} label={<Typography style={{fontSize:'12px'}}>Show Component 3</Typography>} />
                            </FormGroup>

                        </Grid>
                        <Grid item md={6} >
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked onChange={e => handleCheck(e,3)} />} label={<Typography style={{fontSize:'12px'}}>Show Component 2</Typography>} />
                                <FormControlLabel control={<Checkbox defaultChecked onChange={e => handleCheck(e,4)} />} label={<Typography style={{fontSize:'12px'}}>Show Component 4</Typography>} />
                            </FormGroup>

                        </Grid>
                    </Grid>
                </AccordionDetails>

            </Accordion>
            </div>
            </div>
    )
}

export default FormTab;
