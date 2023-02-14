// Each photo title must be unique!!
const allPhotos = [
  {
    photoTitle: "CUSD Highschool",
    photoDescription: "RWCD Lateral 16-1/2",
    filter1: "Wet Utilities",
    filter2: "Education",
    filter3: "Hard Bid",
    url: "assets/Project_Tiles/CUSD/Project_Tile.jpg",
  },
  {
    photoTitle: "Granite Reef",
    photoDescription: "my Descriptions!!",//more data
    filter1: "Dry Utilities",//more data
    filter2: "Landfill",//more data
    filter3: "JOC",//more data
    url: "assets/Project_Tiles/Granite Reef/Project_Tile.JPG",
  },
  {
    photoTitle: "Hyatt Place Downtown",
    photoDescription: "my Descriptions!!",//more data
    filter1: "Dry Utilities",
    filter2: "Commercial",
    filter3: "Hard Bid",
    url: "assets/Project_Tiles/Hyatt Place Downtown/Project_Tile.CR2",
  },
  {
    photoTitle: "Nationwide Building Scottsdale Campus",
    photoDescription: "my Descriptions!!",//more data
    filter1: "Wet Utilities",
    filter2: "Commercial",
    filter3: "Hard Bid",
    url: "assets/Project_Tiles/Nationwide/Project_Tile.jpg",
  },
  {
    photoTitle: "Old Nogales Interceptor",
    photoDescription: "my Descriptions!!",//more data
    filter1: "Wet Utilities",
    filter2: "Municipal",
    filter3: "CMAR Joint",
    url: "assets/Project_Tiles/Old Nogales Interceptor/Project_Tile.jpg",
  },
  {
    photoTitle: "PVC Lined Concrete Sanitary Sewer Rehabilitation",
    photoDescription: "my Descriptions!!",//more data
    filter1: "Pump and Pipe",
    filter2: "Municipal",
    filter3: "CMAR",
    url: "assets/Project_Tiles/PVC Rehab/Project_Tile.JPG",
  },
  {
    photoTitle: "SROG Salt River Outfall Interceptor Rehabilitation",
    photoDescription: "my Descriptions!!",//more data
    filter1: "Pump and Pipe",
    filter2: "Aviation",
    filter3: "CMAR Joint",
    url: "assets/Project_Tiles/SROG Project E/Project_Tile.JPG",
  },
  {
    photoTitle: "Thomas Road Transmission Main Rehabilitation",
    photoDescription: "my Descriptions!!",//more data
    filter1: "Pump and Pipe",
    filter2: "Municipal",
    filter3: "CMAR",
    url: "assets/Project_Tiles/Thomas_Rd_Slipline/Project_Tile.JPG",
  },
  {
    photoTitle: "Whiteclaw Super Feeders",
    photoDescription: "my Descriptions!!",//more data
    filter1: "Dry Utilities",
    filter2: "Manufacturing",
    filter3: "Hard Bid",
    url: "assets/Project_Tiles/Whiteclaw/Project_Tile.jpg",
  },
];

// Testing criteria to see how the sorter will react to various senarios
const testCriteria1 = ["park", "summer"];
const testCriteria2 = ["2021", "winter"];
const testCriteria3 = ["2021", "winter", "office"];

let criteria = []


const updateImages = (newCriteria) => {
  const outputContainer = document.getElementsByClassName('product')[0];
  var blank = ``;
  outputContainer.innerHTML = "";
  criteria.push(newCriteria)
  

  const displayPhotos = setPhotos(criteria, allPhotos);
  let imgLayout = ""
  if(document.querySelectorAll('#accept:checked') !== null){
  displayPhotos.forEach(photo => {
    imgLayout += `
  <div class="itemBox image">
                <img class="img" src="${photo.url}"/>
                <div class="overlay">
                    <div class="content">
                        <div class="imageTitle">${photo.photoTitle}</div>
                        <p class="imageDescription">
                            ${photo.photoDescription}
                        </p>
                    </div>
                </div>
            </div>
  `
  });
  

  }
  else if(document.querySelectorAll('#accept:checked') == null){
    displayPhotos.forEach(photo => {
      imgLayout -= `
    <div class="itemBox image">
                  <img class="img" src="${photo.url}"/>
                  <div class="overlay">
                      <div class="content">
                          <div class="imageTitle">${photo.photoTitle}</div>
                          <p class="imageDescription">
                              ${photo.photoDescription}
                          </p>
                      </div>
                  </div>
              </div>
    `
    });
    
    

}
outputContainer.innerHTML = imgLayout;
}

// Filters out photos that match no criteria, will not filter photos that match 1 criteria but fail another
const setPhotos = (
  criterias /*Array of strings you want to match with photos*/,
  photoSet /*The full set of photos you want to look for criteria matches in*/
) => {
  let filteredPhotoNames = []; // Store the names of each photo that matches any of our criteria

  // Loop through each photo in the set of photos that we passed into the sorter
  photoSet.forEach((photo) => {
    const photoTitle = photo.photoTitle; // Store the photo's title for later use

    // Make a local clone of the imported photo object and delete any properties that we don't want to search from
    let photoClone = Object.assign({}, photo);
    delete photoClone.photoTitle;
    delete photoClone.path;
    delete photoClone.photoDescription

    // discard the keys from each of our search terms since we only care about the values and store each value as an element in the searchTerms array
    const searchTerms = Object.values(photoClone);

    // Loop through each of the criterias that we want to match
    criterias.forEach((criteria) => {
      // loops through all of the search terms that we collected above
      // By looping through the search terms inside the criteria loop we can check every search term against every criteria
      searchTerms.forEach((term) => {
        // Sends the current photo to our array of matched photos if one of the photo's tags equals one of the criterias that was passed in
        if (criteria === term) {
          // send photo title to list of kept photos
          filteredPhotoNames.push(photoTitle);
        }
      });
    });
  });

  // Filters the array of matches so that each photo only appears in our results once
  // This is because it could show up twice if 2 of the criteria were found. In this senario we still only want to show the photo one time
  const uniqueNames = [...new Set(filteredPhotoNames)];

  // Store our full image object inside this array after we retrieve it below
  const results = [];
  // Loop through our final list of matched photos
  uniqueNames.forEach((uniqueName) => {
    // Store the full photo info object for each photo we matched eariler in a temp array so that we can strip the object out of the array it starts in
    let tempResults = [];
    tempResults.push(
      photoSet.filter((photo) => photo.photoTitle === `${uniqueName}`)
    );
    // Send only the object within the 2d array to the final results array
    results.push(tempResults[0][0]);
  });

  // Return our final array of photo objects
  return results;
};

// Store the final results with each photo we matched in a variable
const visiblePhotos = setPhotos(testCriteria2, allPhotos);

// You can now do anything you want with this variable!
// In this example we're logging it to the console :)
console.log(visiblePhotos);

function changeHeaderMarket(input) {
  if(document.querySelectorAll('#accept:checked') !== null){
    document.getElementById('Market').innerText = input
    
  }
  else{
    document.getElementById('Market').innerText = 'Market'
    
  }
}
function changeHeaderDelivery(inputDelivery){
  if(document.querySelectorAll('#accept:checked') !== null){
    document.getElementById('Delivery').innerText = inputDelivery
    
  }
  else{
    document.getElementById('Delivery').innerText = 'Delivery'
    
  }
}
function changeHeaderService(inputService){
  if(document.querySelectorAll('#accept:checked') !== null){
    document.getElementById('Service').innerText = inputService
    
  }
  else{
    document.getElementById('Service').innerText = 'Service'
    
  }
}