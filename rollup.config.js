import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const config = [
  {
    input: 'src/my-cmd.ts',
    output: {
      dir: 'lib',
      format: 'iife',
      name: 'Module',
      sourcemap: false
    },
    plugins: [typescript(), nodeResolve()]
  }
];

export default config;
