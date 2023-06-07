"use client";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	LineElement,
	Legend,
	CategoryScale,
	LinearScale,
	PointElement,
	Filler,
} from "chart.js";

ChartJS.register(
	Title,
	Tooltip,
	LineElement,
	Legend,
	CategoryScale,
	LinearScale,
	PointElement,
	Filler,
);


function LineChart() {
	


	const [data, setData] = useState({
		labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
		datasets: [
			{
				responsive: true,
				label: "",
				data: [10, 20, 30, 42, 51, 42, 49, 46, 61, 43, 21, 30],
				backgroundColor: '#6f4ff217',
				borderColor: "#6F4FF2",
				tension: .1,
				fill: true,
				pointStyle: "rect",
				pointBorderColor: "#6F4FF2",
				pointBackgroundColor: "#6F4FF2",
				showLine: true,
				Tooltip: "false",
				borderWidth: 3,
				pointStyle: "circle",
			},
		],
	});

	const options = {
		responsive: true, // Make the chart responsive
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false, // Hide the chart label
			},
			
		},
		scales: {
			y: {
				grid: {
					display: false, // hide the vertical grid lines
				},
				ticks: {
					color: '#6F4FF2', // Set the color of the vertical numbers to red
				  },
			},
			x: {
				grid: {
					display: false, // hide the horizontal grid lines
				},
				ticks: {
					color: '#6F4FF2', // Set the color of the vertical numbers to red
				  },
			},
		
		},
	};

	return (
		<div className="mt-5 h-full w-full">
			<Line data={data} options={options}></Line>
		</div>
	);
}

export default LineChart;
