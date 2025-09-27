# Swag-Labs-Playwright

Automated tests for the Sauce Demo site using Playwright & GitHub Actions.

---
## 📦 Installation & Dependencies

**Requirements:**
- [Node.js](https://nodejs.org/) (recommended LTS version, e.g. 18.x or similar)
- npm (comes with Node.js)

Clone this repository:

```bash
git clone https://github.com/Hussien-Aboelhagag/Swag-Labs-Playwright.git
cd Swag-Labs-Playwright
```
Install dependencies:
```bash
npm install
```
Install Playwright:
```bash
npm init playwright@latest
```
## 🚀 Running Tests
To run all tests:
```bash
npx playwright test
```
To run a specific test file (example):
```bash
npx playwright test tests/your-test-file.spec.js
```
## 📊 Viewing the HTML Report
After running the tests, open the HTML report with:
```bash
npx playwright show-report
```
The report will launch in your browser, showing detailed results for each test.
