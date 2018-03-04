class KanjiModel {
}

KanjiModel.schema = {
  name: 'Kanji',
  primaryKey: 'unicode',
  properties: {
    unicode: 'string',
    literal: 'string',
    drawing: 'string'
  },
};

export default KanjiModel