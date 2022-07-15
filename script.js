import { styler, spring, listen, pointer, value } from 'popmotion'

const me = document.querySelector("#memoji");
const imgStyler = styler(me);
const imgXY = value({ x: 0, y: 0 }, imgStyler.set);

listen(me, "mousedown touchstart").start(e => {
  e.preventDefault();
  pointer(imgXY.get()).start(imgXY);
});


listen(document, "mouseup touchend").start(() => {
  spring({
    from: imgXY.get(),
    velocity: imgXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200
    // mass: 1,
    // damping: 10
  }).start(imgXY);
});