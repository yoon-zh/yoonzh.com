// scripts/circuits.js
function initCircuits() {
  document.querySelectorAll('[data-circuit-container]').forEach(async (container) => {
    try {
      const jsonScript = container.querySelector('[data-circuit-content]');
      if (!jsonScript) {
        throw new Error('Missing circuit JSON script');
      }
      
      const netlistData = JSON.parse(jsonScript.textContent.trim());
      
      const svg = await netlistsvg.render(
        netlistsvg.analogSkin,
        netlistData,
        {
          elk: {
            defaultPadding: 10,
            algorithms: ['layered']
          }
        }
      );
      
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svg, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;
      svgElement.setAttribute('class', 'circuit-svg');

      const originalWidth = parseFloat(svgElement.getAttribute('width'));
      const originalHeight = parseFloat(svgElement.getAttribute('height'));
      const scaleFactor = 1.5;
      svgElement.setAttribute('viewBox', `0 0 ${originalWidth} ${originalHeight}`);
      svgElement.setAttribute('width', originalWidth * scaleFactor);
      svgElement.setAttribute('height', originalHeight * scaleFactor);

      container.innerHTML = '';
      container.appendChild(svgElement);
    }
    catch (error) {
      console.error(`Circuit ${container.id} failed:`, error);
      container.innerHTML = `
        <div class="circuit-error">
          Error rendering circuit: ${error.message}
        </div>
      `;
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCircuits);
}
else {
  initCircuits();
}
