function Samphel(sam1, sam2) {
    if(sam1.x-sam2.x < sam1.width/2 + sam2.width/2 &&
      sam2.x-sam1.x < sam1.width/2 + sam2.width/2  &&
      sam1.y-sam2.y < sam1.width/2 + sam2.width/2 &&
      sam2.y-sam1.y < sam1.width/2 + sam2.width/2 )
     {
       return true;
    
     }
     else{
       return false;
      
     }
    }