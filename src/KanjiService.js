import Realm from 'realm'

export const repository = new Realm({
  schema: [{
    name: 'Kanji',
    primaryKey: 'unicode',
    properties: {
      unicode: {type: 'string', indexed: true},
      frequency: {type: 'int', indexed: true},
      literal: 'string',
      meaning: 'string',
      drawing: 'string',
    }
  }]
})

let KanjiService = {
  findAll: () => (repository.objects('Kanji')),
  save: (kanji) => (repository.write(() => {
    repository.create('Kanji', kanji)
  }))
}

export default KanjiService