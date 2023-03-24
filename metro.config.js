/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
// const path = require('path');
// const blacklist = require('metro-config/src/defaults/exclusionList');

/////////////////////////////////////////////////////////////// COMMENTED///////////////////////////////////
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;
///////////////////////////////////////////////////////////////END COMMENTED///////////////////////////////////

// module.exports = {
//   resolver: {
//     blacklistRE: blacklist([
//       // This stops "react-native run-windows" from causing the metro server to crash if its already running
//       new RegExp(
//         `${path.resolve(__dirname, 'windows').replace(/[/\\]/g, '/')}.*`,
//       ),
//       // This prevents "react-native run-windows" from hitting: EBUSY: resource busy or locked, open msbuild.ProjectImports.zip
//       new RegExp(
//         `${path
//           .resolve(__dirname, 'msbuild.ProjectImports.zip')
//           .replace(/[/\\]/g, '/')}.*`,
//       ),
//     ]),
//   },
//   transformer: {
//     assetPlugins: ['expo-asset/tools/hashAssetFiles'],
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// };




// const { getDefaultConfig } = require('@expo/metro-config');
// const defaultConfig = getDefaultConfig(__dirname);

// // Clone the object before modifying it
// const assetExts = [...defaultConfig.resolver.assetExts];
// assetExts.push('cjs');

// // Use Object.assign to clone the object and modify its properties
// module.exports = Object.assign({}, defaultConfig, {
//   resolver: {
//     ...defaultConfig.resolver,
//     assetExts,
//     blacklistRE: blacklist([
//             // This stops "react-native run-windows" from causing the metro server to crash if its already running
//             new RegExp(
//               `${path.resolve(__dirname, 'windows').replace(/[/\\]/g, '/')}.*`,
//             ),
//             // This prevents "react-native run-windows" from hitting: EBUSY: resource busy or locked, open msbuild.ProjectImports.zip
//             new RegExp(
//               `${path
//                 .resolve(__dirname, 'msbuild.ProjectImports.zip')
//                 .replace(/[/\\]/g, '/')}.*`,
//             ),
//           ]),
//         },
//         transformer: {
//           assetPlugins: ['expo-asset/tools/hashAssetFiles'],
//           getTransformOptions: async () => ({
//             transform: {
//               experimentalImportSupport: false,
//               inlineRequires: false,
//             },
//           }),
//         },
// });