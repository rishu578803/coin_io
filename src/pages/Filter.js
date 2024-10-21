import React from 'react';

const Filter = ({ handleVolumeChange }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-end">
        <div className="col-sm-2">
        <div className="form-group mt-3">
    <label htmlFor="tradeVolume" className='filterTradeVolumeLabel'>Filter by Trade Volume </label>
    <select
      className="form-control"
      id="tradeVolume"
      onChange={(e)=>handleVolumeChange(e.target.value)}>
      <option value="select">All</option>
      <option value="1 million - 20 million">1 million - 20 million</option>
      <option value="20 million - 50 million">20 million - 50 million</option>
      <option value="50 million - 80 million">50 million - 80 million</option>
      <option value="80 million - 1 billion">80 million - 1 billion</option>
      <option value="1 billion - 20 billion">1 billion - 20 billion</option>
    </select>

    </div>
        </div>
      </div>
    </div>

  );
};

export default Filter;
