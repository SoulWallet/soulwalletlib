module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    esmodules: true
                },
                modules: false
            }
        ],
        '@babel/preset-typescript'

    ];
    const plugins = [
        './babel-import-extension.js'
    ];

    return {
        presets,
        plugins
    };
}