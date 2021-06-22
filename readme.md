# Fluid

What is Fluid? Fluid is a wrapper to animate your component.

It can be as simple as:

```javascript
<Fade>
  <Text>Fade on Mount!</Text>
</Fade>
```

![Kapture 2021-06-17 at 15 48 07](https://user-images.githubusercontent.com/25521515/122354372-1e3a5b00-cf7b-11eb-9c5a-1c4126d32c73.gif)

## How to install?

Simply run `yarn add fluid-react-native` or `npm install fluid-react-native`

## How can i use it?

Fluid have couple of animated wrapper / component such as:

`Fade`: Fade in animation

`Jump`: Jump animation

`Shake`: Shake animation

`Bounce`: Bouncy scale animation

Those components can receive the following properties:

| Command          | Required | Type           | Default | Description                                                                                                                                                                                                               |
| ---------------- | -------- | -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`       | Yes      | `ReactNode`    | -       | Your element that you want to animate. Put it here.                                                                                                                                                                       |
| `when`           | No       | `boolean`      | `false` | Set to true if you want to animate in on demand.                                                                                                                                                                          |
| `hide`           | No       | `boolean`      | `false` | Set to true if you want to hide the children then set it to `false` to show and animate the children.                                                                                                                     |
| `duration`       | No       | `number` in ms | varies  | The value may be vary depending on the component. `Fade` have default duration of 800 (fade in duration). `Shake` and `Jump` have default duration of 100 (delay between each translate). `Bounce` doesn't have duration. |
| `onEndAnimation` | No       | `() => void`   | `null`  | This function run when the animation is ended. You might want to combine it with `when` prop.                                                                                                                             |

Fluid components use `InView` component to check if it is in view or not. For example, if your element is in the bottom part of your 1 meter `ScrollView`, the animation will not start until it is in view. You also can use this `InView` component by simply import it.

You can look some example or usage in `src/App.tsx`.
Or you can just clone the repo and run `yarn start`.

## What's Next?

I'm planning to develop Fluid so it's not just an animation library. I'm planning to develop an animated `core-ui` as well like `Button` or `Text Input`. For example if there is an error message in the `Text Input`, it will do the shake animation.

## Epilogue

Feel free to open an issue if you find a bug.
You can also open a PR if you want to fix the bug that you found or you just want to improve this lib.
