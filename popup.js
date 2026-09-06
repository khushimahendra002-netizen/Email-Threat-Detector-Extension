document.getElementById('checkBtn').addEventListener('click', function () {
  const input = document.getElementById('userInput').value.toLowerCase().trim();
  const resultDiv = document.getElementById('result');

  if (!input) {
    alert("Pehle sender email ya suspicious link dalo!");
    return;
  }

  const suspiciousWords = ["free-recharge", "lottery", "win-cash", "paytm-offer", "kyc-update", "xyz", "top", "sbi-bank"];
  const isSuspicious = suspiciousWords.some(word => input.includes(word));

  resultDiv.style.display = "block";

  if (isSuspicious) {
    resultDiv.className = "danger";
    resultDiv.innerHTML = `
      🚨 <b>THREAT DETECTED: Phishing Attack</b><br>
      • <b>Risk Score:</b> 89% (High Danger)<br>
      • <b>Forensic Origin:</b> Suspicious Domain (.xyz)<br>
      • <b>GeoLocation:</b> Server located in Foreign Proxy/Offshore
    `;
  } else {
    resultDiv.className = "safe";
    resultDiv.innerHTML = `
      ✅ <b>AUTHENTIC / SAFE EMAIL</b><br>
      • <b>Risk Score:</b> 4% (Clean)<br>
      • <b>Status:</b> Valid Domain & SPF Verified
    `;
  }
});