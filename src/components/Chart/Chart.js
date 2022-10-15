import Chartbar from './Chartbar'
import './Chart.css'
function Chart(props) {

    const datapointvalues =props.datapoints.map(datapoint=>datapoint.value)
    const totalmax=Math.max(...datapointvalues);

    return <div class="chart">
   { props.datapoints.map((datapoints) => (
        <Chartbar
        key={datapoints.label}
        value={datapoints.value} 
        maxvalue={totalmax}
        label={datapoints.label} />
    ))}
    </div>

}
export default Chart;
