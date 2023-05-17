module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["nativewind/babel"], 
    ["module:react-native-dotenv", {
      "moduleName": "react-native-dotenv",
      "path": ".env",
      "safe": false,
    }]],
};
