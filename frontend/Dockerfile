# Use the official Nginx image
FROM nginx:alpine

# Remove the default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy your specific files from the build context
# (the 'frontend' folder) into the Nginx web directory
COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY app.css /usr/share/nginx/html/

# Set read permissions (just in case)
RUN chmod 644 /usr/share/nginx/html/*