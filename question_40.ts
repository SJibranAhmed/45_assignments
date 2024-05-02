//Sheikh Jibran Ahmed

/* Album: Write a function called make_album() that builds an object describing a music album.
The function should take in an artist name and an album title, and it should return an object
containing these two pieces of information. Use the function to make three dictionaries
representing different albums. Print each return value to show that objects are storing
the album information correctly. Add an optional parameter to make_album() that allows
you to store the number of tracks on an album. If the calling line includes a value for
the number of tracks, add that value to the album’s object. Make at least one new function
call that includes the number of tracks on an album. */

function musicAlbums(
    artist: string,
    title: string,
    tracks?: number | string, // Accept both number and string for tracks
  ) {
    let obj: { artist: string; title: string; tracks?: number } = { // Define obj inline
      artist,
      title,
    };
    if (tracks) {
      if (typeof tracks === 'number') { // Check if tracks is a number
        obj.tracks = tracks;
      } else if (typeof tracks === 'string') { // Check if tracks is a string
        obj.tracks = parseInt(tracks); // Parse the string to integer
      }
    }
  
    return obj;
  }
  
  let album1 = musicAlbums("Salman", "Subse uper likha");
  let album2 = musicAlbums("Atif Aslam", "Kabhi to pass mere aao", 34); // Pass number directly
  let album3 = musicAlbums("Rahat Fateh Ali Khan", "Teri akhon ke dariya ka", "16"); // Pass string
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  
