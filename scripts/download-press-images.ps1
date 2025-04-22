# PowerShell script to download placeholder images for press section
# This will download proper images without replacing any existing ones with actual content

$ErrorActionPreference = "Stop"
$imageDir = "public/images/press"

# Create directory if it doesn't exist
if (-not (Test-Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir -Force
    Write-Host "Created directory: $imageDir"
}

# Function to download an image if it doesn't exist or is just a placeholder
function Download-ImageIfNeeded {
    param (
        [string]$filename,
        [string]$url,
        [string]$category
    )
    
    $filePath = Join-Path $imageDir $filename
    
    # Check if file exists and is a real image (not just our placeholder)
    $isPlaceholder = $false
    if (Test-Path $filePath) {
        $fileContent = Get-Content $filePath -Raw
        $isPlaceholder = $fileContent -match "Creating placeholder images"
        $fileSize = (Get-Item $filePath).Length
        if ($fileSize -gt 1000) {
            $isPlaceholder = $false # If file is larger than 1KB, assume it's a real image
        }
    }
    
    if (-not (Test-Path $filePath) -or $isPlaceholder) {
        Write-Host "Downloading $category image: $filename"
        try {
            Invoke-WebRequest -Uri $url -OutFile $filePath
            Write-Host "Downloaded successfully: $filename"
        }
        catch {
            Write-Host "Failed to download $filename from $url"
            Write-Host $_.Exception.Message
        }
    }
    else {
        Write-Host "Skipping $filename - file already exists and appears to be a real image"
    }
}

# Download article images
Download-ImageIfNeeded -filename "article-1.jpg" -url "https://source.unsplash.com/random/600x400/?ayurveda" -category "Article"
Download-ImageIfNeeded -filename "article-2.jpg" -url "https://source.unsplash.com/random/600x400/?yoga" -category "Article"
Download-ImageIfNeeded -filename "article-3.jpg" -url "https://source.unsplash.com/random/600x400/?meditation" -category "Article"

# Download video thumbnail images
Download-ImageIfNeeded -filename "video-1.jpg" -url "https://source.unsplash.com/random/600x400/?wellness" -category "Video"
Download-ImageIfNeeded -filename "video-2.jpg" -url "https://source.unsplash.com/random/600x400/?massage" -category "Video"

# Download press mention images
Download-ImageIfNeeded -filename "mention-1.jpg" -url "https://source.unsplash.com/random/600x400/?award" -category "Press Mention"
Download-ImageIfNeeded -filename "mention-2.jpg" -url "https://source.unsplash.com/random/600x400/?newspaper" -category "Press Mention"
Download-ImageIfNeeded -filename "mention-3.jpg" -url "https://source.unsplash.com/random/600x400/?review" -category "Press Mention"

# Download media kit image
Download-ImageIfNeeded -filename "media-kit.jpg" -url "https://source.unsplash.com/random/600x400/?branding" -category "Media Kit"

Write-Host "Press images download completed!" 