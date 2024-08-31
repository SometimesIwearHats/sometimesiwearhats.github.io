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
  const printContent = document.querySelector('#resumeModal .modal-body').innerHTML;

  // Create a new window for printing
  const printWindow = window.open('', '', 'height=500,width=800');
  printWindow.document.write('<html><head><title>Print Resume</title>');
  printWindow.document.write('</head><body >');
  printWindow.document.write(printContent);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}
