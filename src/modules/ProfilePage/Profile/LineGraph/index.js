import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import * as S from './styles'
import { formatDateMonth } from '/src/utils'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      labels: {}
    },
    title: {
      display: true,
      text: 'Recent Earnings (7day)',
      color: 'white'
    }
  },

  scales: {
    x: {
      display: true,
      ticks: {
        color: '#8C9ABC'
      },
      grid: {
        display: false,
        borderColor: '#8C9ABC'
      }
    },
    y: {
      display: true,
      min: 0,
      ticks: {
        color: '#8C9ABC'
      },
      grid: {
        display: false,
        borderColor: '#8C9ABC'
      }
    }
  }
}

function LineGrap(props) {
  const [dataChart, setDataChart] = useState({
    labels: [],
    datasets: [
      {
        label: 'Coin',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: '#F9B938',
        backgroundColor: 'rgba(0,0,0,0.1)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 8,
        borderWidth: 1.5
      }
    ]
  })
  const { data } = props

  useEffect(() => {
    const newLabel = data?.map(day => {
      return formatDateMonth(day?.createdAt)
    })
    const newData = data?.map(point => {
      return point?.point
    })
    setDataChart({
      ...dataChart,
      labels: newLabel?.reverse(),
      datasets: [
        {
          label: 'Coin',
          data: newData?.reverse(),
          borderColor: '#F9B938',
          backgroundColor: 'rgba(0,0,0,0.1)',
          pointStyle: 'circle',
          pointRadius: 5,
          pointHoverRadius: 8,
          borderWidth: 1.5
        }
      ]
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  return (
    <S.Wrapper>
      <Line options={options} data={dataChart} />
    </S.Wrapper>
  )
}

export default LineGrap
