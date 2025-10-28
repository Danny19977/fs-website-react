module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Remove terser plugin to avoid ajv dependency issues
            webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
                (minimizer) => !minimizer.constructor.name.includes('TerserPlugin')
            );
            return webpackConfig;
        },
    },
};