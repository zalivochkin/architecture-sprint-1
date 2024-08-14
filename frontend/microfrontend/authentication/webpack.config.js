const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 3001,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'authentication',
            filename: 'remoteEntry.js',
            exposes: {
                './InfoTooltip': './src/InfoTooltip',
                './Login': './src/Login',
                './Register': './src/Register',
            },
            shared: {
                react: { singleton: true, requiredVersion: '^17.0.0' },
                'react-dom': { singleton: true, requiredVersion: '^17.0.0' },
            },
        }),
    ],
};
