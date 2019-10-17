

    for ( let i = 99 ; i > 0 ; i--) {
      j = i - 1;
      if (i != 1) { 
        icase = "bottles"; 
      } else { 
        icase = "bottle";
      }
      if (j != 1) {
        jcase = "bottles";
      } else {
        jcase = "bottle";
      }
      console.log(i + " " + icase + " of beer on the wall,");
      console.log(i + " " + icase + " of beer,");
      console.log("Take one down, pass it around,");
      if (j != 0) {
        console.log(j + " " + jcase + " of beer on the wall.");
      } else {
        console.log("No more bottles ");
      }
      console.log();
    }
  
  