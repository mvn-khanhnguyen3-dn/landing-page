const useScroll = (reveals) => {
  const windowHeight = window.innerHeight;

  for (let i = 0; i < reveals.length; i++) {
    const elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      reveals[i].classList.add("active");
    }
  }
};
const useSimpleScroll = (reveal) => {
  const windowHeight = window.innerHeight;

  const elementTop = reveal.getBoundingClientRect().top;
  if (elementTop < windowHeight - 100) {
    reveal.classList.add("active");
  }
};

export const useHookScroll = {
  useScroll,
  useSimpleScroll,
};
