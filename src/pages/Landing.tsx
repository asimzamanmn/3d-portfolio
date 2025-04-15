
import Navigation from "../components/Navigation";

const Landing = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="relative w-full h-screen">
        <iframe 
          src='https://my.spline.design/elegantbeautyofdarkaestheticscopy-ueI8vcwJBAKq81WJ0lm01SRN/'
          frameBorder='0'
          width='100%'
          height='100%'
          className="absolute inset-0 w-full h-full"
          title="3D Scene"
        />
      </div>
    </div>
  );
};

export default Landing;
