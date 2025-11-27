# Google Sheets Booking Form Setup Guide

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "AMOGHA Bookings" (or your preferred name)
4. Add these column headers in Row 1:
   - `Name`
   - `Email`
   - `Phone`
   - `Preferred Date`
   - `Preferred Time`
   - `Department`
   - `Doctor`
   - `Symptoms`
   - `Previous Treatments`
   - `Timestamp`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete the default code and paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data
    const data = e.parameter;
    
    // Prepare row data
    const row = [
      data.name || '',
      data.email || '',
      data.phone || '',
      data.preferredDate || '',
      data.preferredTime || '',
      data.department || '',
      data.doctor || '',
      data.symptoms || '',
      data.previousTreatments || '',
      new Date().toISOString() // Timestamp
    ];
    
    // Append row to sheet
    sheet.appendRow(row);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'Booking submitted successfully' })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional - for testing)
function test() {
  const testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      preferredDate: '2024-12-25',
      preferredTime: '10:00 AM',
      department: 'General Medicine',
      doctor: 'Dr. Test',
      symptoms: 'Test symptoms',
      previousTreatments: 'None'
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" → Choose **Web app**
3. Configure:
   - **Description**: "AMOGHA Booking Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (important for public forms)
4. Click **Deploy**
5. **Copy the Web App URL** - this is your `GOOGLE_SCRIPT_URL`

## Step 4: Update Your Code

1. Add the URL to your `.env` file:
   ```
   NEXT_PUBLIC_BOOKING_SCRIPT_URL=your_web_app_url_here
   ```

2. Update `BookingForm.tsx` to use the Google Script URL (similar to ContactForm)

## Step 5: Test

1. Submit a test booking from your website
2. Check your Google Sheet - the data should appear in a new row

## Finding Your Existing Sheet

If you already have a Google Apps Script set up:

1. Go to [Google Apps Script](https://script.google.com)
2. Look for projects related to "AMOGHA" or "Booking"
3. Open the project
4. Check the script code to see which spreadsheet it references
5. Or check the script's execution logs to see recent submissions

## Troubleshooting

- **Permission denied**: Make sure "Who has access" is set to "Anyone"
- **Data not appearing**: Check the Apps Script execution logs (View → Executions)
- **CORS errors**: Ensure the script is deployed as a Web App, not just saved

