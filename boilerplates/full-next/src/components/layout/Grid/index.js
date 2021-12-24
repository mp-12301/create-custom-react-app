import PropTypes from "prop-types"

import stylesheets from './styles'

import { useTheme } from '../../../hooks/theme'

const Grid = (props) => {
  console.log(props)
  const styles = useTheme(stylesheets, props)

  return (
    <div
      css={styles.container}
      className={props.className}
    >{props.children}</div>
  )
}

Grid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gap: PropTypes.string,
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  height: PropTypes.string,
  minRowHeight: PropTypes.string,
  flow: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  areas: PropTypes.arrayOf(PropTypes.string),
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string
};

export default Grid;