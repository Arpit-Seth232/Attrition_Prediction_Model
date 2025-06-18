import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';



const COLORS = ['#FF6B6B', '#4CAF50']; // red for leave, green for stay

export default function ProbabilityPieChart({probabibility}) {

    const data = [
  { name: 'Will Leave', value: probabibility },
  { name: 'Will Stay', value: 1-probabibility }
];
  return (
    <PieChart width={500} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={({ name, percent }) =>
          `${name}: ${(percent * 100).toFixed(1)}%`
        }
        outerRadius={100}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip formatter={(value) => `${(value * 100).toFixed(1)}%`} />
      <Legend />
    </PieChart>
  );
}
