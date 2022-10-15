import './Chartbar.css'

function Chartbar(props){

    let barfillheight='0%';

    if(props.maxvalue>0){
         barfillheight=Math.round((props.value/props.maxvalue) * 100)+'%';
    }

return <div class="chart-bar">
<div class="chart-bar__inner">
<div class="chart-bar__fill" style={{ height: barfillheight }}> </div> 
</div>
<div class="chart-bar__label">{props.label}</div>
</div>
}
export default Chartbar;
