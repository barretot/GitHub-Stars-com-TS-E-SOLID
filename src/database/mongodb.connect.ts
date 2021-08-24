import mongoose from 'mongoose';

import * as dotenv from 'dotenv';
dotenv.config();

const mongoURL = process.env.MONGO_URL;

const connect = mongoose.connect(`${mongoURL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export { connect };
