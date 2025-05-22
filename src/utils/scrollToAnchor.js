/**
 * Scrolls smoothly to the element with the given ID
 * @param {string} id - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top (default: 100px to account for fixed header)
 */
export const scrollToAnchor = (id, offset = 100) => {
  // Remove the # if it exists in the id
  const targetId = id.startsWith('#') ? id.substring(1) : id;
  
  const element = document.getElementById(targetId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Focus the element for accessibility
    setTimeout(() => {
      element.setAttribute('tabindex', '-1');
      element.focus({ preventScroll: true });
    }, 1000);
  }
};

/**
 * Checks if a URL contains an anchor and scrolls to it if it does
 * @param {string} url - The URL to check for anchors
 */
export const handleUrlWithAnchor = (url) => {
  if (url.includes('#')) {
    const anchorId = url.split('#')[1];
    if (anchorId) {
      setTimeout(() => {
        scrollToAnchor(anchorId);
      }, 300); // Small delay to ensure page has loaded
    }
  }
};

/**
 * Adds click event listeners to all anchor links on a page
 */
export const setupAnchorScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      if (href !== '#') {
        scrollToAnchor(href);
      }
    });
  });
}; 