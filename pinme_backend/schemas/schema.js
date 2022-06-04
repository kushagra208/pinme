import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user';
import pins from './pins';
import comment from './comment';
import save from './save';
import postedBy from './postedBy';
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user , pins , comment , save , postedBy,
  ]),
})
