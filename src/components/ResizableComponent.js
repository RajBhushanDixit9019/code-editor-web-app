import React, { useRef, useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

const ResizableComponent = () => {
  const elementRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = throttle((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    }, 100); // Throttle delay in milliseconds

    const resizeObserver = new ResizeObserver(handleResize);

    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        resizeObserver.unobserve(elementRef.current);
      }
      handleResize.cancel(); // Clean up throttle
    };
  }, []);

  return (
    <div ref={elementRef} style={{ width: '100%', height: '100%' }}>
      {/* Content goes here */}
    </div>
  );
};

export default ResizableComponent;
