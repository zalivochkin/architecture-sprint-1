const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 3000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app',
            remotes: {
                authentication: 'authentication@https://nomoreparties.co:3001/remoteEntry.js',
                cards: 'cards@https://nomoreparties.co:3002/remoteEntry.js',
                profile: 'profile@https://nomoreparties.co:3003/remoteEntry.js',
            },
            shared: {
                react: { singleton: true, requiredVersion: '^17.0.0' },
                'react-dom': { singleton: true, requiredVersion: '^17.0.0' },
            },
        }),
    ],
};
