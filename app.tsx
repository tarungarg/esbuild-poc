import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { AddToCart } from './dist/addToCart/addToCart';

export function App() {}

const root = createRoot(document.getElementById('root'));
root.render(<AddToCart />);
