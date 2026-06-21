import { useEffect, useState } from 'react';
import { getSignals } from '../api/signalService';

export default function SignalTable() {
  const [signals, setSignals] = useState([]);

  const fetchData = async () => {
    const { data } = await getSignals();
    setSignals(data);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15000); // 15s refresh [cite: 48]
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Symbol</th>
            <th className="py-2 px-4 border-b">Direction</th>
            <th className="py-2 px-4 border-b">Entry</th>
            <th className="py-2 px-4 border-b">Target</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">ROI %</th>
          </tr>
        </thead>
        <tbody>
          {signals.map((s) => (
            <tr key={s.id} className="text-center border-b">
              <td className="py-2">{s.symbol}</td>
              <td className={`py-2 font-bold ${s.direction === 'BUY' ? 'text-buy' : 'text-sell'}`}>
                {s.direction}
              </td>
              <td className="py-2">{s.entry_price}</td>
              <td className="py-2">{s.target_price}</td>
              <td className="py-2">{s.status}</td>
              <td className="py-2">{s.realized_roi || 0}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}