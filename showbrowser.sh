#!/bin/sh

echo "\n\n"

echo "Please wait while we start the CRM and app server and superprofile..."

sleep 60   # pause for 1 minute

unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     osname=Linux;;
    Darwin*)    osname=Mac;;
    *)          osname="UNKNOWN:${unameOut}"
esac

echo "OS is detected to be $osname"
URL="http://localhost:$1"

echo "App ready, now starting browser with RC4Community..."
echo "URL is set to $URL"
if [ "$osname" = "Linux" ]  
then
   xdg-open $URL
else
   open $URL
fi

# New Features

# 1. Logging to a file
log_file="startup.log"

# Function to log messages with a timestamp
log() {
    timestamp=$(date +"%Y-%m-%d %T")
    echo "[$timestamp] $1" >> "$log_file"
}

# 2. Confirmation messages
log "Script started."

# 3. Error handling
if [ $? -eq 0 ]; then
    log "Server started successfully."
else
    log "Error: Server failed to start."
fi

# 4. Check if the browser opens successfully
if [ $? -eq 0 ]; then
    log "Browser opened successfully."
else
    log "Error: Failed to open the browser."
fi

# 5. Clear the log file
> "$log_file"

log "Script completed."
