const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Custom middleware to verify working hours
const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 6 = Saturday
    const currentHour = now.getHours();
    
    const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5; // Monday to Friday
    const isWorkingHours = currentHour >= 9 && currentHour < 17;
    
    if (isWeekday && isWorkingHours) {
        next(); // Continue to the route
    } else {
        // Outside working hours - show closed message
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Outside Working Hours</title>
                <link rel="stylesheet" href="/css/style.css">
            </head>
            <body>
                <nav class="navbar">
                    <div class="nav-container">
                        <div class="logo">BusinessApp</div>
                        <ul class="nav-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/services">Our Services</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="container closed-message">
                    <h1>⏰ Outside Working Hours</h1>
                    <p>Our application is only available during working hours:</p>
                    <div class="hours-info">
                        <p><strong>Monday - Friday: 9:00 - 17:00</strong></p>
                        <p>Current time: ${now.toLocaleString()}</p>
                    </div>
                    <p>Please visit us during our business hours. Thank you!</p>
                </div>
            </body>
            </html>
        `);
    }
};

// Apply middleware to all routes
app.use(checkWorkingHours);

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log('⏰ App available: Monday-Friday, 9AM-5PM');
});




