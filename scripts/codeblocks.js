// scripts/codeblocks.js
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('div[class*="language-"]').forEach(div => {
    // Get language from class
    const languageClass = Array.from(div.classList).find(c => c.startsWith('language-'));
    const language = languageClass ? languageClass.replace('language-', '') : 'code';

    // Create container div
    const container = document.createElement('div');
    container.className = 'code-block-container';
    
    // Create header with language
    const header = document.createElement('div');
    header.className = 'code-block-header';
    header.textContent = language;

    // Create copy button
    const copyButton = document.createElement('div');
    copyButton.className = 'code-copy-button';
    copyButton.textContent = 'Copy';
    
    // Set up copy functionality
    copyButton.addEventListener('click', () => {
      const code = div.querySelector('code').innerText;
      navigator.clipboard.writeText(code).then(() => {
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      });
    });

    // Wrap the div in container
    div.parentNode.insertBefore(container, div);
    container.appendChild(header);
    container.appendChild(div);
    container.appendChild(copyButton);
  });
});