const frGetter = value =>
  typeof value === "number" ? `repeat(${value}, 1fr)` : value;

const formatAreas = areas => areas.map(area => `"${area}"`).join(" ");

const styles = ({ props }) => {
  const { height, flow, minRowHeight, columns, gap, columnGap, rowGap, areas, justifyContent, alignContent } = props

  return {
    container: {
      display: 'grid',
      height: height ?? 'auto',
      gridAutoFlow: flow ?? 'row',
      gridAutoRows: minRowHeight ? `minmax(${minRowHeight}, auto)` : 20,
      gridTemplateRows:  frGetter(columns ?? 12),
      gridGap: gap,
      columnGap: columnGap,
      rowGap: rowGap,
      gridTemplateAreas: formatAreas(areas ?? []),
      justifyContent: justifyContent,
      alignContent: alignContent,
    }
  }
}

export default styles