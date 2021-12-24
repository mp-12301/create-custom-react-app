import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

import stylesheets from './styles.js'

export default function HomeContainer() {
  const styles = stylesheets()

  return (
    <div css={{
      backgroundColor: 'grey',
      padding: 16,
      width: 600,
      height: 300,
      display: 'flex',
    }}>
      <Grid css={{flex: 1}} columns={1} gap={16} flow={'column'} >
        <Cell css={{backgroundColor: 'pink'}} width={1} height={1}>bar</Cell>
        <Cell css={{backgroundColor: 'pink'}} width={2} height={5}>bar</Cell>
      </Grid>
    </div>
  )
}