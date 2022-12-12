function getTouchPos(canvas, e) {
  const rect = canvas.getBoundingClientRect();

  return {
    x: e.touches[0].clientX - rect.left,
    y: e.touches[0].clientY - rect.top,
  };
}

export default getTouchPos;
