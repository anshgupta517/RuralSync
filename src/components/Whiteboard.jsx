import React, { useRef, useEffect, useState } from 'react';
import { Pen, Square, Circle, Type, Eraser, Download, Palette } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('pen');
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(2);
  const { t } = useLanguage();

  const colors = [
    '#000000', '#ff0000', '#00ff00', '#0000ff', 
    '#ffff00', '#ff00ff', '#00ffff', '#ffffff'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // Set context properties
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color, lineWidth]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    setIsDrawing(true);
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    ctx.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const link = document.createElement('a');
    link.download = 'whiteboard-drawing.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="text-lg font-bold text-gray-900">{t('interactiveWhiteboard')}</h3>
        <p className="text-gray-600 text-sm mt-1">{t('drawAndExplain')}</p>
      </div>
      
      <div className="p-4 flex flex-wrap gap-2 border-b">
        <button 
          onClick={() => setTool('pen')}
          className={`p-2 rounded ${tool === 'pen' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
          title={t('pen')}
        >
          <Pen size={18} />
        </button>
        <button 
          onClick={() => setTool('rectangle')}
          className={`p-2 rounded ${tool === 'rectangle' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
          title={t('rectangle')}
        >
          <Square size={18} />
        </button>
        <button 
          onClick={() => setTool('circle')}
          className={`p-2 rounded ${tool === 'circle' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
          title={t('circle')}
        >
          <Circle size={18} />
        </button>
        <button 
          onClick={() => setTool('text')}
          className={`p-2 rounded ${tool === 'text' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
          title={t('text')}
        >
          <Type size={18} />
        </button>
        <button 
          onClick={() => setTool('eraser')}
          className={`p-2 rounded ${tool === 'eraser' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
          title={t('eraser')}
        >
          <Eraser size={18} />
        </button>
        
        <div className="flex items-center ml-2">
          <Palette size={18} className="text-gray-600 mr-2" />
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`w-6 h-6 rounded-full mx-1 border ${color === c ? 'border-gray-800' : 'border-gray-300'}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        
        <input
          type="range"
          min="1"
          max="20"
          value={lineWidth}
          onChange={(e) => setLineWidth(e.target.value)}
          className="mx-2"
        />
        
        <button 
          onClick={clearCanvas}
          className="ml-auto px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
        >
          {t('clear')}
        </button>
        <button 
          onClick={downloadCanvas}
          className="px-3 py-1 bg-green-100 text-green-600 rounded hover:bg-green-200 flex items-center"
        >
          <Download size={16} className="mr-1" /> {t('save')}
        </button>
      </div>
      
      <div className="p-4">
        <canvas
          ref={canvasRef}
          className="w-full h-96 border rounded cursor-crosshair bg-white"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>
    </div>
  );
};

export default Whiteboard;