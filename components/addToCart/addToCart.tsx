import React, { useEffect, Suspense, lazy, useState } from 'react';
const PdpCardA = lazy(() => import('./../pdpCard/pdpCard').then((module) => ({ default: module.PdpCard })));
// let { NameCard } = await import('./../nameCard/nameCard');
// const ScreensProductList = lazy(() => import('./../pdpCard/pdpCard'));

export function AddToCart() {
  let a = 1;
  let b = 2;
  let c = (a ??= b);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    console.log('ww', process.env.NODE_ENV, is_Production);
    if (!(window as any).IS_PRODUCTION) {
      new EventSource('/esbuild').addEventListener('change', () => location.reload());
    }
  }, []);

  const clickMe = async () => {
    await import('./../nameCard/nameCard');
  };

  return (
    <div>
      addToCart!!!!!!!!!!
      <label>
        <input type="checkbox" checked={showPreview} onChange={(e) => setShowPreview(e.target.checked)} />
        Show preview
      </label>
      <button onClick={() => clickMe()}>Click Lazy Load!!!!!!!</button>
      {showPreview && (
        <Suspense fallback={<span>Loading...</span>}>
          <h2>Preview</h2>
          <PdpCardA />
          {/* <NameCard /> */}
        </Suspense>
      )}
    </div>
  );
}
