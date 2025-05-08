# Notes

how to import GSAP elements (note that we need a token to use it) => [Link to documentation](https://gsap.com/docs/v3/Installation/?tab=npm&module=umd&require=false&plugins=Draggable%2C+DrawSVGPlugin%2C+EaselPlugin%2C+Flip%2C+GSDevTools%2C+InertiaPlugin%2C+MotionPathHelper%2C+MotionPathPlugin%2C+MorphSVGPlugin%2C+Observer%2C+Physics2DPlugin%2C+PhysicsPropsPlugin%2C+PixiPlugin%2C+ScrambleTextPlugin%2C+ScrollTrigger%2C+ScrollSmoother%2C+ScrollToPlugin%2C+SplitText%2C+TextPlugin&ease=RoughEase%2C+ExpoScaleEase%2C+SlowMo%2C+CustomEase%2C+CustomBounce%2C+CustomWiggle#grab-the-files)

```javascript
import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";
// CustomBounce requires CustomEase
import { CustomBounce } from "gsap/CustomBounce";
// CustomWiggle requires CustomEase
import { CustomWiggle } from "gsap/CustomWiggle";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Draggable } from "gsap/Draggable";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { Flip } from "gsap/Flip";
import { GSDevTools } from "gsap/GSDevTools";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { Observer } from "gsap/Observer";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Draggable,DrawSVGPlugin,EaselPlugin,Flip,GSDevTools,InertiaPlugin,MotionPathHelper,MotionPathPlugin,MorphSVGPlugin,Observer,Physics2DPlugin,PhysicsPropsPlugin,PixiPlugin,ScrambleTextPlugin,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle);
``` 