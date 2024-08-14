const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 3002,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cards',
            filename: 'remoteEntry.js',
            exposes: {
                './AddPlacePopup': './src/AddPlacePopup',
                './Card': './src/Card',
                './ImagePopup': './src/ImagePopup',
            },
            shared: {
                react: { singleton: true, requiredVersion: '^17.0.0' },
                'react-dom': { singleton: true, requiredVersion: '^17.0.0' },
            },
        }),
    ],
};
