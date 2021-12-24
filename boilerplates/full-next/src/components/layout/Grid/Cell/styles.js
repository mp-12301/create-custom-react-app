const styles = ({ props }) => {
  const { width, height, top, left, center, area, middle } = props 

  return {
    container: {
      height: '100%',
      minWidth: 0,
      gridColumnEnd: `span ${width ?? 1}`,
      gridRowEnd: `span ${height ?? 1}`,
      gridColumnStart: left,
      gridRowstart: top,
      textAlign: center,
      gridArea: area,

      ...(middle ? {
        display: 'inline-flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        justifySelf: 'stretch',
      } : {})
    }
  }
}

export default styles