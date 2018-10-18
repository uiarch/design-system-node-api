import mongoose from 'mongoose';
import configs from '../configs';

mongoose.Promise = global.Promise;
mongoose.set('debug', configs.APP_CONFIG.MONGOOSE_DEBUG);

try {
  mongoose.connect(
    configs.DATABASE.CONNECT_URL,
    {useNewUrlParser: true},
  );
} catch (err) {
  mongoose.createConnection(configs.DATABASE.CONNECT_URL);
}

mongoose.connection.once('open', () => console.log('MongoDB Running')).on('error', e => {
  throw e;
});
