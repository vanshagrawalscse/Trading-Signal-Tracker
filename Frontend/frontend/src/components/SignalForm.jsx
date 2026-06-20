import React, { useState } from 'react';
import { createSignal } from '../api/signalService';

export default function SignalForm({ onSignalCreated }) {
  const [formData, setFormData] = useState({
    symbol: '',
    direction: 'BUY',
    entryPrice: '',
    stopLoss: '',
    targetPrice: '',
    entryTime: '',
    expiryTime: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
        symbol: formData.symbol,
        direction: formData.direction,
        entry_price: formData.entryPrice,
        stop_loss: formData.stopLoss,
        target_price: formData.targetPrice,
        entry_time: formData.entryTime,
        expiry_time: formData.expiryTime
    };
    try {
        await createSignal(payload);
        if (typeof onSignalCreated === 'function') {
            onSignalCreated();
        }
    } catch (err) {
        console.error("Submission failed:", err.response?.data || err.message);
        alert("Check console for error details");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="signal-form">
        <div className="input-grid">
          <input type="text" placeholder="Symbol" value={formData.symbol} onChange={(e) => setFormData({...formData, symbol: e.target.value})} required />
          <select value={formData.direction} onChange={(e) => setFormData({...formData, direction: e.target.value})}>
            <option value="BUY">BUY</option>
            <option value="SELL">SELL</option>
          </select>
          <input type="number" placeholder="Entry Price" value={formData.entryPrice} onChange={(e) => setFormData({...formData, entryPrice: e.target.value})} required />
          <input type="number" placeholder="Stop Loss" value={formData.stopLoss} onChange={(e) => setFormData({...formData, stopLoss: e.target.value})} required />
          <input type="number" placeholder="Target Price" value={formData.targetPrice} onChange={(e) => setFormData({...formData, targetPrice: e.target.value})} required />
          <input type="datetime-local" value={formData.entryTime} onChange={(e) => setFormData({...formData, entryTime: e.target.value})} required />
          <input type="datetime-local" value={formData.expiryTime} onChange={(e) => setFormData({...formData, expiryTime: e.target.value})} required />
        </div>
        <button type="submit" className="submit-btn">Create Signal</button>
      </form>
    </div>
  );
}