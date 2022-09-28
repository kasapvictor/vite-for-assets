import { getBabelOutputPlugin } from '@rollup/plugin-babel';

import { resolve } from 'path';

const root = resolve(__dirname, 'src');

export default {
  // input: [
  //   resolve(__dirname, 'index.html'),
  //   resolve(__dirname, 'pages/page1.html'),
  //   resolve(__dirname, 'pages/page2.html'),
  //   resolve(__dirname, 'about/index.html'),
  // ],

  input: {
    index: resolve(root, 'index.html'),
    about: resolve(root, 'about.html'),
  },
  output: {
    format: 'cjs',
    entryFileNames: 'js/[name].js',
    chunkFileNames: 'js/[name]-[hash].js',
    assetFileNames: ({ name }) => {
      const extType = name.split('.').at(1);

      if (/\.css$/i.test(name ?? '')) {
        return 'css/[name].css';
      }

      if (/\.(png|jpe?g|gif|webp)$/i.test(name ?? '')) {
        return 'img/[name][extname]';
      }

      if (/\.(svg)$/i.test(name ?? '')) {
        return 'svg/[name].svg';
      }

      if (/\.(woff(2)?|ttf|eot)$/i.test(name ?? '')) {
        return 'fonts/[name][extname]';
      }

      return `${extType}/[name][extname]`;
    },
  },
  plugins: [
    getBabelOutputPlugin({
      presets: ['@babel/preset-env'],
    }),
  ],
};
