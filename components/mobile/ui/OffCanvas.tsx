import { useEffect } from "react";

type OffCanvasProps = {
  close: () => void;
  offcanvas: boolean;
  children: React.ReactNode;
  className?: string;
};

const OffCanvas: React.FC<OffCanvasProps> = ({
  close,
  offcanvas,
  children,
  className,
}) => {
  useEffect(() => {
    if (offcanvas) {
      document.body.classList.add("stop-scroll");
    } else {
      document.body.classList.remove("stop-scroll");
    }
    return () => {
      document.body.classList.remove("stop-scroll");
    };
  }, [offcanvas]);

  return (
    <>
      <div className={offcanvas ? "backdrop" : ""} onClick={close}></div>
      <div
        className={`off-canvas ${className} ${
          offcanvas ? " transform-none" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default OffCanvas;
