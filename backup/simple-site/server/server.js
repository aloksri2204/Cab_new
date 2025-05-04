const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// API Endpoints
app.post('/api/booking', (req, res) => {
  try {
    const booking = req.body;
    
    // In a real application, this would save to a database
    // For this example, we'll log it and store in a JSON file
    console.log('New booking received:', booking);
    
    // Append to bookings.json file (create if doesn't exist)
    const bookingsPath = path.join(__dirname, 'data/bookings.json');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(path.join(__dirname, 'data'))) {
      fs.mkdirSync(path.join(__dirname, 'data'));
    }
    
    let bookings = [];
    if (fs.existsSync(bookingsPath)) {
      bookings = JSON.parse(fs.readFileSync(bookingsPath, 'utf8'));
    }
    
    // Add timestamp
    booking.timestamp = new Date().toISOString();
    bookings.push(booking);
    
    fs.writeFileSync(bookingsPath, JSON.stringify(bookings, null, 2));
    
    res.status(200).json({ success: true, message: 'Booking received successfully' });
  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).json({ success: false, message: 'Error processing booking' });
  }
});

app.post('/api/contact', (req, res) => {
  try {
    const contact = req.body;
    
    // In a real application, this would save to a database or send an email
    console.log('New contact message received:', contact);
    
    // Append to contacts.json file (create if doesn't exist)
    const contactsPath = path.join(__dirname, 'data/contacts.json');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(path.join(__dirname, 'data'))) {
      fs.mkdirSync(path.join(__dirname, 'data'));
    }
    
    let contacts = [];
    if (fs.existsSync(contactsPath)) {
      contacts = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
    }
    
    // Add timestamp
    contact.timestamp = new Date().toISOString();
    contacts.push(contact);
    
    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
    
    res.status(200).json({ success: true, message: 'Contact message received successfully' });
  } catch (error) {
    console.error('Error processing contact message:', error);
    res.status(500).json({ success: false, message: 'Error processing contact message' });
  }
});

// Catch-all route to handle SPA navigation (GitHub Pages compatibility)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the site`);
});