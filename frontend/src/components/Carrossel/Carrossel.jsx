import { useEffect, useRef, useState } from "react";
import "./Carrossel.css";
import { FaWhatsapp } from "react-icons/fa";


function Carrossel() {
 
  const [image, setImage] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  const transitionTimeoutRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);
  const isTransitioningRef = useRef(false);

  const goToNextImage = () => {
    setImage((previousImage) => {
      if (previousImage === 3) {
        return 1;
      }

      return previousImage + 1;
    })
  };

  const displayHeader = () => {
    const key = image;
    switch (key) {
      case 1:
        return 'SOLUÇÕES\nPERSONALIZADAS\nPARA O SEU NEGÓCIO'
      case 2:
        return 'ADVOGADOS\nALTAMENTE\nQUALIFICADOS';
      case 3:
        return 'SOLUÇÕES QUE\nCABEM NO\nSEU BOLSO';
    }
  }

  const startTransition = () => {
    if (isTransitioningRef.current) {
      return;
    }

    isTransitioningRef.current = true;
    setIsVisible(false);

    transitionTimeoutRef.current = setTimeout(() => {
      goToNextImage();
      setIsVisible(true);
      isTransitioningRef.current = false;
    }, 300);
  };

  const restartAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    };

    autoSlideIntervalRef.current = setInterval(() => {
      startTransition();
    }, 3000);
  }

  const setCarrossel = () => {
    startTransition();
    restartAutoSlide();
  }

  useEffect(() => {
    restartAutoSlide();

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }

      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
      }
    }
  }, []);

  return (
    <div className="carrosselContainer">
      <img 
        src={`carrossel/${image}.png`} 
        alt={`Imagem ${image} do carrossel`}
        onClick={setCarrossel} 
        className={isVisible ? "carrosselImage visible": "carrosselImage hidden"}
      />
      <p className={isVisible ? "carrosselHeader visible": "carrosselHeader hidden"}>{displayHeader()}</p>
      <div className={"iconBox"}><FaWhatsapp size={103} color={"#25d366"} /></div>
 
    </div>
  );
}

export default Carrossel;