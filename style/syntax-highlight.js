/**
 * Python Syntax Highlighter
 * Highlights Python code in <code class="language-python"> elements
 */
(function() {
  'use strict';

  // Python keywords, built-ins, and patterns
  const KEYWORDS = [
    'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue',
    'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from',
    'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not',
    'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'
  ];

  const BUILT_INS = [
    'True', 'False', 'None', 'self', 'cls',
    'print', 'len', 'range', 'str', 'int', 'float', 'list', 'dict', 'set',
    'tuple', 'bool', 'type', 'isinstance', 'issubclass', 'all', 'any',
    'sorted', 'map', 'filter', 'zip', 'enumerate', 'open', 'input'
  ];

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function highlightPython(code) {
    let result = escapeHtml(code);
    
    // Highlight comments (must be before strings to handle # in strings)
    result = result.replace(/(#[^\n]*)/g, '<span class="comment">$1</span>');
    
    // Highlight triple-quoted strings
    result = result.replace(/("""[\s\S]*?"""|'''[\s\S]*?''')/g, '<span class="string">$1</span>');
    
    // Highlight single/double quoted strings
    result = result.replace(/(&quot;(?:[^&]|&(?!quot;))*?&quot;|'(?:[^']|\\')*?')/g, '<span class="string">$1</span>');
    
    // Highlight decorators
    result = result.replace(/(@\w+)/g, '<span class="decorator">$1</span>');
    
    // Highlight numbers
    result = result.replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
    
    // Highlight keywords (must come after strings and comments)
    KEYWORDS.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
      result = result.replace(regex, (match, p1, offset, string) => {
        // Don't highlight if inside a span tag (already highlighted)
        if (string.substring(Math.max(0, offset - 50), offset).includes('<span')) {
          return match;
        }
        return `<span class="keyword">${p1}</span>`;
      });
    });
    
    // Highlight built-in functions and constants
    BUILT_INS.forEach(builtin => {
      const regex = new RegExp(`\\b(${builtin})\\b`, 'g');
      result = result.replace(regex, (match, p1, offset, string) => {
        // Don't highlight if inside a span tag
        if (string.substring(Math.max(0, offset - 50), offset).includes('<span')) {
          return match;
        }
        return `<span class="builtin">${p1}</span>`;
      });
    });
    
    // Highlight function definitions
    result = result.replace(/\b(def)\s+(\w+)/g, '<span class="keyword">$1</span> <span class="function">$2</span>');
    
    // Highlight class definitions
    result = result.replace(/\b(class)\s+(\w+)/g, '<span class="keyword">$1</span> <span class="class">$2</span>');
    
    return result;
  }

  // Apply highlighting when DOM is ready
  function init() {
    const codeBlocks = document.querySelectorAll('code.language-python');
    codeBlocks.forEach(block => {
      const originalCode = block.textContent;
      block.innerHTML = highlightPython(originalCode);
    });
  }

  // Run when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
