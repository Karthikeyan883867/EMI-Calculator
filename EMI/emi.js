function calculateEMI() {

    const loanAmount = document.getElementById('loanAmount').value;
    const annualInterestRate = document.getElementById('annualInterestRate').value;
    const loanTenure = document.getElementById('loanTenure').value;

    if (!loanAmount || !annualInterestRate || !loanTenure) {
        alert('Please fill all fields');
        return;
    }

    const monthlyInterestRate = (annualInterestRate / 12) / 100;

    const numberOfMonths = loanTenure * 12;

    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    document.getElementById('emiAmount').innerText = emi.toFixed(2);
    document.getElementById('result').style.display = 'block';
}