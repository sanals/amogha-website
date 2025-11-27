# Complete Google Sheets Setup Guide for AMOGHA Website

This guide will help you set up Google Sheets integration for both the **Contact Form** and **Booking Form**.

---

## Part 1: Contact Form Setup

### Step 1: Create Google Sheet for Contact Form

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **Blank** to create a new spreadsheet
3. Name it: **"AMOGHA Contact Form Submissions"**
4. In **Row 1**, add these column headers (one per column):
   ```
   A1: Name
   B1: Email
   C1: Phone
   D1: Subject
   E1: Message
   F1: Timestamp
   ```
5. **Optional**: Format Row 1 as bold and add background color for better visibility
   - Select Row 1
   - Click **Format** → **Bold**
   - Click **Fill color** and choose a light color (e.g., light blue)

### Step 2: Create Google Apps Script for Contact Form

1. In your Google Sheet, click **Extensions** → **Apps Script**
   - This opens a new tab with the Apps Script editor
2. You'll see a default function. **Delete everything** and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data from the POST request
    const data = e.parameter;
    
    // Prepare the row data in the correct order
    const row = [
      data.name || '',           // Column A
      data.email || '',          // Column B
      data.phone || '',          // Column C
      data.subject || '',        // Column D
      data.message || '',        // Column E
      new Date().toISOString()  // Column F - Timestamp
    ];
    
    // Append the row to the sheet
    sheet.appendRow(row);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully' 
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error for debugging
    Logger.log('Error: ' + error.toString());
    
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ 
        success: false, 
        error: error.toString() 
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function to verify the script works
function testContactForm() {
  const testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      subject: 'Test Subject',
      message: 'This is a test message'
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

3. Click **Save** (💾 icon) or press `Ctrl+S` (Windows) / `Cmd+S` (Mac)
4. Name your project: **"AMOGHA Contact Form Handler"**

### Step 3: Deploy Contact Form Script as Web App

1. Click **Deploy** → **New deployment**
2. Click the **gear icon** ⚙️ next to "Select type"
3. Choose **Web app** from the dropdown
4. Fill in the deployment settings:
   - **Description**: `AMOGHA Contact Form Handler v1`
   - **Execute as**: Select **Me** (your email address)
   - **Who has access**: Select **Anyone** (IMPORTANT: This allows your website to submit data)
5. Click **Deploy**
6. **First-time authorization**:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **Copy the Web App URL** - It looks like:
   ```
   https://script.google.com/macros/s/AKfycbzXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec
   ```
   ⚠️ **IMPORTANT**: Save this URL - you'll need it for your code!

### Step 4: Update Contact Form Code

1. Open `src/components/molecules/ContactForm.tsx`
2. Find this line (around line 17):
   ```typescript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz...";
   ```
3. Replace the URL with your new Web App URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = "YOUR_NEW_WEB_APP_URL_HERE";
   ```
4. Save the file

### Step 5: Test Contact Form

1. Go to your website's contact page
2. Fill out and submit the contact form
3. Go back to your Google Sheet
4. You should see a new row with the submitted data!

---

## Part 2: Booking Form Setup

### Step 1: Create Google Sheet for Booking Form

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **Blank** to create a new spreadsheet
3. Name it: **"AMOGHA Booking Appointments"**
4. In **Row 1**, add these column headers:
   ```
   A1: Name
   B1: Email
   C1: Phone
   D1: Preferred Date
   E1: Preferred Time
   F1: Department
   G1: Doctor
   H1: Symptoms
   I1: Previous Treatments
   J1: Timestamp
   ```
5. **Optional**: Format Row 1 as bold with background color

### Step 2: Create Google Apps Script for Booking Form

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. **Delete everything** and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data from the POST request
    const data = e.parameter;
    
    // Prepare the row data in the correct order
    const row = [
      data.name || '',                    // Column A
      data.email || '',                   // Column B
      data.phone || '',                   // Column C
      data.preferredDate || '',           // Column D
      data.preferredTime || '',           // Column E
      data.department || '',              // Column F
      data.doctor || '',                  // Column G
      data.symptoms || '',                // Column H
      data.previousTreatments || '',      // Column I
      new Date().toISOString()           // Column J - Timestamp
    ];
    
    // Append the row to the sheet
    sheet.appendRow(row);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ 
        success: true, 
        message: 'Booking request submitted successfully' 
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error for debugging
    Logger.log('Error: ' + error.toString());
    
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ 
        success: false, 
        error: error.toString() 
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function
function testBookingForm() {
  const testData = {
    parameter: {
      name: 'Test Patient',
      email: 'patient@example.com',
      phone: '+1234567890',
      preferredDate: '2024-12-25',
      preferredTime: '10:00 AM',
      department: 'General Medicine',
      doctor: 'Dr. Test',
      symptoms: 'Headache and fatigue',
      previousTreatments: 'None'
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

3. Click **Save** (💾 icon)
4. Name your project: **"AMOGHA Booking Form Handler"**

### Step 3: Deploy Booking Form Script as Web App

1. Click **Deploy** → **New deployment**
2. Click the **gear icon** ⚙️ → Choose **Web app**
3. Fill in:
   - **Description**: `AMOGHA Booking Form Handler v1`
   - **Execute as**: **Me**
   - **Who has access**: **Anyone** (IMPORTANT!)
4. Click **Deploy**
5. **Authorize access** (same process as Contact Form)
6. **Copy the Web App URL** and save it

### Step 4: Update Booking Form Code

1. Open `src/components/molecules/BookingForm.tsx`
2. Add this constant near the top (after the imports, around line 15):

```typescript
const GOOGLE_SCRIPT_URL = "YOUR_BOOKING_WEB_APP_URL_HERE";
```

3. Find the `handleSubmit` function (around line 115)
4. Replace the entire `handleSubmit` function with this:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const errors = validateForm();
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }

  try {
    // Encode form data for URL
    const encodeFormData = (data: Record<string, string>) =>
      Object.keys(data)
        .map(
          (key) =>
            encodeURIComponent(key) + '=' + encodeURIComponent(data[key] || '')
        )
        .join('&');

    // Convert formData to Record<string, string>
    const formDataString: Record<string, string> = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      department: formData.department,
      doctor: formData.doctor,
      symptoms: formData.symptoms,
      previousTreatments: formData.previousTreatments
    };

    // Submit to Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encodeFormData(formDataString)
    });

    const result = await response.json();
    
    if (result.success) {
      // Show success message
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        department: '',
        doctor: doctorId,
        symptoms: '',
        previousTreatments: ''
      });
      setFormErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      setFormErrors({ general: result.error || "Submission failed. Please try again." });
    }
  } catch (error) {
    setFormErrors({ general: "Network error. Please try again." });
    console.error('Booking submission error:', error);
  }
};
```

5. Save the file

### Step 5: Test Booking Form

1. Go to your website's booking page (`/book-appointment`)
2. Fill out and submit the booking form
3. Check your Google Sheet - new booking should appear!

---

## Troubleshooting Guide

### Problem: "Script function not found" error

**Solution:**
- Make sure the function is named exactly `doPost` (case-sensitive)
- Check that you saved the script after pasting the code
- Try redeploying the Web App

### Problem: "Permission denied" or CORS errors

**Solution:**
- Ensure "Who has access" is set to **"Anyone"** (not "Only myself")
- Redeploy the Web App after changing permissions
- Clear your browser cache and try again

### Problem: Data not appearing in sheet

**Solution:**
1. Check Apps Script execution logs:
   - In Apps Script editor, click **Executions** (clock icon) in left sidebar
   - Check for any errors
2. Verify column headers match exactly (case-sensitive)
3. Test the script manually:
   - In Apps Script editor, select `testContactForm` or `testBookingForm` from function dropdown
   - Click **Run** ▶️
   - Check the sheet for test data

### Problem: "Script authorization required"

**Solution:**
1. Click **Deploy** → **Manage deployments**
2. Click the **pencil icon** ✏️ to edit
3. Click **Install new version**
4. Re-authorize when prompted

### Problem: Form submits but shows error

**Solution:**
1. Open browser Developer Tools (F12)
2. Go to **Console** tab
3. Submit the form and check for error messages
4. Go to **Network** tab and check the request to your script URL
5. Verify the script URL is correct (no typos)

---

## Security Best Practices

1. **Don't share your Web App URLs publicly** - Keep them in your code only
2. **Use environment variables** (optional but recommended):
   - Create `.env.local` file:
     ```
     NEXT_PUBLIC_CONTACT_SCRIPT_URL=your_contact_script_url
     NEXT_PUBLIC_BOOKING_SCRIPT_URL=your_booking_script_url
     ```
   - Update code to use: `process.env.NEXT_PUBLIC_CONTACT_SCRIPT_URL`
3. **Regular backups**: Periodically download your Google Sheets as backup
4. **Monitor submissions**: Check your sheets regularly for spam or test submissions

---

## Quick Reference: File Locations

- **Contact Form**: `src/components/molecules/ContactForm.tsx`
- **Booking Form**: `src/components/molecules/BookingForm.tsx`
- **This Guide**: `docs/GOOGLE_SHEETS_COMPLETE_SETUP.md`

---

## Need Help?

If you encounter issues:
1. Check the Troubleshooting section above
2. Review Apps Script execution logs
3. Verify all URLs are correct
4. Ensure sheets have correct column headers

Good luck! 🚀

