const Nft3D = () => {
  return (
    <div className="relative overflow-hidden h-[500px] w-[320px] lg:flex hidden">
      <iframe
        title="background-3d"
        src="https://my.spline.design/untitled-d130f9d06023c768751d9359345bd3a9/"
        frameBorder="0"
        height="100%"
        width="100%"
        className="absolute top-0 right-0 -z-1"
      ></iframe>
      <div className="absolute h-12 w-40 bottom-4 right-0 watermark" />
    </div>
  );
};

export default Nft3D;
