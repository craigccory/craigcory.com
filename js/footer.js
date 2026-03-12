// Script to update Footer Text
window.onload = function() {
  var textElement = document.getElementById("footer-text");
  if (textElement) {
    textElement.innerText = "\u00A9 1958, 2026 craigcory.com";
  }
};

// Original: "\u00A9 1990-2026 Cory-Net"
// \u00A9 1990\u20102026 Cory-Net 
// \uooA9 is copyright symbol, \u2010 is a dash (-)


// -----------------------------------------------------------------
// Add "Return" footer flexibility:
/* window.onload = function() {
  var textElement = document.getElementById("return-text");
  if (textElement) {
    textElement.innerText = "<a href="../../../archives/archives.html" style="Back to Archives">to archives: color-#ffff00</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../../index.Current.html" style="color: #ffff00; font-size: 20px;">HOME</a>
<p>";
  }
}; */