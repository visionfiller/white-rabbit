import { useNavigate } from "react-router-dom"

export const LoginVideo = ({HandleClose}) => {
    const navigate = useNavigate()
    return  <div className="fixed inset-0 z-20  backdrop-blur-sm ">
     <div className="h-full w-full object-cover">
      
      <button className="absolute text-4xl h-screen w-screen object-cover" onClick={(HandleClose)}><span className="text-4xl w-2/5 h-auto text-white font-bold lowercase  rounded-none animate-pulse hover:animate-none ">follow the white rabbit...</span></button>
      <iframe className=" h-screen w-screen object-cover" src='https://www.youtube.com/embed/wVcLmjFxFf0?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&?modestbranding=1&fs=0&playlist=wVcLmjFxFf0'
      frameBorder='0'
      allow='autoplay; loop; encrypted-media'
      allowFullScreen
      
      title='video'
  />
  </div>
</div>
}

