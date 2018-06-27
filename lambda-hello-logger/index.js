console.log('Loading function');

exports.handler = async (event, context) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
};
