## 🚀 Ownstable Financial Dashboard
Interactive React + TypeScript dashboard displaying financial metrics per location with charts and tables.

### 🔧 Getting Started
##### 1.  🧱 Install dependencies**
```bash
npm install
```
##### 2. ⚙️ Configure environment variables
Create a .env file in the root of the project and add:
```bash
REACT_APP_AUTH_URL=/api/v1/IdentityServices/UserSession
REACT_APP_REPORT_URL=/api/v1/Invoices/SummaryByLocation
REACT_APP_API_USER_EMAIL=brian.davis@ownstable.com
REACT_APP_API_USER_PASSWORD=test
```

4. 🧪 Run the app
```bash
npm start
```
This will start the local development server on http://localhost:3000.

✨ Features
* 📊 **Toggleable financial metric bar chart**

* 📍 Location-based invoice breakdown

* 🧠 Smart loading/error states

* 🎨 Tailwind CSS styling

* 🔄 API integration with login/session headers
