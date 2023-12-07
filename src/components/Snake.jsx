/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

function Snake({ position }) {
  return (
    <div
      className="snake"
      style={{ left: `${position.x * 20}px`, top: `${position.y * 20}px` }}
    ></div>
  );
}

export default Snake;
