import React from 'react'
import PropTypes from 'prop-types'
import {RadialChart, DiscreteColorLegend} from 'react-vis';
import './chart.css'

const ChartRadial = (props)=>{
    return(
        <div className="charts">
            <RadialChart 
            FlexibleWidthXPlot
            data={props.data}
            width={props.chart.width}
            colorType='literal'
            height={props.chart.height}
            showLabels
            />
            <DiscreteColorLegend items={props.data.map(d => d.title)} colors={props.colors}/>
        </div>
    )
} 

ChartRadial.propTypes = {
    chart: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
}
export default ChartRadial
