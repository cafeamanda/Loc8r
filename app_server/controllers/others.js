/* GET 'about' page */
module.exports.about = function(req,res) {
  res.render('generic-text', {
    title:'About Loc8r',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor laoreet erat ultricies venenatis. In hac habitasse platea dictumst. In ut risus at ex semper pellentesque. Cras nisl sem, semper ac leo sit amet, bibendum maximus est. Curabitur facilisis congue tincidunt. Duis at rhoncus lacus. Sed eros est, vestibulum cursus mauris ut, pharetra sollicitudin magna. Aliquam vel fringilla arcu, eget sodales leo.'
  });
};
