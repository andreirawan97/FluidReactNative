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

Those components can receive the following properties:

| Command | Required | Type | Default | Description | 
| --- | --- | --- | --- | --- |
| `children` | Yes | `ReactNode` | - | Your element that you want to animate. Put it here. |
| `when` | No | `boolean` | `false` | Set to true if you want to animate in on demand. |
| `hide` | No | `boolean` | `false` | Set to true if you want to hide the children then set it to `false` to show and animate the children. |
| `duration` | No | `number` in ms | varies | The value may be vary depending on the component. `Fade` have default duration of 800 (fade in duration). `Shake` and `Jump` have default duration of 100 (delay between each translate). |
| `onEndAnimation` | No | `() => void` | `null` | This function run when the animation is ended. You might want to combine it with `when` prop. |

You can look some example or usage in `src/App.tsx`.
Or you can just clone the repo and run `yarn start`.

## Epilogue

Feel free to open an issue if you find a bug. 
You can also open a PR if you want to fix the bug that you found or you just want to improve this lib.

