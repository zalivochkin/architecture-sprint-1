const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 3003,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'profile',
            filename: 'remoteEntry.js',
            exposes: {
                './EditAvatarPopup': './src/EditAvatarPopup',
                './EditProfilePopup': './src/EditProfilePopup',
            },
            shared: {
                react: { singleton: true, requiredVersion: '^17.0.0' },
                'react-dom': { singleton: true, requiredVersion: '^17.0.0' },
            },
        }),
    ],
};
