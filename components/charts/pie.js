// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'
import React from 'react'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
    let total = 0
    dataWithArc.forEach(datum => {
        total += datum.value
    })

    return (
        <text
            x={centerX}
            y={centerY}
            textAnchor="middle"
            dominantBaseline="central"
            style={{
                fontSize: '10px',
                fontWeight: 600,
            }}
        >
            {total}
        </text>
    )
}

const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        margin={{ top:0, right:175, bottom:0, left: 250}}
        startAngle={-180}
        innerRadius={0.75}
        padAngle={0.3}
        cornerRadius={3}
        activeOuterRadiusOffset={0}
        activeInnerRadiusOffset={5}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        enableArcLinkLabels={true}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'brighter', 10 ] ] }}
        colors={['#dae2e3','#02aeff','#ffc413','#005ada','#212121']}
        enableArcLabels={false}
        arcLinkLabel={d => `${d.id} (${d.formattedValue})`}
        
    />
)

export default MyResponsivePie