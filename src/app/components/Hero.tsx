import { Button } from "@/components/ui/button";
import { VideoSlider } from "@/components/VideoSlider";
import { ArrowBigRight } from "lucide-react";
import { useLocale } from "../../context/locale-context"

const Hero = () => {
    const { t, dir } = useLocale()
    return ( <section className="relative h-[700px] bg-gradient-to-r from-primary to-primary-600 flex items-center">
        <div className="absolute inset-0">
          <VideoSlider />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto lg:mx-64 px-4 relative z-10">
          <div className={`max-w-2xl text-white `}>
            <h1 className="text-5xl font-bold mb-6 leading-tight ">
              {t.home.hero.title}
              <br />
              {t.home.hero.titleSecond}
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90">{t.home.hero.description}</p>
            <Button className="bg-accent hover:bg-accent-600 text-black px-8 py-3 rounded-full font-semibold">
              {t.home.hero.readMore}
              <ArrowBigRight className={`${dir === "rtl" ? "mr-2 rotate-180" : "ml-2"} w-4 h-4`} />
            </Button>
          </div>
        </div>
      </section> );
}
 
export default Hero;