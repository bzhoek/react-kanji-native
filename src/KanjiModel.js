class KanjiModel {
  constructor(unicode, literal, drawing) {
    this.unicode = unicode
    this.literal = literal
    this.drawing = drawing
  }
}

KanjiModel.schema = {
  name: 'Kanji',
  primaryKey: 'unicode',
  properties: {
    unicode: 'string',
    literal: 'string',
    meaning: 'string',
    drawing: 'string',
  },
};

export default KanjiModel