// Load header
fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  });

// Load footer
fetch('components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });

// Resume functions //

// Download Resume
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'assets/images/Resume.png';  // Ensure this path is correct
  link.download = 'Resume.png';
  link.click();
}

// Print Resume
function printResume() {
  // Directly target the image element you want to print
  const resumeImage = document.querySelector('#myCvImage');

  if (!resumeImage) {
      alert("No image found to print!");
      return;
  }

  // Open a new window for printing
  const printWindow = window.open('', '_blank', 'height=600,width=800');

  if (!printWindow || printWindow.closed || typeof printWindow.closed == 'undefined') { 
      alert("Popup blocked or failed to open!");
      return;
  }

  // Write the content to the new window
  printWindow.document.write('<html><head><title>Print Resume</title><style>');

  // Add CSS to ensure the image fits on one page and no background duplication
  printWindow.document.write(`
      @media print {
          body {
              margin: 0;
              padding: 0;
              text-align: center;
              background: none !important; /* Remove any background */
          }
          img {
              max-width: 100%;
              height: auto;
              page-break-inside: avoid;
          }
          @page {
              size: A4; /* Use A4 or adjust as needed */
              margin: 0;
          }
      }
  `);

  printWindow.document.write('</style></head><body>');

  // Inject only the image into the new window
  printWindow.document.write('<img src="' + resumeImage.src + '" style="max-width:100%; height:auto;">');

  printWindow.document.write('</body></html>');
  printWindow.document.close();

  // Wait for the content to load before printing
  printWindow.onload = function() {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
  };
}







