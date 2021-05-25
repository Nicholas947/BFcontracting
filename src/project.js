// Each photo title must be unique!!
const allPhotos = [
    {
      photoTitle: "firstPhoto",
      location: "park",
      dateYear: "2021",
      season: "winter",
      url: "../photos/firstPhoto.png",
    },
    {
      photoTitle: "secondPhoto",
      location: "park",
      dateYear: "2020",
      season: "spring",
      url: "../photos/secondPhoto.png",
    },
    {
      photoTitle: "thirdPhoto",
      location: "office",
      dateYear: "2021",
      season: "summer",
      url: "../photos/thirdPhoto.png",
    },
  ];
  ​
  // Testing criteria to see how the sorter will react to various senarios
  const testCriteria1 = ["park", "summer"];
  const testCriteria2 = ["2021", "winter"];
  const testCriteria3 = ["2021", "winter", "office"];
  ​
  // Filters out photos that match no criteria, will not filter photos that match 1 criteria but fail another
  const setPhotos = (
    criterias /*Array of strings you want to match with photos*/,
    photoSet /*The full set of photos you want to look for criteria matches in*/
  ) => {
    let filteredPhotoNames = []; // Store the names of each photo that matches any of our criteria
  ​
    // Loop through each photo in the set of photos that we passed into the sorter
    photoSet.forEach((photo) => {
      const photoTitle = photo.photoTitle; // Store the photo's title for later use
  ​
      // Make a local clone of the imported photo object and delete any properties that we don't want to search from
      let photoClone = Object.assign({}, photo);
      delete photoClone.photoTitle;
      delete photoClone.path;
  ​
      // discard the keys from each of our search terms since we only care about the values and store each value as an element in the searchTerms array
      const searchTerms = Object.values(photoClone);
  ​
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
  ​
    // Filters the array of matches so that each photo only appears in our results once
    // This is because it could show up twice if 2 of the criteria were found. In this senario we still only want to show the photo one time
    const uniqueNames = [...new Set(filteredPhotoNames)];
  ​
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
  ​
    // Return our final array of photo objects
    return results;
  };
  ​
  // Store the final results with each photo we matched in a variable
  const visiblePhotos = setPhotos(testCriteria2, allPhotos);
  ​
  // You can now do anything you want with this variable!
  // In this example we're logging it to the console :)
  console.log(visiblePhotos);