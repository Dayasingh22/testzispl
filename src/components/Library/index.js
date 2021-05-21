import React from "react";
import ScriptTag from "react-script-tag";

const Library = () => {
  return (
    <>
      <ScriptTag type="text/javascript" src="/js/jquery.js" />
      <ScriptTag type="text/javascript" src="/js/jquery-ui.js" />
      <ScriptTag type="text/javascript" src="/js/jquery.fancybox.js" />
      <ScriptTag type="text/javascript" src="/js/popper.min.js" />
      <ScriptTag type="text/javascript" src="/js/bootstrap.min.js" />
      <ScriptTag type="text/javascript" src="/js/TweenMax.js" />
      <ScriptTag type="text/javascript" src="/js/owl.js" />
      <ScriptTag type="text/javascript" src="/js/mixitup.js" />
      <ScriptTag type="text/javascript" src="/js/appear.js" />
      <ScriptTag type="text/javascript" src="/js/wow.js" />
      <ScriptTag type="text/javascript" src="/js/jarallax.min.js" />
      <ScriptTag type="text/javascript" src="/js/custom-script.js" />
    </>
  );
};

export default Library;
