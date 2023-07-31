
module.exports = function (babel) { 
    return {
        name: 'js-to-mjs',
        visitor: {
            ImportDeclaration(path) {
                const source = path.node.source.value;
                if (source.endsWith('.js')) {
                    path.node.source.value = source.replace(/\.js$/, '.mjs');
                }
            },
        },
    };
};
