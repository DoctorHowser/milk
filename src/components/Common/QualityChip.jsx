import { Grid, Chip, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    chip : {
        marginBottom : '5px' 
    }
})

export default function QualityChip({clickable = true, item, selectedQualities , handleSelect}) {
   const styles = useStyles()
    return (
        <Grid item xs={4}>
            <Chip
                className={styles.chip}
                color={selectedQualities.includes(item.id) ? 'secondary' : 'default'}
                key={item.id}
                clickable={clickable}
                label={item.name}
                onClick={() => handleSelect(item.id)}
            />
        </Grid>
    )
}