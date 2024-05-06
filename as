<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video Player with Tailwind CSS</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">

  <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Video Player</h2>

    <!-- Input for embedded video code -->
    <div class="mb-4">
      <textarea id="embedded-video" name="embedded-video" placeholder="Paste Embedded Video Code" class="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
    </div>

    <!-- Video display area -->
    <div id="video-display"></div>
  </div>

  <script>
    document.getElementById("embedded-video").addEventListener("input", function() {
      var embeddedCode = this.value.trim(); // Get the entered embedded video code
      
      // Check if the entered code is not empty
      if (embeddedCode) {
        var videoContainer = document.getElementById("video-display");
        
        // Clear previous video if any
        videoContainer.innerHTML = "";
        
        // Create div to contain the embedded video
        var videoDiv = document.createElement("div");
        videoDiv.innerHTML = embeddedCode; // Set the inner HTML to the embedded code
        
        // Append video div to container
        videoContainer.appendChild(videoDiv);
      }
    });
  </script>

</body>
</html>
