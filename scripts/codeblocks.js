// scripts/codeblocks.js
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('pre').forEach(pre => {
    // Get language from class
    const languageClass = Array.from(pre.classList).find(c => c.startsWith('language-'));
    const language = languageClass ? languageClass.replace('language-', '') : 'code';

    // Create container div
    const container = document.createElement('div');
    container.className = 'code-block-container';
    
    // Create header with language
    const header = document.createElement('div');
    header.className = 'code-block-header';
    header.textContent = language.toUpperCase();

    // Create copy button
    const copyButton = document.createElement('div');
    copyButton.className = 'code-copy-button';
    copyButton.textContent = 'Copy';
    
    // Set up copy functionality
    copyButton.addEventListener('click', () => {
      const code = pre.querySelector('code').innerText;
      navigator.clipboard.writeText(code).then(() => {
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      });
    });

    // Wrap the pre in container
    pre.parentNode.insertBefore(container, pre);
    container.appendChild(header);
    container.appendChild(pre);
    container.appendChild(copyButton);
  });
});