

export const LoginVideo = ({HandleClose}) => {
   
    return  <div className="fixed inset-0 z-20  backdrop-blur-sm ">
     <div className="h-full w-full object-cover">
      <button className="absolute text-4xl h-screen w-screen object-cover z-10 animate-pulse hover:animate-none" onClick={(HandleClose)}><span className="text-6xl w-2/5 h-auto opacity-50 text-white font-bold lowercase  rounded-none  hover:opacity-100 ">follow the white rabbit...</span></button>
      <video loop autoPlay className=" h-screen w-screen object-cover" src='http://localhost:3000/videos/video.mp4'
      frameBorder='0'
      allow='autoplay; loop; encrypted-media'
      allowFullScreen
      allowLoop
      
      title='video'
  />
      {/* <iframe autoPlay muted src="./videos/video.mp4" type="video/mp4"className="h-screen w-screen object-cover"/> */}

  
  </div>
</div>
}

