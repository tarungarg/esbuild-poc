import React, { useEffect } from 'react';

export function PdpCard() {
  useEffect(() => {
    setTimeout(() => {
      console.log('hi');
    }, 3000);
  }, []);
  return <div>pdpCard</div>;
}
