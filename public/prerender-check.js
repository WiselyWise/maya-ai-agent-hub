
// Check if all critical resources are loaded and ready for prerendering
(function() {
  let readyChecks = 0;
  const maxChecks = 50; // 5 seconds max wait
  
  function checkReady() {
    readyChecks++;
    
    // Check if React has rendered
    const hasContent = document.querySelector('main') || document.querySelector('[data-testid]') || document.querySelector('.container');
    
    // Check if critical CSS is loaded
    const hasStyles = document.querySelector('style') || document.styleSheets.length > 0;
    
    // Check if our custom ready signal is set
    const customReady = window.prerenderReady;
    
    console.log(`[PRERENDER CHECK ${readyChecks}] Content: ${!!hasContent}, Styles: ${!!hasStyles}, Custom: ${!!customReady}`);
    
    if (hasContent && hasStyles && (customReady || readyChecks > 20)) {
      console.log('[PRERENDER] Page is ready for prerendering');
      window.prerenderReady = true;
      return;
    }
    
    if (readyChecks < maxChecks) {
      setTimeout(checkReady, 100);
    } else {
      console.log('[PRERENDER] Timeout reached, proceeding with prerender');
      window.prerenderReady = true;
    }
  }
  
  // Start checking when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkReady);
  } else {
    checkReady();
  }
})();
