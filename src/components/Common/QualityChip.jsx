import { Grid, Chip } from '@material-ui/core'

export default function QualityChip({ item, selectedQualities , handleSelect}) {
    return (
        <Grid  item xs={4}>
            <Chip
                color={selectedQualities.includes(item.id) ? 'secondary' : 'default'}
                key={item.id}
                label={item.name}
                onClick={() => handleSelect(item.id)}
            />
        </Grid>
    )
}