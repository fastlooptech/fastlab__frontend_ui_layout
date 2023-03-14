# fastloop - Layout Components

This is a TypeScript library designed to simplify the process of managing layout and data in your React TypeScript projects. It consists of three components: Box, Space, and Stack.

## Features

- Lightweight and easy to use
- Zero dependencies
- Box component provides shortcuts for using the flex layout
- Space and Stack components provide additional layout options

## Installation

You can install this library via npm:

```bash
npm install @fastlooptech/layout-components
```

##Usage
To use this library, simply import the components you need into your TypeScript project:

```typescript
import { Box, Space, Stack } from '@fastlooptech/layout-components';
```

Then, you can use these components to manage your layout and data:

```typescript
<Box width={200} height={200} className="bg-teal">
  <Stack direction="column">
    <Box grow={1} className="bg-pink" />
    <Box grow={2} className="bg-orange" />
  </Stack>
</Box>
```

## License

This library is released under the MIT License.

## Contribution

We welcome contributions from anyone! If you'd like to contribute, please follow our contribution guidelines.

## Credits

This library was developed and is maintained by the FastLoop team.

## Feedback

If you have any feedback or suggestions for this library, please don't hesitate to open an issue. We appreciate your input!

## Support

If you need help with this library, please contact us at [info_at_fastloop.it](mailto:info@fastloop.it) or visit our website at [https://fastloop.it](https://fastloop.it/).
