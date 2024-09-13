//strike function is to draw the strike when one player wins (X or O).

function Strike({ strikeClass }) {
  return <div className={`strike ${strikeClass}`}></div>;
}

export default Strike;
