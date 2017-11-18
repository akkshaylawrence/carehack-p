function detectAnimationEvent() {
  let detectedAnimation = null;
  const el = document.createElement("fakeelement");

  const animations = {
    animation: "animationend",
    OAnimation: "oAnimationEnd",
    MozAnimation: "animationend",
    WebkitAnimation: "webkitAnimationEnd"
  };

  Object.keys(animations).forEach(key => {
    if (el.style[key] !== undefined) {
      detectedAnimation = animations[key];
    }
  });
  return detectedAnimation;
}

export default detectAnimationEvent;
