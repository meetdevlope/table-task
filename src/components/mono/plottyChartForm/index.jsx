import * as React from 'react';
import {FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
function PlottlyChartForm() {
    return (
        <Grid container direction="row" justifyContent="space-between" spacing={2} mt={'-8px'} ml={'-30px'}>
            <Grid item xs={6}>
                <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Dropdown 3</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={'10'}
                        label="Dropdown 1"
                        style={{textAlign: 'start', height:'31px', fontSize:'12px' }}
                    >
                        <MenuItem  value={10}>Value</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Decimal Value 1"
                    id="outlined-start-adornment"
                    sx={{  }}
                    value={'0.1501'}
                    fullWidth
                    size="small"
                    InputProps={{
                        endAdornment: <InputAdornment className="MuiInputAdornment-sizeSmall" position="end" style={{ fontSize:'12px' }} >meters</InputAdornment>,
                    }}
                    inputProps={{
                        style: {
                          height: "15px", fontSize:'12px'
                        },
                      }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Decimal Value 2"
                    id="outlined-start-adornment"
                    sx={{  }}
                    value={'1'}
                    fullWidth
                    size="small"
                    inputProps={{
                        style: {
                          height: "15px", fontSize:'12px'
                        },
                      }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Decimal Value 3"
                    id="outlined-start-adornment"
                    sx={{  }}
                    value={'0.0001'}
                    fullWidth
                    size="small"
                    inputProps={{
                        style: {
                          height: "15px", fontSize:'12px'
                        },
                      }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Decimal Value 4"
                    id="outlined-start-adornment"
                    sx={{  }}
                    value={'1'}
                    fullWidth
                    size="small"
                    InputProps={{
                      endAdornment: <InputAdornment className="MuiInputAdornment-sizeSmall" position="end" style={{ fontSize:'12px' }} >Unit</InputAdornment>,
                  }}
                    inputProps={{
                        style: {
                          height: "15px", fontSize:'12px'
                        },
                      }}
                />
            </Grid>
            <Grid item xs={6}>
                  <TextField
                    label="Decimal Value 5"
                    id="outlined-start-adornment"
                    sx={{  }}
                    value={'20'}
                    fullWidth
                    size="small"
                    InputProps={{
                      endAdornment: <InputAdornment className="MuiInputAdornment-sizeSmall" position="end" style={{ fontSize:'12px', color:'#707070' }} >Unit</InputAdornment>,
                    }}
                    inputProps={{
                        style: {
                          height: "15px", fontSize:'12px'
                        },
                      }}
                  />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Background Color"
                    id="outlined-start-adornment"
                    sx={{  }}
                    value={'#ff0000'}
                    fullWidth
                    size="small"
                    InputProps={{
                      endAdornment: <InputAdornment className="MuiInputAdornment-sizeSmall" position="end" style={{ fontSize:'12px', backgroundColor:'#ff0000', width:'16px', height:'16px', borderRadius:'3px', border:'1px solid #EEEEEE' }} ></InputAdornment>,
                    }}
                    inputProps={{
                        style: {
                          height: "15px", fontSize:'12px'
                        },
                      }}
                />
            </Grid>
            <Grid item xs={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Color By</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={'10'}
                        label="Dropdown 1"
                        style={{textAlign: 'start', height:'31px', fontSize:'12px' }}
                    >
                        <MenuItem  value={10}>Value</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Size"
                    id="outlined-start-adornment"
                    sx={{  }}
                    value={'5'}
                    fullWidth
                    size="small"
                    inputProps={{
                        style: {
                          height: "15px", fontSize:'12px'
                        },
                      }}
                />
            </Grid>
            <Grid item xs={6}>
                  <TextField
                    label="Decimal Value 6"
                    id="outlined-start-adornment"
                    sx={{  }}
                    value={'30'}
                    fullWidth
                    size="small"
                    InputProps={{
                      endAdornment: <InputAdornment className="MuiInputAdornment-sizeSmall" position="end" style={{ fontSize:'12px' }} >Unit</InputAdornment>,
                    }}
                    inputProps={{
                        style: {
                          height: "15px", fontSize:'12px'
                        },
                      }}
                  />
            </Grid>
        </Grid>
    )
}

export default PlottlyChartForm
