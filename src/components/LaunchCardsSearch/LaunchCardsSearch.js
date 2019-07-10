import React, { useContext } from 'react'
import clsx from 'clsx'
import Select from 'react-select'
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import MenuItem from '@material-ui/core/MenuItem'
import CancelIcon from '@material-ui/icons/Cancel'
import PropTypes from 'prop-types'
import './launchCardsSearch.scss'
import { LaunchContext, changeFilterCountries } from '../../contexts/LaunchProvider';

const suggestions = [
  { type:'country', value: 'USA', label: 'United States' },
  { type:'country', value: 'ARG', label: 'Argentina' },
  { type:'country', value: 'BGD', label: 'Bangladesh' },
  { type:'country', value: 'BGR', label: 'Bulgaria' },
  { type:'country', value: 'CAN', label: 'Canada' },
  { type:'country', value: 'FRA', label: 'France' },
  { type:'country', value: 'HKG', label: 'Hong Kong' },
  { type:'country', value: 'IDN', label: 'Indonesia' },
  { type:'country', value: 'ISR', label: 'Israel' },
  { type:'country', value: 'JPN', label: 'Japan' },
  { type:'country', value: 'LUX', label: 'Luxembourg' },
  { type:'country', value: 'MYS', label: 'Malaysia' },
  { type:'country', value: 'QAT', label: 'Qatar' },
  { type:'country', value: 'SAU', label: 'Saudi Arabia' },
  { type:'country', value: 'KOR', label: 'South Korea' },
  { type:'country', value: 'ESP', label: 'Spain' },
  { type:'country', value: 'THA', label: 'Thailand' },
  { type:'country', value: 'TKM', label: 'Turkmenistan' },
  { type:'country', value: 'TWN', label: 'Taiwan' },
  { type:'country', value: 'GBR', label: 'United Kingdom' },
]

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // height: 100,
    width: '40%',
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing(2),
  },
}))

function NoOptionsMessage(props) {
  return (
    <Typography
      color='textSecondary'
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
}

NoOptionsMessage.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
}

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  )
}

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  selectProps: PropTypes.object.isRequired,
}

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component='div'
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  )
}

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
}

function Placeholder(props) {
  return (
    <Typography
      color='textSecondary'
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
}

Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
}

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  )
}

ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  )
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool,
  removeProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  )
}

Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object,
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
}

export default function LaunchCardsSearch() {
  const classes = useStyles()
  const theme = useTheme()
  const [single, setSingle] = React.useState(null)
  const [multi, setMulti] = React.useState(null)
  const [state, dispatch] = useContext(LaunchContext)

  function handleChangeSingle(value) {
    setSingle(value)
  }

  function handleChangeMulti(value) {
    setMulti(value)
    dispatch(changeFilterCountries(value))
  }

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  }

  return (
    <div className={classes.root}>
      <Select
        classes={classes}
        styles={selectStyles}
        inputId='react-select-multiple'
        TextFieldProps={{
          label: 'Search by Country',
          InputLabelProps: {
            htmlFor: 'react-select-multiple',
            shrink: true,
          },
          placeholder: 'Select multiple countries',
        }}
        options={suggestions}
        components={components}
        value={multi}
        onChange={handleChangeMulti}
        isMulti
      />
    </div>
  )
}
