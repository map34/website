exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {

    // turn off source-maps
    config.merge({
      devtool: false
    });
  }
};
