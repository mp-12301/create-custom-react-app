import PropTypes from "prop-types"

import stylesheets from './styles'

import { useTheme } from '../../../hooks/theme'

const Cell = (props) => {
  const styles = useTheme(stylesheets, props)

  return (
    <div
      css={styles.container}
      className={props.className}
    >{props.children}</div>
  )
}

Cell.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  middle: PropTypes.bool,
  center: PropTypes.bool,
  area: PropTypes.string
};

export default Cell;