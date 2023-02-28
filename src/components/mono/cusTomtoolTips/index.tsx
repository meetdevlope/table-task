import Tooltip, {tooltipClasses, TooltipProps} from "@mui/material/Tooltip";
import {styled} from "@mui/material/styles";
import * as React from "react";

interface ToolTipCustomProps extends TooltipProps {
    top?: number;
}
export  const HtmlTooltip = styled(({ className, ...props }: ToolTipCustomProps) => (
    <Tooltip top {...props} classes={{ popper: className }} />
))(({ theme,top }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#181789',
        color: '##FFFFFF',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(10),
        border: '1px solid #dadde9',
        borderTopRightRadius:'20px',
        borderBottomRightRadius:'20px',
        borderBottomLeftRadius:'20px',
        marginRight:'50px !important',
        marginTop:top??'10'+'px',
        marginLeft:'0 !important'
    },
}));

export  const HTMLToolTipBottomLeft = styled(({ className, ...props }: ToolTipCustomProps) => (
    <Tooltip top {...props} classes={{ popper: className }} />
))(({ theme,top }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#181789',
        color: '##FFFFFF',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(10),
        border: '1px solid #dadde9',
        borderTopLeftRadius:'20px',
        borderBottomRightRadius:'20px',
        borderBottomLeftRadius:'20px',
        marginRight:'10px !important',
        marginTop:top??'7'+'px !important',
        // marginLeft:'0 !important'
    },
}));

export  const HTMLToolTipBottomRight = styled(({ className, ...props }: ToolTipCustomProps) => (
    <Tooltip top {...props} classes={{ popper: className }} />
))(({ theme,top }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#181789',
        color: '##FFFFFF',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(10),
        border: '1px solid #dadde9',
        borderTopRightRadius:'20px',
        borderBottomRightRadius:'20px',
        borderBottomLeftRadius:'20px',
        // marginRight:'10px !important',
        marginTop:top??'0'+'px !important',
        marginLeft:'30px !important'
    },
}));
