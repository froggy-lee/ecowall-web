import { Line } from 'react-chartjs-2'
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

function LineChart(props) {
  const { title, colorTitle, labels, nameData, data } = props
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          // This more specific font property overrides the global property
        }
      },
      title: {
        display: true,
        text: title,
        color: colorTitle ? colorTitle : 'white'
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
        max: 1.5,
        ticks: {
          stepSize: 0.5,
          color: '#8C9ABC'
        },
        grid: {
          display: false,
          borderColor: '#8C9ABC'
        }
      }
    }
  }

  const dataChart = {
    labels: labels ? labels : [],
    datasets: [
      {
        label: nameData,
        data: data ? data : [],
        borderColor: '#F9B938',
        backgroundColor: 'rgba(0,0,0,0.1)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 8,
        borderWidth: 1.5
      }
    ]
  }
  return (
    <>
      <Line options={options} data={dataChart} />
    </>
  )
}

export default LineChart
