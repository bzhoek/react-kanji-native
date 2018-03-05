import Realm from 'realm'

export const repository = new Realm({

  schema: [{
    name: 'Kanji',
    primaryKey: 'unicode',
    properties: {
      unicode: 'string',
      literal: 'string',
      meaning: 'string',
      drawing: 'string',
    }
  }]
  // schema: [{
  //   name: 'Kanji',
  //   primaryKey: 'id',
  //   properties: {
  //     id: {type: 'string', indexed: true},
  //     literal: 'string',
  //     drawing: 'string'
  //   }
  // }]
})

let KanjiService = {
  findAll: () => (repository.objects('Kanji')),
  save: (kanji) => (repository.write(() => {
    repository.create('Kanji', kanji)
  }))
}

export default KanjiService