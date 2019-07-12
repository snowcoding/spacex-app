import React from 'react'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  popOverText: {
    padding: theme.spacing(2),
    maxWidth: 300,
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
  helperText: {
    color: colors.blue,
  },
}))

export default function ChartYaxisLabel(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { yAxisLabel } = props

  function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget)
  }

  function handlePopoverClose() {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <div>
      <Typography
        variant='h5'
        color='primary'
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup='true'
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {yAxisLabel.title}
      </Typography>
      {Object.values(yAxisLabel).includes('Launches Per Year') ? (
        <Typography color='primary' variant='caption'>
          Hover for more info
        </Typography>
      ) : null}
      <Popover
        id='mouse-over-popover'
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography className={classes.popOverText}>
          {yAxisLabel.popover}
          {/* Come up with a way to link to the wikipedia page */}
          {/* {yAxisLabel.link ? yAxisLabel.link() : null} */}
        </Typography>
      </Popover>
    </div>
  )
}
