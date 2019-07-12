import React from 'react'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '@material-ui/core'
import './chartYaxisLabel.scss'

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
      <a id={yAxisLabel.anchor}>
      <div className='y-axis-label'>
        <Typography variant='h5' color='primary' className='title'>
          {yAxisLabel.title}
        </Typography>
        <i
          className='fas fa-info-circle'
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup='true'
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        />
      </div></a>
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
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
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
