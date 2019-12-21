export default class RepositorySchema {
  static schema = {
    name: 'Repository',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      name: 'string',
      fullName: 'string',
      description: 'string',
      watchers: 'int',
      stars: 'int',
      forks: 'int',
    },
  };
}
